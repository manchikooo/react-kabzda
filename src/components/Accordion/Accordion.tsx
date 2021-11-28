import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}

export function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}
                            onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}