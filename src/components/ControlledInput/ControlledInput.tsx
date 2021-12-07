import React, {useState} from "react";

export function ControlledInput() {

    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export function ControlledCheckbox() {

    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)

    return <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
}

export function ControlledSelect() {

    const [parentValue, setParentValue] = useState<number>(0)
    const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setParentValue(e.target.selectedIndex)

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={3}>Kiev</option>
    </select>
}