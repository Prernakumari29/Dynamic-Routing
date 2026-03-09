
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';

import { ContextProvider } from './contextAPI.jsx';
import { CartProvider } from './contexts/CartContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <CartProvider>
     <BrowserRouter>
        <App />
        <ToastContainer />
     </BrowserRouter>
    </CartProvider> 
    </ContextProvider>
  
 
    

)
