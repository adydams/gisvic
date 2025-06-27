import React from "react";
import { Star, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-snug">
            About <span className="font-semibold text-blue-600">Gisvic</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm">
          {/* Paragraphs */}
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-6 max-w-4xl mx-auto">
            <p>
              <strong className="text-blue-600">Gisvic</strong> is a forward-thinking software development company dedicated to solving business problems through innovative technology solutions. We believe that great software should not only function flawlessly but also create meaningful impact for businesses and their users.
            </p>
            <p>
              Our team is passionate about leveraging cutting-edge technologies to build solutions that are scalable, secure, and user-friendly. Whether you're a startup looking to launch your first mobile app or an established enterprise seeking to modernize your systems, we're here to turn your vision into reality.
            </p>
            <p>
              We're committed to building long-term partnerships with our clients, delivering solutions that grow with your business and adapt to changing market demands. Every project we undertake is an opportunity to push the boundaries of what's possible with technology.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm sm:text-base">Cutting-edge solutions for modern challenges</p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm sm:text-base">Excellence in every detail and interaction</p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm sm:text-base">Long-term relationships built on trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
