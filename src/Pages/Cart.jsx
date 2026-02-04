import React, { useContext } from 'react'
import { mystore } from '../contextAPI'

const Cart = () => {
    let{cart } = useContext(mystore);
  return (
    <div>
      <h1>this is cart page</h1>
      {
        cart.map(function(elem){
            return (
                <div key={elem.id} className='flex h-40 w-full  border-2 gap-4 justify-between  pr-4 items-end ' >
                    <div className=''>
                         <img src={elem.image} alt="" />
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
