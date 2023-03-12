import { SyntheticEvent, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { IStore, StoreContext } from '../contexts/Store'

import Search from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'

export default function DeputiesFilter() {
  console.log('DeputiesFilter render...')
  const [deputy, setDeputy] = useState('')
  const [party, setParty] = useState('')
  const [uf, setUf] = useState('')

  const { setFilter, setPage } = useContextSelector(StoreContext, (store: IStore) => store)

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()

    submit()
    console.log('form submitted ✅')
  }

  const submit = () => {
    setFilter({ deputy, party, uf })
    setPage(1)
  }

  return (
    <div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ width: '17.5rem', marginRight: '1.875rem' }} variant="outlined">
            <InputLabel htmlFor="deputy" sx={{ color: 'text.primary' }}>
              Buscar por Deputado
            </InputLabel>
            <OutlinedInput
              id="deputy"
              value={deputy}
              label="Buscar por Deputado"
              onChange={(e) => setDeputy(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleSubmit}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ width: '11.25rem', marginRight: '1.875rem' }} variant="outlined">
            <InputLabel htmlFor="party" sx={{ color: 'text.primary' }}>
              Partido
            </InputLabel>
            <OutlinedInput
              id="party"
              value={party}
              label="Partido"
              onChange={(e) => setParty(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleSubmit}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ width: '11.25rem', marginRight: '1.875rem' }} variant="outlined">
            <InputLabel htmlFor="uf" sx={{ color: 'text.primary' }}>
              UF
            </InputLabel>
            <OutlinedInput
              id="uf"
              value={uf}
              label="UF"
              onChange={(e) => setUf(e.target.value)}
              endAdornment={
                <InputAdornment position="end" onClick={handleSubmit}>
                  <IconButton edge="end">
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <button type="submit" hidden>
            Search
          </button>
        </form>
      </Box>
    </div>
  )
}
