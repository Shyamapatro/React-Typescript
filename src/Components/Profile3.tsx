import React from 'react'
type ProfileProps = {
  name: string,
  age: number,
  address?: string
  status?: "coder" | "single",
  children?: React.ReactNode
}
const Profile3 = ({ name, age, address, status, children }: ProfileProps) => {
  return (
    <div className='bg-white text-red-900 p-2 text-center text-auto '>

      <div>Name: {name}</div>
      <div>Age:{age}</div>
      <div>Address:{address || 'unknown'} </div>
      <div>Status:{status || 'unknown'} </div>
      <div>Salary: {children || 'unknown'}</div>
    </div>
  )
}

export default Profile3