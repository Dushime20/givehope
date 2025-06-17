import React from 'react';
import { Link } from 'react-router-dom';
import { IoBulbOutline, IoCashOutline, IoPeopleOutline } from 'react-icons/io5';

const Features = () => {
  return (
    <div>
      {/* Features Section */}
      <div className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="flex items-start">
              <div className="text-yellow-500 text-4xl mr-4">
                <IoBulbOutline />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-gray-600 mb-2">
                  RNADW exists to defend the rights of Deaf women and promote their health and socio-economic welfare.
                </p>
                <Link to="/mission" className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>

            {/* vision */}
            <div className="flex items-start">
              <div className="text-yellow-500 text-4xl mr-4">
                <IoPeopleOutline />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-gray-600 mb-2">
                  A society which respects the basic rights of Deaf Women and girls, which considers as priority their education and their welfare, and in which they are perfectly integrated, provided equal opportunities so as to actively participate in the national development process.
                </p>
                <Link to="/volunteer" className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>

            {/* Donations */}
            <div className="flex items-start">
              <div className="text-yellow-500 text-4xl mr-4">
                <IoCashOutline />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Make Donations</h3>
                <p className="text-gray-600 mb-2">
                  Support deaf women and girls in Rwanda by making a secure donation through PayPal, Mobile Money, or Bank Transfer. Your contribution helps provide food, education, sanitary pads, and sign language training. Every amount makes a lasting impact—join us in transforming lives today.
                </p>
                <Link to="/donate" className="text-blue-600 hover:underline">Learn More</Link>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
