import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let temResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            temResultA *= i
        }
        return temResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
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
    console.log('Users Secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Zhalgas', 'Vlad', 'Kamila'])

    const newArray = useMemo(() => {
        const newArray = users.filter(el => el.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Kamila ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => {
            addUser()
        }}>add user
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const memoizedAddBook = useMemo(()=> {
        return () => {
            const newUsers = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(()=> {
            const newUsers = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}
type BookSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BookSecretPropsType) => {
    console.log('Users Secret')
    return <div>
        <button onClick={() => props.addBook()}>add user</button>
    </div>
}

const Book = React.memo(BooksSecret)