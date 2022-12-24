import React, { useContext } from 'react'
import { userContext } from '../App'

const User = () => {
    const { state, dispatch } = useContext(userContext)
    return (
        <div>
            <h1>
                Name:{state.name}
            </h1>
            <h1>
                Age:{state.age}
            </h1>
            <div className='grid grid-cols-2 bg-black sm:grid-cols-1 '>
                <button className='bg-white p-2 m-2 hover:opacity-10'
                    onClick={() => { dispatch({ type: "CHANGE_NAME", payload: "suresh" }) }}>Chanege Name</button>
                <button className='bg-white p-2 m-2 hover:opacity-10'
                    onClick={() => { dispatch({ type: "CHANGE_AGE", payload: 23 }) }}>Chanege Name</button>

            </div>
        </div>
    )
}

export default User