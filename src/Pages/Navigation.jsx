import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='bg-amber-400 w-full flex justify-between items-center p-4 font-bold  gap-6'>
        <h1>logo</h1>
      <nav className='flex gap-9' >
        <Link to='/'>Home</Link>
        <Link to='/cart'>cart</Link>

      </nav>
    </div>
  )
}

export default Navigation
