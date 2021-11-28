import React, {useState} from "react";
import classes from './Rating.module.css'

type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)

    return (
        <div className={classes.rating}>
            <Star selected={value >= 1} setValue={()=>{setValue(1)}}/>
            <Star selected={value >= 2} setValue={()=>{setValue(2)}}/>
            <Star selected={value >= 3} setValue={()=>{setValue(3)}}/>
            <Star selected={value >= 4} setValue={()=>{setValue(4)}}/>
            <Star selected={value >= 5} setValue={()=>{setValue(5)}}/>
        </div>
    )
}

type StarType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarType) {

    return (
        <span onClick={() => props.setValue()}>{props.selected ? <b>star </b> : 'star '}
        </span>
    )
}