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

const Home = () => {
  return (
    <div className="min-h-screen">
    

      {/* Hero Section */}
      <Hero/>

      {/* Counter Section */}
      <Counter/>

      {/* Features Section */}
     <Features/>
     <Partner/>

      {/* Fundraisers Section */}
      <Foundraisers/>

      {/* Latest Donations Section */}
     <LastDonation/>






      

      {/* Success Story Section */}
     <SuccessStory/>

      {/* Latest News Section */}
    <LatestNew/>

      {/* Volunteer Form Section */}
     <VolunteerForm/>

      


    </div>
  );
};

export default Home;