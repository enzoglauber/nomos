import { useQuery } from '@tanstack/react-query'
import { useContextSelector } from 'use-context-selector'
import axios from '../config/axios'
import { IStore, StoreContext } from '../contexts/Store'
import { DeputiesFilter } from '../interfaces/DeputiesFilter'
import { ResponseDeputados } from '../interfaces/ResponseDeputados'

function fetchDeputies(page = 1, items: string, filter?: DeputiesFilter) {
  let params = ``

  if (filter?.deputy) {
    params += `nome=${filter?.deputy}&`
  }
  if (filter?.party) {
    params += `siglaPartido=${filter?.party}&`
  }
  if (filter?.uf) {
    params += `siglaUf=${filter?.uf}&`
  }

  const url = `/deputados?${params}pagina=${page}&itens=${items}&ordem=ASC&ordenarPor=nome`
  return axios.get(url).then((response) => response.data)
}

const useDeputies = () => {
  const { page, filter, items } = useContextSelector(StoreContext, (store: IStore) => store)
  return useQuery<ResponseDeputados, Error>({
    queryKey: ['deputies', page, items, filter],
    queryFn: () => fetchDeputies(page, items, filter),
    staleTime: 5000
  })
}
export default useDeputies
