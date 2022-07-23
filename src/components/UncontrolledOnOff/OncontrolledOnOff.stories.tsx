import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} 

const callback = action('on or off clicked')

export const UncontrolledOnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const UncontrolledOffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BudMode = () => <div>Unsync when change defaultValue when already rendered</div>
export const DefaultInputValue = () => <input defaultValue={'yo'}/>