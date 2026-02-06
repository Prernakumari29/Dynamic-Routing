import React, { useContext } from 'react'
import { mystore } from '../contextAPI'

const Cart = () => {
    let{cart } = useContext(mystore);
  return (
    <div >
      {cart.length == 0 && <p>Your cart is empty</p>}
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
                    </div>

                </div>

            )
        })
      }
    </div>
  )
}

export default Cart
