import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero/>
      <Products heading='Chose your favorite' data={productData}/>
      <Feature/>
      <Products heading='Sweet Treats for You' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
