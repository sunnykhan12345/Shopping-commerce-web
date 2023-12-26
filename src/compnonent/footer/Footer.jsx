// import React from 'react'
// import "../footer/Footer.css"
// import { Container, Row, Col } from 'react-bootstrap'
// import flogo from "../../assets/images/logo.png"
// const Footer = () => {
//   return (
//     <div className='footer'>
//         <Container>
//             <Row>
//                 <Col lg={4}>
//                 <div className='footer-logo d-flex align-items-center'>
//                     <img src={flogo} alt='footer-logo' className='img-fluid' style={{width:"150px"}}/>
//                     <p>SHOPPER</p>
//                   </div>
//                 </Col>
//                 <Col lg={4} sm={6}>
//                 <ul className='footer-links '>
//                     <li>Company</li>
//                     <li>Products</li>
//                     <li>Offices</li>
//                     <li>About</li>
//                     <li>Contacts</li>
//                   </ul>
//                 </Col>
//                 <Col lg={4} sm={6}>
//                 <div className="social-icons">
//                     <div className="footer-icons-container">
//                         <i class="bi bi-whatsapp"></i>
//                         <i class="bi bi-instagram"></i>
//                         <i class="bi bi-facebook"></i>
//                     </div>
//                   </div>
//                 </Col>
//                 {/* <Col>
//                   <div className='footer-logo'>
//                     <img src={flogo} alt='footer-logo' className='img-fluid' style={{width:"150px"}}/>
//                     <p>SHOPPER</p>
//                   </div>
//                   <ul className='footer-links'>
//                     <li>Company</li>
//                     <li>Products</li>
//                     <li>Offices</li>
//                     <li>About</li>
//                     <li>Contacts</li>
//                   </ul>
//                   <div className="social-icons">
//                     <div className="footer-icons-container">
//                         <i class="bi bi-whatsapp"></i>
//                         <i class="bi bi-instagram"></i>
//                         <i class="bi bi-facebook"></i>
//                     </div>
//                   </div>
//                 </Col> */}
//             </Row>
//         </Container>
//     </div>
//   )
// }

// export default Footer


import React, { useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import flogo from "../../assets/images/logo.png"
import "../footer/Footer.css"
import Aos from 'aos'
import "aos/dist/aos.css"
const Footer = () => {
  useEffect(() =>{
    Aos.init({duration:1200});
  },[])
  return (
    <div className='footer' data-aos="fade-right"  data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Container>
        <Row className='justify-content-center'>
            <Col lg={3} sm={6} md={4} className=''>
            <div className='footer-logo d-flex align-items-center'>
                     <img src={flogo} alt='footer-logo' className='img-fluid' style={{width:"150px"}}/>
                     <p>SHOPPER</p>
                   </div>
            </Col>
            <Col lg={5}  sm={12} md={8} className=' my-0'>
            <ul className='footer-links '>
                     <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                     <li>Contacts</li>
                   </ul>
            </Col>
            <Col lg={3}  sm={6} >
            <div className="footer-icons-container ">
                         <i class="bi bi-whatsapp text-danger"></i>
                         <i class="bi bi-instagram text-danger"></i>
                        <i class="bi bi-facebook text-danger"></i>
                     </div>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <div className='copyright mt-3 text-center'>
                  <hr />
                    <p>Copyright @ 2023 -All Right Reserved <span style={{color:"#ff4141", fontSize:"20px", fontWeight:"800"}}>Design Bye Sana Ullah</span></p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
