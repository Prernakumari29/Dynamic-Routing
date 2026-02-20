import React, { useEffect, useState } from 'react'
import SaleAnnimation from "../assets/SaleAnnimation.jpg"


const text =  [
  "🔥 Flat 50% Off on Everything!",
  "🛍️ Shop Your Favorites Today!",
  "⚡ Hurry! Limited Time Offer!",
  "🎉 Mega Deals Are Live Now!",
  "💥 Grab It Before It’s Gone!"
];
const SalesAnnimation = () => {

  const [currenttext,setCurrentText] = useState(text[0])

  useEffect(()=>{
    const interval = setInterval(() => {
      const random = Math.floor(Math.random()*text.length)
      setCurrentText(text[random])
    }, 2000);
     
    return ()=> clearInterval(interval)
  },[])

  return (
    <div>
      <div className='h-80 w-1/2 bg-amber-400 relative left-1/2 transform -translate-x-1/2 top-5 bg-center bg-cover rounded-2xl' style={{ backgroundImage: `url(${SaleAnnimation})` }}>
        <h1 className='text-4xl text-gray-900 text-center absolute top-[30%] left-1/2 transform -translate-1/2 font-serif'>{currenttext}</h1>
      
      
        
      </div>
    </div>
  )
}

export default SalesAnnimation

