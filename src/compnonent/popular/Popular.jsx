import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../popular/Popular.css";
import { data_product } from '../context/Data';
import Item from '../item/Item';


import Aos from 'aos'
import "aos/dist/aos.css"
const Popular = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
   <>
     <div className='popular'>
     <Container className='my-md-5' data-aos="fade-right">
        <Row>
            <Col lg={12} className='center my-lg-5 my-0 ' >
            <h1 >Popular in Womwn</h1>
            <hr />
            </Col>
        </Row>
        <Row>
        {
        data_product.map((item,i) =>{
            return(
               <Col lg={3} sm={6} key={i} className='my-sm-3 my-0'>
                 <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
               </Col>
            )
           
        })
       }
        </Row>
     </Container>
     </div>
   
   </>
  )
}

export default Popular
