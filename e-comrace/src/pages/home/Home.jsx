import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../data/myContext';
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
      <div className="flex justify-center gap-5">
        <button className='p-5 bg-gray-300 ' onClick={()=> addCart()}>add</button>
        <button className='p-5 bg-gray-300 ' onClick={()=> deleteCart()}>del</button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />

    </Layout>
  )
}

export default Home