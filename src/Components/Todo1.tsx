import { useState, useRef } from 'react'

const Todo1 = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [todoList, setTodoList] = useState<string[]>([])
    const addTodo = () => {
        if (inputRef.current) {
            const todo = inputRef.current.value
            setTodoList([...todoList, todo])
        }
    }

    return (
        <div className='m-2 w-100 grid grid-row'>
            <input
                ref={inputRef}
                type="text"
                placeholder='Type Todo'
                className=''
            // onChange={(e) => { setTodo(e.target.value) }}
            >
            </input>
            <button onClick={addTodo}>Add Todo</button>
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

export default Todo1