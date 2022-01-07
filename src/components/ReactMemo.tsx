import React, {useMemo, useState} from "react";

type counterType = { count: number }

const NewMessagesCounterSecret = (props: counterType) => {
    console.log('New count')
    return <div>{props.count}</div>
}

type usersType = { users: Array<string> }
const UsersSecret = (props: usersType) => {
    console.log('Users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['1Vlad', '1Maks', 'Dimych'])

    const addUser = () => {
        const newUsers = [...users, '1Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    let filteredUsers = useMemo(() => {
        let usersCopy = [...users]
        return usersCopy.filter(u => u[0] === '1')
    }, [users])
    // let filter = () => {
    //    return  users.filter(u => u === 'Maks')
    // }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={filteredUsers}/>
        </>
    )
}

