import React from 'react'
import { useContext } from 'react'

import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'
import WomenPoster from "../assets/WomenPoster.jpg"

const Womens = () => {
    
    let {viewMoreData, setCart} = useContext(mystore)
    const singleProduct = viewMoreData.find((u) => u.id === 1)
    const navigate = useNavigate() 

    const addCart = (data)=>{
       setCart((prev) => [...prev ,data])
       alert("item is added")
    }

    if(!singleProduct){
        return <h2>loading....</h2>
    }
  return (
          <>
          <div className='h-96 w-[40%]  bg-cover rounded-3xl m-4 bg-center bg-no-repeat relative left-1/2 transform -translate-x-1/2 top-5' style={{backgroundImage: `url(${WomenPoster})` } }>
            
          </div>

          <div className='flex gap-10 flex-wrap  px-30 py-10'>

      {
        singleProduct.products.map(function(elem){
            return(
                <div className='h-80 w-56 hover:bg-gray-100 p-3 rounded '> 
            
            <div className='h-48 w-full rounded' onClick={()=> navigate(`/particularproduct/${elem.id}`)} >
              <img src={elem.image} alt="image hai" className='h-full w-full object-cover'/>
            </div>

            <h1 className='mt-4'>{elem.name}</h1>
            <h1 className='text-red-600 text-xl'><span className='text-black line-through text-sm'>₹{elem.oldPrice}</span> ₹{elem.price}  </h1>
            <button className='bg-cyan-900 text-white w-full mt-2 p-1 rounded cursor-pointer active:scale-90' onClick={()=>addCart(elem)} >Add to cart</button>
            </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Womens
