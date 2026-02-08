import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const Authentication = () => {
    const [toggle , setToggle] = useState(true)
  return (
    <div className=' border-2 w-96 h-96 p-7 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg'>
      {toggle ? <Login setToggle={setToggle} />: <Register setToggle={setToggle} />}
    </div>
  )
}

export default Authentication
