
import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/img_gisvicLogo.jpg"

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-10 rounded-lg flex items-center justify-center">
              <img src={logo} className=" rounded-xl"/>
             
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Gisvic</h1>
              <p className="text-xs text-gray-500">Software Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;