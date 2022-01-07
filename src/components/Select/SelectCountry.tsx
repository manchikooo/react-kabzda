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
export const SCountry = React.memo(SelectCountry)

export function SelectCountry(props: SelectPropsType) {
    console.log('Select country')
    return (
        <div className='selectBlock'>
            <STitle title={props.selectValue}
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

const STitle = React.memo(SelectTitle)

function SelectTitle(props: SelectTitleType) {
    console.log('Title country')

    const [collapsed, setCollapsed] = useState(true)

    return (<div onBlur={() => setCollapsed(true)} tabIndex={0}>
            <h3 onClick={() => setCollapsed(!collapsed)}>{props.title}</h3>
            {!collapsed && <SBody items={props.items} setSelectValue={props.setSelectValue}/>}
        </div>
    )
}

type SelectBodyType = {
    items: Array<ItemType>
    setSelectValue: (value: any) => void
}
const SBody = React.memo(SelectBody)

function SelectBody(props: SelectBodyType) {
    console.log('Body country')
    return (
        <ul>
            {props.items.map((i, index) =>
                <li onClick={() => props.setSelectValue(i.title)}
                    key={index}>{i.title}</li>)}
        </ul>)
}

