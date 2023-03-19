import { render } from '@testing-library/react'
import RowLabelValue from './RowLabelValue'

describe('RowLabelValue', () => {
  test('there should be a RowLabelValue component', () => {
    const { queryByTestId } = render(<RowLabelValue label="label" value="value" />)
    const component = queryByTestId('row-label-value')
    const label = queryByTestId('label')
    const value = queryByTestId('value')

    expect(component).toBeTruthy()
    expect(label?.textContent).toBe('label')
    expect(value?.textContent).toBe('value')
  })

  test('there should be a RowLabelValue component without value', () => {
    const { queryByTestId } = render(<RowLabelValue label="label" value={null} />)
    const component = queryByTestId('row-label-value')
    const label = queryByTestId('label')
    const value = queryByTestId('value')

    expect(component).toBeTruthy()
    expect(label?.textContent).toBe('label')
    expect(value?.textContent).toBe('-')
  })

  // test('there should be a outlet component', () => {
  //   const element = screen.queryByTestId('outlet')
  //   expect(element).toBeTruthy()
  // })
})
