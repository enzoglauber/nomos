import { useQuery } from '@tanstack/react-query'
import { useContextSelector } from 'use-context-selector'
import axios from '../config/axios'
import { IStore, StoreContext } from '../contexts/Store'
import { DeputiesFilter } from '../interfaces/DeputiesFilter'
import { ResponseDeputados } from '../interfaces/ResponseDeputados'

function fetchDeputies(page = 1, filter?: DeputiesFilter) {
  let params = ``
  const itens = 2

  if (filter?.deputy) {
    params += `nome=${filter?.deputy}&`
  }
  if (filter?.party) {
    params += `siglaPartido=${filter?.party}&`
  }
  if (filter?.uf) {
    params += `siglaUf=${filter?.uf}&`
  }

  const url = `/deputados?${params}pagina=${page}&itens=${itens}&ordem=ASC&ordenarPor=nome`
  return axios.get(url).then((response) => response.data)
}

const useDeputies = () => {
  const { page, filter } = useContextSelector(StoreContext, (store: IStore) => store)
  console.log('useDeputies', page, filter)
  return useQuery<ResponseDeputados, Error>({
    queryKey: ['deputies', page, filter],
    queryFn: () => fetchDeputies(page, filter),
    staleTime: 5000
  })
}
export default useDeputies
