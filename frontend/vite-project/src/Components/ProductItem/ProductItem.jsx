import React from 'react'
import './ProductItem.css'
import { assets } from '../../assets/assets'

const ProductItem = ({id,name,price,description,image}) => {

    

  return (
    <div className='product-item'>
      <div className='product-item-img-container'>
        <img className='productd-item-image' src={image}/>
        
      </div>
      <div className='product-item-info'>
          <div className='product-item-name-rating'c>
            <p>{name}</p>
            <img src={assets.rating_stars}/>
          </div>
          <p className='product-item-desc'>{description}</p>
          <p className='product-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default ProductItem