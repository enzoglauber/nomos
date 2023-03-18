import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('should be defined', () => {
    const { container } = render(<App />)
    const app = container.getElementsByClassName('App')
    expect(app.length).toBe(1)
  })
})
