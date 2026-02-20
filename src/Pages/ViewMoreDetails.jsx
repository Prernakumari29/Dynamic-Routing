import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mystore } from '../contextAPI'
import SalesAnnimation from '../components/SalesAnnimation'

const ViewMoreDetails = () => {
    let {id } = useParams()
    let{ viewMoreData , cart , setCart} = useContext(mystore)
    const singleProduct = viewMoreData.find((u) => u.id == id)

    let navigate = useNavigate()

  const AddCart = (data)=>{
    setCart((prev) => [...prev , data])
    alert("item are added")
    console.log("submitted")
  }
  return (

    <>
    
      <i className="ri-arrow-left-line  text-4xl cursor-pointer hover:bg-gray-100 rounded-full ml-2 " onClick={()=> navigate(-1)}></i> 
      
    <SalesAnnimation />
    


    <div className='flex gap-10 flex-wrap  px-30 py-10'>
        {
        singleProduct.products.map(function(elem){
          return(
            <div className='h-80 w-56 hover:bg-gray-100 p-3 rounded '> 
            
            <div className='h-48 w-full rounded' onClick={()=> navigate(`/particularproduct/${elem.id}`)}>
              <img src={elem.image} alt="image hai" className='h-full w-full object-cover'/>
            </div>

            <h1 className='mt-4'>{elem.name}</h1>
            <h1 className='text-red-600 text-xl'><span className='text-black line-through text-sm'>₹{elem.oldPrice}</span> ₹{elem.price}  </h1>
            <button className='bg-cyan-900 text-white w-full mt-2 p-1 rounded cursor-pointer active:scale-90' onClick={()=> AddCart(elem)}>Add to cart</button>
            </div>
            
          )
        })
        }
        
      
      
      

    </div>
    </>
  )
}

export default ViewMoreDetails
