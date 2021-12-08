import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (id: number)=> void
}

export function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}
                            onClick={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    collapsed: boolean
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (id: number)=> void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={()=>props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>)
}