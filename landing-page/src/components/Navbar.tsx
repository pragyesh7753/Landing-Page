import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top section with tagline and account links */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <span className="text-gray-600">
              World's Largest Medical Equipment Market Place
            </span>
            <div className="flex items-center space-x-4">
              <a href="/account" className="text-gray-600 hover:text-red-600 transition-colors">
                My account
              </a>
              <span className="text-gray-400">|</span>
              <a href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="1MDM Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              About Us
            </a>
            <a href="/story" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Our Story
            </a>
            <a href="/sell" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Sell on 1MDM
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Pricing
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-red-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
