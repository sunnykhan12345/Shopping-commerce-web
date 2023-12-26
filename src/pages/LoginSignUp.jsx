import React, { useEffect } from 'react'
import "../CSS/LoginSignUp.css"
import { Container,Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"
const LoginSignUp = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  })
  return (
       <div className='loginsignup' >
        <div className='container-fluid'  data-aos="fade-right"  data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
        <form className='mx-auto' >
          <h4 className='text-center'>Sign Up</h4>
          <div class="mb-3 mt-5">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Your Name' />
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Your Email' />
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Your Password' />
          </div>
          <div class="mb-3 d-grid mt-4">
             <button>Containue</button>
             <p>Already an account ? <span>Login here</span></p>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">By contuaing , i agree to terms & privacy policy </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
       </div>
  )
}

export default LoginSignUp
