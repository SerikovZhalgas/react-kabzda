import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props:AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    const collapsedButton = () => {
        setCollapsed(!collapsed)
    }

        return <div>
            <AccordionTitle title={props.titleValue} collapsedButton={collapsedButton}/>
            { !collapsed && <AccordionBody/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsedButton: ()=>void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>{props.collapsedButton()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
