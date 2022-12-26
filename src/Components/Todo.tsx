import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState<string[]>([])

    const addTodo = () => {
        setTodoList([...todoList, todo])
        setTodo("")
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    return (
        <div className='m-2 w-100 grid grid-row'>
            <input
                type="text"
                placeholder='Type Todo'
                className=''
                value={todo}
                // onChange={(e) => { setTodo(e.target.value) }}
                onChange={handleChange}
            >

            </input>
            <button onClick={addTodo}>
                Add Todo</button>

            <ul>
                {
                    todoList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Todo