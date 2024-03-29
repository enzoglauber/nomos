import { useQuery } from '@tanstack/react-query'
import axios from '../config/axios'
import { ResponseDeputado } from '../interfaces/ResponseDeputado'

export function fetchDeputy(id?: string) {
  const url = `/deputados/${id}`
  return axios.get(url).then((response) => response.data)
}

export const useDeputy = (id?: string) => {
  return useQuery<ResponseDeputado, Error>({
    queryKey: ['deputy', id],
    queryFn: () => fetchDeputy(id),
    staleTime: 5000
  })
}
