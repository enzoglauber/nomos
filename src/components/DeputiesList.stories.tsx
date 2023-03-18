import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { Deputados } from '../interfaces/Deputados'
import DeputiesList, { DeputiesListProps } from './DeputiesList'

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

export default {
  title: 'Components/DeputiesList',
  component: DeputiesList,
  decorators: [withRouter],
  args: {
    data
  }
} as Meta<DeputiesListProps>

export const Default: StoryObj<DeputiesListProps> = {}
