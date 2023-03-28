import { QueryClient, QueryClientProvider, QueryObserverLoadingResult } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, vi } from 'vitest'

import * as api from '../hooks/useDeputy'
import { ResponseDeputado } from '../interfaces/ResponseDeputado'
// import { ResponseDeputados } from '../interfaces/ResponseDeputados'
import Deputy from './Deputy'

// vi.mock('@tanstack/react-query', async () => {
//   const actual = (await vi.importActual('@tanstack/react-query')) as object
//   return {
//     ...actual,
//     useQuery: vi.fn(() => ({ isLoading: false, data: { dados: [] } }))
//   }
// })

// vi.mock('../hooks/useDeputy')

vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual('react-router-dom')) as object
  return {
    ...actual,
    useParams: () => ({
      id: '204444'
    }),
    useRouteMatch: () => ({ url: '/deputy/204444' })
  }
})

const DeputyWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Deputy />
      </MemoryRouter>
    </QueryClientProvider>
  )
}

describe('Deputy', () => {
  // const dados: Deputado = {
  //   id: 204444,
  //   uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444',
  //   nomeCivil: 'HELIO FERNANDO BARBOSA LOPES',
  //   ultimoStatus: {
  //     id: 204444,
  //     uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444',
  //     nome: 'Helio Lopes',
  //     siglaPartido: 'PL',
  //     uriPartido: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37906',
  //     siglaUf: 'RJ',
  //     idLegislatura: 57,
  //     urlFoto: 'https://www.camara.leg.br/internet/deputado/bandep/204444.jpg',
  //     email: 'dep.heliolopes@camara.leg.br',
  //     data: '2023-02-01T12:05',
  //     nomeEleitoral: 'Helio Lopes',
  //     gabinete: {
  //       nome: '405',
  //       predio: '4',
  //       sala: '405',
  //       andar: '4',
  //       telefone: '3215-5405',
  //       email: 'dep.heliolopes@camara.leg.br'
  //     },
  //     situacao: 'Exercício',
  //     condicaoEleitoral: 'Titular',
  //     descricaoStatus: null
  //   },
  //   cpf: '00891743723',
  //   sexo: 'M',
  //   urlWebsite: null,
  //   redeSocial: [
  //     'https://twitter.com/depheliolopes',
  //     'https://www.facebook.com/depheliolopes',
  //     'https://www.instagram.com/depheliolopes'
  //   ],
  //   dataNascimento: '1969-03-28',
  //   dataFalecimento: null,
  //   ufNascimento: 'RJ',
  //   municipioNascimento: 'Queimados',
  //   escolaridade: 'Superior'
  // }

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('success', () => {
    beforeEach(() => {
      vi.spyOn(api, 'useDeputy').mockImplementation(
        () => ({ isLoading: true } as QueryObserverLoadingResult<ResponseDeputado, Error>)
      )
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    test('there should be a Deputy component', () => {
      render(<DeputyWrapper />)
      // const component = screen.queryByTestId('Deputy')
      // expect(component).toBeTruthy()
    })

    it('Fetches the correct ID', () => {
      const { rerender } = render(<DeputyWrapper />)

      // Fetches a default product when `productId` isn't specified (id="1")
      expect(api.useDeputy).toHaveBeenCalledWith('204444')

      // rerender(<ProductDetails productId="2" />)

      // expect(useProduct).toHaveBeenCalledWith('2')
      // expect(useProduct).toHaveBeenCalledTimes(2)
    })
  })

  // describe('error', () => {
  //   beforeEach(() => {
  //     vi.spyOn(api, 'useDeputy').mockReturnValue({
  //       isError: true,
  //       status: 'error',
  //       data: undefined
  //     } as QueryObserverLoadingErrorResult<ResponseDeputados, Error>)

  //     render(
  //       <Store>
  //         <DeputyWrapper />
  //       </Store>
  //     )
  //   })
  //   test('should try to load Deputy list with error', async () => {
  //     const component = screen.queryByTestId('Deputy-error')
  //     expect(component).toBeTruthy()
  //   })
  // })
})
