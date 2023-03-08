import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import axios from '../config/axios'
import { ResponseDeputados } from '../interfaces/ResponseDeputados'

function fetchDeputies(page = 1) {
  const url = `/deputados?pagina=${page}&itens=2&ordem=ASC&ordenarPor=nome`
  return axios.get(url).then((response) => response.data)
}

function Deputies() {
  const [page, setPage] = useState(1)

  const { status, data, error, isFetching, isPreviousData } = useQuery<ResponseDeputados, Error>({
    queryKey: ['deputies', page],
    queryFn: () => fetchDeputies(page),
    staleTime: 5000
  })

  return (
    <div>
      Deputies
      <hr />
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.dados.map((deputy) => (
            <p key={deputy.id}>{deputy.nome}</p>
          ))}
        </div>
      )}
      <div>Current Page: {page}</div>
      <button onClick={() => setPage((current) => current - 1)} disabled={page === 1}>
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage((current) => current + 1)
        }}
        disabled={isPreviousData}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  )
}

export default Deputies
