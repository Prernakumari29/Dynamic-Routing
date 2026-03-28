import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'
import MenVideo from "../MenDress.jsx/MenVideo.mp4"
import MenLuxImage from "../MenDress.jsx/MenLuxImage.jpg"
import { mycart } from '../contexts/CartContextApi'

const Mens = () => {

  let { viewMoreData, volume, setVolume } = useContext(mystore)
  let { cart, handlecart, increaseQty, decreaseQty } = useContext(mycart)

  let MensProduct = viewMoreData.find((pro) => pro.id === 2)
  const navigate = useNavigate()

  if (!MensProduct) {
    return <h2 className='text-center mt-10'>Loading...</h2>
  }

  return (
    <>

      {/* ---------------- top section ---------------- */}
      <div className='bg-white shadow-md mb-6 px-3 sm:px-6 py-3 flex items-center justify-between'>

        <div className='flex items-center gap-3'>
          <i
            className="ri-arrow-left-line text-2xl sm:text-3xl cursor-pointer"
            onClick={() => navigate(-1)}
          ></i>

          <h1 className='text-sm sm:text-base'>
            1-50 of over 20,000 results for
            "<span className='text-orange-600 font-bold'> mens clothes</span>"
          </h1>
        </div>

        <h1 className='border px-2 py-1 rounded text-xs sm:text-sm whitespace-nowrap'>
          Sort by:
        </h1>
      </div>

      {/* ---------------- video part ---------------- */}
      <div className='bg-gray-50 flex flex-col lg:flex-row mt-6 mx-3 sm:mx-10 rounded-2xl p-3 gap-6'>

        {/* VIDEO */}
        <div className='relative w-full lg:w-[60%]'>
          <video
            src={MenVideo}
            autoPlay
            muted={volume}
            loop
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

        {/* -----------------------------image-------------------------------- */}
        <div className='flex flex-col items-center justify-center text-center w-full lg:w-80 gap-3'>
          <img src={MenLuxImage} alt="" className='h-20 sm:h-32' />

          <h2 className='text-sm sm:text-lg'>
            EveryDay Comforts Start With
            <span className='font-bold text-red-500'> "LUX PARKER"</span>
          </h2>
        </div>

      </div>

      {/* ------------------- Results------------------- */}
      <h1 className='font-bold px-3 sm:px-10 pt-5'>Results</h1>

      <h2 className='text-gray-500 px-3 sm:px-10 text-sm'>
        Check each product page for other buying options. Price and other details may vary based on product size and colour.
      </h2>

      {/* ----------------Mens products ---------------- */}
      <div className='flex flex-wrap gap-4 sm:gap-6 px-3 sm:px-10 py-4 justify-center sm:justify-start'>

        {
          MensProduct.products.map((elem) => {

            const itemInCart = cart.find((item) => item.id === elem.id)

            return (
              <div key={elem.id} className='w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] hover:bg-gray-100 p-2 sm:p-3 rounded'>

                
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

                
                <h1 className='mt-2 text-sm sm:text-base line-clamp-2'>
                  {elem.name}
                </h1>

                
                <h1 className='text-red-600 text-sm sm:text-lg'>
                  <span className='text-black line-through text-xs'>
                    ₹{elem.oldPrice}
                  </span>{" "}
                  ₹{elem.price}
                </h1>

                
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

export default Mens