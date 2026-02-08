import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails'
import Navigation from './Pages/Navigation'
import { mystore } from './contextAPI'
import Authentication from './components/Authentication'

const App = () => {

  let {isAuth , setIsAuth} = useContext(mystore)

  if(!isAuth){
    return(
      <Routes>
        <Route path='/' element={<Authentication />} />
      </Routes>
    )
  }
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
