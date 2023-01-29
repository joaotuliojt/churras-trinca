import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '.'
import { Box } from '../BoxStories'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: {
      type: 'string'
    },
    error: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    }
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    )
  ]
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Placeholder'
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'E-mail:',
  placeholder: 'E-mail'
}

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
  error: 'Invalid Value',
  placeholder: 'Placeholder'
}
