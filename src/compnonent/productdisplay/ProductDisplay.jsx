import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../productdisplay/ProductDisplay.css"
import Aos from 'aos';
import "aos/dist/aos.css"
const ProductDisplay = (props) => {
  useEffect(() =>{
    Aos.init({duration:1200})
  },[])
    const{product} = props;
  return (
    <div className=' productdisplay'  data-aos="fade-right"  data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
     <Container>
      <Row>
        <Col lg={2} md={4} sm={12} className='sm-order-2'>
        <img src={product.image} alt='' className='img-fluid my-2 small-img'/>
        <img src={product.image} alt='' className='img-fluid my-2 small-img'/>
        <img src={product.image} alt='' className='img-fluid my-2 small-img'/>
        </Col>
        <Col lg={4} md={8} sm={12} className='bg-img sm-order-1 mb-md-3 mb-0'>
        <img src={product.image} alt='' className='img-fluid my-2' />
        </Col>
        <Col lg={6} sm={12}>
          <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-starts'>
                <i class="bi bi-star text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-half text-warning me-3"></i>
                <a>(122)</a>
            </div>
            <div className='price d-flex'>
               <p className='new_price me-5'>${product.new_price}</p>
               <p className='old_price'>${product.old_price}</p>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum distinctio tenetur eos totam ipsa dicta doloribus .</p>
            </div>
           <div className='select-size'>
            <h1>Select Size</h1>
           <div className="select-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
           </div>
            <button className='add-to-card'>ADD TO CARTD</button>
            <div className="productdis-category"><span>Category :</span>Women, T-Shirt, Crop-Top</div>
            <div className="productdis-category"><span>Tags :</span>Modern, Latest</div>
          </div>
        </Col>
      </Row>
     </Container>
    </div>
  )
}

export default ProductDisplay
