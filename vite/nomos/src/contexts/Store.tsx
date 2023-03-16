import { ReactNode, useState } from 'react'

import { createContext } from 'use-context-selector'
import { DeputiesFilter } from '../interfaces/DeputiesFilter'

export interface IStore {
  page: number
  items: string
  filter?: DeputiesFilter
  setPage: Function
  setFilter: Function
  setItems: Function
}

interface StoreProps {
  children: ReactNode
}

const INITIAL: IStore = {
  page: 1,
  items: '10',
  filter: {
    party: '',
    deputy: '',
    uf: ''
  },
  setPage: (page: number): void => {},
  setItems: (items: string): void => {},
  setFilter: (value: string): void => {}
}

export const StoreContext = createContext<IStore>(INITIAL)

const Store = (props: StoreProps) => {
  const [state, setState] = useState(INITIAL)

  const updateStore = (key: string, value: any) => {
    setState((current) => ({
      ...current,
      [key]: value
    }))
  }

  const value: IStore = {
    page: state.page,
    items: state.items,
    filter: state.filter,
    setPage: (page: number) => updateStore('page', page),
    setFilter: (filter: string) => updateStore('filter', filter),
    setItems: (items: string) => updateStore('items', items)
  }

  return (
    <StoreContext.Provider value={value}>
      <div>{props.children}</div>
    </StoreContext.Provider>
  )
}
export default Store
