import { render } from '@testing-library/react'
import { Deputados } from '../interfaces/Deputados'
import DeputyGridDetail from './DeputyGridDetail'

const deputy: Deputados = {
  id: 204444,
  uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444',
  nome: 'Helio Lopes',
  siglaPartido: 'PL',
  uriPartido: 'https://dadosabertos.camara.leg.br/api/v2/partidos/3790  6',
  siglaUf: 'RJ',
  idLegislatura: 57,
  urlFoto: 'https://www.camara.leg.br/internet/deputado/bandep/204444.jpg',
  email: 'dep.heliolopes@camara.leg.br'
}

describe('DeputyGridDetail', () => {
  test('there should be a DeputyGridDetail component', () => {
    const { queryByTestId } = render(<DeputyGridDetail deputy={deputy} />)
    const component = queryByTestId('deputy-grid-detail')
    const name = queryByTestId('deputy-grid-detail-name')
    const party = queryByTestId('deputy-grid-detail-party', { trim: true })
    const uf = queryByTestId('deputy-grid-detail-uf')

    expect(component).toBeTruthy()
    expect(name?.textContent).toBe(deputy.nome)
    expect(party?.textContent?.trim()).toBe(deputy.siglaPartido)
    expect(uf?.textContent?.trim()).toBe(deputy.siglaUf)
  })
})
