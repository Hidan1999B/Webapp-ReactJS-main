import React from 'react'
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'
import Slider from '../components/Frontsliders'
import Categories from '../components/Categories'
import Products from '../components/Products'
import BarCategories from '../components/BarCategories'
import ReviewImages from '../components/Reviews'
import { GlobalStyle } from '../components/Reviews'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
 function Home() {
    return (
        <div>
    <Annoucements/>        
    <Navbar/>
    <BarCategories/>
    <Slider/>
    <Categories/>
    <ReviewImages/>
    <Newsletter/>
    <Footer/>
    <GlobalStyle/>
        </div>
    )
}

export default Home