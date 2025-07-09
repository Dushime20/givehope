import React from 'react';
import { Link } from 'react-router-dom';

import Counter from './home/Counter';
import Hero from './home/Hero';
import Partner from './home/Partner';

import HomeBlog from './home/homeBlog';
import HomeProject from './home/HomeProject';
import HomeContact from './home/homeContact';

const Home = () => {
  return (
    <div className="min-h-screen">
    

      {/* Hero Section */}
      <Hero/>

      {/* Counter Section */}
      <Counter/>

     

      {/* Features Section */}
     <HomeProject/>
     

     

  

      {/* Latest News Section */}
    <HomeBlog/>

     <Partner/>

      {/* Volunteer Form Section */}
    <HomeContact/>

      


    </div>
  );
};

export default Home;