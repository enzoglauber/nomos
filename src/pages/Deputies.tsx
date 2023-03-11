import { useContextSelector } from 'use-context-selector'
import { IStore, StoreContext } from '../contexts/Store'
import useDeputies from '../hooks/useDeputies'

import DeputiesFilter from '../components/DeputiesFilter'
import Pagination from '../components/Pagination'
import SubHeader from '../components/SubHeader'

function Deputies() {
  console.log(`Deputies render...`)
  const { page, setPage } = useContextSelector(StoreContext, (store: IStore) => store)
  const { status, data, error, isFetching, isPreviousData } = useDeputies()

  return (
    <>
      <SubHeader title="Deputados" subtitle="Veja abaixo a lista de deputados" />
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
    </>
  )

  // return (
  //   <>
  //     {page} <button onClick={() => setPage(page + 1)}>+1</button>
  //   </>
  // )
}

export default Deputies
