import React, {useState} from "react";

type counterType = { count: number }

const NewMessagesCounterSecret = (props: counterType) => {
    console.log('New count')
    return <div>{props.count}</div>
}

type usersType = { users: Array<string> }
const UsersSecret = (props: usersType) => {
    console.log('AAA')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vlad', 'Maks', 'Dimych'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}

