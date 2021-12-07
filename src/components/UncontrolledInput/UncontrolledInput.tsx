import React from "react";
import {useRef, useState} from "react";
//
// export const UncontrolledInput = () => <input/>
//
export function TrackValueOfUncontrolledInput() {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)


    return <div><input onChange={onChangeHandler}/> - {value}</div>
}

export function GetValueOfUncontrolledInputByButtonPress() {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (<div>
        <input ref={inputRef} id={'inputId'}/>
        <button onClick={save}>save
        </button>
        - actual value: {value}
    </div>)
}


// export const ControlledInputWithFixedValue = () => <input value={'it-inc '}/>