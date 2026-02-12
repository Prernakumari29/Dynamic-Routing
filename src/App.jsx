import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails'
import Navigation from './Pages/Navigation'
import { mystore } from './contextAPI'
import Authentication from './components/Authentication'
import bg from './assets/AuthBackground.jpg'

const App = () => {

  let {isAuth , setIsAuth} = useContext(mystore)

  if(!isAuth){
    return(
     <div className='min-h-screen   bg-no-repeat bg-cover bg-top' style={{ backgroundImage: `url(${bg})` }} > 
     <h1 className='text-white absolute left-1/2 transform -translate-x-1/2 text-4xl text-center leading-loose tracking-wider '>WELCOME  TO  <br /> <span className='text-6xl font-serif'>SHOP STOP <i className="ri-shopping-bag-4-fill text-white text-6xl"></i></span></h1>
      <Routes> 
        <Route path='/' element={<Authentication />} />
      </Routes>
     </div>
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
