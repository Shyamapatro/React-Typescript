import React from 'react'
import Greet from './components1/Greet'
import Person from './components1/Person'

const Appdemo = () => {
    const personInfo = {
        firstName: "Shyama",
        lastName: "Patro"
    }

    const nameList = [
        {
            first: "suraj",
            last: "kumar"
        },
        {
            first: "Raj",
            last: "Singh"
        }
    ]
    return (
        <div>
            <Greet Programming={"Typescript"} messageNumber={10} isLoggedIn={false} />
            <Person personInfo={personInfo} nameList={nameList} />
        </div>
    )
}

export default Appdemo