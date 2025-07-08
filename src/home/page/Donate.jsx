import React from 'react';
import { Link } from 'react-router-dom'

import DonatePage from './donatePage/DonatePage';
import Hero from './home/Hero';


const Donate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  
      {/* Hero Section */}
      <Hero/>

      {/* Latest Donations Section */}
      <DonatePage/>

      {/* Volunteer Section */}
      {/* <VolunteerForm/> */}

     
    </div>
  );
};

export default Donate;