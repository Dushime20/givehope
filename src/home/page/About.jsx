import React from 'react';
import { Link } from 'react-router-dom';
import Features from './home/Features';
import Partner from './home/Partner';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mt-[80px]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/4.jpg')",
          }}
        >
          <div className="w-full h-full  flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl font-bold">About The RNADW "UMUCYO"</h2>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-semibold uppercase tracking-wide">Our Journey</span>
            <div className="w-16 h-1 bg-yellow-600 mx-auto mt-2 mb-4 rounded"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our History</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The story of how RNADW was founded and our journey of growth and impact.
            </p>
          </div>

          <div className="space-y-20">
            {/* 2005 - Beginning */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning (2005)</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  RNADW was founded in 2005 by a group of deaf women human rights activists who recognized the need
                  for an organization specifically focused on the unique challenges faced by deaf women and girls
                  in Rwanda.
                </p>
              </div>
              <div>
                <img
                  src="/images/1.jpg"
                  alt="RNADW Founding"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>

            {/* 2010–2015 - Growth */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/images/3.jpg"
                  alt="RNADW Growth"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth and Development (2010–2015)</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  RNADW expanded its programs and partnerships locally and internationally. We created our first
                  strategic plan and launched initiatives in education, health, and economic empowerment.
                </p>
              </div>
            </div>

            {/* Present - Impact */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Present Day Impact</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Today, RNADW is a recognized leader in advocating for deaf women’s rights in Rwanda. We have
                  positively impacted over 500 lives and continue building inclusive opportunities for deaf girls
                  and women.
                </p>
              </div>
              <div>
                <img
                  src="/images/4.jpg"
                  alt="RNADW Today"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <div className="mt-20 px-4">
        {/* <div className="max-w-7xl mx-auto"> */}
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">OUR TEAM</h2>
            <span className="text-yellow-600 font-semibold uppercase tracking-wide">MEET THE BOARD</span>
            <div className="w-16 h-1 bg-yellow-600 mx-auto mt-2 mb-4 rounded"></div></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { name: "MUHORAKEYE Pelagie", role:"PRESIDENT",
            img: "Pelagie.jpg" },
            { name: "DUSABE Monique", role: "VICE PRESIDENT", img: "Dusabe.jpg" },
            { name: "NZAMUKUNDA Proscille", role: "SECRETARY", img: "Proscille.jpg" },
            { name: "NIYONSHUTI Bridget", role: "TREASURER", img: "1aa.jpg" },
          ].map((leader, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-4">
                <img src={`/images/${leader.img}`} alt={leader.name} className="w-32 h-32 rounded-full mx-auto" />
                <h3 className="text-xl font-bold mt-4">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
              <p className="text-gray-700">
                Dedicated to the mission of empowering deaf women and leading the organization forward.
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Staff Section */}
<div className="mt-20 px-4">
  <div className="text-center mb-16">
    <span className="text-yellow-600 font-semibold uppercase tracking-wide">MEET THE STAFF TEAM</span>
    <div className="w-16 h-1 bg-yellow-600 mx-auto mt-2 mb-4 rounded"></div>
    <p className="text-gray-600 max-w-xl mx-auto">
      Our dedicated staff members work tirelessly behind the scenes to support our mission and deliver on our programs every day.
    </p>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {[
      { name: "MUKAKIBIBI Alphonsine", role: "Executive Director", img: "1aa-e-1.jpg" },
      { name: "UWINEZA Diane", role: "Programs Manager", img: "Annet.jpg" },
      { name: "MUKANDOLI Sarah", role: "Finance Officer", img: "1aa-r.jpg" },
      { name: "NIYONSENGA Eve", role: "Communication Officer", img: "1aa-qw.jpg" },
    ].map((staff, idx) => (
      <div key={idx} className="text-center">
        <div className="mb-4">
          <img
            src={`/images/${staff.img}`}
            alt={staff.name}
            className="w-32 h-32 rounded-full mx-auto object-cover shadow"
          />
          <h3 className="text-xl font-bold mt-4">{staff.name}</h3>
          <p className="text-gray-600">{staff.role}</p>
        </div>
        <p className="text-gray-700">
          Committed to the RNADW mission and delivering meaningful results for our community.
        </p>
      </div>
    ))}
  </div>
</div>


     {/* Partner Section */}
<Partner/>
<div>

</div>
    <Features/>  
    </div>
  );
};

export default About;