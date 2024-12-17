import Header from '../components/header/Header'
import ExHeader from '../components/ExHeader/ExHeader'
import Banner from '../components/banner/Banner'
import Rec from '../components/recommended/Rec'
import Products from '../components/Product/Product'
import axios from '../axios'
import React from 'react'
import Footer from './../components/footer/Footer'


export const Home = () => {
  
  // React.useEffect(() => {
  //   axios.get('/products');
  // }, []);
    return (
      <>
    
        <Header />
      {/* <ExHeader /> */}
      <Banner />
      <Rec/>
      <Products />
      <Footer />
      </>
    );
  };

export default Home;


