import { fireEvent, render, screen, within } from '@testing-library/react'

import { describe, vi } from 'vitest'
import Store, { IStore, StoreContext } from '../contexts/Store'
import Pagination from './Pagination'

import { useContextSelector } from 'use-context-selector'

const setItems = vi.fn()
type PaginationWrapperProps = {
  isLastPage?: boolean
}
const PaginationWrapper = ({ isLastPage = false }: PaginationWrapperProps) => {
  const append = !isLastPage ? `&pagina=52` : ''
  const { page, items, setPage } = useContextSelector(StoreContext, (store: IStore) => store)
  const links = [
    {
      rel: 'last',
      href: `https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome&itens=10${append}`
    }
  ]

  return (
    <Pagination page={page} items={items} links={links} setPage={setPage} setItems={setItems} />
  )
}

describe('Pagination', () => {
  describe('flow', () => {
    beforeEach(() => {
      render(
        <Store>
          <PaginationWrapper />
        </Store>
      )
    })

    test('there should be a Pagination component', () => {
      const component = screen.queryByTestId('pagination')
      expect(component).toBeTruthy()
    })

    test('should be click into 2nd button pagination and changed aria-current attr', async () => {
      const input = screen.queryByTestId('pagination-input') as HTMLInputElement
      const nextButton = screen.queryByText(/2/i) as HTMLButtonElement
      const button = screen.queryByRole('button', { current: true }) as HTMLButtonElement

      expect(button.getAttribute('aria-current')).toBeTruthy()
      expect(button.getAttribute('aria-label')).toBe('page 1')

      fireEvent(
        nextButton,
        new MouseEvent('click', {
          bubbles: true
        })
      )

      expect(nextButton.getAttribute('aria-label')).toBe('page 2')
      expect(button.getAttribute('aria-current')).toBeFalsy()
      expect(nextButton.getAttribute('aria-current')).toBeTruthy()
      expect(input).toBeTruthy()
    })

    test('should be change the selected item', async () => {
      const counters = [...new Array(10)].map((value, index) => `${index + 1}`)
      const select = screen.queryByTestId('pagination-select') as HTMLButtonElement
      const button = within(select).getByRole('button')

      fireEvent.mouseDown(button)

      const listbox = within(screen.getByRole('presentation')).getByRole('listbox')
      const options = within(listbox).getAllByRole('option')
      const values = options.map((li) => li.getAttribute('data-value'))

      fireEvent.click(options[1])

      expect(values).toEqual(counters)
      expect(setItems).toHaveBeenCalledWith('2')
      expect(select).toBeTruthy()
    })
  })

  describe('exception', () => {
    beforeEach(() => {
      render(
        <Store>
          <PaginationWrapper isLastPage />
        </Store>
      )
    })

    test("there shouldn't be next button", () => {
      const select = screen.queryByTestId('pagination-input') as HTMLInputElement
      const nextButton = screen.queryByText(/2/i) as HTMLButtonElement

      expect(select).toBeTruthy()
      expect(nextButton).toBeFalsy()
    })
  })
})
