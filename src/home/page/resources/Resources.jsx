import React, { useState } from "react";
import { FaFilePdf, FaExternalLinkAlt, FaVideo } from "react-icons/fa";

// Fixed and cleaned resources array
const allResources = [
  {
    id: 1,
    type: "pdf",
    title: "Sign Language Alphabet",
    description: "RNADW - Sign language Alphabets",
    link: "/resources/sign-language-alphabet.pdf",
  },
  {
    id: 2,
    type: "pdf",
    title: "Sign Language Numbers",
    description: "RNADW - Sign language Numbers",
    link: "/resources/sign-language-numbers.pdf",
  },
  {
    id: 3,
    type: "pdf",
    title: "Brochure - Sexual Consent (EN)",
    description:
      "As a deaf adolescent, I should strive to make healthy decisions about sexual consent.",
    link: "/resources/consent-brochure-en.pdf",
  },
  {
    id: 4,
    type: "pdf",
    title: "Brochure - HIV/AIDS Awareness (EN)",
    description:
      "As a deaf adolescent I should strive to fight and protect themselves and others against HIV AIDS and STDs.",
    link: "/resources/hiv-awareness-en.pdf",
  },
  {
    id: 5,
    type: "pdf",
    title: "Brochure - Pregnancy & Safe Abortion (EN)",
    description:
      "As a deaf adolescent I have to understand pregnancy, contraception, and safe abortion.",
    link: "/resources/pregnancy-brochure-en.pdf",
  },
  {
    id: 6,
    type: "pdf",
    title: "Anatomy of Reproductive Organs",
    description: "Understanding the anatomy of my reproductive organs.",
    link: "/resources/anatomy-brochure.pdf",
  },
  {
    id: 7,
    type: "pdf",
    title: "Brochure - Sexual Health (Kinyarwanda)",
    description: "RNADW BROCHURE - GUFATA IBYEMEZO BITABANGAMIYE UBUZIMA",
    link: "/resources/sexual-health-kiny.pdf",
  },
  {
    id: 8,
    type: "pdf",
    title: "Brochure - HIV/AIDS (Kinyarwanda)",
    description: "KWIRINDA NO KURINDA ABANDI VIRUSI ITERA SIDA",
    link: "/resources/hiv-kiny.pdf",
  },
  {
    id: 9,
    type: "pdf",
    title: "Gender Equality Guide",
    description: "A comprehensive guide on promoting gender equality.",
    link: "/resources/gender-equality-guide.pdf",
  },
  {
    id: 10,
    type: "link",
    title: "UN Women Website",
    description: "Official UN Women global portal.",
    link: "https://www.unwomen.org",
  },
  {
    id: 11,
    type: "video",
    title: "SRHR Educational Talk",
    description: "Watch this video on youth and sexual health rights.",
    link: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
  },
  {
    id: 12,
    type: "pdf",
    title: "CEDAW Explained",
    description: "Download this easy-to-understand guide to CEDAW.",
    link: "/resources/cedaw-explained.pdf",
  },
];

const ResourceCard = ({ type, title, description, link }) => {
  const iconMap = {
    pdf: <FaFilePdf className="text-red-600 text-3xl" />,
    link: <FaExternalLinkAlt className="text-blue-600 text-3xl" />,
    video: <FaVideo className="text-purple-600 text-3xl" />,
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm w-full">
      <div className="flex items-center gap-4 mb-4">
        {iconMap[type]}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 transition px-4 py-2 rounded-lg"
      >
        {type === "pdf" ? "Download PDF" : type === "video" ? "Watch Video" : "Visit Link"}
      </a>
    </div>
  );
};

const Resources = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = allResources.filter((res) => {
    const matchesType = filter === "all" || res.type === filter;
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-yellow-100 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Resources</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Access official guides, videos, and helpful links related to gender equality, SRHR, and CEDAW.
        </p>
      </div>

      {/* Filter + Search */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["all", "pdf", "video", "link"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full border font-medium ${
                filter === type
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-yellow-100"
              }`}
            >
              {type === "all" ? "All" : type.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Resource Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {filteredResources.length ? (
            filteredResources.map((res) => <ResourceCard key={res.id} {...res} />)
          ) : (
            <p className="text-center text-gray-600 col-span-full">No resources found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
