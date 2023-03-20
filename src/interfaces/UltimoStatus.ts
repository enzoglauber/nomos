import { Gabinete } from './Gabinete'

export interface UltimoStatus {
  id: number
  uri: string
  nome: string
  siglaPartido: string
  uriPartido: string
  siglaUf: string
  idLegislatura: number
  urlFoto: string
  email: string
  data?: string
  nomeEleitoral: string
  gabinete: Gabinete
  situacao: string
  condicaoEleitoral: string
  descricaoStatus?: any
}
