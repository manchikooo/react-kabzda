import React, {useCallback, useMemo, useState} from 'react';


export const ExampleUseMemo = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            } // тормозит отрисовку
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret); // при изменении counter, react не будет перерисовывать Users, если он не изменился

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "HTML"])

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf("a") > -1);
    }, [books])


    const addBook = () => {
        let newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers)
    }

    const memoizedAddBook = useMemo(()=>{
     return    addBook
    },[books])
    const memoizedAddBook2 = useCallback(()=>{
        let newUsers = [...books, "Angular" + new Date().getTime()]
        setBooks(newUsers)
    },[books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book books={newArray} addBook={memoizedAddBook2}/>
        </div>
    )
}


const BooksSecret = (props: { books: Array<string>, addBook:()=>void }) => {
    console.log("BooksSecret")
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}
        </div>
    )
}

const Book = React.memo(BooksSecret)