import React, { useContext, useState } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'
import MenVideo from "../MenDress.jsx/MenVideo.mp4"
import MenLuxImage from "../MenDress.jsx/MenLuxImage.jpg"
import { mycart } from '../contexts/CartContextApi'

const Mens = () => {
    let{viewMoreData,volume , setVolume} = useContext(mystore)
    let {cart ,setCart , handlecart , increaseQty , decreaseQty} = useContext(mycart)
    let MensProduct = viewMoreData.find((pro) => pro.id === 2)
    const navigate = useNavigate()

   
  return (
    <>
 {/* -------------------------------------------1-50 mens part---------------------------------------------------    */}
    <div className='h-10 bg-white shadow-md mb-15 shadow-gray-200 flex items-center justify-between'>
              <div className='flex items-center gap-8 '>
                <i className="ri-arrow-left-line font-bold text-3xl cursor-pointer" onClick={()=> navigate(-1)}></i>
              <h1 className=''>1-50 of over 20,000 results for "<span className='text-orange-600 font-bold'>mens clothes</span>"</h1>
              </div>
              <h1 className='pl-1 pr-1 border mr-8 rounded'>sort by:</h1>
             </div>


    <div className='h-76   bg-gray-50 flex mt-8 ml-25 mr-25 rounded-2xl gap-5  '>

{/* -----------------------------------------------Lux Vest video------------------------------------------------------------------ */}
     <div className='relative flex h-full'>
       <video src={MenVideo}  autoPlay muted={volume} loop className='rounded-2xl p-4'/>
      {volume ? <button className='absolute top-[80%] left-[85%] ' onClick={()=>setVolume(!volume)}><i className="ri-volume-mute-line  text-3xl text-black bg-gray-100 rounded-full p-1"></i></button>
      :
      <button className='absolute top-[80%] left-[85%] ' onClick={()=> setVolume(!volume)}><i className="ri-volume-up-line  text-3xl text-black bg-gray-100 rounded-full p-1"></i></button>}

     </div>

{/* --------------------------------------------LUX Image---------------------------------------------------------- */}
    <div>
        <img src={MenLuxImage} alt="" className='h-32 mt-15' />
         <h2 className='text-2xl mt-5 ml-70'>EveryDay Comforts Start With "<span className='font-bold text-red-500'>LUX PARKER</span>"</h2>
    </div> 

    </div>
    
    
    <h1 className='font-bold px-32 pt-5'>Results </h1>
    <h2 className='text-gray-500 px-32'>Check each product page for other buying options. Price and other details may vary based on product size and colour.</h2>
        
      <div className='flex gap-10 flex-wrap  px-30 py-3'>    
      {
        MensProduct.products.map(function(elem){

          const itemInCart = cart.find((item) => item.id == elem.id)
            return(
              <div className='h-80 w-56 hover:bg-gray-100 p-3 rounded '> 
            
            <div className='h-48 w-full rounded' onClick={()=> navigate(`/particularproduct/${elem.id}`)}  >
              <img src={elem.image} alt="image hai" className='h-full w-full object-cover'/>
            </div>

            <h1 className='mt-4'>{elem.name}</h1>
            <h1 className='text-red-600 text-xl'><span className='text-black line-through text-sm'>₹{elem.oldPrice}</span> ₹{elem.price}  </h1>
            {/* <button className='bg-cyan-900 text-white w-full mt-2 p-1 rounded cursor-pointer active:scale-90' onClick={()=> handlecart(elem)} >Add to cart</button> */}

            {
              itemInCart ?
                (

                    <div className='flex gap-3 bg-yellow-900 text-white  rounded mt-2 cursor-pointer items-center justify-center font-bold'>


                      <button
                        className='  font-bold text-2xl'
                        onClick={() => decreaseQty(elem.id)}
                      >
                        -
                      </button>

                      <span>{itemInCart.qty}</span>

                      <button
                        className='  font-bold text-xl'
                        onClick={() => increaseQty(elem.id)}
                      >
                        +
                      </button>

                    </div>

                  ) 
              :
              (
                <button className='bg-cyan-900 text-white w-full mt-2 p-1 rounded cursor-pointer active:scale-90' onClick={()=> handlecart(elem)} >Add to cart</button>
              )
            }
            </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Mens
