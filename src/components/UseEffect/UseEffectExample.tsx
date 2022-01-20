import React, {useEffect, useState} from 'react';

export const UseEffectExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('UseEffectExample')

    useEffect(() => {
        console.log('useEffect every render')
        // api.getUsers().then('')
        // setInterval()
        // indexedDB
        // document.getElementById(
        // document.title = 'User'
    })

    useEffect(() => {
        console.log('useEffect once after render')
        // api.getUsers().then('')
        // setInterval()
        // indexedDB
        // document.getElementById(
        // document.title = 'User'
    }, [])

    useEffect(() => {
        console.log('useEffect after render and when changing the counter')
        // api.getUsers().then('')
        // setInterval()
        // indexedDB
        // document.getElementById(
        // document.title = 'User'
    }, [counter])

    return (
        <>
            Hello, counter: {counter}, fake: {fake}
            <div>
                <button onClick={() => setCounter(counter + 1)}>counter +</button>
                <button onClick={() => setCounter(0)}>counter reset</button>
            </div>
            <div>
                <button onClick={() => setFake(fake + 1)}>fake +</button>
                <button onClick={() => setFake(0)}>fake reset</button>
            </div>
        </>
    );
};

export const UseEffectSetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('timeout: ' + counter)
            setCounter(counter => counter + 1)
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            console.log('interval: ' + fake)
            setFake(fake => fake + 1)
        }, 1000)
    }, [])

    return (
        <>
            Hello, counter: {counter}, fake: {fake}
            <div>
                <button onClick={() => setCounter(counter + 1)}>counter +</button>
                <button onClick={() => setCounter(0)}>counter reset</button>
            </div>
            <div>
                <button onClick={() => setFake(fake + 1)}>fake +</button>
                <button onClick={() => setFake(0)}>fake reset</button>
            </div>
        </>
    );
};
