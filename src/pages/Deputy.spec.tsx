import { QueryClient, QueryClientProvider, QueryObserverLoadingResult } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, vi } from 'vitest'

import * as api from '../hooks/useDeputy'
import { Deputado } from '../interfaces/Deputado'
import { ResponseDeputado } from '../interfaces/ResponseDeputado'
import Deputy from './Deputy'

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

const getData = (deputy?: Partial<Deputado>): ResponseDeputado => {
  return {
    dados: {
      id: 204444,
      uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444',
      nomeCivil: 'HELIO FERNANDO BARBOSA LOPES',
      cpf: '00891743723',
      sexo: 'M',
      urlWebsite: null,
      redeSocial: [
        'https://twitter.com/depheliolopes',
        'https://www.facebook.com/depheliolopes',
        'https://www.instagram.com/depheliolopes'
      ],
      dataNascimento: deputy?.dataNascimento ?? '1969-03-28',
      dataFalecimento: null,
      ufNascimento: 'RJ',
      municipioNascimento: 'Queimados',
      escolaridade: 'Superior',
      ultimoStatus: {
        id: 204444,
        uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444',
        nome: 'Helio Lopes',
        siglaPartido: 'PL',
        uriPartido: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37906',
        siglaUf: 'RJ',
        idLegislatura: 57,
        urlFoto: 'https://www.camara.leg.br/internet/deputado/bandep/204444.jpg',
        email: 'dep.heliolopes@camara.leg.br',
        data: '2023-02-01T12:05',
        nomeEleitoral: 'Helio Lopes',
        gabinete: {
          nome: deputy?.ultimoStatus?.gabinete.nome ?? '405',
          predio: '4',
          sala: '405',
          andar: '4',
          telefone: '3215-5405',
          email: 'dep.heliolopes@camara.leg.br'
        },
        situacao: 'Exercício',
        condicaoEleitoral: 'Titular',
        descricaoStatus: null
      }
    },
    links: [
      {
        rel: 'self',
        href: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444'
      }
    ]
  }
}

const mock = { isLoading: true, data: getData() } as unknown as QueryObserverLoadingResult<
  ResponseDeputado,
  Error
>

describe('Deputy', () => {
  describe('flow', () => {
    beforeEach(() => {
      vi.spyOn(api, 'useDeputy').mockImplementation(() => mock)
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    test('there should be a Deputy component', () => {
      render(<DeputyWrapper />)
    })

    it('there should instance hooks with router parameter', () => {
      render(<DeputyWrapper />)
      expect(api.useDeputy).toHaveBeenCalledWith('204444')
    })
  })

  describe('exception', () => {
    it('without bday and address', () => {
      vi.spyOn(api, 'useDeputy').mockReturnValue({
        isError: false,
        data: getData({ dataNascimento: '', ultimoStatus: { gabinete: { nome: '' } } } as Deputado)
      } as unknown as QueryObserverLoadingResult<ResponseDeputado, Error>)

      const { queryByTestId } = render(<DeputyWrapper />)

      const component = queryByTestId('deputy-card-content')
      expect(component).toBeTruthy()
    })
  })
})
