import React from 'react';
import { Link } from 'react-router-dom';
import LastDonation from './home/LastDonation';
import VolunteerForm from './home/VolunteerForm';

const Donate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Better To Give Than To Receive</h1>
        </div>
      </div>

      {/* Latest Donations Section */}
      <LastDonation/>

      {/* Volunteer Section */}
      <VolunteerForm/>

     
    </div>
  );
};

export default Donate;