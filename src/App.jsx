import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails'
import { mystore } from './contextAPI'
import Authentication from './components/Authentication'
import ViewMoreDetails from './Pages/ViewMoreDetails'
import ParticularProduct from './Pages/ParticularProduct'
import Womens from './Pages/Womens'
import Mens from './Pages/Mens'
import Error from './Pages/Error'
import MainLayout from './Pages/MainLayout'

const App = () => {

  let {isAuth , setIsAuth} = useContext(mystore)


  if(!isAuth){
    return(
    
      <Routes> 
        <Route path='/' element={<Authentication />} />
        <Route path='*' element={<Error />} />
      </Routes>
     
    )
  }
  return (
    <div >
      
      
      <Routes>
        <Route element={<MainLayout />}>

          <Route path='/' element={<Home />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productDetails/:id' element={<ProductDetails />} />
          <Route path='/ViewMoreDetails/:id' element={<ViewMoreDetails />} />
          <Route path='/particularproduct/:id' element={<ParticularProduct />} />
        
        </Route>

        <Route path='*' element={<Error />}/>
      </Routes>
      

    
    </div>
  )
}

export default App
