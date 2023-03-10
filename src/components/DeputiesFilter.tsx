import { SyntheticEvent, useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { IStore, StoreContext } from '../contexts/Store'

export default function DeputiesFilter() {
  console.log('DeputiesFilter render...')
  const [deputy, setDeputy] = useState('')
  const [party, setParty] = useState('')
  const [uf, setUf] = useState('')

  const { setFilter, setPage } = useContextSelector(StoreContext, (store: IStore) => store)

  useEffect(() => {
    submit()
    // Because if I had add setFilter in array deeps, we'll had a loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deputy, party, uf])

  const handleSubmit = (event: SyntheticEvent) => {
    console.log(event, `event`)
    event.preventDefault()

    console.log('form submitted ✅')
    submit()
  }

  const submit = () => {
    setFilter({ deputy, party, uf })
    setPage(1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar por Deputado"
          onChange={(e) => setDeputy(e.target.value)}
          value={deputy}
        />
        {deputy}
        <input
          type="text"
          placeholder="Partido"
          onChange={(e) => setParty(e.target.value)}
          value={party}
        />
        {party}
        <input type="text" placeholder="UF" onChange={(e) => setUf(e.target.value)} value={uf} />
        {uf}

        <button type="submit">OK</button>
      </form>
    </div>
  )
}
