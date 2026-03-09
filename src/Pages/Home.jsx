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
    <div >
       <SwiperLibrary />

        <BelowSwiper />
        <div className='flex gap-10 flex-wrap  px-14 py-10 '>
      {
        loading ? 
        <Lottie animationData={loadingAnnimation} loop={true} style={{height:400 , width:400 , marginLeft: "500px"}} /> 
        :
        product.map(function(elem){
                
          const itemInCart = cart.find((item) => item.id == elem.id)
            return(
                
             <div key={elem.id} className='h-auto w-60 bg-gray-200 rounded p-5 cursor-pointer '  >
                <img src={elem.image} alt={elem.title} className='h-44 w-full mb-5' onClick={()=> navigate(`/productDetails/${elem.id}`)} />
                {/* <h1>{elem.title}</h1> */}
                {elem.title.length>20 ? elem.title.slice(0,20) + "...": elem.title}
                <h1 className='text-red-600 text-xl'><span className='text-black line-through text-sm'>${elem.price}</span> ${elem.price}  </h1>
                
                {
                  itemInCart ? 
                  (
                    <div className='flex gap-3 bg-yellow-900 text-white  rounded mt-3  cursor-pointer items-center justify-center font-bold'>
                      <button onClick={()=> decreaseQty(elem.id)} className='text-2xl '>-</button>
                      <span >{itemInCart.qty}</span>
                      <button onClick={()=> increaseQty(elem.id)} className='text-xl '>+</button>
                    </div>
                  )
                  
                  :(
                    <button className='bg-cyan-900 text-white p-1 rounded mt-3 active:scale-90 w-full cursor-pointer' onClick={()=>handlecart(elem)} >Add to cart </button>
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
