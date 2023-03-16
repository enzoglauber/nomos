import { Deputado } from './Deputado'
import { Link } from './Link'

export interface ResponseDeputado {
  dados: Deputado
  links: Link[]
}
