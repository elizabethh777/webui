
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Steps } from './Steps'

export default {
    title: 'Components/Steps',
    component: Steps,
} as ComponentMeta<typeof Steps>

const Template: ComponentStory<typeof Steps> = args => <Steps {...args} />

export const Primary = Template.bind({})
Primary.args = {
    steps:['1st step', '2nd step', '3rd step', '4th step'],
    selected:1
}
