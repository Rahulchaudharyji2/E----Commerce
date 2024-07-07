import { useState } from 'react'

import './App.css'

import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'

//import all pages
import AllProduct from './components/Pages/AllProduct'
import Cart from './components/Pages/Cart'
import Login from './components/Pages/Login'
import New from './components/NewForm/NewForm';
import Register from './components/Pages/Register'
import Order from './components/Pages/Order'
function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<AllProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/new' element={<New />} />

        </Routes>
      </Layout>

    </>
  )
}

export default App
