import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {Home} from "../pages/Home"
import {Login} from "../pages/Login"
import {Signup} from "../pages/Signup"
import {Mens} from "../pages/Mens"
import {Womens} from "../pages/Womens"
import {Cart} from "../pages/Cart"
import {Chatbot} from "./Chatbot"
import Checkout from "../pages/Checkout"
import SingleProduct from '../pages/SingleProduct'
import {SingleProductkids} from '../pages/SingleProductkids'
import {SingleProductwomen} from '../pages/SingleProductwomen'
import { Kids } from '../pages/Kids'
import PaymentPage from '../pages/PaymentPage'
import ReviewPage from '../pages/ReviewPage'
import AdminHome from "../pages/home/AdminHome"
import User from "../pages/user/User"
import Single from "../pages/single/Single"
import New from "../pages/new/New"

import EditPage from "../pages/EditPage"
import List from "../pages/list/List"
import AddProducts from "../pages/AddProduct/AddProducts"
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mens" element={<Mens/>}></Route>
        <Route path="/mens/:id" element={<SingleProduct/>}></Route>
        <Route path="/womens/:id" element={<SingleProductwomen/>}></Route>
        <Route path="/kids/:id" element={<SingleProductkids/>}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/Chatbot" element={<Chatbot/>}></Route>
        <Route path="/payment" element={<PaymentPage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/review" element={<ReviewPage/>}></Route>
        <Route path="/">
            <Route path="Admin" element={<AdminHome />} />
            <Route path="users">
              <Route index element={<User />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="addproducts" element={<AddProducts />} />
            <Route path="/edit/:id" element={<EditPage />} />
          </Route>
      
      </Routes>
    </div>
  )
}

