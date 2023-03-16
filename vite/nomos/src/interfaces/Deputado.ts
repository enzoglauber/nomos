import { UltimoStatus } from './UltimoStatus'

export interface Deputado {
  id: number
  uri: string
  nomeCivil: string
  ultimoStatus: UltimoStatus
  cpf: string
  sexo: string
  urlWebsite?: any
  redeSocial: any[]
  dataNascimento: string
  dataFalecimento?: any
  ufNascimento: string
  municipioNascimento: string
  escolaridade?: any
}
