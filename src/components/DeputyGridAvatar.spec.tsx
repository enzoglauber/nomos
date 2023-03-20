import { render } from '@testing-library/react'
import { Deputados } from '../interfaces/Deputados'
import DeputyGridAvatar from './DeputyGridAvatar'

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

describe('DeputyGridAvatar', () => {
  test('there should be a DeputyGridAvatar component', () => {
    const { queryByTestId } = render(<DeputyGridAvatar deputy={deputy} />)
    const component = queryByTestId('deputy-grid-avatar')
    const img = component?.firstElementChild as HTMLImageElement

    expect(component).toBeTruthy()
    expect(img).toBeTruthy()
    expect(img?.src).toContain(deputy.urlFoto)
  })
})
