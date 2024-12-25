import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ProductMenu from '../../Components/ProductMenu/ProductMenu'
import Awards from '../../Components/Awards/Awards'
import Footer from '../../Components/footer/Footer'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
  
  const [category,setCategory]=useState("All")



  return (
    <div>
      <Header/>
      <ProductMenu category={category} setCategory={setCategory} />
      <ProductDisplay category={category}/>
      <Awards category={category} setCategory={setCategory}  />
      <AppDownload/>
      <Footer/>
      
    </div>
  )
}

export default Home