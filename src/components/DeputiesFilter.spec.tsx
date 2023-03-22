import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, vi } from 'vitest'

import DeputiesFilter from './DeputiesFilter'

describe('DeputiesFilter', () => {
  test('there should be a DeputiesFilter component', () => {
    const { queryByTestId } = render(<DeputiesFilter />)
    const component = queryByTestId('deputies-filter')
    expect(component).toBeTruthy()
  })

  test('should set a new value for the DEPUTY input', () => {
    const value: string = 'Hélio'
    const { getByLabelText } = render(<DeputiesFilter />)
    const input = getByLabelText(/Buscar por Deputado/i) as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value
      }
    })

    expect(input.value).toBe(value)
  })

  test('should set a new value for the PARTY input', () => {
    const value: string = 'PL'
    const { getByLabelText } = render(<DeputiesFilter />)
    const input = getByLabelText(/Partido/i) as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value
      }
    })

    expect(input.value).toBe(value)
  })

  test('should set a new value for the UF input', () => {
    const value: string = 'RJ'
    const { getByLabelText } = render(<DeputiesFilter />)
    const input = getByLabelText(/UF/i) as HTMLInputElement

    fireEvent.change(input, {
      target: {
        value
      }
    })

    expect(input.value).toBe(value)
  })

  it('should click on the hidden button and submit the form', async () => {
    render(<DeputiesFilter />)
    const user = userEvent.setup()

    const submit = vi.spyOn(user, 'click')
    await user.click(screen.getByText('Search'))

    expect(submit).toHaveBeenCalledOnce()
  })
})
