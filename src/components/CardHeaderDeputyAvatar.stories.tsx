import { Meta, StoryObj } from '@storybook/react'
import { Deputado } from '../interfaces/Deputado'
import CardHeaderDeputyAvatar, { CardHeaderDeputyAvatarProps } from './CardHeaderDeputyAvatar'

const deputy: Deputado = {
  id: 204444,
  uri: 'https://dadosabertos.camara.leg.br/api/v2/deputados/204444',
  nomeCivil: 'HELIO FERNANDO BARBOSA LOPES',
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
      nome: '405',
      predio: '4',
      sala: '405',
      andar: '4',
      telefone: '3215-5405',
      email: 'dep.heliolopes@camara.leg.br'
    },
    situacao: 'Exercício',
    condicaoEleitoral: 'Titular',
    descricaoStatus: null
  },
  cpf: '00891743723',
  sexo: 'M',
  urlWebsite: null,
  redeSocial: [
    'https://twitter.com/depheliolopes',
    'https://www.facebook.com/depheliolopes',
    'https://www.instagram.com/depheliolopes'
  ],
  dataNascimento: '1969-03-28',
  dataFalecimento: null,
  ufNascimento: 'RJ',
  municipioNascimento: 'Queimados',
  escolaridade: 'Superior'
}

export default {
  title: 'Components/CardHeaderDeputyAvatar',
  component: CardHeaderDeputyAvatar,
  args: {
    deputy
  }
} as Meta<CardHeaderDeputyAvatarProps>

export const Default: StoryObj<CardHeaderDeputyAvatarProps> = {}
