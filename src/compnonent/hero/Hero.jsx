import React, { useEffect } from 'react'
import "./../hero/Hero.css"
import hero from "../../assets/images/hero pic3.png"
import hand from "../../assets/images/hand.png"
import { Container,Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"
const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div className='hero' data-aos="fade-right">
      <Container>
        <Row>
            <Col lg={6} sm={""} className=''>
                <div className='left-side'>
                    <h2>NEW ARRIYALS ONLY <img  src={hand} alt='imghand' className='img-fluid' style={{width:"80px"}}/></h2>
                    <p>New</p>
                    <p>Collections</p>
                    <p>For Every One !</p>
                    <div className='hero-lates-btn'>
                        <button>Latest Collections <span>&#8674;</span></button>
                    </div>
                </div>
            </Col>
            <Col lg={6} sm={""}>
                <div className='right-side'>
                    <img src={hero} alt='hero' className='img-fluid' />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
