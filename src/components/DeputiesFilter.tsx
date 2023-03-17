import { SyntheticEvent, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { IStore, StoreContext } from '../contexts/Store'

import InputFilter from './InputFilter'

export default function DeputiesFilter() {
  console.log('DeputiesFilter render...')
  const [deputy, setDeputy] = useState('')
  const [party, setParty] = useState('')
  const [uf, setUf] = useState('')

  const { setFilter, setPage } = useContextSelector(StoreContext, (store: IStore) => store)

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    submit()
  }

  const submit = () => {
    setFilter({ deputy, party, uf })
    setPage(1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputFilter
          id="deputy"
          value={deputy}
          label="Buscar por Deputado"
          sx={{ width: '17.5rem', marginRight: '1.875rem' }}
          onChange={(e) => setDeputy(e.target.value)}
          onClickSearch={handleSubmit}
        />
        <InputFilter
          id="party"
          value={party}
          label="Partido"
          sx={{ width: '11.25rem', marginRight: '1.875rem' }}
          onChange={(e) => setParty(e.target.value)}
          onClickSearch={handleSubmit}
        />
        <InputFilter
          id="uf"
          value={uf}
          label="UF"
          sx={{ width: '11.25rem', marginRight: '1.875rem' }}
          onChange={(e) => setUf(e.target.value)}
          onClickSearch={handleSubmit}
        />

        <button type="submit" hidden>
          Search
        </button>
      </form>
    </div>
  )
}
