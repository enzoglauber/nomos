import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import nock from 'nock'
import { MemoryRouter } from 'react-router-dom'
import { describe } from 'vitest'

import Store from '../contexts/Store'
import Deputies from './Deputies'

// interface QueryClientWrapperProps {
//   children: ReactNode
// }

// const wrapper = ({ children }: QueryClientWrapperProps) => {
//   const route = '/deputies'
//   const queryClient = new QueryClient()
//   return (
//     <Store>
//       <MemoryRouter initialEntries={[route]}>
//         <QueryClientProvider client={queryClient}>
//           {children}
//           <Deputies />
//         </QueryClientProvider>
//       </MemoryRouter>
//     </Store>
//   )
// }

const DeputiesWrapper = () => {
  const queryClient = new QueryClient()
  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Deputies />
      </QueryClientProvider>
    </MemoryRouter>
  )
}

describe('Deputies', () => {
  beforeEach(() => {
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

  // test('should load deputies list with success', async () => {
  //   const { result } = renderHook(() => useDeputies(), {
  //     wrapper
  //   })

  //   await waitFor(() => expect(result.current.isSuccess).toBeTruthy())
  //   expect(result.current.data?.dados.length).toBeGreaterThan(1)
  // })

  test('should try to load deputies list with error', async () => {
    const baseURL = 'http://dadosabertos.camara.leg.br/api/v2'

    const resquest = nock(baseURL).get('/deputados').query(true).reply(404)
    // const { result } = renderHook(() => useDeputies(), {
    //   wrapper
    // })
    const component = screen.queryByTestId('deputies-error')
    console.log(resquest)

    screen.debug(component)
    expect(component).toBeTruthy()
    // console.log(result)
    // await waitFor(() => expect(result.current.isSuccess).toBeFalsy())
    // await waitFor(() => expect(screen.queryByTestId('deputies-loading')).toBeTruthy())
    // expect(result.current.data?.dados).toBeUndefined()
  })
})

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { render, screen, waitFor } from '@testing-library/react'

// import nock from 'nock'
// import React from 'react'
// import Store from '../contexts/Store'
// import Deputies from './Deputies'

// export function renderWithClient(ui: React.ReactElement) {
//   const queryClient = new QueryClient()
//   const { rerender, ...result } = render(
//     <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
//   )
//   return {
//     ...result,
//     rerender: (rerenderUi: React.ReactElement) =>
//       rerender(<QueryClientProvider client={queryClient}>{rerenderUi}</QueryClientProvider>)
//   }
// }

// const DeputiesWrapper = () => {
//   const queryClient = new QueryClient()
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Deputies />
//     </QueryClientProvider>
//   )
// }

// describe('Deputies', () => {
//   // beforeEach(() => {
//   //   render(
//   //     <Store>
//   //       <DeputiesWrapper />
//   //     </Store>
//   //   )
//   // })
//   it('useStaleRefresh hook runs correctly', async () => {
//     const container = screen.queryByTestId('deputies') as HTMLDivElement
//     render(
//       <Store>
//         <Deputies />
//       </Store>
//     )
//     expect(container.textContent).toBe('loading')

//     expect(container.textContent).toBe('url1')
//   })
//   test('there should be a Deputies component', async () => {
//     const result = renderWithClient(<Deputies />)
//     await waitFor(() => result.getByText(/Loading.../))

//     // expect(result.getByText(/Deputados/)).toBe(1)

//     const component = screen.queryByTestId('deputies') as HTMLDivElement
//     expect(component).toBeTruthy()
//   })

//   test('there should be a Deputies component with error', async () => {
//     const baseURL = 'https://dadosabertos.camara.leg.br/api/v2'
//     nock(baseURL).get('/deputados').query(true).reply(404)

//     const result = renderWithClient(<Deputies />)
//     await waitFor(() => result.getByText(/Deputados/))

//     const component = screen.queryByTestId('deputies') as HTMLDivElement
//     expect(component).toBeTruthy()
//   })
// })
