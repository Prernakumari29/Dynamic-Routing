
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './contextAPI.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
     <BrowserRouter>
        <App />
        <ToastContainer />
     </BrowserRouter>
  </ContextProvider>
 
    

)
