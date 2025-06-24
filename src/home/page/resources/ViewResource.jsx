import React from "react";
import { useParams } from "react-router-dom";

const resourceFiles = {
  1: "/resources/sign-language-alphabet.pdf",
  2: "/resources/sign-language-numbers.pdf",
  3: "/resources/consent-brochure-en.pdf",
  4: "/resources/hiv-awareness-en.pdf",
  5: "/resources/pregnancy-brochure-en.pdf",
  6: "/resources/anatomy-brochure.pdf",
  7: "/resources/sexual-health-kiny.pdf",
  8: "/resources/hiv-kiny.pdf",
  9: "/resources/gender-equality-guide.pdf",
  12: "/resources/cedaw-explained.pdf",
};

const ViewResource = () => {
  const { id } = useParams();
  const pdfUrl = resourceFiles[id];

  if (!pdfUrl) {
    return <div className="text-center mt-20 text-red-600">Resource not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">View Resource</h1>
      <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <iframe
          src={pdfUrl}
          title="Document Viewer"
          width="100%"
          height="800px"
          className="border-none"
        />
      </div>
    </div>
  );
};

export default ViewResource;