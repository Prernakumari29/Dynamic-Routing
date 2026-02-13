// import React, { useContext, useState } from 'react'
// import { mystore } from '../contextAPI'

// const Category = () => {
//     const [open , setOpen] = useState(false)
//     let {product} = useContext(mystore)
//     const [data , setData] = useState(product)

//     const filterResult = (catItem)=>{
//         const result = product.filter((curData) => { return curData.category  === catItem })
//         console.log("clicked")
//         setData(result);
//         setOpen(false)
        
//     }

//     const click =()=>{
//         console.log("clicked")
//     }
//   return (
//     <div >
//       <h1 onMouseEnter={()=> setOpen(true)}>category </h1>



//     {
//        open && <div className='h-48 w-32 bg-gray-100 shadow-2xs rounded shadow-black-95 absolute top-14  z-20 text-black'   >
//             <h1 className='hover:bg-gray-200' onClick={()=>filterResult('Smart phone')}>Electronics</h1>
//             <h1 className='hover:bg-gray-200' onClick={() =>click()}>Womens wear</h1>
//             <h1 className='hover:bg-gray-200'>Smart phone</h1>


            
//       </div>
//     }
//     </div>


//   )
// }

// export default Category








