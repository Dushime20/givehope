import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaComment,
  FaLuggageCart,
  FaUsers,
  FaVideo,
  FaArchive,
  FaLayerGroup,
  FaProjectDiagram,
  FaRegNewspaper,
} from "react-icons/fa";
import { GrOverview } from "react-icons/gr";
import { FaPhotoFilm, FaProductHunt } from "react-icons/fa6";
import { TbMessageReportFilled } from "react-icons/tb";
import { IoIosLogOut, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdLibraryBooks, MdOutlineVideoLibrary, MdManageAccounts } from "react-icons/md";

const SideBar = () => {
  const [openSections, setOpenSections] = useState({
    content: true,
    media: false,
    management: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="h-screen w-56 bg-[#f3f7ff] text-blue-700 flex flex-col  overflow-y-auto">
      {/* Title */}
      <div className="p-5 text-xl font-bold text-center border-b border-gray-200">
        RNADW <span className="text-green-600">"UMUCYO"</span>
      </div>

      <nav className="mt-4 flex-1">
        {/* Content Section */}
        <SidebarSection
          title="Content"
          icon={<MdLibraryBooks />}
          isOpen={openSections.content}
          onToggle={() => toggleSection("content")}
          items={[
            { to: "/dashboard/overview", icon: <GrOverview />, label: "Overview" },
            { to: "/dashboard/blog", icon: <FaRegNewspaper />, label: "Blog" },
            { to: "/dashboard/resource", icon: <FaLayerGroup />, label: "Resource" },
          
            { to: "/dashboard/project", icon: <FaProjectDiagram />, label: "Project" },
          ]}
        />

        {/* Media Section */}
        <SidebarSection
          title="Media"
          icon={<MdOutlineVideoLibrary />}
          isOpen={openSections.media}
          onToggle={() => toggleSection("media")}
          items={[
            { to: "/dashboard/video", icon: <FaVideo />, label: "Video" },
            { to: "/dashboard/image", icon: <FaPhotoFilm />, label: "Image" },
          ]}
        />

        {/* Management Section */}
        <SidebarSection
          title="Management"
          icon={<MdManageAccounts />}
          isOpen={openSections.management}
          onToggle={() => toggleSection("management")}
          items={[
            { to: "/dashboard/team", icon: <FaUsers />, label: "Team" },
            { to: "/dashboard/user-settings", icon: <FaUsers />, label: "User Settings" },
            { to: "/dashboard/suggestions", icon: <FaComment />, label: "Suggestions" },
            { to: "/dashboard/reports", icon: <TbMessageReportFilled />, label: "Reports" },
          ]}
        />
      </nav>

      {/* Logout */}
      <div className="p-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition"
        >
          <IoIosLogOut className="text-lg" />
          Logout
        </Link>
      </div>
    </div>
  );
};

const SidebarSection = ({ title, icon, isOpen, onToggle, items }) => (
  <div>
    <button
      onClick={onToggle}
      className="flex justify-between items-center w-full px-4 py-3 font-semibold text-left text-gray-700 hover:bg-gray-100 transition"
    >
      <span className="flex items-center gap-2">
        {icon}
        {title}
      </span>
      {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
    </button>
    {isOpen && (
      <ul>
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </ul>
    )}
  </div>
);

const SidebarItem = ({ to, icon, label }) => (
  <li>
    <Link
      to={to}
      className="flex items-center px-6 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
    >
      <span className="text-base">{icon}</span>
      <span className="ml-3">{label}</span>
    </Link>
  </li>
);

export default SideBar;
