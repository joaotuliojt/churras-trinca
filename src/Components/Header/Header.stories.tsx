import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '.'

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as ComponentMeta<typeof Header>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof Header> = (args) => <Header />

export const Basic = Template.bind({})
