import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'

const BelowSwiper = () => {
    let {viewData , setViewData} = useContext(mystore)

    const navigate = useNavigate()
  return (
    <div className='flex gap-3 mt-6 items-center justify-around mb-2'>

      {
        viewData.map(function(elem){
            return(
                <div key={elem.id} className='h-96 w-96 bg-gray-200 shadow shadow-black/30 pl-7 pt-4 rounded mb-8' >
                    <div className=' flex  gap-3 '>
                 
                 <div className='flex flex-col gap-3'>
                    <div className='h-40 w-40  rounded overflow-hidden '>
                        <img src={elem.image1} alt="" className='h-full w-full object-cover transition duration-300 object-center hover:scale-105' />
                    </div>
                    <div className='h-40 w-40  rounded overflow-hidden'>
                        <img src={elem.image2} alt="" className='h-full w-full object-cover transition duration-300 object-center hover:scale-105' />
                    </div>
                 </div>
                   
                   <div className='flex flex-col gap-3 overflow-hidden'>
                     <div className='h-40 w-40  rounded'>
                        <img src={elem.image3} alt="" className='h-full w-full object-cover transition duration-300 object-center hover:scale-105' />
                     </div>
                    <div className='h-40 w-40  rounded overflow-hidden'>
                        <img src={elem.image4} alt="" className='h-full w-full object-cover transition duration-300 object-center hover:scale-105' />

                    </div>
                   </div>
                </div>
                <h1 className='text-blue-600 text-end pr-6 cursor-pointer active:scale-y-90' onClick={()=> navigate(`/ViewMoreDetails/${elem.id}`)}>view more </h1>
                </div>
                

            )
            
        })
      }
    </div>
  )
}

export default BelowSwiper
