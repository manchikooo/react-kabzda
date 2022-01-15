import React, {useMemo, useState} from 'react';
import './App.css';
import {SCountry} from "./components/Select/SelectCountry";
import {SelectLetter} from "./components/Select/SelectLetter";
import {Example1} from "./components/ReactMemo";
import {ExampleUseMemo, LikeUseCallback} from "./components/UseMemoUseCallback";
import UseStateExample from "./components/UseState/UseStateExample";
import {UseEffectExample} from "./components/UseEffect/UseEffectExample";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [onValue, setOnValue] = useState(true)
    let [uncontrolledValue, setUncontrolledValue] = useState(true)

    let [selectLetter, setSelectLetter] = useState('Add by letter')
    let [selectCountry, setSelectCountry] = useState('Add by country')


    let items = [
        {title: 'Minsk', value: 1},
        {title: 'Brest', value: 1},
        {title: 'Vitebsk', value: 1},
        {title: 'Moscow', value: 2},
        {title: 'Kirov', value: 2},
        {title: 'Piter', value: 2},
        {title: 'Kiev1', value: 3},
        {title: 'Kiev2', value: 3},
        {title: 'Kiev3', value: 3},
    ]

    let filteredItemsByLetter = items.filter(i => i.title[0] === 'K')

    let filteredItemsByCountry = useMemo(() => {
            let copyItems = items.map(i => ({...i}))
            return copyItems.filter(i => i.value === 1)
        },
        [items])
    // let filterByLetter = items.filter()

    const SLetter = React.memo(SelectLetter)
    // const SCountry = React.memo (SelectCountry)

    return (
        <div className={'App'}>
            <UseEffectExample/>

            {/*<UseStateExample/>*/}

            {/*<Example1/>*/}
            {/*<ExampleUseMemo/>*/}
            {/*<LikeUseCallback/>*/}
            {/*<Select*/}
            {/*    // value={1}*/}
            {/*    setSelectValue={setSelectValue}*/}
            {/*    selectValue={selectValue}*/}
            {/*    items={items}*/}
            {/*/>*/}
            {/*<SLetter setSelectValue={setSelectLetter}*/}
            {/*         selectValue={selectLetter}*/}
            {/*         items={filteredItemsByLetter}/>*/}
            {/*<SCountry setSelectValue={setSelectCountry}*/}
            {/*          selectValue={selectCountry}*/}
            {/*          items={filteredItemsByCountry}/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}

            {/*<OnOff value={onValue} onClick={setOnValue}/>*/}

            {/*<Rating value={ratingValue}*/}
            {/*        onClick={setRatingValue}/>*/}
            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*           items={[*/}
            {/*               {title: 'Dimych', value: 1},*/}
            {/*               {title: 'Vlad', value: 2},*/}
            {/*               {title: 'Artem', value: 3}]}*/}
            {/*           onClick={(id) => alert(`User with ${id}`)}*/}
            {/*/>*/}

            {/*<Select*/}
            {/*    // value={1}*/}
            {/*    setSelectValue={setSelectValue}*/}
            {/*    selectValue={selectValue}*/}
            {/*    items={[*/}
            {/*        {title: 'Dimych', value: 1},*/}
            {/*        {title: 'Vlad', value: 2},*/}
            {/*        {title: 'Artem', value: 3}]}*/}
            {/*/>*/}


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
