import React, { useContext } from 'react'
import Lottie from "lottie-react";
import cartAnnimation from "../assets/Empty-cart .json";
import { mycart } from '../contexts/CartContextApi';

const Cart = () => {

  let { cart, setCart, increaseQty, decreaseQty } = useContext(mycart)

  const handleRemove = (id) => {
    const updatedarr = cart.filter((item) => item.id !== id)
    setCart(updatedarr)
  }

  let totalprice = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  if (cart.length === 0) {
    return (
      <div className='flex items-center justify-center min-h-screen px-4'>
        <Lottie
          animationData={cartAnnimation}
          loop={true}
          className='w-full max-w-86 sm:max-w-88 md:max-w-106'
        />
      </div>
    )
  }

  return (

    <div className='bg-gray-200 min-h-screen p-3 sm:p-6 md:p-10'>

      {/* HEADER */}
      <div className='flex justify-between bg-white px-3 sm:px-6 md:px-10 py-3'>
        <h1 className='text-lg sm:text-2xl md:text-3xl'>Shopping Cart</h1>
        <h3 className='pt-2 sm:pt-4 text-xs sm:text-sm'>Price</h3>
      </div>

      {
        cart.map((elem) => {
          return (
            <div key={elem.id}>

              <div className='w-full bg-white px-3 sm:px-6 md:px-10 py-4'>

                {/* MAIN ROW */}
                <div className='flex flex-col lg:flex-row justify-between pt-4 border-t border-gray-300 gap-4'>

                  {/* LEFT */}
                  <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>

                    {/* IMAGE */}
                    <div className='h-40 sm:h-52 w-40 sm:w-40 md:w-52 mx-auto sm:mx-0'>
                      <img
                        src={elem.image}
                        alt=""
                        className='object-cover object-center h-full w-full rounded'
                      />
                    </div>

                    {/* DETAILS */}
                    <div className='flex flex-col justify-between'>

                      <div className='flex flex-col gap-1'>

                        <h3 className='text-sm sm:text-base'>
                          <span className='font-bold'>Product -:</span> {elem.name}
                        </h3>

                        <h1 className='text-xs sm:text-sm  max-w-full sm:max-w-80 md:max-w-96'>
                          {elem.description}
                        </h1>

                        <h5 className='text-green-500 text-xs sm:text-sm'>In Stock</h5>
                        <h1 className='text-xs sm:text-sm'>{elem.delivery}</h1>

                        <h4 className='text-gray-500 text-xs sm:text-sm'>
                          Gift option is not Available
                        </h4>
                      </div>

                      {/* ACTIONS */}
                      <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 sm:items-center mt-2'>

                        <div className='flex gap-2 border border-amber-400 rounded-full p-2 w-fit'>
                          <button
                            className='bg-gray-300 px-2'
                            onClick={() => decreaseQty(elem.id)}
                          >
                            -
                          </button>

                          <span>{elem.qty}</span>

                          <button
                            className='bg-gray-300 px-2'
                            onClick={() => increaseQty(elem.id)}
                          >
                            +
                          </button>
                        </div>

                        <h1
                          className='bg-red-500 text-white px-2 py-1 rounded font-bold cursor-pointer w-fit'
                          onClick={() => handleRemove(elem.id)}
                        >
                          Remove
                        </h1>

                      </div>

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className='flex flex-col gap-4 sm:gap-6 items-start lg:items-end'>

                    <div className='text-left lg:text-right'>
                      <h1 className='text-red-600 font-semibold text-xs sm:text-sm'>
                        Limited time deal
                      </h1>

                      <h2 className='font-bold text-lg sm:text-xl'>
                        ₹{elem.price * elem.qty}.00
                      </h2>

                      <h3 className='text-xs'>
                        M.R.P.: <span className='line-through'>₹{elem.oldPrice}.00</span>
                      </h3>
                    </div>

                    <button className='bg-yellow-400 rounded-xl px-4 py-1 w-full sm:w-auto'>
                      Proceed to Buy
                    </button>

                  </div>

                </div>

              </div>
            </div>
          )
        })
      }

      {/* SUBTOTAL */}
      <div className='bg-white mt-2 flex flex-col items-start sm:items-end p-3 gap-2'>

        <h1 className='font-semibold text-sm sm:text-lg md:text-xl'>
          Subtotal ({cart.length} items):
          <span className='text-lg sm:text-2xl md:text-3xl'>
            ₹{totalprice}
          </span>
        </h1>

        <h2 className='bg-green-600 text-white px-3 py-1 rounded w-full sm:w-auto text-center'>
          Pay Now
        </h2>

      </div>

    </div>

  )
}

export default Cart