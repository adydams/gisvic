import React from "react";
import { ArrowRight } from "lucide-react";
import workspace from "../assets/images/img_workspace2.jpg"

interface StatsProps {
  stats: Array<{ number: string; label: string }>;
}

const StatsSection = ({ stats }: StatsProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
    {stats.map((stat, index) => (
      <div key={index} className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm">
        <div className="text-3xl font-light text-gray-900 mb-2">{stat.number}</div>
        <div className="text-sm text-gray-600">{stat.label}</div>
      </div>
    ))}
  </div>
);

interface HeroSectionProps {
  stats: Array<{ number: string; label: string }>;
}

const HeroSection = ({ stats }: HeroSectionProps) => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${workspace})`,
      //  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
      
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100/90 text-blue-800 backdrop-blur-sm">
              ✨ Welcome to Modern Software Solutions
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 mb-8 leading-tight">
            Software Solutions for{" "}
            <span className="font-stretch-50% text-blue-800">Modern Business</span>
          </h1>
          
          <p className="text-xl text-slate-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            We create innovative technology solutions that solve real-world problems and drive business success. 
            From mobile apps to fintech platforms, we build software that makes a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium backdrop-blur-sm"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-lg hover:border-white/50 hover:bg-white/10 transition-colors font-medium backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* <StatsSection stats={stats} /> */}
      </div>
    </section>
  );
};

export default HeroSection;
