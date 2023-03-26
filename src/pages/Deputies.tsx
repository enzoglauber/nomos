import { Box } from '@mui/material'
import Container from '@mui/material/Container'

import { useContextSelector } from 'use-context-selector'
import DeputiesFilter from '../components/DeputiesFilter'
import DeputiesList from '../components/DeputiesList'
import Pagination from '../components/Pagination'
import SubHeader from '../components/SubHeader'
import { IStore, StoreContext } from '../contexts/Store'
import useDeputies from '../hooks/useDeputies'

function Deputies() {
  const { page, items, filter, setPage, setItems } = useContextSelector(
    StoreContext,
    (store: IStore) => store
  )

  const { status, data, error } = useDeputies(page, filter, items)
  console.log(status, error)
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 6 }} data-testid="deputies">
        {status}LEGALLLLLLLLLLLLLL
        <SubHeader title="Deputados" subtitle="Veja abaixo a lista de deputados" />
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} mb={7} mt={6}>
          <DeputiesFilter />
        </Box>
        {status === 'loading' ? (
          <div data-testid="deputies-loading">Loading...</div>
        ) : status === 'error' ? (
          <div data-testid="deputies-error">Error: {error.message}</div>
        ) : (
          <DeputiesList data={data.dados} data-testid="deputies-list" />
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
      </Container>
    </>
  )
}

export default Deputies
