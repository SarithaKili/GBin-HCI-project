import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
     <img className="logo" src={assets.logo} alt=""/>
    
     <ul className='navbar-menu'>
        <button className='menu'><img src={assets.menu} alt="Menu" /></button>
        <div className='oder-noti-noti'>
          <button className='notification'><img src={assets.notification} alt="Notification" /></button>
          <div className='dot-noti'></div>
        </div>

        <div className='oder-noti-cart'>
          <button className='cart'><img src={assets.cart} alt="Cart" /></button>
          <div className='dot-cart'></div>
        </div>
        
        <button className='location'><img src={assets.location} alt="Location" /></button>
        <button className='login' >Sign in</button>
      </ul>
    
    </div>
  )
}

export default Navbar