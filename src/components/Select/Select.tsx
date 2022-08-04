import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from "react";
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = React.memo(SelectMemo)
export function SelectMemo(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
    }
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)

        }
    }

    return (
        <div>
            {/*<Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Age
                    </InputLabel>
                    <NativeSelect
                        defaultValue={props.value}
                        inputProps={{
                            name: 'value',
                            id: 'uncontrolled-native',
                        }}
                        onChange={handleChange}
                    >
                        {props.items.map((el,index) => <option key={index} value={el.value}>{el.title}</option>)}
                    </NativeSelect>
                </FormControl>
            </Box>*/}
            <div className={styles.select + " "} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(el => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(el.value)
                            }}
                            className={styles.item + " " + (hoveredItem === el ? styles.selected : "")}
                            key={el.value}
                            onClick={() => onItemClick(el.value)}
                        >
                            {el.title}
                        </div>)
                        }
                    </div>
                }
            </div>
        </div>
    )
}

