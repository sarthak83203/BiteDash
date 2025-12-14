import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes,Route} from 'react-router-dom';
import List from "./pages/List/List";
import Add from "./pages/ADD/Add";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from 'react-toastify';

export default function App(){
  return(
   <div>
    <ToastContainer/>
    <Navbar/>
    <hr></hr>
   <div className="app-content">
    <Sidebar/>
    <Routes>
      <Route path="/add" element={<Add/>}/>
       <Route path="/list" element={<List/>}/>
        <Route path="/orders" element={<Orders/>}/>

    </Routes>
   </div>


   </div>

  );
}