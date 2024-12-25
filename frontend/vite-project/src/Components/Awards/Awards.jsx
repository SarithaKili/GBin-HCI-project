import React from 'react'
import './Awards.css'
import { Award_list } from '../../assets/assets'

const Awards = ({category,setCategory}) => {
  return (
    <div>
       <h1>explore</h1>

       <div className="explore-menu-list">
        {Award_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.Award_name?"All":item.Award_name)} key={index} className='explore-menu-list-item'>
              <img src={item.Award_image} className={category===item.Award_name?"active":""} alt="" />
              <p>{item.Award_name}</p>
          </div>
            )
        })}
      </div>
      <hr/>
       
    </div>

  )
}

export default Awards