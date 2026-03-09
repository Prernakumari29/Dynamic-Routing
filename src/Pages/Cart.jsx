import React, { useContext } from 'react'
import Lottie from "lottie-react";
import cartAnnimation from "../assets/Empty-cart .json";
import { mycart } from '../contexts/CartContextApi';

const Cart = () => {
  
  let {cart ,setCart , handlecart , increaseQty , decreaseQty} = useContext(mycart)

  const handleRemove = (id) => {
    const updatedarr = cart.filter((item) => item.id !== id)
    setCart(updatedarr)
  }

  let totalprice = cart.reduce(function(acc , item){
          return acc+ item.price * item.qty
  },0)

  if(cart.length === 0 ){
    return(
       <Lottie animationData={cartAnnimation} loop={true} style={{ height: 500, width: 500, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />     
    )
  }
 
  
  return (
    
    <div className='bg-gray-200 min-h-screen p-10  '>
      
      <div className='flex justify-between bg-white px-10 py-3  '>
        <h1 className='text-3xl '>Shoping Cart</h1>
        <h3 className=' pt-6 text-sm'>Price</h3>
      </div>
      {
        cart.map(function (elem) {
          return (
            <div key={elem.id} >
              <div className='w-full bg-white h-auto px-10 py-3'>

                <div className='flex justify-between pt-6 border-t border-gray-300'>
                  <div className=' flex gap-6 '>
                    <div className='h-58 w-52 '><img src={elem.image} alt="" className='object-cover object-center h-full w-full' /></div>
                    <div className='flex flex-col justify-between'>
                      <div className='flex flex-col gap-1'>
                        <h3> <span className='font-bold'>product -:</span> {elem.name}</h3>
                        <h1 className='w-175 wrap-break-word'>{elem.description} </h1>
                        <h5 className='text-green-500 text-sm'>In Stock</h5>
                        <h1>{elem.delivery}</h1>
                        <h4 className='text-gray-500'>Gift option is not Available</h4>
                      </div>

                      <div className='flex gap-10 items-center'>
                        
                          <div className='flex gap-2 border border-amber-400 rounded-full p-2'>
                          <button
              className='bg-gray-300 px-2  '
              onClick={()=>decreaseQty(elem.id)}
            >
              -
            </button>

            <span>{elem.qty}</span>

            <button
              className='bg-gray-300 px-2'
              onClick={()=>increaseQty(elem.id)}
            >
              +
            </button>
                        </div>
                        
                        <h1 className='bg-red-500 text-white p-1 rounded font-bold cursor-pointer' onClick={() => handleRemove(elem.id)}>Remove</h1>
                      </div>
                    </div>


                  </div>
                 <div className='flex flex-col gap-10'>
                   <div>
                    <h1 className='text-red-600 font-semibold text-sm text-center'>Limited time deal</h1>
                    <h2 className='font-bold text-center text-xl'>₹{elem.price * elem.qty}.00</h2>
                    <h3 className='text-center text-xs'>M.R.P.:<span className='line-through'>₹{elem.oldPrice}.00</span></h3>
                  </div>
                  <button className='bg-yellow-400 rounded-xl pl-6 pr-6 p-1'>Proceed to Buy</button>
                 </div>
                </div>
              </div>
            </div>

          )
        })
      }

      <div className='bg-white  mt-1 flex flex-col items-end justify-end p-2 gap-2'>
         <h1 className='font-semibold text-xl '>Subtotal({cart.length} items): <span className=' text-3xl'>₹{totalprice}</span></h1>
         <h2 className='bg-green-600 text-white p-0.5 pl-2 pr-2 rounded'>Pay Now</h2>
      </div>
      
    </div>
    
  )
}

export default Cart
