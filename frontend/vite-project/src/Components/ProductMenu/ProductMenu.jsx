import React from 'react'
import './ProductMenu.css'
import { menu_list } from '../../assets/assets'


const ProductMenu = ( {category,setCategory}) => {

  return (
    <div>
       <h1>explore</h1>

       <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
              <p>{item.menu_name}</p>
          </div>
            )
        })}
      </div>

      <hr/>
       
    </div>

  )
}

export default ProductMenu