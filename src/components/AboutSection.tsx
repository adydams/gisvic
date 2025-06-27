import React from "react";
import { Star, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
            About <span className="font-normal text-blue-600">Gisvic</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="prose prose-lg prose-gray mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              <strong className="text-blue-600">Gisvic</strong> is a forward-thinking software development company dedicated to solving business problems through innovative technology solutions. We believe that great software should not only function flawlessly but also create meaningful impact for businesses and their users.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team is passionate about leveraging cutting-edge technologies to build solutions that are scalable, secure, and user-friendly. Whether you're a startup looking to launch your first mobile app or an established enterprise seeking to modernize your systems, we're here to turn your vision into reality.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We're committed to building long-term partnerships with our clients, delivering solutions that grow with your business and adapt to changing market demands. Every project we undertake is an opportunity to push the boundaries of what's possible with technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions for modern challenges</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">Excellence in every detail and interaction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">Long-term relationships built on trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
