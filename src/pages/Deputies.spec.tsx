import {
  QueryClient,
  QueryClientProvider,
  QueryObserverLoadingErrorResult
} from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, vi } from 'vitest'

import Store from '../contexts/Store'
import * as api from '../hooks/useDeputies'
import { ResponseDeputados } from '../interfaces/ResponseDeputados'
import Deputies from './Deputies'

vi.mock('@tanstack/react-query', async () => {
  const actual = (await vi.importActual('@tanstack/react-query')) as object
  return {
    ...actual,
    useQuery: vi.fn(() => ({ isLoading: false, data: { dados: [] } }))
  }
})

vi.mock('../hooks/useDeputies')

const DeputiesWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })
  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Deputies />
      </QueryClientProvider>
    </MemoryRouter>
  )
}

describe('Deputies', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('success', () => {
    beforeEach(() => {
      vi.spyOn(api, 'useDeputies').mockReturnValue({
        isError: false,
        data: {
          dados: [],
          links: [{}]
        }
      })

      render(
        <Store>
          <DeputiesWrapper />
        </Store>
      )
    })

    test('there should be a Deputies component', () => {
      const component = screen.queryByTestId('deputies')
      expect(component).toBeTruthy()
    })
  })

  describe('error', () => {
    beforeEach(() => {
      vi.spyOn(api, 'useDeputies').mockReturnValue({
        isError: true,
        status: 'error',
        data: undefined
      } as QueryObserverLoadingErrorResult<ResponseDeputados, Error>)

      render(
        <Store>
          <DeputiesWrapper />
        </Store>
      )
    })
    test('should try to load deputies list with error', async () => {
      const component = screen.queryByTestId('deputies-error')
      expect(component).toBeTruthy()
    })
  })
})
