import { Input } from '.'
import { render } from '@testing-library/react'

describe('<Input />', () => {
  it('should render label text', () => {
    const label = 'E-mail:'
    const { getByText, queryByText, rerender } = render(<Input />)

    expect(queryByText(label)).toBeNull()
    rerender(<Input label={label} />)
    expect(getByText(label)).toBeInTheDocument()
  })
  /* STITCHES DONT HAVE SUPPORT TO GET STYLES */

  /* it('should change border color when it has a error', () => {
    const errorMessage = 'Invalid Value'
    const { getByTestId, rerender } = render(<Input />)
    expect(getByTestId('input')).toHaveStyle('border-color: rgb(0, 0 ,0);')
    rerender(<Input error={errorMessage} />)
    expect(getByTestId('input')).toHaveStyle('border-color: red;')
  }) */

  it('should render a label when it has a error', () => {
    const errorMessage = 'Invalid Value'
    const { getByText, queryByText, rerender } = render(<Input />)

    expect(queryByText(errorMessage)).toBeNull()
    rerender(<Input error={errorMessage} />)
    expect(getByText(errorMessage)).toBeInTheDocument()
  })
})
