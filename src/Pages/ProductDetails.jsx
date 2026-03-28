import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mystore } from '../contextAPI';
import { mycart } from '../contexts/CartContextApi';

const ProductDetails = () => {
  const { id } = useParams();
  let { product } = useContext(mystore)
  let { cart, handlecart, increaseQty, decreaseQty } = useContext(mycart)

  const SingleProduct = product.find((item) => item.id == id)
  const itemInCart = cart.find((item) => item.id == SingleProduct.id)

  const navigate = useNavigate()

  return (

    <div>

      {/* ---------------- TITLE ---------------- */}
      <h1 className='text-lg sm:text-2xl md:text-3xl m-4 sm:m-6 md:m-10 font-serif flex items-center gap-2 flex-wrap'>
        <i
          className="ri-arrow-left-line cursor-pointer rounded-full hover:bg-gray-100 text-2xl"
          onClick={() => navigate(-1)}
        ></i>

        {SingleProduct.title.slice(0, 20)}

        <span className='text-gray-600 text-sm sm:text-lg md:text-2xl'>
          ({SingleProduct.title})
        </span>
      </h1>

      {/* ---------------- MAIN SECTION ---------------- */}
      <div className='flex flex-col lg:flex-row m-4 sm:m-6 md:m-10 gap-5 sm:gap-7'>

        {/* IMAGE */}
        <div className='h-60 sm:h-80 md:h-96 w-full lg:w-xl'>
          <img
            src={SingleProduct.image}
            alt=""
            className='h-full w-full object-contain rounded'
          />
        </div>

        {/* RIGHT SIDE */}
        <div className='flex flex-col gap-4 justify-between w-full'>

          {/* TOP DETAILS */}
          <div className='flex flex-col gap-2'>

            <h1 className='text-xs sm:text-sm text-gray-900'>
              {SingleProduct.description}
            </h1>

            <h1 className='text-sm sm:text-lg'>
              <span className='text-xs sm:text-sm text-blue-600'>
                Rating -:
              </span>{" "}
              {SingleProduct.rating.rate}
            </h1>

            <h1 className='bg-cyan-700 w-fit text-white px-2 py-1 rounded font-bold text-xs sm:text-sm'>
              Shop Stop's choice
            </h1>

            {/* DETAILS */}
            <h1 className='border-t mt-1 text-sm sm:text-base'>
              <span className='font-bold'>Brand : </span>puma
            </h1>

            <h1 className='text-sm sm:text-base'>
              <span className='font-bold'>Stock : </span>
              {SingleProduct.rating.count}
            </h1>

            <h1 className='text-sm sm:text-base'>
              <span className='font-bold'>Category : </span>
              {SingleProduct.category}
            </h1>

          </div>

          {/* ---------------- BOTTOM ---------------- */}
          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0'>

            <div>
              <h1 className='text-sm sm:text-base'>{SingleProduct.title}</h1>

              <h1 className='text-red-600 text-sm sm:text-lg'>
                <span className='text-black line-through text-xs sm:text-sm'>
                  ${SingleProduct.price}
                </span>{" "}
                <span className='text-lg sm:text-2xl'>
                  ${SingleProduct.price}
                </span>
              </h1>
            </div>

            {/* CART */}
            {
              itemInCart ? (
                <div className="flex gap-3 p-2 border border-cyan-900 rounded-full w-fit">

                  <button
                    className='bg-gray-300 px-2 font-bold'
                    onClick={() => decreaseQty(SingleProduct.id)}
                  >
                    -
                  </button>

                  <span>{itemInCart.qty}</span>

                  <button
                    className='bg-gray-300 px-2 font-bold'
                    onClick={() => increaseQty(SingleProduct.id)}
                  >
                    +
                  </button>

                </div>
              ) : (
                <button
                  className='bg-cyan-900 text-white px-4 py-2 rounded active:scale-90 font-bold w-full sm:w-auto'
                  onClick={() => handlecart(SingleProduct)}
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

export default ProductDetails