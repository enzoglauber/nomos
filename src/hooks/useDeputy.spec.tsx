import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { waitFor } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { ReactNode } from 'react'
import { describe } from 'vitest'

import nock from 'nock'
import Store from '../contexts/Store'
import { useDeputy } from './useDeputy'

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

describe('useDeputy', () => {
  const baseURL = 'https://dadosabertos.camara.leg.br/api/v2'

  test('should load deputy detail with success', async () => {
    const { result } = renderHook(() => useDeputy('204444'), {
      wrapper
    })

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy())
    expect(result.current.data?.dados.ultimoStatus.nome).toEqual('Helio Lopes')
    expect(result.current.data?.dados.ultimoStatus.siglaPartido).toEqual('PL')
    expect(result.current.data?.dados.ultimoStatus.siglaUf).toEqual('RJ')
  })

  test('should try to load deputy detail with error', async () => {
    nock(baseURL).get('/deputados').query(true).reply(404)
    const { result } = renderHook(() => useDeputy('666'), {
      wrapper
    })

    await waitFor(() => expect(result.current.isSuccess).toBeFalsy())
    expect(result.current.data?.dados).toBeUndefined()
  })
})
