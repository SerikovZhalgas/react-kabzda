import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating2} from "./components/UncontrolledRating/UncontrolledRating2";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

const arr = [
    {title: 'aaaa', value: '1'},
    {title: 'bbbb', value: '2'},
    {title: 'cccc', value: '3'},
    {title: 'dddd', value: '4'},
]

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)
    const [value, setValue] = useState<string>('1')
    return (
        <div className={"App"}>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion
                titleValue={"Настройки"}
                collapsed={accordionCollapsed}
                onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
            />*/}

            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}


            <Select value={value} onChange={setValue} items={arr}/>
            {/*<UncontrolledRating2/>*/}
            {/*<UncontrolledAccordion titleValue={"Меню"}/>
            <UncontrolledAccordion titleValue={"Настройки"}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;

