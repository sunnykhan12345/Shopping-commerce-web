import React, { useEffect } from 'react'
import "../offers/Offers.css"
import { Container,Row, Col } from 'react-bootstrap';
import offerimg from "../../assets/images/hero pic3.png"
import Aos from 'aos'
import "aos/dist/aos.css"
const Offers = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div className='offers' data-aos="fade-right">
      <Container>
        <Row>
            <Col lg={6}>
                <div className="offer-text">
                <h1>Exclusive </h1>
                <h1>Offers For You</h1>
                <p>ONLY ON SELLER PRODUCT SALE</p>
                <button>Check Now</button>
                </div>
            </Col>
            <Col lg={6}>
                <div className='offer-img '>
                    <img src={offerimg} alt='of-img' className='img-fluid' />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Offers
