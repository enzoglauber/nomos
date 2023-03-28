import { useQuery } from '@tanstack/react-query'
import axios from '../config/axios'
import { DeputiesFilter } from '../interfaces/DeputiesFilter'
import { ResponseDeputados } from '../interfaces/ResponseDeputados'

export function fetchDeputies(page = 1, items: string, filter?: DeputiesFilter) {
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

export const useDeputies = (
  page: number = 1,
  filter: DeputiesFilter = { party: '', deputy: '', uf: '' },
  items: string = '10'
) => {
  return useQuery<ResponseDeputados, Error>({
    queryKey: ['deputies', page, items, filter],
    queryFn: () => fetchDeputies(page, items, filter),
    staleTime: 5000
  })
}
