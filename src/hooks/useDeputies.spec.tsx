import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { ReactNode } from 'react'
import { describe } from 'vitest'

import nock from 'nock'
import Store from '../contexts/Store'
import { useDeputies } from './useDeputies'

interface QueryClientWrapperProps {
  children: ReactNode
}

const wrapper = ({ children }: QueryClientWrapperProps) => {
  const queryClient = new QueryClient()
  return (
    <Store>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Store>
  )
}

describe('useDeputies', () => {
  const baseURL = 'https://dadosabertos.camara.leg.br/api/v2'

  test('should load deputies list with success', async () => {
    const { result } = renderHook(() => useDeputies(), {
      wrapper
    })

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())
    expect(result.current.data?.dados.length).toBeGreaterThan(1)
  })

  test('should load deputies list with filter and success', async () => {
    const { result } = renderHook(
      () => useDeputies(1, { party: 'PL', deputy: 'Helio', uf: 'RJ' }),
      { wrapper }
    )

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())
    expect(result.current.data?.dados.length).toEqual(1)
    expect(result.current.data?.dados[0].nome).toEqual('Helio Lopes')
    expect(result.current.data?.dados[0].siglaPartido).toEqual('PL')
    expect(result.current.data?.dados[0].siglaUf).toEqual('RJ')
  })

  test('should try to load deputies list with error', async () => {
    nock(baseURL).get('/deputados').query(true).reply(404)
    const { result } = renderHook(() => useDeputies(), {
      wrapper
    })

    await waitFor(() => expect(result.current.isSuccess).toBeFalsy())
    expect(result.current.data?.dados).toBeUndefined()
  })
})
