import React, { useContext } from 'react'
import Layout from '../../components/layout/Lsayout';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/filter';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import Track from '../../components/track/Track';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, deleteFromCart} from '../../redux/cartSlice';



function Home() {

  const dispatch = useDispatch(); 
  const createItem = useSelector((stae) => stae.cart);
  console.log(createItem);

  const addCart = () => {
    dispatch(addToCart('shirt'));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart('shirt'));
  }

  return (
    <Layout>
      <div className="flex justify-center gap-5">
        <button className='m-2 bg-gray-300' onClick={() => addCart()}>AddToCart</button>
        <button  className='m-2 bg-gray-300' onClick={() => deleteCart()}>DeleteFromCart </button>
      </div>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
    </Layout>
  )
}

export default Home;