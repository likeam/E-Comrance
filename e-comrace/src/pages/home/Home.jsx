import React, { useContext } from 'react'
import Layout from '../../components/layout/layout';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/filter';
import ProductCard from '../../components/productCard/ProductCard';



function Home() {

  

  return (
    <Layout>
        <HeroSection />
        <Filter />
        <ProductCard />
    </Layout>
  )
}

export default Home;