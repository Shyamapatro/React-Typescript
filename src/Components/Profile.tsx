import React from 'react'

const Profile = (props: { name: String }) => {
    return (
        <div
            className='bg-white text-green-900 p-2 text-center text-auto flex items-center justify-center'>I am {props.name}</div>
    )
}

export default Profile