import { ReactNode, useState } from 'react'

import { createContext } from 'use-context-selector'
import { DeputiesFilter } from '../interfaces/DeputiesFilter'

export interface IStore {
  page: number
  filter?: DeputiesFilter
  setPage: Function
  setFilter: Function
}

interface StoreProps {
  children: ReactNode
}

const INITIAL: IStore = {
  page: 1,
  filter: {
    party: '',
    deputy: '',
    uf: ''
  },
  setPage: (page: number): void => {},
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
    filter: state.filter,
    setPage: (page: number) => updateStore('page', page),
    setFilter: (filter: string) => updateStore('filter', filter)
  }

  return (
    <StoreContext.Provider value={value}>
      <div>{props.children}</div>
    </StoreContext.Provider>
  )
}
export default Store
