import React, {useState} from 'react';
import {ItemType, Select} from './Select';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Example/Select',
    //component: Select,
}

const arr = [
    {value: '1',title: 'Ereymentau'},
    {value: '2',title: 'Nur-sultan'},
    {value: '3',title: 'Almaty'},
]

export const select = () => {
    const [value, setValue] = useState<string>('1')

    return <Select value={value} onChange={setValue} items={arr}/>
}

export const withoutValueSelect = () => {
    const [value, setValue] = useState(null)

    return <Select
        value={value}
        onChange={setValue}
        items={arr}
    />
}
