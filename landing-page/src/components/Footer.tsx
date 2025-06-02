import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold mb-2">1MDM</h2>
            <p className="text-sm text-gray-400">One Medical Devices</p>
            <p className="text-sm text-gray-400">Market Place</p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Sell on 1MDM</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Brands</a></li>
            </ul>
          </div>

          {/* Press Room & Policies Links */}
          <div>
            <h3 className="font-semibold mb-4">Press Room</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="#" className="hover:text-gray-300">Images & B-roll</a></li>
            </ul>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Delivery Information</a></li>
            </ul>
          </div>

          {/* Reach Us Links */}
          <div>
            <h3 className="font-semibold mb-4">Reach Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Corporate Information</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 1MDM <span role="img" aria-label="lightning">⚡️</span> by SuperLabs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
