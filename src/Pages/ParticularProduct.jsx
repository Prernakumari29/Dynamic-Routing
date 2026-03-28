import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { mystore } from '../contextAPI'
import { mycart } from '../contexts/CartContextApi'

const ParticularProduct = () => {

  let { id } = useParams()
  let { viewMoreData } = useContext(mystore)
  let { cart, handlecart, increaseQty, decreaseQty } = useContext(mycart)
  let navigate = useNavigate()

  let location = useLocation()
  console.log(location)

  const parent = viewMoreData.find(p =>
    p.products.some(prod => prod.id == Number(id))
  )

  let single = parent.products.find((u) => u.id == id)
  const itemInCart = cart.find((item) => item.id === Number(id))

  return (

    <div className='p-4 sm:p-6 md:p-10 lg:p-20'>

      {/* ---------------- TITLE ---------------- */}
      <h1 className='text-lg sm:text-2xl md:text-3xl pb-4 sm:pb-6 font-serif flex items-center gap-2 flex-wrap'>

        <i
          className="ri-arrow-left-line cursor-pointer rounded-full hover:bg-gray-100 text-2xl"
          onClick={() => navigate(-1)}
        ></i>

        {single.name}

        <span className='text-gray-400 text-sm sm:text-lg md:text-2xl'>
          ({single.title})
        </span>
      </h1>

      {/* ---------------- MAIN ---------------- */}
      <div className='flex flex-col lg:flex-row gap-5'>

        {/* IMAGE */}
        <img
          src={single.image}
          alt=""
          className='h-60 sm:h-80 md:h-96 w-full lg:w-96 object-contain rounded'
        />

        {/* RIGHT SIDE */}
        <div className='flex flex-col justify-between w-full'>

          {/* DETAILS */}
          <div className='flex flex-col gap-3'>

            <h2 className='text-sm sm:text-base'>
              {single.description}
            </h2>

            <h1 className='text-sm sm:text-base'>
              <span className='text-red-500'>Rating -: </span>
              {single.rating}
            </h1>

            <h1 className='bg-cyan-700 w-fit text-white px-2 py-1 rounded font-bold text-xs sm:text-sm'>
              Shop Stop's choice
            </h1>

            <h2 className='border-t mt-2 text-sm sm:text-base'>
              <span className='font-bold'>Brand-: </span>
              {single.brand}
            </h2>

            <h2 className='text-sm sm:text-base'>
              <span className='font-bold'>Stock-: </span>
              {single.stock}
            </h2>

            <h2 className='text-sm sm:text-base'>
              <span className='font-bold'>Delivery-: </span>
              {single.delivery}
            </h2>

            <h2 className='text-sm sm:text-base'>
              <span className='font-bold'>Features-: </span>
              {single.features}
            </h2>

          </div>

          {/* ---------------- BOTTOM ---------------- */}
          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4'>

            <div>
              <h3 className='text-sm sm:text-base'>{single.title}</h3>

              <h1 className='text-red-600 text-sm sm:text-lg'>
                <span className='text-black line-through text-xs sm:text-sm'>
                  ₹{single.price}
                </span>{" "}
                <span className='text-lg sm:text-2xl'>
                  ₹ {single.price}
                </span>
              </h1>
            </div>

            {/* CART */}
            {
              itemInCart ? (
                <div className="flex gap-3 items-center p-2 border border-cyan-900 rounded-full w-fit">

                  <button
                    className='bg-gray-300 px-2 font-bold'
                    onClick={() => decreaseQty(single.id)}
                  >
                    -
                  </button>

                  <span>{itemInCart.qty}</span>

                  <button
                    className='bg-gray-300 px-2 font-bold'
                    onClick={() => increaseQty(single.id)}
                  >
                    +
                  </button>

                </div>
              ) : (
                <button
                  className='bg-cyan-900 text-white px-4 py-2 rounded active:scale-90 font-bold cursor-pointer w-full sm:w-auto'
                  onClick={() => handlecart(single)}
                >
                  Add to cart
                </button>
              )
            }

          </div>

        </div>

      </div>

    </div>

  )
}

export default ParticularProduct