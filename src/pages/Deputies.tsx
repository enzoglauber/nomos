import Box from '@mui/material/Box'

import { useContextSelector } from 'use-context-selector'
import DeputiesFilter from '../components/DeputiesFilter'
import DeputiesList from '../components/DeputiesList'
import Pagination from '../components/Pagination'
import SubHeader from '../components/SubHeader'
import { IStore, StoreContext } from '../contexts/Store'
import useDeputies from '../hooks/useDeputies'

function Deputies() {
  console.log(`Deputies render...`)
  const { page, items, setPage, setItems } = useContextSelector(
    StoreContext,
    (store: IStore) => store
  )
  const { status, data, error } = useDeputies()

  return (
    <>
      <SubHeader title="Deputados" subtitle="Veja abaixo a lista de deputados" />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }} mb={7} mt={6}>
        <DeputiesFilter />
      </Box>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error: {error.message}</div>
      ) : (
        <DeputiesList data={data.dados} />
      )}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mt={5}>
        <Pagination
          page={page}
          items={items}
          setPage={setPage}
          links={data?.links}
          setItems={setItems}
        />
      </Box>
    </>
  )
}

export default Deputies
