import React from 'react';
import { ChevronRight, Globe } from 'lucide-react';

const DomainParking = () => {
  const navigationCards = [
    {
      title: 'Company Registration',
      href: '#'
    },
    {
      title: 'Professional Certification',
      href: '#'
    },
    {
      title: 'Exam Practice',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large geometric shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-slate-600/20 transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-slate-500/15 transform rotate-12"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-slate-600/10 transform -rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-slate-500/20 transform rotate-45"></div>
          
          {/* Medium geometric shapes */}
          <div className="absolute top-60 left-1/3 w-20 h-20 bg-slate-400/15 transform rotate-30"></div>
          <div className="absolute top-80 right-1/3 w-16 h-16 bg-slate-500/10 transform -rotate-30"></div>
          <div className="absolute bottom-60 left-1/2 w-24 h-24 bg-slate-600/15 transform rotate-60"></div>
          
          {/* Small geometric accents */}
          <div className="absolute top-32 left-1/2 w-12 h-12 bg-slate-300/10 transform rotate-45"></div>
          <div className="absolute bottom-32 right-1/4 w-14 h-14 bg-slate-400/15 transform -rotate-45"></div>
        </div>
      </div>

      {/* Top Banner */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center text-sm text-gray-700">
            <div className="flex items-center mr-4">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              <span className="font-bold text-blue-600">dynadot</span>
            </div>
            <span>The domain has expired and may be available at </span>
            <a href="#" className="text-blue-600 underline mx-1">auction</a>
            <span>. </span>
            <a href="#" className="text-blue-600 underline mx-1">Register</a>
            <span> or </span>
            <a href="#" className="text-blue-600 underline mx-1">transfer</a>
            <span> domains to </span>
            <a href="#" className="text-blue-600 underline mx-1">Dynadot.com</a>
            <span> to save more and </span>
            <a href="#" className="text-blue-600 underline mx-1">build your website</a>
            <span> for free!</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
        {/* Domain Name */}
        <div className="text-center mb-12">
          <h1 className="text-white text-3xl md:text-4xl font-light mb-8">
            americanexamservices.com
          </h1>
          <div className="text-slate-300 text-sm mb-8">
            Related searches
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="w-full max-w-2xl space-y-4">
          {navigationCards.map((card, index) => (
            <a 
              key={index} 
              href={card.href}
              className="block bg-slate-800/60 backdrop-blur-sm border-2 border-slate-600/50 rounded-2xl p-6 text-white hover:bg-slate-700/60 transition-all duration-300 hover:border-slate-500/70 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{card.title}</span>
                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-400 text-xs">
          <p>2025 Copyright | All Rights Reserved</p>
          <div className="mt-2">
            <a href="#" className="hover:text-slate-300 transition-colors underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainParking;
