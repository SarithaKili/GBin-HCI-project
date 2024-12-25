import React from 'react'
import './ProductDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ProductDisplay = ({category}) => {


  const {product_list}=useContext(StoreContext)
  return (
    <div className='product-display'>
      <h2>top product near you</h2>
      <div className='product-display-list'>
        {product_list.map((item,index)=>{
          return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>

    </div>
  )
}

export default ProductDisplay