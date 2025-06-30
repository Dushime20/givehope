import React from 'react';
import { Link } from 'react-router-dom';
import VolunteerForm from './home/VolunteerForm';
import LatestNew from './home/LatestNew';
import SuccessStory from './home/SuccessStory';
import LastDonation from './home/LastDonation';
import Foundraisers from './home/Foundraisers';
import Features from './home/Features';
import Counter from './home/Counter';
import Hero from './home/Hero';
import Partner from './home/Partner';
import Contact from './Contact';
import HomeBlog from './home/homeBlog';
import HomeProject from './home/HomeProject';

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
    <Contact/>

      


    </div>
  );
};

export default Home;