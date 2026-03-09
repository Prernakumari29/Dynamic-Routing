import React, { useContext } from 'react'
import {  NavLink } from 'react-router-dom'
import { mystore } from '../contextAPI'
import { mycart } from '../contexts/CartContextApi';


const Navigation = () => {
    let{ setIsAuth , userName } = useContext(mystore);
    let{cart } = useContext(mycart)
  return (
    <div className='bg-cyan-800 text-white  w-full flex justify-between items-center p-4 font-bold  gap-6 relative'>
        <h1 className='font-serif'> <span className='text-4xl font-serif '>S</span>hop <span className='text-2xl font-serif '>S</span>top <i className="ri-shopping-bag-4-fill text-white text-2xl"></i></h1>
      <nav className='flex gap-9' >
        <div className='flex gap-6  items-center  '>
          <NavLink to='/' className={({ isActive }) =>
            isActive
              ? "cursor-pointer text-white shadow-white shadow-xs px-1"
              : "cursor-pointer text-white"
          }>Home</NavLink>
        <NavLink to='/womens' className={({isActive})=>
        isActive 
          ? "cursor-pointer text-white shadow-white shadow-xs px-1"
          : "cursor-pointer text-white"
        }>Womens</NavLink>

        <NavLink to='/mens' className={({isActive})=>
          isActive 
          ? "cursor-pointer text-white shadow-white shadow-xs px-1"
          : "cursor-pointer text-white"
        }>Mens</NavLink>

        <NavLink to='/cart' className={({isActive})=>
          isActive 
          ? "cursor-pointer text-white shadow-white shadow-xs px-1"
          : "cursor-pointer text-white"
        }><i className="ri-shopping-cart-line"></i><span className='ml-1 bg-white text-cyan-500 h-5 w-5 rounded-full inline-flex items-center justify-center text-sm '>{cart.length}</span></NavLink>
        <button className='hover:border-b active:scale-90' onClick={ () =>  setIsAuth(false)}>Log out</button>
        <h1 className='bg-green-400 h-8 w-8 rounded-full text-center pt-1'>{userName.substring(0,1)}</h1>
        </div>

      </nav>
    </div>
  )
}

export default Navigation
