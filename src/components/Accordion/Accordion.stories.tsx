import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'component/Accordion',
    component: Accordion,
}

const callback = action('Accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
    onChange: callback
}
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: '--Menu--',
    collapsed: true
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: '--Users--',
    collapsed: false
}

const callbackOnCLick = action('callback was clicked')

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'--Menu--'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Zhalgas", value: 1},
                          {title: "Kamila", value: 2},
                          {title: "Saule", value: 3},
                          {title: "Zhanat", value: 4}]}
                      onClick={(id) => {
                          alert(`user with ID ${id} should be happy`)
                      }}/>
}