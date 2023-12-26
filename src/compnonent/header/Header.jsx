import React, { useState } from 'react'
import "./Header.css"
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
const Header = () => {
  const[nav, setNav] = useState(false);

  const changeValueOnScroll=() =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false)
  } 
  window.addEventListener("scroll", changeValueOnScroll)
  return (
    <header className=''>
      <nav className="navbar navbar-expand-lg navbar-light " >
        <div class="container">
            <Link to="/"  className="navbar-brand" >
                <img src={logo} alt='logo' className='img-fluid' style={{width:"80px"}}/>
                <p>Shopping</p>
             
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse all" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Shop</Link>
                </li>
                <li className="nav-item">
                <Link to="/mens" className="nav-link active" href="#">Mens</Link>
                </li>
                <li className="nav-item">
                <Link to="/womens" className="nav-link" href="#">Womens</Link>
                </li>
                <li className="nav-item">
                <Link to="/kids" className="nav-link" href="#">Kids</Link>
                </li>
            </ul>
            <div className="navbar-text me-3 login">
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="navbar-text shop-cart">
                 <Link to="/cart">
                 <i className="bi bi-cart-check"></i>
                 </Link>
                 <div className='count'>0</div>
                 
            </div>
            </div>
        </div>
</nav>
    </header>
  )
}

export default Header
