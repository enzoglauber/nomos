import { useContextSelector } from 'use-context-selector'
import DeputiesFilter from '../components/DeputiesFilter'
import Pagination from '../components/Pagination'
import { IStore, StoreContext } from '../contexts/Store'
import useDeputies from '../hooks/useDeputies'

function Deputies() {
  console.log(`Deputies render...`)
  const { page, setPage } = useContextSelector(StoreContext, (store: IStore) => store)
  const { status, data, error, isFetching, isPreviousData } = useDeputies()

  return (
    <div>
      Deputies
      <hr />
      <DeputiesFilter />
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.dados.map((deputy) => (
            <p key={deputy.id}>
              {deputy.nome}-{deputy.siglaPartido}-{deputy.siglaUf}
            </p>
          ))}
        </div>
      )}
      <Pagination page={page} isPreviousData={isPreviousData} setPage={setPage} />
      {isFetching ? <span> Loading...</span> : null}
    </div>
  )

  // return (
  //   <>
  //     {page} <button onClick={() => setPage(page + 1)}>+1</button>
  //   </>
  // )
}

export default Deputies
