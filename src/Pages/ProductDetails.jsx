import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mystore } from '../contextAPI';

const ProductDetails = () => {
    const {id} =useParams();
    let {product} = useContext(mystore)

    const SingleProduct = product.find((item) => item.id == id)
  return (
    <div>
      <h1 className='  text-3xl  m-10 font-serif'>{SingleProduct.name} <span className='text-gray-600 text-2xl pl-2'>({SingleProduct.title})</span></h1>
    <div className='flex m-10 gap-7 '>
      <div className='h-96 w-xl '>
        <img src={SingleProduct.image} alt=""  className='h-full w-full object-fill rounded'/>      
      </div>
      
      <div className='flex flex-col gap-4  justify-between '>
    <div className='flex flex-col gap-3'>
          <h1 className='text-4xl text-gray-900'>{SingleProduct.description}</h1>
        <h1 className='text-xl'><span className='text-sm text-blue-600'>rating -:</span> {SingleProduct. rating}</h1>
        <h1 className='bg-cyan-700 w-fit text-white p-1 rounded font-bold '>Shop Stop choice</h1>
        <h1 className=' border-t'>hello</h1>
    </div>
        <div>
          <h1>{SingleProduct.title}</h1> 
      <h1 className='text-red-600 '><span className='text-black line-through'>₹{SingleProduct.originalPrice}</span> <span className='text-2xl'>₹ {SingleProduct.price} </span> </h1>
        </div>
      </div>     
    </div>
    </div>
  )
}

export default ProductDetails
