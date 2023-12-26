import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import "../item/Item.css"
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';
const Item = (props) => {
  useEffect(()=>{
    Aos.init({duration:1200});
  },[])
  return (
    <div className='item' >
       <Card aos-data="fade-up">
      <Link to={`/product/${props.id}`}><Card.Img variant="top" src={props.image} alt='pic' className='img-fluid' /></Link>
      <Card.Body>
        {/* <Card.Title>Dress</Card.Title> */}
        <Card.Text>
          {props.name}
        </Card.Text>
        <div className='d-flex justify-content-between'>
            <div className="new_price">${props.new_price}</div>
            <div className="old_price">${props.old_price}</div>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item
