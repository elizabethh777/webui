import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Breadcrumbs } from './Breadcrumbs'

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        background: { control: 'color' },
    },
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = args => <Breadcrumbs {...args} />

export const RuleDef = Template.bind({})
RuleDef.args = {
    version: '1.30',
    path: [["link", "Rucio Rule Definition Droid"], ["link", "Request Rule"]],
}