import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'
import SwiperLibrary from '../components/SwiperLibrary'

const Home = () => {
   let {product,setCart} = useContext(mystore)
   const navigate= useNavigate()

   const addCart = (items)=>{
      setCart(prev => [...prev , items])
      alert("item is added")
   }
  return (
    <div >
       <SwiperLibrary />


        <div className='flex gap-10 flex-wrap  px-14 py-10'>

      {
        product.map(function(elem){
            
            return(
                
             <div key={elem.id} className='h-auto w-60 bg-gray-200 rounded p-5'  >
                <img src={elem.image} alt={elem.name} className='h-44 w-full' onClick={()=> navigate(`/productDetails/${elem.id}`)} />
                <h1>{elem.name}</h1>
                <h1 className='text-red-600'><span className='text-black line-through'>₹{elem.originalPrice}</span> ₹ {elem.price}  </h1>
                <button className='bg-cyan-900 text-white p-1 rounded mt-3 active:scale-90 w-full' onClick={()=>addCart(elem)} >Add to cart</button>
             </div>
            )
        })
      }
      </div>
      
    </div>


  )
}

export default Home
