import React, {useState} from "react";

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

export function Select(props: SelectPropsType) {

    return (
        <div className='selectBlock'>
            <SelectTitle title={props.selectValue}
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

    const [collapsed, setCollapsed] = useState(true)

    return (<div onBlur={() => setCollapsed(true)} tabIndex={0}>
            <h3 onClick={() => setCollapsed(!collapsed)}>{props.title}</h3>
            {!collapsed && <SelectBody items={props.items} setSelectValue={props.setSelectValue}/>}
        </div>
    )
}

type SelectBodyType = {
    items: Array<ItemType>
    setSelectValue: (value: any) => void
}

function SelectBody(props: SelectBodyType) {
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick={() => props.setSelectValue(i.title)}
                    key={index}>{i.title}</li>)}
        </ul>)
}

