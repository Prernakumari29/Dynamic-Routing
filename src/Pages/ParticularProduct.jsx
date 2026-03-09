import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { mystore } from '../contextAPI'
import { mycart } from '../contexts/CartContextApi'

const ParticularProduct = () => {
    let {id} = useParams()
    let{viewMoreData , } = useContext(mystore)
    let{ cart , setCart , handlecart , increaseQty , decreaseQty} = useContext(mycart)
    let navigate = useNavigate()

    
    
    let location = useLocation()
    console.log(location)

     const parent = viewMoreData.find(p =>
    p.products.some(prod => prod.id == Number(id))
  )
    let single = parent.products.find((u) => u.id == id)

    const itemInCart = cart.find ((item) => item.id === Number(id))
  return (
<div className='p-20 pl-26 '>
  
        
      <h1 className='text-3xl pb-6 font-serif'><i className="ri-arrow-left-line cursor-pointer rounded-full hover:bg-gray-100 " onClick={()=>navigate(-1)}></i>  {single.name} <span className='text-gray-400 text-2xl'>({single.title})</span></h1>

  <div className='flex gap-5'>
          <img src={single.image} alt="" className='h-96 w-96 object-cover '/>     
    <div className='flex flex-col justify-between'>
      <div className='flex flex-col gap-3'>
          <h2>{single.description}</h2>
          <h1><span className='text-red-500'>Rating -: </span>{single.rating}</h1>
          <h1 className='bg-cyan-700 w-fit text-white p-1 rounded font-bold '>Shop Stop's choice</h1>
          <h2 className='border-t mt-2'> <span className='font-bold '>Brand-:</span> {single.brand}</h2>
          <h2><span className='font-bold '>Stock-:</span> {single.stock}</h2>
          <h2><span className='font-bold '>Delivery-:</span> {single.delivery}</h2>
          <h2><span className='font-bold '>Features-:</span> {single.features}</h2>
      </div>
          <div className='flex justify-between'>
            <div>
              <h3>{single.title}</h3>
               <h1 className='text-red-600 '><span className='text-black line-through'>₹{single.price}</span> <span className='text-2xl'>₹ {single.price} </span> </h1>
            </div>
            
             {
              itemInCart ?
               (

                    <div className="flex gap-3 items-center p-2 mt-3  border border-cyan-900 rounded-full">

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

                  ) 
               
              :(
              <button className='bg-cyan-900 text-white p-2 rounded mt-3 active:scale-90 font-bold cursor-pointer' onClick={()=>handlecart(single)}>Add to cart</button>         

              ) }
          </div>
    
    </div>
     
  </div>
</div>
 
  )
}

export default ParticularProduct
