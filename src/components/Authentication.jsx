import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import bg from "../assets/AuthBackground.jpg"

const Authentication = () => {
    const [toggle , setToggle] = useState(true)
  return (
     <div className='min-h-screen   bg-no-repeat bg-cover bg-top' style={{ backgroundImage: `url(${bg})` }} > 
     <h1 className='text-white absolute left-1/2 transform -translate-x-1/2 text-4xl text-center leading-loose tracking-wider '>WELCOME  TO  <br /> <span className='text-6xl font-serif'>SHOP STOP <i className="ri-shopping-bag-4-fill text-white text-6xl"></i></span></h1>
    <div className=' border border-white rounded-4xl shadow-2xl shadow-black/65 w-96 h-auto p-7 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  bg-white/90 '>
      {toggle ? <Login setToggle={setToggle} />: <Register setToggle={setToggle} />}
    </div>
    </div>
  )
}

export default Authentication
