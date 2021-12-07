import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff'
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOff";
import {
    GetValueOfUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput,
} from "./components/UncontrolledInput/UncontrolledInput";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [onValue, setOnValue] = useState(true)
    let [uncontrolledValue, setUncontrolledValue] = useState(true)

    return (
        <div className={'App'}>
            <GetValueOfUncontrolledInputByButtonPress/>
            <TrackValueOfUncontrolledInput/>

            <UncontrolledOnOff changeValue={setUncontrolledValue}/> {uncontrolledValue.toString()}

            <OnOff value={onValue} onClick={setOnValue}/>

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)}/>

            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}


export default App;
