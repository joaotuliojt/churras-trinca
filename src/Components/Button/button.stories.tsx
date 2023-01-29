import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '.'
import { Box } from '../BoxStories'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    loading: {
      type: 'boolean'
    }
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    )
  ]
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'button'
}
