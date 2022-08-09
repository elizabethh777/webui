import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Information } from './Information'

export default {
    title: 'Components/Information',
    component: Information,
} as ComponentMeta<typeof Information>

const Template: ComponentStory<typeof Information> = args => <Information {...args} />

export const Popup = Template.bind({})
Popup.args = {
    info:['Simple Text Simple Text Simple Text ', 'Simple Text 2 Simple Text 2']
}