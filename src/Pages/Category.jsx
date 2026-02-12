import React, { useState } from 'react'

const Category = () => {
    const [open , setOpen] = useState(false)
  return (
    <div>
      <h1 onMouseEnter={()=> setOpen(true)}>category </h1>



    {
       open && <div className='h-48 w-32 bg-amber-200 absolute top-14  z-20' onMouseLeave={() => setOpen(false)} >
            <h1 className='hover:bg-amber-950'>hello</h1>
            
      </div>
    }
    </div>
  )
}

export default Category
