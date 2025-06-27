import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../assets/images/OurProjects/img_feliciacre.png";
import img2 from "../assets/images/OurProjects/img_gisvicAcademy.png";
import img3 from "../assets/images/OurProjects/img_opemond.png";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const ourProjects = [img1, img2, img3];
  const testimonials = [
    {
      quote: "Working with Gisvic was an incredible experience...",
      name: "Sarah Johnson",
      title: "CEO | TechStart Solutions",
      avatar: "SJ"
    },
    {
      quote: "The fintech solution Gisvic built for us transformed...",
      name: "Michael Chen",
      title: "CTO | PayFlow Systems",
      avatar: "MC"
    },
    {
      quote: "Gisvic's business automation solution streamlined...",
      name: "Emma Thompson",
      title: "Operations Director | FlowCorp",
      avatar: "ET"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % ourProjects.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + ourProjects.length) % ourProjects.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">OUR PROJECTS</h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mt-4">
            Don't just take our word for it – hear from the businesses we've helped transform.
          </p>
        </div>

        {/* Navigation & Cards */}
        <div className="relative flex items-center justify-center space-x-4">
          {/* Prev Button - Desktop */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Project Image Card */}
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl transition-all duration-500">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative w-full h-64 sm:h-96">
                <img
                  src={ourProjects[currentTestimonial]}
                  alt="Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Next Button - Desktop */}
          <button
            onClick={nextTestimonial}
            className="hidden md:flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden justify-center space-x-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {ourProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
