import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";


function App(props: any) {
    console.log("App rendering")
    return (
        <div className={"App"}>
            <OnOff on={true}/>
            <OnOff on={false}/>

            <UncontrolledAccordion titleValue={"Меню"}/>
            {/*<UncontrolledAccordion titleValue={"Настройки"}/>*/}

            <UncontrolledRating />

            {/*<Accordion titleValue={"Меню"} collapsed={true}/>
            <Accordion titleValue={"Настройки"} collapsed={false}/>
            <Rating value={0} />
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;

