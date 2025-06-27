import { useState } from "react";
import { Heart } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mr-3">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-slate-600">GISVIC</h1>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">Care Services</a>
            <a href="#caregivers" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">Our Caregivers</a>
            <a href="#contact" className="text-gray-700 hover:text-slate-600 transition-colors font-medium">Contact Us</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-slate-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-slate-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-slate-600">About Us</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-slate-600">Care Services</a>
            <a href="#caregivers" className="block px-3 py-2 text-gray-700 hover:text-slate-600">Our Caregivers</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-slate-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
