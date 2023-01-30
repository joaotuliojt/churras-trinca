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
  total: 200.4,
  totalParticipants: 6
}
