import React from 'react'
type GreetProps = {
    Programming: string
    messageNumber: number
    isLoggedIn: boolean
}

const Greet = ({ Programming, messageNumber, isLoggedIn }: GreetProps) => {
    return (
        <>
            <div>{isLoggedIn ? `Welcome to ${Programming}! You have ${messageNumber} unread messages` : "Guest"}</div>
        </>
    )
}

export default Greet