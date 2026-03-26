import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'

const BelowSwiper = () => {
  const { viewData } = useContext(mystore)
  const navigate = useNavigate()

  return (
    <div className='flex gap-6 md:gap-15 mt-6 md:mt-10 items-center mb-2 overflow-x-auto px-2 sm:px-3 md:px-6 justify-start md:justify-center scroll-smooth'>
      
      {
        viewData.map((elem) => (
          
          <div 
            key={elem.id} 
            className='min-w-80 sm:min-w-[384px] h-80 sm:h-96 bg-gray-200 shadow shadow-black/30 pl-0.5 sm:pl-0.5 pt-2 sm:pt-4 rounded mb-6 md:mb-8 '
          >
            
            {/* Image Section */}
            <div className='flex gap-3 justify-center'>
              
              <div className='flex flex-col gap-3 items-center'>
                
                <div className='h-36 sm:h-40 w-36 sm:w-40 rounded overflow-hidden'>
                  <img 
                    src={elem.image1} 
                    alt=""
                    className='h-full w-full object-cover object-center hover:scale-105 transition duration-300 cursor-pointer'
                    onClick={() => navigate(`/ViewMoreDetails/${elem.id}`)}
                  />
                </div>

                <div className='h-36 sm:h-40 w-36 sm:w-40 rounded overflow-hidden'>
                  <img 
                    src={elem.image2} 
                    alt=""
                    className='h-full w-full object-cover object-center hover:scale-105 transition duration-300 cursor-pointer'
                    onClick={() => navigate(`/ViewMoreDetails/${elem.id}`)}
                  />
                </div>

              </div>
                   
              <div className='flex flex-col gap-3 items-center'>
                
                <div className='h-36 sm:h-40 w-36 sm:w-40 rounded overflow-hidden'>
                  <img 
                    src={elem.image3} 
                    alt=""
                    className='h-full w-full object-cover object-center hover:scale-105 transition duration-300 cursor-pointer'
                    onClick={() => navigate(`/ViewMoreDetails/${elem.id}`)}
                  />
                </div>

                <div className='h-36 sm:h-40 w-36 sm:w-40 rounded overflow-hidden'>
                  <img 
                    src={elem.image4} 
                    alt=""
                    className='h-full w-full object-cover object-center hover:scale-105 transition duration-300 cursor-pointer'
                    onClick={() => navigate(`/ViewMoreDetails/${elem.id}`)}
                  />
                </div>

              </div>

            </div>

            {/* View More */}
            <h1 
              className='text-blue-600 text-end pr-2 sm:pr-6 mt-1.5 sm:mt-0.5 cursor-pointer active:scale-95'
              onClick={() => navigate(`/ViewMoreDetails/${elem.id}`)}
            >
              view more
              <i className="ri-arrow-right-s-fill text-xl sm:text-2xl relative top-1"></i>
            </h1>

          </div>
        ))
      }

    </div>
  )
}

export default BelowSwiper