import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * elements that
     */
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

export const Accordion = React.memo(AccordionMemo)
export function AccordionMemo(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}
const AccordionTitle = React.memo(AccordionTitleMemo)
function AccordionTitleMemo(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}
const AccordionBody = React.memo(AccordionBodyMemo)
function AccordionBodyMemo(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}

        </ul>
    )
}