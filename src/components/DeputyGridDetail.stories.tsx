import { Meta, StoryObj } from '@storybook/react'
import { Deputados } from '../interfaces/Deputados'
import DeputyGridDetail, { DeputyGridDetailProps } from './DeputyGridDetail'

const deputy: Deputados = {
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

export default {
  title: 'Components/DeputyGridDetail',
  component: DeputyGridDetail,
  args: {
    deputy
  }
} as Meta<DeputyGridDetailProps>

export const Default: StoryObj<DeputyGridDetailProps> = {}
