import React from 'react'
import { IStore } from '../contexts/Store'

interface PaginationProps extends Pick<IStore, 'page' | 'setPage'> {
  isPreviousData: boolean
}

export default React.memo(function Pagination({ page, setPage, isPreviousData }: PaginationProps) {
  console.log('Pagination render...')

  return (
    <>
      <div>Current Page: {page}</div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage(page + 1)
        }}
        disabled={isPreviousData}
      >
        Next Page
      </button>
    </>
  )
})
