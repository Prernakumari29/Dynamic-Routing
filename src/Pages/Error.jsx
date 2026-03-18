import React from 'react'
import Lottie from 'lottie-react'
import error from "../assets/404error.json"
import { useNavigate } from 'react-router-dom'

const Error = () => {
    let navigate = useNavigate()
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-6'>
      
       <Lottie animationData={error} loop={true} style={{ height:400  }} />
       
       <div className='flex gap-4'>
          <button onClick={()=>navigate(-1)} className='bg-black text-white p-2 rounded hover:text-black hover:bg-white shadow-md shadow-gray-900 cursor-pointer active:scale-90'>
            Back
            </button>
          <button onClick={()=>navigate("/") }  className='bg-black text-white p-2 rounded hover:text-black hover:bg-white shadow-md shadow-gray-900 cursor-pointer active:scale-90'>
            Home
            </button>
       </div>     
      
    </div>
  )
}

export default Error
