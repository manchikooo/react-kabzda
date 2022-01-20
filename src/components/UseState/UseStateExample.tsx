import React, {useState} from 'react'; // 1

let generateData = () => {
    console.log('generateData')
    return 1
}

const UseStateExample = () => {
    console.log('UseStateExample')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData) // реакт вызовет функцию единожды, запомнит значение, которое она вернет и засетает его в значение стейта. Дальше будет меняться значение в стейте и функция повторно вызываться не будет. Работает схоже с useMemo

    const changer = (state: number) => { // пояснение как работает в 22 строке
        return state + 1
    }

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {/* из-за setAction реакт понимает, что в функции вместо state в аргументе функции сидит наше значение из useState */}
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
            <button onClick={() => setCounter(0)}>reset</button>
        </>
    );
};

export default UseStateExample;