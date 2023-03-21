import { queryAllByTestId, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Deputados } from '../interfaces/Deputados'
import DeputiesList from './DeputiesList'

const data: Deputados[] = [
  {
    id: 204444,
    uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444',
    nome: 'Helio Lopes',
    siglaPartido: 'PL',
    uriPartido: 'https://dadosabertos.camara.leg.br/api/v2/partidos/37906',
    siglaUf: 'RJ',
    idLegislatura: 57,
    urlFoto: 'https://www.camara.leg.br/internet/deputado/bandep/204444.jpg',
    email: 'dep.heliolopes@camara.leg.br'
  }
]

describe('DeputiesList', () => {
  test('there should be a DeputiesList component', () => {
    const { queryByTestId } = render(<DeputiesList data={data} />, { wrapper: MemoryRouter })
    const component = queryByTestId('deputy-list') as HTMLElement
    const items = queryAllByTestId(component, 'deputy-list-item')

    expect(component).toBeTruthy()
    expect(items.length).toBeGreaterThanOrEqual(1)
  })
})
