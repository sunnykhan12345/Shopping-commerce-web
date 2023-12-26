import React, { useEffect } from 'react'
import "../newslater/NewsLetter.css"
import { Container,Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"
const NewsLetter = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div className='newslater' data-aos="fade-right"  data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Container>
        <Row>
            {/* <Col lg={12}>
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>subscribe to our newslater and stay updated</p>
                <div className='div text-center'>
                <input type='' placeholder='Your Email' />
                <button>Subscribe</button>
                </div>
            </Col> */}
            <Col lg={12}>
            <h1>Get Exclusive Offers On Your Email</h1>
                <p>subscribe to our newslater and stay updated</p>
            </Col>
            <Col lg={12}>
            {/* <div className='div '>
                <input type='' placeholder='Your Email' />
                <button>Subscribe</button>
                </div> */}
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NewsLetter
