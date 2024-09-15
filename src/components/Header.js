import React from "react";
import logo from "../assets/Logo.png"; // Assuming your logo is in src/assets

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-14 bg-gray-50 "> {/* Added p-8 for more padding */}
      {/* Left - Logo and Search Bar in the same line */}
      <div className="flex items-center gap-8 mx-10 ">
        <img src={logo} alt="Trademarkia" className="w-40" /> {/* Adjust logo size */}
        <div className="flex items-center gap-10">
          <input
            type="text"
            className="border border-gray-300  rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Trademark Here eg. Mickey Mouse"
          />
          <button className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Header;