import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Button } from '@material-tailwind/react'
import React from 'react'
import Homepage from "./pages/Homepage";
import Nopage from "./pages/Nopage";
import ProductInfo from "./pages/ProductInfo";
import ScrollTop from "./components/ScrollTop";
import CartPage from "./pages/CartPage";
import AllProduct from "./pages/AllProduct";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddProductPage from "./pages/AddProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import Logout from "./pages/Logout";

function App() {
  return (

    <div>
    <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/allproduct" element={<AllProduct/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user-dashboard" element={<UserDashboard/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/addproduct" element={<AddProductPage/>} />
          <Route path="/updateproduct" element={<UpdateProductPage/>} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App