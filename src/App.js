import React from 'react'
import "./App.css"
import Header from './compnonent/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Product from './pages/Product'
import ShopCategory from './pages/ShopCategory'
import LoginSignUp from './pages/LoginSignUp'
import Footer from './compnonent/footer/Footer'
import banner from "./assets/images/men_banner.jpg"
import banner2 from "./assets/images/kid_banner  (1).jpg"
import banner3 from "./assets/images/kid_banner  (2).jpg"

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/mens' element={<ShopCategory  banner={banner} category="mens"/>} />
            <Route path='/womens' element={<ShopCategory banner={banner2} category="womens"/>} />
            <Route path='/kids' element={<ShopCategory banner={banner3} category="kids"/>} />
            <Route path='/product' element={<Product />}>
              <Route path=':productid' element={<Product />} />
           </Route>
            <Route path='/login' element={<LoginSignUp />} />
            <Route path='/cart' element={<Cart />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
