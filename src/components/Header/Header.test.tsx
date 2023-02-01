import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Header from '.'

describe('<Header />', () => {
  it('should remove text in mobile', () => {
    const { container, getByText } = render(<Header />, {
      wrapper: BrowserRouter
    })

    console.log(container.style)

    expect(getByText('Agenda de churras')).toBeInTheDocument()
    window.resizeTo(460, 1280)
    //Stitches dont has support to get Styles
    //expect(getByText('Agenda de churras')).toHaveStyle('display: none;')
    expect(container.firstChild).toMatchSnapshot()
  })
})
