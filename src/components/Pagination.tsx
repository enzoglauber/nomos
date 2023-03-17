import React, { useEffect, useState } from 'react'
import { IStore } from '../contexts/Store'

import { Box, Grid, Pagination as MUIPagination, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Link } from '../interfaces/Link'
export interface PaginationProps extends Pick<IStore, 'page' | 'items' | 'setPage' | 'setItems'> {
  links?: Link[]
}

export default React.memo(function Pagination({
  page,
  items,
  links,
  setPage,
  setItems
}: PaginationProps) {
  const [count, setCount] = useState(1)

  const counters = [...new Array(10)].map((value, index) => `${index + 1}`)

  const handleChangeItems = (event: SelectChangeEvent) => {
    setPage(1)
    setItems(event.target.value)
  }

  useEffect(() => {
    const last = links?.find((link) => {
      return link.rel === 'last'
    })

    if (last) {
      const params = new URLSearchParams(last.href)
      const lastPage = parseInt(params.get('pagina') || '1')
      setCount(lastPage)
    }
  }, [links])

  return (
    <Grid container spacing={4} direction="row">
      <Grid item sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MUIPagination
            count={count}
            shape="rounded"
            color="primary"
            page={page}
            boundaryCount={0}
            onChange={(e, current) => setPage(current)}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} ml={3}>
          <Typography variant="subtitle2" gutterBottom color="secondary">
            Itens por página:
          </Typography>
          <FormControl sx={{ ml: 1, minWidth: 60 }} size="small">
            <Select labelId="items" id="items" value={items} onChange={handleChangeItems}>
              {counters.map((item) => (
                <MenuItem key={item} value={item} sx={{ display: 'flex' }}>
                  <Typography variant="subtitle2" color="secondary" sx={{ marginTop: '3px' }}>
                    {item}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  )
})
