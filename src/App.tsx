import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating2} from "./components/UncontrolledRating/UncontrolledRating2";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={"App"}>
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion
                titleValue={"Настройки"}
                collapsed={accordionCollapsed}
                onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
            />*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

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

