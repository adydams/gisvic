import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../assets/images/OurProjects/img_feliciacre.png"
import img2 from "../assets/images/OurProjects/img_gisvicAcademy.png"
import img3 from "../assets/images/OurProjects/img_opemond.png"

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const ourProjects =[ img1, img2, img3]
  const testimonials = [
    {
      quote: "Working with Gisvic was an incredible experience. They delivered a mobile app that exceeded our expectations. The team was professional, responsive, and truly understood our business needs. Our productivity has increased by 40% since implementation.",
      name: "Sarah Johnson",
      title: "CEO | TechStart Solutions",
      avatar: "SJ"
    },
    {
      quote: "The fintech solution Gisvic built for us transformed our payment processing completely. Their attention to security and user experience is outstanding. We've seen a 60% improvement in transaction efficiency.",
      name: "Michael Chen",
      title: "CTO | PayFlow Systems",
      avatar: "MC"
    },
    {
      quote: "Gisvic's business automation solution streamlined our entire workflow. What used to take hours now takes minutes. Their ongoing support and expertise have been invaluable to our growth.",
      name: "Emma Thompson",
      title: "Operations Director | FlowCorp",
      avatar: "ET"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="pt-15 pb-5 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
        
      <div className=" mx-auto sm:px-4 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl pb-4 sm:text-5xl font-bold text-white">
            OUR PROJECTS
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto pb-2">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center ">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="hidden md:flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Testimonial Cards */}
            <div className="flex space-x-6 overflow-hidden">
              {ourProjects.map((testimonial, index) => {
                const isActive = index === currentTestimonial;
                const isNext = index === (currentTestimonial + 1) % testimonials.length;
                const isPrev = index === (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                
                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      isActive
                        ? 'opacity-100 scale-100 translate-x-0'
                        : isNext
                        ? 'opacity-60 scale-95 translate-x-4 hidden lg:block'
                        : isPrev
                        ? 'opacity-60 scale-95 -translate-x-4 hidden lg:block'
                        : 'opacity-0 scale-90 hidden'
                    }`}
                  >
                    <div className="bg-white  p-4 w-[550px] h-[550px] shadow-sm ">
                    <div className="relative w-[500px] max-w-7xl h-[500px] md:h-[500px] mx-auto shadow-xl overflow-hidden">
                      <img
                        src={testimonial}
                        alt="Project"
                        className="w-full h-full rounded-2xl "
                      />
                    </div>

 
                      {/* <div className="mb-6">
                        <div className="text-6xl text-blue-200 mb-4">"</div>
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                          {testimonial.quote}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {testimonial.avatar}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonial.title}
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextTestimonial}
              className="hidden md:flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-white scale-125'
                    : 'bg-white/20 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
