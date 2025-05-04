import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              ForestryFIVE
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/courses" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Courses
            </Link>
            <Link to="/login" className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Sign In
            </Link>
            <Link to="/signup" className="bg-white text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 