import React from "react";

const HeroDonate = () => {
  return (
    <section className="bg-[url('/donate-bg.jpg')] bg-cover bg-center text-white py-24 px-4 text-center">
      <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl inline-block">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Support Our Mission
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your generous donation helps us uplift lives and build a brighter future.
        </p>
      </div>
    </section>
  );
};

export default HeroDonate;
