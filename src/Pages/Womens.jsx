import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'
import WomenVideo from "../assets/WomenVideo.mp4"
import WomenThreeTop from "../assets/WomenThreeTop.jpg"
import WomenAimly from "../assets/WomenAimly.jpg"
import { mycart } from '../contexts/CartContextApi'

const Womens = () => {

  let { viewMoreData, volume, setVolume } = useContext(mystore)
  let { cart, handlecart, increaseQty, decreaseQty } = useContext(mycart)

  const singleProduct = viewMoreData.find((u) => u.id === 1)
  const navigate = useNavigate()

  if (!singleProduct) {
    return <h2 className='text-center mt-10'>Loading...</h2>
  }

  return (
    <>

      {/* ---------------- TOP BAR ---------------- */}
      <div className='bg-white shadow-md mb-6 px-3 sm:px-6 py-3 flex items-center justify-between'>

        <div className='flex items-center gap-3'>
          <i
            className="ri-arrow-left-line text-2xl sm:text-3xl cursor-pointer"
            onClick={() => navigate(-1)}
          ></i>

          <h1 className='text-sm sm:text-base'>
            1-50 of over 20,000 results for
            "<span className='text-orange-600 font-bold'> womens clothes</span>"
          </h1>
        </div>

        <h1 className='border px-2 py-1 rounded text-xs sm:text-sm whitespace-nowrap'>
          Sort by:
        </h1>
      </div>

      {/* ---------------- VIDEO SECTION ---------------- */}
      <div className='bg-gray-50 flex flex-col lg:flex-row mt-6 mx-3 sm:mx-10 rounded-2xl p-3 gap-4 relative'>

        {/* VIDEO */}
        <div className='w-full lg:w-[60%] relative'>
          <video
            src={WomenVideo}
            autoPlay
            loop
            muted={volume}
            className='w-full h-48 sm:h-64 lg:h-86 object-cover rounded-2xl'
          />

          <button
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            onClick={() => setVolume(!volume)}
          >
            {
              volume
                ? <i className="ri-volume-mute-line text-2xl bg-white p-2 rounded-full"></i>
                : <i className="ri-volume-up-line text-2xl bg-white p-2 rounded-full"></i>
            }
          </button>
        </div>

        {/* PRODUCT CARD */}
        <div className='bg-white w-full lg:w-80 border rounded p-3'>
          <img
            src={WomenThreeTop}
            alt=""
            className='w-full h-40 object-cover rounded'
          />

          <h1 className='text-sm mt-2 text-center'>
            Aimly Women's regular fit sleeveless cotton Long Camisole
          </h1>

          <div className='flex gap-2 justify-center mt-2'>
            <span className='bg-red-600 text-white px-1 text-xs'>76% off</span>
            <span className='text-red-600 text-xs'>Limited deal</span>
          </div>
        </div>

        {/* LOGO */}
        <img
          src={WomenAimly}
          alt=""
          className='h-20 sm:h-32 lg:h-40 mx-auto lg:mx-0'
        />
      </div>

      {/* ---------------- TEXT ---------------- */}
      <h1 className='font-bold px-3 sm:px-10 pt-5'>Results</h1>

      <h2 className='text-gray-500 px-3 sm:px-10 text-sm'>
        Check each product page for other buying options. Price and other details may vary based on product size and colour.
      </h2>

      {/* ---------------- PRODUCT GRID ---------------- */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-3 sm:px-10 py-4'>

        {
          singleProduct.products.map((elem) => {

            const itemInCart = cart.find((item) => item.id === elem.id)

            return (
              <div key={elem.id} className='bg-white hover:bg-gray-100 p-2 rounded'>

                {/* IMAGE */}
                <div
                  className='w-full h-32 sm:h-40 md:h-48 rounded overflow-hidden cursor-pointer'
                  onClick={() => navigate(`/particularproduct/${elem.id}`)}
                >
                  <img
                    src={elem.image}
                    alt=""
                    className='h-full w-full object-cover'
                  />
                </div>

                {/* NAME */}
                <h1 className='mt-2 text-sm sm:text-base line-clamp-2'>
                  {elem.name}
                </h1>

                {/* PRICE */}
                <h1 className='text-red-600 text-sm sm:text-lg'>
                  <span className='text-black line-through text-xs'>
                    ₹{elem.oldPrice}
                  </span>{" "}
                  ₹{elem.price}
                </h1>

                {/* CART BUTTON */}
                {
                  itemInCart ? (
                    <div className='flex gap-3 bg-yellow-900 text-white rounded mt-2 items-center justify-center font-bold'>

                      <button
                        className='text-xl'
                        onClick={() => decreaseQty(elem.id)}
                      >
                        -
                      </button>

                      <span>{itemInCart.qty}</span>

                      <button
                        className='text-xl'
                        onClick={() => increaseQty(elem.id)}
                      >
                        +
                      </button>

                    </div>
                  ) : (
                    <button
                      className='bg-cyan-900 text-white w-full mt-2 p-1 rounded active:scale-90'
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

export default Womens