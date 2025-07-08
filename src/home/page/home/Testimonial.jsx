import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Grace Uwimana',
    role: 'Community Advocate',
    message:
      "Thanks to RNADW, I now feel empowered and supported as a deaf woman. Their programs changed my life completely!",
    image:
      'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Jean Bosco',
    role: 'Volunteer',
    message:
      "Volunteering here has been the most rewarding experience. The dedication to deaf women's rights is truly inspiring.",
    image:
      'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 3,
    name: 'Aline Mukamana',
    role: 'Supporter',
    message:
      "I’m proud to support RNADW. I can see the real impact my donations have on the community.",
    image:
      'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold mb-1">{testimonial.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
      <p className="text-gray-600 italic">"{testimonial.message}"</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Testimonies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
