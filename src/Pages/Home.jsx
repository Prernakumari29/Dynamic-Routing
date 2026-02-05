import React, { useContext } from 'react'
import { mystore } from '../contextAPI'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   let {product,setCart} = useContext(mystore)
   const navigate= useNavigate()

   const addCart = (items)=>{
      setCart(prev => [...prev , items])
      alert("item is added")
   }
  return (
    <div className='flex gap-10 flex-wrap  m-14'>
      
      {
        product.map(function(elem){
            
            return(
                
             <div key={elem.id} className='h-auto w-60 bg-gray-100 rounded p-5'  >
                <img src={elem.image} alt={elem.name} className='h-44 w-full' onClick={()=> navigate(`/productDetails/${elem.id}`)} />
                <h1>{elem.name}</h1>
                <h1 className='text-red-600'>₹ {elem.price}</h1>
                <button className='bg-cyan-900 text-white p-1 rounded mt-3 active:scale-90 w-full' onClick={()=>addCart(elem)} >Add to cart</button>
             </div>
            )
        })
      }
    </div>







    //  <div className="p-6">
    //   <div className="flex flex-wrap gap-6">
    //     {product.map((item) => (
    //       <div
    //         key={item.id}
    //         className="h-64 w-60 bg-sky-300 rounded-xl p-4"
    //       >
    //         <img
    //           src={item.image}
    //           alt={item.name}
    //           className="h-32 w-full object-cover rounded"
    //         />
    //         <h2 className="mt-2 font-semibold">{item.name}</h2>
    //         <p>₹{item.price}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>


  )
}

export default Home
