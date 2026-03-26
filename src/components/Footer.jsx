import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()

    if (
      location.pathname === '/cart' || 
      location.pathname.startsWith("/productDetails/") || 
      location.pathname.startsWith("/particularproduct/")
    ){
        return null;
    }

  return (
    <div className='pt-10'>

      {/* Back to top */}
      <div 
        className='h-12 bg-cyan-900 flex items-center justify-center cursor-pointer hover:bg-cyan-800'
        onClick={()=> window.scrollTo({top:0,behavior:'smooth'})}
      >
        <button className='text-white text-sm md:text-base'>
          Back to top <i className="ri-arrow-up-line"></i>
        </button>
      </div>

      {/* Footer Content */}
      <div className='bg-cyan-950 flex flex-wrap justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-10 gap-6'>

        {/* About */}
        <div className='flex-1 min-w-50 text-gray-300'>
          <h1 className='text-white font-bold pb-3'>About</h1>
          <h2 className='hover:underline cursor-pointer'>Contact us</h2>
          <h2 className='hover:underline cursor-pointer'>About us</h2>
          <h2 className='hover:underline cursor-pointer'>Careers</h2>
          <h2 className='hover:underline cursor-pointer'>Shop Stop Stories</h2>
          <h2 className='hover:underline cursor-pointer'>Press</h2>
          <h2 className='hover:underline cursor-pointer'>Corporate Information</h2>
        </div>

        {/* Connect with us */}
        <div className='flex-1 min-w-50 text-gray-300'>
          <h1 className='text-white font-bold pb-3'>Connect with us</h1>
          <h2 className='hover:underline cursor-pointer'>Facebook <i className="ri-facebook-circle-fill"></i></h2>
          <h2 className='hover:underline cursor-pointer'>Instagram <i className="ri-instagram-fill"></i></h2>
          <h2 className='hover:underline cursor-pointer'>Twitter <i className="ri-twitter-fill"></i></h2>
          <h2 className='hover:underline cursor-pointer'>LinkedIn <i className="ri-linkedin-box-fill"></i></h2>
        </div>

        {/* Group company */}
        <div className='flex-1 min-w-50 text-gray-300'>
          <h1 className='text-white font-bold pb-3'>Group company</h1>
          <h2 className='hover:underline cursor-pointer'>Myntra</h2>
          <h2 className='hover:underline cursor-pointer'>Flipkart</h2>
          <h2 className='hover:underline cursor-pointer'>Shopsy</h2>
          <h2 className='hover:underline cursor-pointer'>Amazon</h2>
        </div>

        {/* Let us help you */}
        <div className='flex-1 min-w-50 text-gray-300'>
          <h1 className='text-white font-bold pb-3'>Let us help you</h1>
          <h2 className='hover:underline cursor-pointer'>Your Account</h2>
          <h2 className='hover:underline cursor-pointer'>Return Centre</h2>
          <h2 className='hover:underline cursor-pointer'>100% Purchase Protection</h2>
          <h2 className='hover:underline cursor-pointer'>Shop Stop App Download</h2>
          <h2 className='hover:underline cursor-pointer'>Payments</h2>
          <h2 className='hover:underline cursor-pointer'>Shipping</h2>
          <h2 className='hover:underline cursor-pointer'>FAQ</h2>
          <h2 className='hover:underline cursor-pointer'>Help</h2>
        </div>

        {/* Consumer Policy */}
        <div className='flex-1 min-w-50 text-gray-300'>
          <h1 className='text-white font-bold pb-3'>Consumer Policy</h1>
          <h2 className='hover:underline cursor-pointer'>Cancellation & returns</h2>
          <h2 className='hover:underline cursor-pointer'>Terms of Use</h2>
          <h2 className='hover:underline cursor-pointer'>Security</h2>
          <h2 className='hover:underline cursor-pointer'>Privacy</h2>
          <h2 className='hover:underline cursor-pointer'>Sitemap</h2>
          <h2 className='hover:underline cursor-pointer'>EPR Compliance</h2>
        </div>

      </div>
    </div>
  )
}

export default Footer