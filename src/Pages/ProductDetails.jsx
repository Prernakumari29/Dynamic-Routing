import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mystore } from '../contextAPI';

const ProductDetails = () => {
    const {id} =useParams();
    let {product} = useContext(mystore)

    const SingleProduct = product.find((item) => item.id == id)
  return (
    <div className='flex m-10 gap-7'>
      <div className='h-60 w-48 bg-amber-500 '>
        <img src={SingleProduct.image} alt=""  className='h-full object-fill'/>      
      </div>
      <div className='flex flex-col gap-4 items-end justify-end'>
        <h1>{SingleProduct.name}</h1> 
      <h1 className='text-red-500'>₹ {SingleProduct.price}</h1>
      </div>
      
    </div>
  )
}

export default ProductDetails
