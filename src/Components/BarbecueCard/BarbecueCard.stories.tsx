import { IBarbecue } from '@/pages/Dashboard'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BarbecueCard } from '.'

export default {
  title: 'Components/BarbecueCard',
  component: BarbecueCard
} as ComponentMeta<typeof BarbecueCard>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof BarbecueCard> = (args) => (
  <BarbecueCard {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  date: new Date(),
  description: 'A description',
  comments: 'A comment',
  id: '1',
  participants: [
    {
      id: '1',
      name: 'Jhon',
      value: 30.2,
      withDrink: false
    },
    {
      id: '2',
      name: 'Maria',
      value: 30.2,
      withDrink: true
    }
  ]
}
