import React, {useReducer} from "react";
import {collapsedButtonAC, reducer} from "./Reducer";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)
export function UncontrolledAccordionMemo(props:AccordionPropsType) {

    //const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const collapsedButton = () => {
        //setCollapsed(!collapsed)
        dispatch(collapsedButtonAC())
    }
        return <div>
            <AccordionTitle title={props.titleValue} collapsedButton={collapsedButton}/>
            { !state.collapsed && <AccordionBody/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    collapsedButton: ()=>void
}

export const AccordionTitle = React.memo(AccordionTitleMemo)
function AccordionTitleMemo(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>{props.collapsedButton()}}>{props.title}</h3>
    )
}

export const AccordionBody = React.memo(AccordionBodyMemo)
function AccordionBodyMemo() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
