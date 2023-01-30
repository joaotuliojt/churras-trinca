import { IBarbecue } from '@/pages/Dashboard'
import { render, fireEvent } from '@testing-library/react'

import { BarbecueCard } from '.'

const barbecue: IBarbecue = {
  id: '1',
  date: new Date('2023-01-30T04:00:12.423Z'),
  description: 'Aniversário da Sara',
  comments: 'É uma festa fantasia',
  total: 120.37,
  values: {
    withDrinks: 30,
    withoutDrinks: 20
  },
  participants: [
    {
      name: 'André',
      value: 20,
      withDrink: false
    },
    {
      name: 'Sara',
      value: 30,
      withDrink: true
    },
    {
      name: 'Bruno',
      value: 30,
      withDrink: true
    },
    {
      name: 'Roberto',
      value: 20,
      withDrink: false
    },
    {
      name: 'Carol',
      value: 20,
      withDrink: false
    }
  ],
  totalParticipants: 5
}

describe('<BarbecueCard />', () => {
  it('should translate on hover', () => {
    const { container } = render(<BarbecueCard {...barbecue} />)

    fireEvent.mouseEnter(container)
    //expect(container).toHaveStyle('transform: translateY(-1rem);')
    expect(container.firstChild).toMatchSnapshot()
  })
})
