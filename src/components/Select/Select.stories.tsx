import React from 'react';



export default {
    title: 'Example/Select',
    //component: Select,
}

const arr = [
    {value: '1',title: 'Ereymentau', country:1, peopleCount:5000},
    {value: '2',title: 'Nur-sultan', country:1, peopleCount:1000000},
    {value: '3',title: 'Almaty', country:1, peopleCount:17000000},
    {value: '4',title: 'Vancouver', country:2, peopleCount:675000 },
    {value: '5',title: 'Toronto', country:2, peopleCount:30000000},
    {value: '6',title: 'Ottawa', country:2, peopleCount:1000000},
    {value: '7',title: 'New-York', country:3, peopleCount:84000000 },
    {value: '8',title: 'Las-Vegas', country:3, peopleCount:645000},
    {value: '9',title: 'Miami', country:3, peopleCount:461000},
]

/*
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
*/

