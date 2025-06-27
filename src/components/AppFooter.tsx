import React from "react";
import logo from "../assets/images/img_gisvicLogo.jpg"

const AppFooter = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-14 h-10 rounded-lg flex items-center justify-center">
              <img src={logo} className=" rounded-xl"/>
             
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Gisvic</h1>
              <p className="text-xs text-gray-500">Software Solutions</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500">
              © 2025 Gisvic. Building the future, one solution at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;