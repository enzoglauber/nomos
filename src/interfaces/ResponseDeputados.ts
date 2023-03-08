import { Deputado } from './Deputado'
import { Link } from './Link'

export interface ResponseDeputados {
  dados: Deputado[]
  links: Link[]
}
