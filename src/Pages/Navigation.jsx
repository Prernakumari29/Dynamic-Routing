import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { mystore } from '../contextAPI'

const Navigation = () => {
    let{cart , setCart} = useContext(mystore);
  return (
    <div className='bg-cyan-800 text-white  w-full flex justify-between items-center p-4 font-bold  gap-6 '>
        <h1>logo</h1>
      <nav className='flex gap-9' >
        <Link to='/'>Home</Link>
        <Link to='/cart'>cart<span className='ml-1 bg-white text-cyan-500 h-5 w-5 rounded-full inline-flex items-center justify-center text-sm '>{cart.length}</span></Link>

      </nav>
    </div>
  )
}

export default Navigation
