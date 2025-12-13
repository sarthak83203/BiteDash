import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"; //For creating the routes...

createRoot(document.getElementById('root')).render(
  //Now by this we can make routes in App folder...
  <BrowserRouter>
   <App />
  </BrowserRouter>
   
 
)
