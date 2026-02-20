import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mystore } from '../contextAPI';

const ProductDetails = () => {
    const {id} =useParams();
    let {product , setCart} = useContext(mystore)
    const SingleProduct = product.find((item) => item.id == id)

    const navigate = useNavigate()

    // ------------------------------------------Add to cart-----------------------------------------------------
    const addToCart = (data) => {
      setCart(prev => [...prev , data])
      alert("item is added")
    }

  return (

    // ---------------------------------------------------Image and Above Image Part-------------------------------------------------
    <div>
      <h1 className='  text-3xl  m-10 font-serif'> <i className="ri-arrow-left-line cursor-pointer rounded-full hover:bg-gray-100 " onClick={()=>navigate(-1)}></i> {SingleProduct.title.slice(0,20)} <span className='text-gray-600 text-2xl pl-2'>({SingleProduct.title})</span></h1>
    <div className='flex m-10 gap-7 '>
      <div className='h-96 w-xl '>
        <img src={SingleProduct.image} alt=""  className='h-full w-full object-fill rounded'/>      
      </div>
      
      {/* -------------------------------------------Top Part--------------------------------------------------------------- */}

      <div className='flex flex-col gap-4  justify-between '>
    <div className='flex flex-col gap-2 '>
          <h1 className='text-sm text-gray-900'>{SingleProduct.description}</h1>
        <h1 className='text-xl'><span className='text-sm text-blue-600'>Rating -:</span> {SingleProduct. rating.rate}</h1>
        <h1 className='bg-cyan-700 w-fit text-white p-1 rounded font-bold '>Shop Stop's choice</h1>

        {/* -------------------------------------Detailing part---------------------------------------------------------- */}
        <h1 className=' border-t mt-0.5'>  <span className='font-bold'> Brand : </span>puma</h1>
        <h1 >  <span className='font-bold'>stock : </span>{SingleProduct.rating.count}</h1>
        <h1> <span className='font-bold'>Category : </span>{SingleProduct.category}</h1>
        {/* <h1> <span className='font-bold'>Features : </span>{SingleProduct.features}</h1> */}

    </div>
         {/* ------------------------------------------- Bottom Part----------------------------------------------------------- */}
        <div className='flex items-center justify-between '>
          <div >
            <h1>{SingleProduct.title}</h1> 
            <h1 className='text-red-600 '><span className='text-black line-through'>₹{SingleProduct.price}</span> <span className='text-2xl'>₹ {SingleProduct.price} </span> </h1>
          </div>
            <button className='bg-cyan-900 text-white p-2 rounded mt-3 active:scale-90 font-bold mr-48' onClick={()=>addToCart(SingleProduct)}>Add to cart</button>         
        </div>
      </div>     
    </div>
    </div>
  )
}

export default ProductDetails
