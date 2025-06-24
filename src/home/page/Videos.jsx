import React from "react";
import VideoCard from "../../home/layout/VideoCard";

const videosData = {
  sgBV_VAWG: [
    {
      videoId: "dQw4w9WgXcQ",
      title: "Understanding SGBV",
      description: "An introduction to Sexual and Gender-Based Violence.",
    },
    {
      videoId: "kxopViU98Xo",
      title: "VAWG Awareness",
      description: "Violence Against Women and Girls awareness video.",
    },
  ],
  cedaw: [
    {
      videoId: "Zi_XLOBDo_Y",
      title: "CEDAW Overview",
      description: "The Convention on the Elimination of All ..",
    },
    {
      videoId: "e-ORhEE9VVg",
      title: "CEDAW in Action",
      description: "How CEDAW impacts communities worldwide.",
    },
  ],
  srhr_cse: [
    {
      videoId: "V-_O7nl0Ii0",
      title: "SRHR Explained",
      description: "Sexual and Reproductive Health and Rights basics.",
    },
    {
      videoId: "60ItHLz5WEA",
      title: "Comprehensive Sexuality Education",
      description: "What is CSE and why it matters.",
    },
  ],
};

const VideoSection = ({ title, videos }) => (
  <section className="py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-xl md:text-xl font-bold text-gray-800 mb-10 text-left border-l-4 border-yellow-400 pl-4">
      {title}
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
      {videos.map(({ videoId, title, description }) => (
        <div key={videoId} className="w-full max-w-sm">
          <VideoCard videoId={videoId} title={title} description={description} />
        </div>
      ))}
    </div>
  </div>
</section>

);

const Videos = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="mt-32">
        <h1 className="text-3xl font-bold text-center mb-8">Our Video Gallery</h1>
      </div>
      {/* Section 1: SGBV / VAWG */}
      <VideoSection title="SGBV / VAWG Videos" videos={videosData.sgBV_VAWG} />

      {/* Section 2: CEDAW */}
      <VideoSection title="CEDAW" videos={videosData.cedaw} />

      {/* Section 3: SRHR / CSE */}
      <VideoSection title="SRHR / CSE" videos={videosData.srhr_cse} />
    </div>
  );
};

export default Videos;
