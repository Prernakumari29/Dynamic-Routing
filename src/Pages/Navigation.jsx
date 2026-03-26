import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { mystore } from '../contextAPI'
import { mycart } from '../contexts/CartContextApi';

const Navigation = () => {
  const { userName, logout } = useContext(mystore);
  const { cart } = useContext(mycart)

  const [open, setOpen] = useState(false);

  // 🔥 common function for active class
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white border-b-2 border-white"
      : "text-white";

  return (
    <div className='bg-cyan-800 text-white w-full flex justify-between items-center px-2 sm:px-4 py-3 font-bold relative'>
      
      {/* Logo */}
      <h1 className='font-serif flex items-center gap-1'>
        <span className='text-2xl sm:text-3xl md:text-4xl'>S</span>hop
        <span className='text-lg sm:text-xl md:text-2xl'> S</span>top
        <i className="ri-shopping-bag-4-fill text-lg sm:text-xl md:text-2xl"></i>
      </h1>

      {/* Avatar */}
      <div 
        className='md:hidden cursor-pointer z-50'
        onClick={() => setOpen(prev => !prev)}
      >
        {userName && (
          <div className='bg-green-400 h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold'>
            {userName[0].toUpperCase()}
          </div>
        )}
      </div>

      {/* Menu */}
      <nav
        className={`
          absolute md:static 
          top-14 right-2 
          w-48 sm:w-56 md:w-auto 
          bg-cyan-800 md:bg-transparent 
          rounded-lg md:rounded-none 
          shadow-lg md:shadow-none 
          z-40 
          ${open ? "flex" : "hidden"} md:flex
        `}
      >
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-4 md:p-0 w-full'>
          
          <NavLink to='/' className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to='/womens' className={linkClass} onClick={() => setOpen(false)}>
            Womens
          </NavLink>

          <NavLink to='/mens' className={linkClass} onClick={() => setOpen(false)}>
            Mens
          </NavLink>

          <NavLink 
            to='/cart' 
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1 border-b-2 border-white"
                : "flex items-center gap-1"
            }
            onClick={() => setOpen(false)}
          >
            <i className="ri-shopping-cart-line"></i>
            <span className='bg-white text-cyan-500 h-5 w-5 rounded-full flex items-center justify-center text-xs'>
              {cart.length}
            </span>
          </NavLink>

          <button 
            onClick={() => { logout(); setOpen(false); }}
            className='hover:underline'
          >
            Log out
          </button>

          {/* Desktop avatar */}
          {userName && (
            <div className='hidden md:flex bg-green-400 h-8 w-8 rounded-full items-center justify-center text-sm'>
              {userName[0].toUpperCase()}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navigation