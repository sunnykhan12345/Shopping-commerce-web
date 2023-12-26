import React, { useEffect } from 'react'
import "../newcollections/NewCollections.css"
import { Container, Row,Col } from 'react-bootstrap'
import { new_collections } from '../../assets/NewCollections'
import Item from '../item/Item'
import Aos from 'aos'
import "aos/dist/aos.css"
const NewCollections = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  },[])
  return (
    <div className='newcollections' >
      <Container>
      <Row>
            <Col lg={12} className='center my-lg-5 my-0' >
            <h1 >New Collections</h1>
            <hr />
            </Col>
        </Row>
        <Row>
        {
        new_collections.map((item,i) =>{
            return(
               <Col lg={3} sm={6} key={i} className='my-sm-3 my-0' data-aos="fade-right"  data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">
                 <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
               </Col>
            )
           
        })
       }
        </Row>
      </Container>
    </div>
  )
}

export default NewCollections
