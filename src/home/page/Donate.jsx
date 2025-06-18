import React from 'react';
import { Link } from 'react-router-dom'
import HeroDonate from './donatePage/HeroDonate';
import DonatePage from './donatePage/DonatePage';
import LastDonation from './home/LastDonation';
import VolunteerForm from './home/VolunteerForm';

const Donate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
    {/* <HeroDonate/> */}

      {/* Latest Donations Section */}
      <DonatePage/>

      {/* Volunteer Section */}
      {/* <VolunteerForm/> */}

     
    </div>
  );
};

export default Donate;