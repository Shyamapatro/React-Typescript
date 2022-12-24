import React from 'react'

interface ProfileProps {
  name: string,
  age: number
}
const Profile2 = ({ name, age }: ProfileProps) => {
  return (
    <><div className='bg-white text-blue-900 p-2 text-center text-auto flex items-center justify-center '>

      {name}--{age}</div>
    </>

  )
}

export default Profile2