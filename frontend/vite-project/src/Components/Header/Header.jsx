import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <div className="header-content">
        <h1>E-Waste into Eco Wisdom...</h1>
        <button><a href='/buy'>buy</a> </button>
        <button><a href='/sell'>sell</a></button>
          
          </div>

    </div>
  )
}

export default Header