import { render } from '@testing-library/react'
import SubHeader from './SubHeader'

describe('SubHeader', () => {
  test('there should be a SubHeader component', () => {
    const { queryByTestId } = render(<SubHeader title="title" subtitle="subtitle" />)
    const component = queryByTestId('subheader')
    const title = queryByTestId('title')
    const subtitle = queryByTestId('subtitle')

    expect(component).toBeTruthy()
    expect(title?.textContent).toBe('title')
    expect(subtitle?.textContent).toBe('subtitle')
  })
})
