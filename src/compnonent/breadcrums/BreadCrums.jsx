import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import "../breadcrums/BoradCrums.css"
const BreadCrums = (props) => {
    const{product} = props;
  return (
    <div className='breadcrums pt-3'>
     <Container>
      <Row>
        <Col lg={12} sm={12}>
        <span>&#x27AF; <span className='text-danger'>{product.category}</span>   &#x27AF; {product.name}</span>
        </Col>
      </Row>
     </Container>
    
    </div>
  )
}

export default BreadCrums
