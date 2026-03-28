import React from 'react'
import Lottie from 'lottie-react'
import error from "../assets/404error.json"
import { useNavigate } from 'react-router-dom'

const Error = () => {
  let navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 px-4'>

      {/* LOTTIE */}
      <Lottie 
        animationData={error} 
        loop={true} 
        className='w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px]'
      />

      {/* BUTTONS */}
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>

        <button 
          onClick={() => navigate(-1)} 
          className='bg-black text-white px-4 py-2 rounded hover:text-black hover:bg-white shadow-md shadow-gray-900 active:scale-90 w-full sm:w-auto'
        >
          Back
        </button>

        <button 
          onClick={() => navigate("/")}  
          className='bg-black text-white px-4 py-2 rounded hover:text-black hover:bg-white shadow-md shadow-gray-900 active:scale-90 w-full sm:w-auto'
        >
          Home
        </button>

      </div>

    </div>
  )
}

export default Error