import React, { useState, useEffect } from "react";
import { FaFilePdf, FaExternalLinkAlt, FaVideo, FaSearch } from "react-icons/fa";
import ResourceCard from "../../../components/ui/ResourceCard";
import { Link } from "react-router-dom";

const Resources = () => {
  // Sample resource data - replace with your actual data
  const allResources = [
    {
      id: 1,
      type: "pdf",
      title: "Sign Language Alphabet",
      description: "Learn the sign language alphabet with this comprehensive guide.",
      link: "/resources/sign-language-alphabet.pdf"
    },
    {
      id: 2,
      type: "pdf",
      title: "Sign Language Numbers",
      description: "Guide to signing numbers in sign language.",
      link: "/resources/sign-language-numbers.pdf"
    },
    {
      id: 3,
      type: "video",
      title: "SRHR Explained",
      description: "Video explaining Sexual and Reproductive Health and Rights.",
      link: "https://example.com/video1"
    },
    {
      id: 4,
      type: "link",
      title: "CEDAW Overview",
      description: "Comprehensive overview of the CEDAW convention.",
      link: "https://example.com/cedaw"
    },
    {
      id: 5,
      type: "pdf",
      title: "Consent Brochure",
      description: "Educational material about consent in relationships.",
      link: "/resources/consent-brochure-en.pdf"
    },
    {
      id: 6,
      type: "video",
      title: "HIV Awareness",
      description: "Educational video about HIV prevention and awareness.",
      link: "https://example.com/video2"
    },
    {
      id: 7,
      type: "link",
      title: "Gender Equality Guide",
      description: "Online resource for understanding gender equality.",
      link: "https://example.com/gender-equality"
    },
    {
      id: 8,
      type: "pdf",
      title: "Anatomy Brochure",
      description: "Illustrated guide to human anatomy.",
      link: "/resources/anatomy-brochure.pdf"
    }
  ];

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResources, setFilteredResources] = useState(allResources);

  useEffect(() => {
    let results = allResources;
    
    // Apply type filter
    if (filter !== "all") {
      results = results.filter(resource => resource.type === filter);
    }
    
    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(resource => 
        resource.title.toLowerCase().includes(term) || 
        resource.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredResources(results);
  }, [filter, searchTerm, allResources]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Large yellow banner with headline */}
      <div className="bg-blue-200 rounded-xl shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold text-center text-grey mb-4">Our Resources</h1>
        <p className="text-xl text-center text-grey-100 max-w-3xl mx-auto">
          Access our comprehensive collection of guides, videos, and links about 
          Sexual and Reproductive Health and Rights (SRHR) and the Convention on 
          the Elimination of all Forms of Discrimination Against Women (CEDAW).
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {["all", "pdf", "video", "link"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full capitalize transition-colors ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {type === "all" ? "All Resources" : type}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="max-w-md mx-auto mb-12 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search resources..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Resource grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700">No resources found</h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* PDF Viewer is handled by the separate ViewResource component */}
    </div>
  );
};

export default Resources;