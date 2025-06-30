import React from 'react';
import { Link } from 'react-router-dom';
import Features from './home/Features';
import Partner from './home/Partner';
import Team from './home/Team';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mt-[80px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/4.jpg')" }}
        >
          <div className="absolute inset-0 bg-blue-900/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 font-serif tracking-tight animate-fade-in">About The RNADW "UMUCYO"</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-light animate-fade-in delay-200">
            Empowering Deaf Women and Girls in Rwanda since 2005
          </p>
        </div>
      </div>

      {/* History Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Our Journey</span>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-serif tracking-tight">Our History</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              The story of how RNADW was founded and our journey of growth and impact.
            </p>
          </div>

          <div className="space-y-20">
            {/* 2005 - Beginning */}
            <div className="grid md:grid-cols-2 gap-10 items-center group">
              <div className="animate-slide-in-left">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 font-serif">The Beginning (2005)</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  RNADW was founded in 2005 by a group of deaf women human rights activists who recognized the need
                  for an organization specifically focused on the unique challenges faced by deaf women and girls
                  in Rwanda.
                </p>
              </div>
              <div className="animate-fade-in">
                <img
                  src="/images/1.jpg"
                  alt="RNADW Founding"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-xl object-cover border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* 2010–2015 - Growth */}
            <div className="grid md:grid-cols-2 gap-10 items-center group">
              <div className="order-2 md:order-1 animate-fade-in">
                <img
                  src="/images/3.jpg"
                  alt="RNADW Growth"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-xl object-cover border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="order-1 md:order-2 animate-slide-in-right">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 font-serif">Growth and Development (2010–2015)</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  RNADW expanded its programs and partnerships locally and internationally. We created our first
                  strategic plan and launched initiatives in education, health, and economic empowerment.
                </p>
              </div>
            </div>

            {/* Present - Impact */}
            <div className="grid md:grid-cols-2 gap-10 items-center group">
              <div className="animate-slide-in-left">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 font-serif">Present Day Impact</h3>
                <p className="text-gray-700 leading-relaxed text-base font-light">
                  Today, RNADW is a recognized leader in advocating for deaf women's rights in Rwanda. We have
                  positively impacted over 500 lives and continue building inclusive opportunities for deaf girls
                  and women.
                </p>
              </div>
              <div className="animate-fade-in">
                <img
                  src="/images/4.jpg"
                  alt="RNADW Today"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-xl object-cover border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team/>

      {/* Partner Section */}
      <div className="">
        <Partner />
      </div>

      {/* Features Section */}
      <div className="py-12">
        <Features />
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50 text-center mt-12 rounded-t-3xl shadow-inner animate-fade-in">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-tight">Join Us in Making a Difference</h3>
          <p className="mb-8 text-lg font-light">
            Whether you want to volunteer, partner, or support our mission, your involvement helps us create a more inclusive world for deaf women and girls in Rwanda.
          </p>
          <Link
            to="/donate"
            className="inline-block bg-blue-600 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 text-lg"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;