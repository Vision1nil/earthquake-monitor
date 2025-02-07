import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // We'll use navigation links that match the routes we defined in App.jsx
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Website logo/name on the left */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800">
              Earthquake Monitor
            </span>
          </Link>

          {/* Navigation links */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/map"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Map
            </Link>
            <Link
              to="/news"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              News
            </Link>
            <Link
              to="/safety"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Safety
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
