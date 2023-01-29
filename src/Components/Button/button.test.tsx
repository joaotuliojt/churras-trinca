import { Button } from '.'
import { render } from '@testing-library/react'

describe('<Input />', () => {
  it('should render spinner loading', () => {
    const text = 'E-mail:'
    const { getByText, getByTestId, rerender } = render(<Button>{text}</Button>)

    expect(getByText(text)).toBeInTheDocument()
    rerender(<Button loading />)
    expect(getByTestId('spinner')).toBeInTheDocument()
  })
})
