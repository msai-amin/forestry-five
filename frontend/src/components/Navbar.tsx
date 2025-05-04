import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scrolling to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if the current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-gray-900 shadow-md py-2' : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isScrolled ? 'bg-indigo-600' : 'bg-white'}`}>
                <svg 
                  className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-indigo-600'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
                  />
                </svg>
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
                ForestryFIVE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link 
              to="/courses" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-opacity-80
                ${isActive('/courses') 
                  ? (isScrolled ? 'bg-indigo-100 text-indigo-700' : 'bg-white bg-opacity-20 text-white')
                  : (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-10')
                }`}
            >
              Courses
            </Link>
            <Link 
              to="/login" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-opacity-80
                ${isActive('/login') 
                  ? (isScrolled ? 'bg-indigo-100 text-indigo-700' : 'bg-white bg-opacity-20 text-white')
                  : (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-10')
                }`}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className={`px-4 py-2 rounded-md text-sm font-medium shadow-sm transition-all duration-200
                ${isScrolled 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-white text-indigo-600 hover:bg-gray-100'}`}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isScrolled ? 'bg-white' : 'bg-indigo-900'}`}>
          <Link 
            to="/courses" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/courses') 
                ? (isScrolled ? 'bg-indigo-100 text-indigo-700' : 'bg-white bg-opacity-20 text-white')
                : (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-10')
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link 
            to="/login" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/login') 
                ? (isScrolled ? 'bg-indigo-100 text-indigo-700' : 'bg-white bg-opacity-20 text-white')
                : (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-10')
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link 
            to="/signup" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/signup') 
                ? (isScrolled ? 'bg-indigo-100 text-indigo-700' : 'bg-white bg-opacity-20 text-white')
                : (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-10')
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 