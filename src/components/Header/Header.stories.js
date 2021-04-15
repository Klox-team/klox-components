import React from 'react'

import { Header } from './Header'

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {}
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
    loggedIn: true
}

export const NotLoggedIn = Template.bind({})
NotLoggedIn.args = {
    loggedIn: false,
}

export const SubTitle = Template.bind({})
SubTitle.args = {
    subTitle: 'Another title'
}
