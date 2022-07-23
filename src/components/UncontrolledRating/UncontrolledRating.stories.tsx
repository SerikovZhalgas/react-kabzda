import React from 'react';
import {UncontrolledRating2} from "./UncontrolledRating2";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating2',
    component: UncontrolledRating2,
}

const callback = action("rating changed inside component")

export const EmptyStars = () => <UncontrolledRating2 defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating2 defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolledRating2 defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolledRating2 defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating2 defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolledRating2 defaultValue={5} onChange={callback}/>