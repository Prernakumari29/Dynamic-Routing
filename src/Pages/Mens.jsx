import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'

const Mens = () => {
    let{viewMoreData,setCart} = useContext(mystore)
    let MensProduct = viewMoreData.find((pro) => pro.id === 2)

    const navigate = useNavigate()

    const addCart = (data)=>{
    setCart((prev) => [...prev , data ])
    alert("item is added")
    }
  return (

      <div className='flex gap-10 flex-wrap  px-30 py-10'>
     
      {
        MensProduct.products.map(function(elem){
            return(
              <div className='h-80 w-56 hover:bg-gray-100 p-3 rounded '> 
            
            <div className='h-48 w-full rounded' onClick={()=> navigate(`/particularproduct/${elem.id}`)}  >
              <img src={elem.image} alt="image hai" className='h-full w-full object-cover'/>
            </div>

            <h1 className='mt-4'>{elem.name}</h1>
            <h1 className='text-red-600 text-xl'><span className='text-black line-through text-sm'>₹{elem.oldPrice}</span> ₹{elem.price}  </h1>
            <button className='bg-cyan-900 text-white w-full mt-2 p-1 rounded cursor-pointer active:scale-90' onClick={()=> addCart(elem)} >Add to cart</button>
            </div>
            )
        })
      }
    </div>
  )
}

export default Mens
