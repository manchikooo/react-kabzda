import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff'
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/ControlledInput/ControlledInput";
import {Select} from "./components/Select/Select";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [onValue, setOnValue] = useState(true)
    let [uncontrolledValue, setUncontrolledValue] = useState(true)

    let [selectValue, setSelectValue] = useState('Add user')

    return (
        <div className={'App'}>
            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>

            <OnOff value={onValue} onClick={setOnValue}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[
                           {title: 'Dimych', value: 1},
                           {title: 'Vlad', value: 2},
                           {title: 'Artem', value: 3}]}
                       onClick={(id) => alert(`User with ${id}`)}
            />

                <Select
                    // value={1}
                    setSelectValue={setSelectValue}
                    selectValue={selectValue}
                    items={[
                        {title: 'Dimych', value: 1},
                        {title: 'Vlad', value: 2},
                        {title: 'Artem', value: 3}]}
                />


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
