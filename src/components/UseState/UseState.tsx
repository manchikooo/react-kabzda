import React, {useMemo, useState} from 'react';

let generateData = () => {
    console.log('generateData')
    return 3284982732
}

const UseState = () => {
    console.log('UseState')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData) // реакт вызовет функцию единожды, запомнит значение, которое она вернет и засетает его в значение стейта. Дальше будет меняться значение в стейте и функция повторно вызываться не будет. Работает схоже с useMemo

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={() => setCounter(0)}>reset</button>
        </>
    );
};

export default UseState;