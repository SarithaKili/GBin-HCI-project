import React from 'react'
import ProductMenu from '../../Components/ProductMenu/ProductMenu'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
import Footer from '../../Components/footer/Footer'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Buy = () => {
  return (
    <div>
      <ProductMenu/>
      <ProductDisplay/>
     
      <AppDownload/> 
      <Footer/>
    </div>
  )
}

export default Buy