import React from 'react';
import { Link } from 'react-router-dom';
import { IoBulbOutline, IoCashOutline, IoPeopleOutline } from 'react-icons/io5';

const FeatureCard = ({ Icon, title, description, link, linkText }) => {
  return (
    <div className="border rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 bg-white">
      <div className="text-yellow-500 text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-blue-600 hover:underline font-medium">
        {linkText}
      </Link>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h1 className='text-blue-600 text-4xl md:text-5xl font-extrabold mb-10 text-center'>About us</h1>
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            Icon={IoBulbOutline}
            title="Our Mission"
            description="RNADW exists to defend the rights of Deaf women and promote their health and socio-economic welfare."
            link="/projects"
            linkText="Learn More"
          />

          <FeatureCard
            Icon={IoPeopleOutline}
            title="Our Vision"
            description="A society which respects the basic rights of Deaf Women and girls, considers as priority their education and welfare, and in which they are integrated with equal opportunities to actively participate in national development."
            link="/projects"
            linkText="Learn More"
          />

          <FeatureCard
            Icon={IoCashOutline}
            title="Make Donations"
            description="Support deaf women and girls in Rwanda by making a secure donation. Your contribution helps provide food, education, sanitary pads, and sign language training. Every amount makes a lasting impact."
            link="/donate"
            linkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
