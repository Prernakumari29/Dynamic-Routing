import React, { useContext, useEffect, useState } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'
import SwiperLibrary from '../components/SwiperLibrary'
import BelowSwiper from '../components/BelowSwiper'
import axios from 'axios'
import Lottie from "lottie-react";
import loadingAnnimation from "../assets/loading.json"
import { mycart } from '../contexts/CartContextApi'

const Home = () => {
   let {product,setProduct} = useContext(mystore)
   let {cart ,setCart , handlecart , increaseQty , decreaseQty} = useContext(mycart)
   const [loading , setLoading] = useState(true)

   let productItem = async()=>{
    const productApi = await axios.get("https://fakestoreapi.com/products")
    setProduct(productApi.data)
    setLoading(false)
   }

   useEffect(()=>{
    productItem()
   },[])

   const navigate= useNavigate()

  return (
    <div>
      <SwiperLibrary />
      <BelowSwiper />

      <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 lg:px-14 py-6 md:py-10'>
        
        {
          loading ? 
          <Lottie 
            animationData={loadingAnnimation} 
            loop={true} 
            className="h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80 mx-auto"
          /> 
          :
          product.map(function(elem){
                
            const itemInCart = cart.find((item) => item.id == elem.id)

            return(
             <div 
               key={elem.id} 
               className='h-auto w-[45%] sm:w-[48%] md:w-60 bg-gray-200 rounded p-4 md:p-5 cursor-pointer'
             >

                <img 
                  src={elem.image} 
                  alt={elem.title} 
                  className='h-36 sm:h-40 md:h-44 w-full object-contain mb-5'
                  onClick={()=> navigate(`/productDetails/${elem.id}`)} 
                />

                {elem.title.length>20 ? elem.title.slice(0,20) + "...": elem.title}

                <h1 className='text-red-600 text-lg md:text-xl'>
                  <span className='text-black line-through text-xs md:text-sm'>
                    ${elem.price}
                  </span> 
                  ${elem.price}
                </h1>
                
                {
                  itemInCart ? 
                  (
                    <div className='flex gap-2 sm:gap-3 bg-yellow-900 text-white rounded mt-3 cursor-pointer items-center justify-center font-bold py-1'>
                      <button onClick={()=> decreaseQty(elem.id)} className='text-xl md:text-2xl'>-</button>
                      <span>{itemInCart.qty}</span>
                      <button onClick={()=> increaseQty(elem.id)} className='text-lg md:text-xl'>+</button>
                    </div>
                  )
                  :(
                    <button 
                      className='bg-cyan-900 text-white p-1 md:p-2 rounded mt-3 active:scale-90 w-full cursor-pointer text-sm md:text-base' 
                      onClick={()=>handlecart(elem)} 
                    >
                      Add to cart 
                    </button>
                  )
                }
             </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Home