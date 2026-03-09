import React, { useState } from 'react'
import { useContext } from 'react'

import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'
import WomenVideo from "../assets/WomenVideo.mp4"
import WomenThreeTop from "../assets/WomenThreeTop.jpg"
import WomenAimly from "../assets/WomenAimly.jpg"
import { mycart } from '../contexts/CartContextApi'


const Womens = () => {
    
    let {viewMoreData ,volume , setVolume} = useContext(mystore)
    let {cart ,setCart , handlecart , increaseQty , decreaseQty} = useContext(mycart)
    const singleProduct = viewMoreData.find((u) => u.id === 1)
    const navigate = useNavigate() 
    


    if(!singleProduct){
        return <h2>loading....</h2>
    }
  return (
          <>
 {/* ---------------------------------- 1-50 womens part---------------------------------------------------------  */}
             <div className='h-10 bg-white shadow-md mb-15 shadow-gray-200 flex items-center justify-between'>
              <div className='flex items-center gap-8 '>
                <i className="ri-arrow-left-line font-bold text-3xl cursor-pointer" onClick={()=> navigate(-1)}></i>
              <h1 className=''>1-50 of over 20,000 results for "<span className='text-orange-600 font-bold'>womens clothes</span>"</h1>
              </div>
              <h1 className='pl-1 pr-1 border mr-8 rounded'>sort by:</h1>
             </div>


{/* --------------------------------------------video Part-------------------------------------------------           */}
          <div className='h-76   bg-gray-50 flex mt-8 ml-20 mr-20 rounded-2xl '>
            <video src={WomenVideo} autoPlay loop muted={volume}  className='h-full relative rounded-2xl'/>
            {volume? <button className='absolute top-1/2 left-[38%]' onClick={()=> setVolume(!volume)}><i class="ri-volume-mute-line  text-3xl text-black bg-gray-100 rounded-full p-1"></i></button>
            :<button className='absolute top-1/2 left-[38%]' onClick={()=> setVolume(!volume)}><i className="ri-volume-up-line  text-3xl text-black bg-gray-100 rounded-full p-1"></i></button>}
   
{/* -----------------------------------Tank top Image ---------------------------------------------------- */}
            <div className='bg-white  w-96 m-4 border border= border-gray-500 rounded'>
              <div className='bg-white h-45 '>
                 <img src={WomenThreeTop} alt="" className='h-full pl-25 rounded '  />
                 <h1 className='text-center'>Aimly Women's regular fit sleeveless cotton <br /> Long Camisole slip Spaghetti Combo pack of 3</h1>
                 <div className='flex'>
                  <button className='bg-red-600 p-0.5 text-white ml-6 mt-1'>76% off</button>
                 <h1 className='mt-1 ml-1 text-red-600'>Limited time deal</h1>
                 </div>
              </div>
            </div>

{/* -------------------------------------Aimly logo----------------------------------------------------------------- */}
              <img src={WomenAimly} alt="" className='h-40 mt-20 ml-20' />
          </div>

            
          <h1 className='font-bold px-32 pt-5'>Results </h1>
          <h2 className='text-gray-500 px-32'>Check each product page for other buying options. Price and other details may vary based on product size and colour.</h2>
        

          <div className='flex gap-10 flex-wrap  px-30 py-2'>
      {       
        singleProduct.products.map(function(elem){

          const itemInCart = cart.find((item) => item.id == elem.id)
            return(
                <div key={elem.id} className='h-84 w-56 hover:bg-gray-100 p-3 rounded '> 
            
            <div className='h-48 w-full rounded' onClick={()=> navigate(`/particularproduct/${elem.id}`)} >
              <img src={elem.image} alt="image hai" className='h-full w-full object-cover'/>
            </div>

            <h1 className='mt-4'>{elem.name}</h1>
            <h1 className='text-red-600 text-xl'><span className='text-black line-through text-sm'>₹{elem.oldPrice}</span> ₹{elem.price}  </h1>
            {/* <button className='bg-cyan-900 text-white w-full mt-2 p-1 rounded cursor-pointer active:scale-90' onClick={()=>handlecart(elem)} >Add to cart</button> */}

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
              (<button className='bg-cyan-900 text-white w-full mt-2 p-1 rounded cursor-pointer active:scale-90' onClick={()=>handlecart(elem)} >Add to cart</button> )
            }
            </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Womens
