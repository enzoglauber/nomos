import { render } from '@testing-library/react'
import BoxContainer from './BoxContainer'

describe('BoxContainer', () => {
  test('should be defined', () => {
    const { queryByText } = render(<BoxContainer>boxcontainer</BoxContainer>)
    expect(queryByText('boxcontainer')).toBeDefined()
  })
})
