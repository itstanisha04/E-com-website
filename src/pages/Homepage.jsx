import React from 'react'
import Layout from '../components/Layout'
import Herosection from '../components/Herosection'
import Category from '../components/Category'
import HomePageProductCard from '../components/HomePageProductCard'
import Track from '../components/Track'
import Testimonial from '../components/Testimonial'

function Homepage() {
  return (
    
    <Layout>
        <Herosection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
    </Layout>
    
  )
}

export default Homepage