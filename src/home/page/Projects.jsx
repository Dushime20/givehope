import React from 'react';
import { Link } from 'react-router-dom';
import LastDonation from './home/LastDonation';
import VolunteerForm from './home/VolunteerForm';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/bg_1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">How It Works</h1>
            <a
              href="https://vimeo.com/channels/staffpicks/93951774"
              className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
            >
              <span className="mr-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-lg">How It Works</span>
            </a>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:order-2 mb-8 md:mb-0">
              <img src="/images/bg_1.jpg" alt="Create Campaign" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pr-12 md:order-1">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
                  Step 01
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Create Your Fundraising Campaign</h2>
              <p className="text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/images/bg_2.jpg" alt="Share Campaign" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
                  Step 02
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Share with Family and Friends</h2>
              <p className="text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Donations Section */}
     <LastDonation/>

      {/* Volunteer Section */}
     <VolunteerForm/>

      
    </div>
  );
};

export default Projects;