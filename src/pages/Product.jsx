import React, { useContext } from 'react'
import { ShopContext } from '../compnonent/context/shopcontext/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../compnonent/breadcrums/BreadCrums';
import ProductDisplay from '../compnonent/productdisplay/ProductDisplay';

const Product = () => {
  const{all_products} = useContext(ShopContext);
const{productid} = useParams();
  const product =all_products.find((e) =>e.id=== Number(productid));
  console.log(product)
  return (
    <div className='product'>
      <BreadCrums product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
