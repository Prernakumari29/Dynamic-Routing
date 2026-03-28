import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mystore } from '../contextAPI'
import SalesAnnimation from '../components/SalesAnnimation'
import { mycart } from '../contexts/CartContextApi'

const ViewMoreDetails = () => {

  let { id } = useParams()
  let { viewMoreData } = useContext(mystore)
  let { cart, handlecart, increaseQty, decreaseQty } = useContext(mycart)

  const singleProduct = viewMoreData.find((u) => u.id == id)
  let navigate = useNavigate()

  return (
    <>

      {/* BACK BUTTON */}
      <i
        className="ri-arrow-left-line text-2xl sm:text-3xl md:text-4xl cursor-pointer hover:bg-gray-100 rounded-full ml-2 mt-2"
        onClick={() => navigate(-1)}
      ></i>

      <SalesAnnimation />

      {/* PRODUCTS */}
      <div className='flex flex-wrap gap-4 sm:gap-6 px-3 sm:px-6 md:px-10 py-6 sm:py-10 justify-center sm:justify-start'>

        {
          singleProduct.products.map((elem) => {

            const itemInCart = cart.find((item) => item.id == elem.id)

            return (
              <div
                key={elem.id}
                className='w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] hover:bg-gray-100 p-2 sm:p-3 rounded'
              >

                {/* IMAGE */}
                <div
                  className='h-32 sm:h-40 md:h-48 w-full rounded overflow-hidden'
                  onClick={() => navigate(`/particularproduct/${elem.id}`)}
                >
                  <img
                    src={elem.image}
                    alt=""
                    className='h-full w-full object-cover cursor-pointer'
                  />
                </div>

                {/* NAME */}
                <h1 className='mt-2 text-sm sm:text-base line-clamp-2'>
                  {elem.name}
                </h1>

                {/* PRICE */}
                <h1 className='text-red-600 text-sm sm:text-lg'>
                  <span className='text-black line-through text-xs sm:text-sm'>
                    ₹{elem.oldPrice}
                  </span>{" "}
                  ₹{elem.price}
                </h1>

                {/* CART */}
                {
                  itemInCart ? (
                    <div className='flex gap-2 sm:gap-3 bg-yellow-900 text-white rounded mt-2 items-center justify-center font-bold'>

                      <button
                        className='text-lg sm:text-xl'
                        onClick={() => decreaseQty(elem.id)}
                      >
                        -
                      </button>

                      <span>{itemInCart.qty}</span>

                      <button
                        className='text-lg sm:text-xl'
                        onClick={() => increaseQty(elem.id)}
                      >
                        +
                      </button>

                    </div>
                  ) : (
                    <button
                      className='bg-cyan-900 text-white w-full mt-2 p-1 rounded active:scale-90 text-sm sm:text-base'
                      onClick={() => handlecart(elem)}
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

    </>
  )
}

export default ViewMoreDetails