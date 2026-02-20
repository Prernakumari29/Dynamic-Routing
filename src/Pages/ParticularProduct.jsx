import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mystore } from '../contextAPI'

const ParticularProduct = () => {
    let {id} = useParams()
    let{viewMoreData} = useContext(mystore)


     const parent = viewMoreData.find(p =>
    p.products.some(prod => prod.id === Number(id))
  )
    let single = parent.products.find((u) => u.id == id)
  return (
    <div>
      <h1>finallyy ho gya</h1>
      <h2>{single.name}</h2>
    </div>
  )
}

export default ParticularProduct
