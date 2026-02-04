import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails'
import Navigation from './Pages/Navigation'

const App = () => {
  return (
    <div >
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
