import { render } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
  it('should render logo', () => {
    const { getByRole } = render(<Main />)
    expect(getByRole('img')).toBeInTheDocument()
  })
})
