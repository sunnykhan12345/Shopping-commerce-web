import React, { useContext, useEffect } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../compnonent/context/shopcontext/ShopContext'
import Item from '../compnonent/item/Item'
import { Row,Card, Col } from 'react-bootstrap'

// import all_products from '../compnonent/context/All_Products'
import Aos from 'aos'
import "aos/dist/aos.css"

const ShopCategory = (props) => {
  // aos
  useEffect(() =>{
    Aos.init({duration:1200})
  },[])
  const {all_products} = useContext(ShopContext)
  return (
    <div className='container shopcategory '>
      <img src={props.banner} alt='menbaner' className='img-fluid' />
      <div>
        <Row>
          <Col lg={6}>
          <div className='showing-products-numbe align-items-center d-flex pt-3  m-0'><p>Showing 1-12 <span>O  ut Of 36 products</span></p></div>
          </Col>
          <Col lg={6} sm={3} className='my-md-3 my-0  d-flex justify-content-lg-end'>
            <button className='sorted-products-numbe'>sorted bye <span>&#x293D;</span></button>
          {/* <div className='sorted-products-numbe'>sorted bye <span>&#x293D;</span></div> */}
            </Col>
          {/* <div className='d-flex justify-content-between align-items-center'>
             <div className='showing-products-numbe align-items-center d-flex pt-3 '><p>Showing 1-12 <span>O  ut Of 36 products</span></p></div>
             <div className='sorted-products-numbe'>sorted bye <span>&#x293D;</span></div>
          </div> */}
        </Row>
       
        <Row className='mb-5'>
        {
          all_products.map((item, i) =>{
           if(props.category===item.category){
            // return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            return(
                   <div className='col-lg-3 mb-lg-4 col-md-6' data-aos="fade-right"  data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
                      <Card >
                    <Card.Img variant="top" src={item.image} className='img-fluid' alt=''/>
                    <Card.Body>
                      <Card.Title>{item.category}</Card.Title>
                      <Card.Text>
                       {item.name}
                      </Card.Text>
                      <div className='d-flex justify-content-between'>
                        <div className='new_price'>${item.new_price}</div>
                        <div className='old_price'>${item.old_price}</div>
                      </div>
                    </Card.Body>
                  </Card>
                    </div>
            )
           }
          })
        }
        </Row>
      </div>
    </div>
  )
}

export default ShopCategory
