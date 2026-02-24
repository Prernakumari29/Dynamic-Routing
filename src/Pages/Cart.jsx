import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import Lottie from "lottie-react";
import cartAnnimation from "../assets/Empty-cart .json";

const Cart = () => {
    let{cart,setCart } = useContext(mystore);

    const handleRemove = (id)=>{
      const updatedarr = cart.filter((item) => item.id !== id)
      setCart(updatedarr)
    }
  return (
    <div >
      {cart.length == 0 && <Lottie animationData={cartAnnimation} loop={true} style={{height:500 , width:500 , position:"absolute" , top:"50%", left:"50%" , transform: "translate(-50%, -50%)"}} />}
      {
        cart.map(function(elem){
            return (
                <div key={elem.id} className=' h-44 flex  w-full  border-2  justify-between  pr-4 items-end mt-2 bg-gray-100' >
                    <div className='h-full' >
                         <img src={elem.image} alt="" className='h-full'/>
                    </div>
                    <div >
                        <h1>This is {elem.name}</h1>
                        <h1 className='text-red-500'>₹ {elem.price}</h1>
                        <button className='text-white border bg-red-500 rounded p-1' onClick={()=>handleRemove(elem.id)}>Remove</button>
                    </div>
                
                </div>

            )
        })
      }
    </div>
  )
}

export default Cart
