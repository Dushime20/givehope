import React from "react";
import { FaFilePdf, FaExternalLinkAlt, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResourceCard = ({ id, type, title, description, link }) => {
  const iconMap = {
    pdf: <FaFilePdf className="text-red-600 text-3xl" />,
    link: <FaExternalLinkAlt className="text-yellow-600 text-3xl" />,
    video: <FaVideo className="text-purple-600 text-3xl" />,
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full">
      <div className="flex items-center gap-4 mb-4">
        {iconMap[type]}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      {type === "pdf" ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white bg-blue-600 hover:bg-blue-400 transition px-4 py-2 rounded-lg"
        >
          Read Now
        </a>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white bg-blue-600 hover:bg-blue-400 transition px-4 py-2 rounded-lg"
        >
          {type === "video" ? "Watch Video" : "Visit Link"}
        </a>
      )}
    </div>
  );
};

export default ResourceCard;
