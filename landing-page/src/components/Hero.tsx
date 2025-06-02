import { Headset, ShoppingCart } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [buyersCount, setBuyersCount] = useState(0);
  const [inquiriesCount, setInquiriesCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

  useEffect(() => {
    const animateCount = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number = 2000) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * target);
        setter(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    // Start animations with slight delays for staggered effect
    animateCount(setBuyersCount, 26000000, 2500);
    setTimeout(() => animateCount(setInquiriesCount, 400000, 2000), 300);
    setTimeout(() => animateCount(setCountriesCount, 200, 1500), 600);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-red-400 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-400 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">Sell on 1mdm.com</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Reach millions of B2B buyers globally
              </h1>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Start selling
              </button>
              <button className="border-2 border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Chat with consultant
              </button>
            </div>
          </div>

          {/* Right side - Statistics and globe visualization */}
          <div className="relative">
            {/* Central globe/world visualization */}
            <div className="relative mx-auto w-80 h-80 flex items-center justify-center">
              {/* Globe background with dotted pattern */}
              <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full relative overflow-hidden opacity-80">
                {/* Dotted pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-50"></div>
                {/* Orbital rings */}
                <div className="absolute inset-0 border-2 border-orange-300 border-dashed rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-4 border border-orange-200 border-dotted rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              </div>
              
              {/* Floating statistics */}
              <div className="absolute -top-4 -right-8 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-2xl font-bold text-gray-900">{formatNumber(buyersCount)}</div>
                <div className="text-sm text-gray-600">active buyers globally</div>
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-2xl font-bold text-gray-900">{formatNumber(inquiriesCount)}</div>
                <div className="text-sm text-gray-600">product inquiries daily</div>
              </div>
              
              <div className="absolute -bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-2xl font-bold text-gray-900">{formatNumber(countriesCount)}</div>
                <div className="text-sm text-gray-600">countries and regions represented</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed buttons in bottom right corner */}
      <div className="fixed bottom-15 right-12 space-y-3 z-50">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full shadow-lg font-semibold text-sm transition-colors duration-200 flex items-center gap-2 w-full">
          <ShoppingCart />
          Start Selling
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full shadow-lg font-semibold text-sm transition-colors duration-200 flex items-center gap-2 w-full">
          <Headset />
          Customer Service
        </button>
      </div>

      {/* Video section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              1mdm.com is a leading ecommerce platform that helps SMEs go global
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="1MDM Platform Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Benefits list */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Connect with millions of business buyers from around the world.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Get the tools and know-how to build a successful ecommerce presence for your business.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Pocket more from each sale, with take rates as low as 0% in some cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red banner section */}
      <div className="bg-red-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Largest number of products & categories of medical devices on a single place - 1mdm.com
          </h2>
          <p className="text-white text-lg">
            Connect with buyers worldwide for your product & start selling now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
