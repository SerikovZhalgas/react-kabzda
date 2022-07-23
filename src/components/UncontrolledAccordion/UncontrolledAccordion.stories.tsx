import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} 

const callback = action('Accordion mode change event fired')

export const MenuUncontrolledMode = () => <UncontrolledAccordion titleValue={'--Menu--'}/>
export const UsersUncontrolledMode = () => <UncontrolledAccordion titleValue={'--Users--'}/>