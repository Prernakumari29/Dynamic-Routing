import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { mystore } from '../contextAPI'

const Navigation = () => {
    let{cart  , setIsAuth , userName } = useContext(mystore);
  return (
    <div className='bg-cyan-800 text-white  w-full flex justify-between items-center p-4 font-bold  gap-6 '>
        <h1 className='font-serif'> <span className='text-4xl font-serif '>S</span>hop <span className='text-2xl font-serif '>S</span>top <i className="ri-shopping-bag-4-fill text-white text-2xl"></i></h1>
      <nav className='flex gap-9' >
        <Link to='/' className='hover:border-b active:scale-90'>Home</Link>
        <Link to='/cart' className='hover:border-b active:scale-90' >cart<span className='ml-1 bg-white text-cyan-500 h-5 w-5 rounded-full inline-flex items-center justify-center text-sm '>{cart.length}</span></Link>
        <button onClick={ () =>  setIsAuth(false)}>Log out</button>
        <h1>{userName.substring(0,2)}</h1>

      </nav>
    </div>
  )
}

export default Navigation
