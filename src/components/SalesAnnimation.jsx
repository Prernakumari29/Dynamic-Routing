import React, { useEffect, useState } from 'react'
import SaleAnnimation from "../assets/SaleAnnimation.jpg"

const text = [
  "🔥 Flat 50% Off on Everything!",
  "🛍️ Shop Your Favorites Today!",
  "⚡ Hurry! Limited Time Offer!",
  "🎉 Mega Deals Are Live Now!",
  "💥 Grab It Before It’s Gone!"
];

const SalesAnnimation = () => {

  const [currenttext, setCurrentText] = useState(text[0])

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * text.length)
      setCurrentText(text[random])
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='px-3 sm:px-6'>

      <div
        className='
          w-full sm:w-[90%] md:w-[80%] lg:w-1/2
          h-40 sm:h-56 md:h-72 lg:h-80
          bg-amber-400 relative mx-auto mt-5
          bg-center bg-cover rounded-2xl overflow-hidden
        '
        style={{ backgroundImage: `url(${SaleAnnimation})` }}
      >

        <h1 className='
          text-sm sm:text-xl md:text-2xl lg:text-4xl
          text-gray-900 text-center
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          font-serif px-2
        '>
          {currenttext}
        </h1>

      </div>

    </div>
  )
}

export default SalesAnnimation