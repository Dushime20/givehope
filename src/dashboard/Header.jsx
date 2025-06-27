import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 top-0 sticky">
      {/* Left side - Logo or Title */}
      <div className="text-xl font-semibold text-blue-600">
        Admin Panel
      </div>

      {/* Right side - Notification + Profile */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-blue-600 relative">
          <IoNotificationsOutline className="text-2xl" />
          {/* Optional: red dot for notification count */}
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="text-gray-600 hover:text-blue-600">
          <FaUserCircle className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
