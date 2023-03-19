import { render, screen } from '@testing-library/react'
import Root from './Root'

describe('Root', () => {
  beforeEach(() => {
    render(<Root />)
  })

  test('there should be a navbar component', () => {
    const element = screen.queryByTestId('navbar')
    expect(element).toBeTruthy()
  })

  test('there should be a outlet component', () => {
    const element = screen.queryByTestId('outlet')
    expect(element).toBeTruthy()
  })
})
