import React, {useMemo, useState} from "react";

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    // value: any
    setSelectValue: (value: any) => void
    selectValue: string
    items: Array<ItemType>
}

export function SelectLetter(props: SelectPropsType) {
    console.log('Select')
    return (
        <div className='selectBlock'>
            <SelectTitleMemo title={props.selectValue}
                             setSelectValue={props.setSelectValue}
                             items={props.items}
            />
        </div>
    )
}

type SelectTitleType = {
    title: string
    setSelectValue: (value: any) => void
    items: Array<ItemType>
}

function SelectTitle(props: SelectTitleType) {
    console.log('Title + counter')

    const [collapsed, setCollapsed] = useState(true)
    const [counter, setCounter] = useState(0)

    return (<div onBlur={() => setCollapsed(true)} tabIndex={0}>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h3 onClick={() => setCollapsed(!collapsed)}>{props.title}</h3>
            {!collapsed && <SelectBodyMemo items={props.items} setSelectValue={props.setSelectValue}/>}
        </div>
    )
}

const SelectTitleMemo = React.memo(SelectTitle)

type SelectBodyType = {
    items: Array<ItemType>
    setSelectValue: (value: any) => void
}

function SelectBody(props: SelectBodyType) {
    // let filteredItems = useMemo(() => {
    //         let copyItems = props.items.map(i => i)
    //         return copyItems.filter(i => i.value === 1)
    //     },
    //     [props.items])
    console.log('Body')
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick={() => props.setSelectValue(i.title)}
                    key={index}>{i.title}</li>)}
        </ul>)
}

const SelectBodyMemo = React.memo(SelectBody)
