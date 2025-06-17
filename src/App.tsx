// import  { useState, useEffect } from 'react';
// import { Menu, X, ChevronRight, MapPin, Globe, BarChart3,  Play, Star, Check } from 'lucide-react';
// import logo from "../assets/images/img_gisvicLogo.jpg";
// const GISVICWebsite = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const services = [
//     {
//       icon: <MapPin className="w-8 h-8" />,
//       title: "GIS Mapping Solutions",
//       description: "Advanced geographic information systems for spatial analysis and visualization",
//       features: ["Spatial Data Analysis", "Custom Map Creation", "Location Intelligence"]
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Data Visualization",
//       description: "Transform complex data into intuitive visual representations",
//       features: ["Interactive Dashboards", "Real-time Analytics", "Custom Visualizations"]
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Business Intelligence",
//       description: "Comprehensive analytics solutions for data-driven decision making",
//       features: ["Performance Metrics", "Predictive Analytics", "Strategic Insights"]
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Projects Completed" },
//     { number: "50+", label: "Enterprise Clients" },
//     { number: "15+", label: "Years Experience" },
//     { number: "99%", label: "Client Satisfaction" }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       position: "CTO, TechCorp",
//       content: "GISVIC transformed our data visualization capabilities. Their GIS solutions are unmatched.",
//       rating: 5
//     },
//     {
//       name: "Michael Chen",
//       position: "Director, Urban Planning",
//       content: "The spatial analysis tools provided by GISVIC have revolutionized our planning processes.",
//       rating: 5
//     },
//     {
//       name: "Emily Rodriguez",
//       position: "Head of Analytics, DataFlow",
//       content: "Professional, innovative, and results-driven. GISVIC delivers excellence every time.",
//       rating: 5
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//              <div className="flex items-center space-x-3 text-2xl font-bold text-gray-900">
//                 <img src={logo} alt="GISVIC Logo" className="w-24 h-24 object-contain rounded-2xl" />
//                 <span>GISVIC</span>
//                 <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-red-500 rounded-full"></div>
//                 </div>

//             </div>

//             <nav className="hidden lg:flex space-x-8">
//               <div className="relative group">
//                 <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
//                   About Us
//                   <ChevronRight className="w-4 h-4 ml-1 rotate-90 transition-transform group-hover:rotate-180" />
//                 </button>
//               </div>
//               <div className="relative group">
//                 <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
//                   What We Do
//                   <ChevronRight className="w-4 h-4 ml-1 rotate-90 transition-transform group-hover:rotate-180" />
//                 </button>
//               </div>
//               <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                 GIS Solutions
//               </a>
//               <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                 Data Visualization
//               </a>
//               <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
//                 News & Insights
//               </a>
//             </nav>

//             <div className="hidden lg:flex items-center space-x-2">
//               <div className="w-8 h-6 bg-green-600 rounded flex items-center justify-center">
//                 <div className="w-4 h-3 bg-white rounded-sm"></div>
//               </div>
//             </div>

//             <button
//               className="lg:hidden"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-white border-t shadow-lg">
//             <div className="px-4 py-2 space-y-2">
//               {['About Us', 'What We Do', 'GIS Solutions', 'Data Visualization', 'News & Insights'].map((item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-0"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="relative min-h-screen bg-gray-50 overflow-hidden">
//         {/* Light blue banner */}
//         <div className="absolute top-0 w-full h-20 bg-blue-100 flex items-center justify-center">
//           <p className="text-blue-800 text-sm font-medium">
//             Pioneering the future of spatial intelligence and data visualization
//           </p>
//         </div>

//         <div className="pt-32 pb-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div className="space-y-8">
//                 <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                   The Gateway to <br />
//                   Africa's{' '}
//                   <span className="text-blue-600">Geospatial</span><br />
//                   Intelligence
//                 </h1>
//                 <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
//                   We create and sustain a geospatial ecosystem that helps organizations evolve,
//                   businesses grow and individuals make informed decisions through spatial intelligence.
//                 </p>

//                 {/* Decorative dots */}
//                 <div className="flex space-x-2 pt-4">
//                   <div className="grid grid-cols-8 gap-1">
//                     {Array.from({ length: 64 }, (_, i) => (
//                       <div
//                         key={i}
//                         className="w-2 h-2 bg-blue-400 rounded-full opacity-70"
//                         style={{
//                           animationDelay: `${i * 0.1}s`,
//                           animation: 'pulse 2s infinite'
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Right Video Section */}
//               <div className="relative">
//                 <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-2xl">
//                   {/* Video placeholder with city overlay */}
//                   <div className="relative h-80 lg:h-96 bg-gradient-to-br from-blue-900 to-blue-700">
//                     {/* Simulated city background */}
//                     <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group">
//                         <Play className="w-8 h-8 text-blue-600 ml-1 group-hover:text-blue-700" />
//                       </div>
//                     </div>

//                     {/* Overlay grid pattern */}
//                     <div className="absolute inset-0 opacity-20">
//                       <div className="grid grid-cols-12 h-full">
//                         {Array.from({ length: 12 }, (_, i) => (
//                           <div key={i} className="border-r border-white border-opacity-20 h-full"></div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* City silhouette effect */}
//                     <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent"></div>

//                     {/* Floating elements */}
//                     <div className="absolute top-8 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
//                     <div className="absolute top-16 right-12 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
//                     <div className="absolute bottom-20 left-16 w-4 h-4 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
//                   </div>
//                 </div>

//                 {/* Decorative corner dots */}
//                 <div className="absolute -bottom-6 -right-6 grid grid-cols-6 gap-2">
//                   {Array.from({ length: 36 }, (_, i) => (
//                     <div
//                       key={i}
//                       className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div
//             key={index}
//             className="text-center group bg-gradient-to-r from-blue-600 to-purple-600 h-48 rounded-xl flex flex-col justify-center items-center p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//             <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
//                 {stat.number}
//             </div>
//             <div className="text-white font-medium">{stat.label}</div>
//             </div>

//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Parallax Section */}
//       <section className="relative h-screen overflow-hidden">
//         {/* Fixed Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-fixed"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//                               linear-gradient(45deg,
//                                 rgba(59, 130, 246, 0.1) 0%,
//                                 rgba(147, 51, 234, 0.1) 100%),
//                               url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="%23334155" stroke-width="1" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="%23475569"/><rect width="100%" height="100%" fill="url(%23grid)"/><polygon points="0,300 200,200 400,350 600,150 800,250 1000,100 1000,600 800,700 600,550 400,750 200,650 0,800" fill="%23374151" opacity="0.6"/><polygon points="100,500 300,400 500,550 700,350 900,450 1000,300 1000,1000 0,1000" fill="%231f2937" opacity="0.4"/></svg>')`
//           }}
//         >
//           {/* Animated geometric shapes */}
//           <div className="absolute inset-0">
//             <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 border-opacity-30 rotate-45 animate-spin-slow"></div>
//             <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400 border-opacity-30 rotate-12 animate-pulse"></div>
//             <div className="absolute bottom-32 left-1/3 w-40 h-40 border-2 border-cyan-400 border-opacity-20 -rotate-12 animate-spin-slow"></div>
//           </div>
//         </div>

//         {/* Scrolling Text Content */}
//         <div
//           className="relative z-10 flex items-center min-h-screen"
//           style={{
//             transform: `translateY(${scrollY * 0.3}px)`
//           }}
//         >
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//             <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
//               Africa's leading corporate
//               <br />
//               organisations depend on us to
//               <br />
//               power their{' '}
//               <span className="text-cyan-400">spatial insights</span>.
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//               From massive industries to small businesses, our turnkey
//               <br />
//               GIS solutions are suitable for every business size or type.
//             </p>

//             <div className="mt-16">
//               <h3 className="text-2xl md:text-4xl font-bold mb-6">
//                 A big part of what we do is to break
//                 <br />
//                 down barriers, ensuring that
//                 <br />
//                 <span className="text-cyan-400">geospatial technology</span> is accessible
//                 <br />
//                 to everyone.
//               </h3>
//             </div>
//           </div>
//         </div>

//         {/* Floating particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {Array.from({ length: 20 }, (_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animation: 'float 6s ease-in-out infinite'
//               }}
//             />
//           ))}
//         </div>
//       </section>

//       <style>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//       `}</style>

//       {/* Services Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Our Core Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive GIS and visualization solutions tailored to your business needs
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
//                 <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
//                 <p className="text-gray-600 mb-6">{service.description}</p>
//                 <ul className="space-y-3">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-gray-700">
//                       <Check className="w-5 h-5 text-green-500 mr-3" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="mt-6 text-blue-600 font-semibold flex items-center group-hover:text-purple-600 transition-colors">
//                   Learn More
//                   <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               What Our Clients Say
//             </h2>
//             <p className="text-xl text-gray-600">
//               Trusted by leading organizations worldwide
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
//                 <div>
//                   <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                   <div className="text-gray-600">{testimonial.position}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//             Ready to Transform Your Data?
//           </h2>
//           <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Let's discuss how GISVIC can help you unlock the power of spatial intelligence for your organization.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
//             <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex-1">
//               Start Your Project
//             </button>
//             <button className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex-1">
//               Schedule Consultation
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
//                 GISVIC
//               </div>
//               <p className="text-gray-400 mb-4">
//                 Transforming data into visual intelligence through innovative GIS solutions.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Services</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">GIS Mapping</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Data Visualization</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Business Intelligence</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Connect</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 GISVIC. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default GISVICWebsite;

// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Code, Smartphone, Users, CreditCard, Globe, Menu, X, ArrowRight, Sparkles, Zap, Star, Award, TrendingUp } from 'lucide-react';

// export default function GisvicWebsite() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [ setScrollY] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     projectDetails: ''
//   });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const services = [
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: "Mobile Solutions",
//       description: "Custom mobile applications for iOS and Android that solve real business problems and enhance user experience.",
//       gradient: "from-pink-500 to-rose-500",
//       bgGlow: "bg-pink-500/10",
//       features: ["Native iOS/Android", "Cross-platform", "UI/UX Design", "App Store Publishing"]
//     },
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Business Solutions",
//       description: "Technology-driven solutions that streamline operations, increase efficiency, and drive business growth.",
//       gradient: "from-blue-500 to-cyan-500",
//       bgGlow: "bg-blue-500/10",
//       features: ["Process Automation", "Custom Software", "System Integration", "Cloud Solutions"]
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Admin/HR Solutions",
//       description: "Comprehensive administrative and human resource management systems tailored to your organization's needs.",
//       gradient: "from-green-500 to-emerald-500",
//       bgGlow: "bg-green-500/10",
//       features: ["Employee Management", "Payroll Systems", "Performance Tracking", "Document Management"]
//     },
//     {
//       icon: <CreditCard className="w-8 h-8" />,
//       title: "Fintech Solutions",
//       description: "Secure and innovative financial technology solutions for modern banking and payment processing.",
//       gradient: "from-purple-500 to-violet-500",
//       bgGlow: "bg-purple-500/10",
//       features: ["Payment Processing", "Digital Banking", "Security & Compliance", "Blockchain Integration"]
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Website Design",
//       description: "Professional, responsive websites that represent your brand and engage your audience effectively.",
//       gradient: "from-orange-500 to-amber-500",
//       bgGlow: "bg-orange-500/10",
//       features: ["Responsive Design", "E-commerce", "SEO Optimization", "Content Management"]
//     }
//   ];

//   const stats = [
//     { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Clients" },
//     { icon: <Code className="w-6 h-6" />, number: "100+", label: "Projects Completed" },
//     { icon: <Award className="w-6 h-6" />, number: "5+", label: "Years Experience" },
//     { icon: <TrendingUp className="w-6 h-6" />, number: "99%", label: "Client Satisfaction" }
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your interest! We will get back to you soon. For immediate assistance, please reach out to us directly at hello@gisvic.com');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       projectDetails: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-purple-300 relative overflow-hidden">
//   {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Orbs */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//         <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

//         {/* Interactive Mouse Glow */}
//         <div
//           className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
//           style={{
//             left: mousePosition.x - 192,
//             top: mousePosition.y - 192,
//           }}
//         ></div>

//         {/* Animated Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
//       </div>

//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <div className="flex items-center space-x-3 group">
//               <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-110">
//                 <span className="text-white font-bold text-lg">G</span>
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Gisvic</h1>
//                 <p className="text-xs text-gray-400">Software Solutions</p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
//                 Home
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
//                 Services
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
//                 About
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
//                 Contact
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden py-4 border-t border-white/10">
//               <nav className="flex flex-col space-y-4">
//                 <a href="#home" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
//                 <a href="#services" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
//                 <a href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
//                 <a href="#contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="max-w-4xl mx-auto">
//             {/* Floating Elements */}
//             <div className="absolute top-20 left-10 animate-bounce" style={{animationDelay: '1s'}}>
//               <Sparkles className="w-6 h-6 text-blue-400" />
//             </div>
//             <div className="absolute top-32 right-10 animate-bounce" style={{animationDelay: '2s'}}>
//               <Zap className="w-6 h-6 text-purple-400" />
//             </div>

//             <div className="mb-8 inline-block">
//               <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm animate-pulse">
//                 ✨ Welcome to the Future of Software
//               </span>
//             </div>

//             <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
//                 Software Solutions for
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Modern Business
//               </span>
//             </h2>

//             <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
//               We create innovative technology solutions that solve real-world problems and drive business success.
//               From mobile apps to fintech platforms, we build software that makes a difference.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <a
//                 href="#services"
//                 className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/50"
//               >
//                 <span className="mr-2">Explore Services</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-200 rounded-xl hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 backdrop-blur-sm"
//               >
//                 Get in Touch
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
//                   <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
//                   <div className="text-gray-400 text-sm">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="mb-6 inline-block">
//               <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
//                 🚀 Our Expertise
//               </span>
//             </div>
//             <h3 className="text-4xl sm:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 Our Services
//               </span>
//             </h3>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               We specialize in creating tailored software solutions that address your unique business challenges
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${service.bgGlow}`}
//                 style={{
//                   animationDelay: `${index * 200}ms`
//                 }}
//               >
//                 {/* Glow Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <div className="text-white">
//                       {service.icon}
//                     </div>
//                   </div>
//                   <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
//                     {service.title}
//                   </h4>
//                   <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <div className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
//                         <Star className="w-3 h-3 mr-2 text-gray-600" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Hover Particles */}
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="mb-6 inline-block">
//                 <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm">
//                   💡 Our Story
//                 </span>
//               </div>
//               <h3 className="text-4xl sm:text-5xl font-bold mb-8">
//                 <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                   About Gisvic
//                 </span>
//               </h3>
//             </div>

//             <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
//               {/* Background Pattern */}
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)] pointer-events-none"></div>

//               <div className="relative z-10 text-lg text-gray-300 leading-relaxed space-y-8">
//                 <p className="text-xl">
//                   <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Gisvic</span> is a forward-thinking software development company dedicated to solving business problems through innovative technology solutions. We believe that great software should not only function flawlessly but also create meaningful impact for businesses and their users.
//                 </p>
//                 <p>
//                   Our team is passionate about leveraging cutting-edge technologies to build solutions that are scalable, secure, and user-friendly. Whether you're a startup looking to launch your first mobile app or an established enterprise seeking to modernize your systems, we're here to turn your vision into reality.
//                 </p>
//                 <p>
//                   We're committed to building long-term partnerships with our clients, delivering solutions that grow with your business and adapt to changing market demands. Every project we undertake is an opportunity to push the boundaries of what's possible with technology.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//                   <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
//                     <div className="text-2xl font-bold text-white mb-2">Innovation</div>
//                     <div className="text-gray-400">Cutting-edge solutions</div>
//                   </div>
//                   <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
//                     <div className="text-2xl font-bold text-white mb-2">Quality</div>
//                     <div className="text-gray-400">Excellence in every detail</div>
//                   </div>
//                   <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
//                     <div className="text-2xl font-bold text-white mb-2">Partnership</div>
//                     <div className="text-gray-400">Long-term relationships</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Elements */}
//               <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
//               <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="mb-6 inline-block">
//               <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm">
//                 📞 Get in Touch
//               </span>
//             </div>
//             <h3 className="text-4xl sm:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                 Let's Work Together
//               </span>
//             </h3>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Ready to transform your business with innovative software solutions? We'd love to hear about your project.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               <div className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
//                   <Mail className="w-8 h-8 text-white" />
//                 </div>
//                 <h4 className="font-semibold text-white mb-3 text-lg">Email Us</h4>
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors">hello@gisvic.com</p>
//               </div>
//               <div className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
//                   <Phone className="w-8 h-8 text-white" />
//                 </div>
//                 <h4 className="font-semibold text-white mb-3 text-lg">Call Us</h4>
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors">+234 (0) 123-456-7890</p>
//               </div>
//               <div className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-300">
//                   <MapPin className="w-8 h-8 text-white" />
//                 </div>
//                 <h4 className="font-semibold text-white mb-3 text-lg">Visit Us</h4>
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Lagos, Nigeria</p>
//               </div>
//             </div>

//             <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
//               {/* Background Effects */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

//               <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div className="group">
//                     <label className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-white transition-colors">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
//                       placeholder="Your first name"
//                       required
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-white transition-colors">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
//                       placeholder="Your last name"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="group">
//                   <label className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-white transition-colors">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="group">
//                   <label className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-white transition-colors">
//                     Project Details
//                   </label>
//                   <textarea
//                     rows={5}
//                     name="projectDetails"
//                     value={formData.projectDetails}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15 resize-none"
//                     placeholder="Tell us about your project..."
//                     required
//                   />
//                 </div>
//                 <button
//                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium cursor-pointer"
//                   onClick={() => alert('Thank you for your interest! Please reach out to us directly at hello@gisvic.com')}
//                 >
//                     </button>
//                     </form>
//               </div>
//             </div>
//           </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-3 mb-4 md:mb-0">
//               <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold">G</span>
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold">Gisvic</h1>
//                 <p className="text-xs text-gray-400">Software Solutions</p>
//               </div>
//             </div>
//             <div className="text-center md:text-right">
//               <p className="text-gray-400">
//                 © 2025 Gisvic. Building the future, one solution at a time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Mail, Phone, MapPin, Code, Smartphone, Users, CreditCard, Globe, Menu, X, ArrowRight, Sparkles, Zap, Star, Award, TrendingUp } from 'lucide-react';

// export default function GisvicWebsite() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     projectDetails: ''
//   });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrollY]);

//   const services = [
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: "Mobile Solutions",
//       description: "Custom mobile applications for iOS and Android that solve real business problems and enhance user experience.",
//       gradient: "from-indigo-500 to-purple-600",
//       bgGlow: "bg-indigo-50",
//       borderColor: "border-indigo-200",
//       hoverColor: "hover:border-indigo-400",
//       features: ["Native iOS/Android", "Cross-platform", "UI/UX Design", "App Store Publishing"]
//     },
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Business Solutions",
//       description: "Technology-driven solutions that streamline operations, increase efficiency, and drive business growth.",
//       gradient: "from-teal-500 to-cyan-600",
//       bgGlow: "bg-teal-50",
//       borderColor: "border-teal-200",
//       hoverColor: "hover:border-teal-400",
//       features: ["Process Automation", "Custom Software", "System Integration", "Cloud Solutions"]
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Admin/HR Solutions",
//       description: "Comprehensive administrative and human resource management systems tailored to your organization's needs.",
//       gradient: "from-emerald-500 to-green-600",
//       bgGlow: "bg-emerald-50",
//       borderColor: "border-emerald-200",
//       hoverColor: "hover:border-emerald-400",
//       features: ["Employee Management", "Payroll Systems", "Performance Tracking", "Document Management"]
//     },
//     {
//       icon: <CreditCard className="w-8 h-8" />,
//       title: "Fintech Solutions",
//       description: "Secure and innovative financial technology solutions for modern banking and payment processing.",
//       gradient: "from-blue-500 to-indigo-600",
//       bgGlow: "bg-blue-50",
//       borderColor: "border-blue-200",
//       hoverColor: "hover:border-blue-400",
//       features: ["Payment Processing", "Digital Banking", "Security & Compliance", "Blockchain Integration"]
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Website Design",
//       description: "Professional, responsive websites that represent your brand and engage your audience effectively.",
//       gradient: "from-orange-500 to-red-500",
//       bgGlow: "bg-orange-50",
//       borderColor: "border-orange-200",
//       hoverColor: "hover:border-orange-400",
//       features: ["Responsive Design", "E-commerce", "SEO Optimization", "Content Management"]
//     }
//   ];

//   const stats = [
//     { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Clients", color: "text-indigo-600" },
//     { icon: <Code className="w-6 h-6" />, number: "100+", label: "Projects Completed", color: "text-teal-600" },
//     { icon: <Award className="w-6 h-6" />, number: "5+", label: "Years Experience", color: "text-emerald-600" },
//     { icon: <TrendingUp className="w-6 h-6" />, number: "99%", label: "Client Satisfaction", color: "text-blue-600" }
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('Thank you for your interest! We will get back to you soon. For immediate assistance, please reach out to us directly at hello@gisvic.com');
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       projectDetails: ''
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Orbs with sophisticated colors */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//         <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

//         {/* Interactive Mouse Glow */}
//         <div
//           className="absolute w-96 h-96 bg-gradient-to-r from-teal-300/20 to-indigo-300/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
//           style={{
//             left: mousePosition.x - 192,
//             top: mousePosition.y - 192,
//           }}
//         ></div>

//         {/* Animated Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
//       </div>

//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <div className="flex items-center space-x-3 group">
//               <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 via-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-300/30 group-hover:shadow-indigo-400/50 transition-all duration-300 group-hover:scale-110">
//                 <span className="text-white font-bold text-lg">G</span>
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent">Gisvic</h1>
//                 <p className="text-xs text-slate-500">Software Solutions</p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="#home" className="text-slate-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group font-medium">
//                 Home
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a href="#services" className="text-slate-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group font-medium">
//                 Services
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a href="#about" className="text-slate-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group font-medium">
//                 About
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
//               </a>
//               <a href="#contact" className="text-slate-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group font-medium">
//                 Contact
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 text-slate-700 hover:text-indigo-600 transition-colors"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden py-4 border-t border-slate-200">
//               <nav className="flex flex-col space-y-4">
//                 <a href="#home" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
//                 <a href="#services" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
//                 <a href="#about" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
//                 <a href="#contact" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="max-w-4xl mx-auto">
//             {/* Floating Elements */}
//             <div className="absolute top-20 left-10 animate-bounce" style={{animationDelay: '1s'}}>
//               <Sparkles className="w-6 h-6 text-indigo-500" />
//             </div>
//             <div className="absolute top-32 right-10 animate-bounce" style={{animationDelay: '2s'}}>
//               <Zap className="w-6 h-6 text-teal-500" />
//             </div>

//             <div className="mb-8 inline-block">
//               <span className="px-6 py-3 bg-gradient-to-r from-indigo-50 to-teal-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold backdrop-blur-sm animate-pulse shadow-sm">
//                 ✨ Welcome to the Future of Software
//               </span>
//             </div>

//             <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
//                 Software Solutions for
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-indigo-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
//                 Modern Business
//               </span>
//             </h2>

//             <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
//               We create innovative technology solutions that solve real-world problems and drive business success.
//               From mobile apps to fintech platforms, we build software that makes a difference.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <a
//                 href="#services"
//                 className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-600 text-white rounded-xl hover:from-indigo-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-indigo-300/30 hover:shadow-indigo-400/50 font-semibold"
//               >
//                 <span className="mr-2">Explore Services</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center px-8 py-4 border-2 border-indigo-300 text-indigo-700 rounded-xl hover:border-indigo-400 hover:text-indigo-800 hover:shadow-lg hover:shadow-indigo-300/25 transition-all duration-300 backdrop-blur-sm bg-white/70 font-semibold"
//               >
//                 Get in Touch
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
//                   <div className={`${stat.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
//                   <div className="text-slate-600 text-sm">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="mb-6 inline-block">
//               <span className="px-6 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-full text-teal-700 text-sm font-semibold backdrop-blur-sm shadow-sm">
//                 🚀 Our Expertise
//               </span>
//             </div>
//             <h3 className="text-4xl sm:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 Our Services
//               </span>
//             </h3>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               We specialize in creating tailored software solutions that address your unique business challenges
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`group relative ${service.bgGlow} backdrop-blur-xl rounded-2xl p-8 border ${service.borderColor} ${service.hoverColor} transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-sm hover:shadow-lg`}
//                 style={{
//                   animationDelay: `${index * 200}ms`
//                 }}
//               >
//                 {/* Glow Effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <div className="text-white">
//                       {service.icon}
//                     </div>
//                   </div>
//                   <h4 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-all duration-300">
//                     {service.title}
//                   </h4>
//                   <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-6">
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <div className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
//                         <Star className="w-3 h-3 mr-2 text-indigo-500" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Hover Particles */}
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="mb-6 inline-block">
//                 <span className="px-6 py-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-semibold backdrop-blur-sm shadow-sm">
//                   💡 Our Story
//                 </span>
//               </div>
//               <h3 className="text-4xl sm:text-5xl font-bold mb-8">
//                 <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                   About Gisvic
//                 </span>
//               </h3>
//             </div>

//             <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden shadow-sm">
//               {/* Background Pattern */}
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent)] pointer-events-none"></div>

//               <div className="relative z-10 text-lg text-slate-700 leading-relaxed space-y-8">
//                 <p className="text-xl">
//                   <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent font-semibold">Gisvic</span> is a forward-thinking software development company dedicated to solving business problems through innovative technology solutions. We believe that great software should not only function flawlessly but also create meaningful impact for businesses and their users.
//                 </p>
//                 <p>
//                   Our team is passionate about leveraging cutting-edge technologies to build solutions that are scalable, secure, and user-friendly. Whether you're a startup looking to launch your first mobile app or an established enterprise seeking to modernize your systems, we're here to turn your vision into reality.
//                 </p>
//                 <p>
//                   We're committed to building long-term partnerships with our clients, delivering solutions that grow with your business and adapt to changing market demands. Every project we undertake is an opportunity to push the boundaries of what's possible with technology.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//                   <div className="text-center p-6 bg-white/60 rounded-xl border border-slate-200 hover:bg-white/80 transition-all duration-300">
//                     <div className="text-2xl font-bold text-slate-800 mb-2">Innovation</div>
//                     <div className="text-slate-600">Cutting-edge solutions</div>
//                   </div>
//                   <div className="text-center p-6 bg-white/60 rounded-xl border border-slate-200 hover:bg-white/80 transition-all duration-300">
//                     <div className="text-2xl font-bold text-slate-800 mb-2">Quality</div>
//                     <div className="text-slate-600">Excellence in every detail</div>
//                   </div>
//                   <div className="text-center p-6 bg-white/60 rounded-xl border border-slate-200 hover:bg-white/80 transition-all duration-300">
//                     <div className="text-2xl font-bold text-slate-800 mb-2">Partnership</div>
//                     <div className="text-slate-600">Long-term relationships</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Elements */}
//               <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-r from-indigo-300/30 to-teal-300/30 rounded-full blur-xl"></div>
//               <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-xl"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="mb-6 inline-block">
//               <span className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold backdrop-blur-sm shadow-sm">
//                 📞 Get in Touch
//               </span>
//             </div>
//             <h3 className="text-4xl sm:text-5xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 Let's Work Together
//               </span>
//             </h3>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               Ready to transform your business with innovative software solutions? We'd love to hear about your project.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//               <div className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-300/30 group-hover:shadow-indigo-400/50 group-hover:scale-110 transition-all duration-300">
//                   <Mail className="w-8 h-8 text-white" />
//                 </div>
//                 <h4 className="font-semibold text-slate-800 mb-3 text-lg">Email Us</h4>
//                 <p className="text-slate-600 group-hover:text-slate-700 transition-colors">hello@gisvic.com</p>
//               </div>
//               <div className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-300/30 group-hover:shadow-teal-400/50 group-hover:scale-110 transition-all duration-300">
//                   <Phone className="w-8 h-8 text-white" />
//                 </div>
//                 <h4 className="font-semibold text-slate-800 mb-3 text-lg">Call Us</h4>
//                 <p className="text-slate-600 group-hover:text-slate-700 transition-colors">+234 (0) 123-456-7890</p>
//               </div>
//               <div className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-300/30 group-hover:shadow-emerald-400/50 group-hover:scale-110 transition-all duration-300">
//                   <MapPin className="w-8 h-8 text-white" />
//                 </div>
//                 <h4 className="font-semibold text-slate-800 mb-3 text-lg">Visit Us</h4>
//                 <p className="text-slate-600 group-hover:text-slate-700 transition-colors">Lagos, Nigeria</p>
//               </div>
//             </div>

//             <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden shadow-sm">
//               {/* Background Effects */}
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-teal-50/50 to-blue-50/50"></div>
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-300/20 to-teal-300/20 rounded-full blur-3xl"></div>
//               <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>

//               <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div className="group">
//                     <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 rounded-xl bg-white/80 border border-slate-300 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white"
//                       placeholder="Your first name"
//                       required
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-4 rounded-xl bg-white/80 border border-slate-300 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white"
//                       placeholder="Your last name"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="group">
//                   <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-4 rounded-xl bg-white/80 border border-slate-300 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white"
//                     placeholder="your.email@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="group">
//                   <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
//                     Project Details
//                   </label>
//                   <textarea
//                     rows={5}
//                     name="projectDetails"
//                     value={formData.projectDetails}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-4 rounded-xl bg-white/80 border border-slate-300 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white resize-none"
//                     placeholder="Tell us about your project..."
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-indigo-600 to-teal-600 text-white py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 font-semibold shadow-xl shadow-indigo-300/30 hover:shadow-indigo-400/50"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-3 mb-4 md:mb-0">
//               <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
//                 <span className="text-white font-bold">G</span>
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold text-white">Gisvic</h1>
//                 <p className="text-xs text-slate-400">Software Solutions</p>
//               </div>
//             </div>
//             <div className="text-center md:text-right">
//               <p className="text-slate-400">
//                 © 2025 Gisvic. Building the future, one solution at a time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Users,
  CreditCard,
  Globe,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";

export default function GisvicWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectDetails: "",
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description:
        "Custom mobile applications for iOS and Android that solve real business problems and enhance user experience.",
      gradient: "from-[#FF7F50] to-[#DE3163]",
      bgGlow: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-[#FF7F50]",
      features: [
        "Native iOS/Android",
        "Cross-platform",
        "UI/UX Design",
        "App Store Publishing",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Business Solutions",
      description:
        "Technology-driven solutions that streamline operations, increase efficiency, and drive business growth.",
      gradient: "from-[#DE3163] to-pink-600",
      bgGlow: "bg-pink-50",
      borderColor: "border-pink-200",
      hoverColor: "hover:border-[#DE3163]",
      features: [
        "Process Automation",
        "Custom Software",
        "System Integration",
        "Cloud Solutions",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Admin/HR Solutions",
      description:
        "Comprehensive administrative and human resource management systems tailored to your organization's needs.",
      gradient: "from-rose-500 to-[#DE3163]",
      bgGlow: "bg-rose-50",
      borderColor: "border-rose-200",
      hoverColor: "hover:border-rose-400",
      features: [
        "Employee Management",
        "Payroll Systems",
        "Performance Tracking",
        "Document Management",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Fintech Solutions",
      description:
        "Secure and innovative financial technology solutions for modern banking and payment processing.",
      gradient: "from-[#FF7F50] to-orange-600",
      bgGlow: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-[#FF7F50]",
      features: [
        "Payment Processing",
        "Digital Banking",
        "Security & Compliance",
        "Blockchain Integration",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Design",
      description:
        "Professional, responsive websites that represent your brand and engage your audience effectively.",
      gradient: "from-pink-500 to-[#DE3163]",
      bgGlow: "bg-pink-50",
      borderColor: "border-pink-200",
      hoverColor: "hover:border-pink-400",
      features: [
        "Responsive Design",
        "E-commerce",
        "SEO Optimization",
        "Content Management",
      ],
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "50+",
      label: "Happy Clients",
      color: "text-[#DE3163]",
    },
    {
      icon: <Code className="w-6 h-6" />,
      number: "100+",
      label: "Projects Completed",
      color: "text-[#FF7F50]",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "5+",
      label: "Years Experience",
      color: "text-rose-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "99%",
      label: "Client Satisfaction",
      color: "text-pink-600",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your interest! We will get back to you soon. For immediate assistance, please reach out to us directly at hello@gisvic.com"
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      projectDetails: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs with coral and crimson colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#FF7F50]/20 to-[#DE3163]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-300/20 to-[#FF7F50]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Interactive Mouse Glow */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#FF7F50]/15 to-[#DE3163]/15 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,127,80,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,127,80,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-orange-100/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7F50] via-[#DE3163] to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-300/30 group-hover:shadow-[#FF7F50]/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-[#DE3163] bg-clip-text text-transparent">
                  Gisvic
                </h1>
                <p className="text-xs text-slate-500">Software Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-slate-700 hover:text-[#DE3163] transition-all duration-300 hover:scale-105 relative group font-medium"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF7F50] to-[#DE3163] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-[#DE3163] transition-all duration-300 hover:scale-105 relative group font-medium"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF7F50] to-[#DE3163] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-[#DE3163] transition-all duration-300 hover:scale-105 relative group font-medium"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF7F50] to-[#DE3163] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-[#DE3163] transition-all duration-300 hover:scale-105 relative group font-medium"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF7F50] to-[#DE3163] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-[#DE3163] transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-100">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-slate-700 hover:text-[#DE3163] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-slate-700 hover:text-[#DE3163] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-slate-700 hover:text-[#DE3163] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-slate-700 hover:text-[#DE3163] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Floating Elements */}
            <div
              className="absolute top-20 left-10 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <Sparkles className="w-6 h-6 text-[#FF7F50]" />
            </div>
            <div
              className="absolute top-32 right-10 animate-bounce"
              style={{ animationDelay: "2s" }}
            >
              <Zap className="w-6 h-6 text-[#DE3163]" />
            </div>

            <div className="mb-8 inline-block">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full text-[#DE3163] text-sm font-semibold backdrop-blur-sm animate-pulse shadow-sm">
                ✨ Welcome to the Future of Software
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Software Solutions for
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF7F50] via-[#DE3163] to-pink-600 bg-clip-text text-transparent">
                Modern Business
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              We create innovative technology solutions that solve real-world
              problems and drive business success. From mobile apps to fintech
              platforms, we build software that makes a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#services"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF7F50] to-[#DE3163] text-white rounded-xl hover:from-[#FF6B35] hover:to-[#C8284A] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-300/30 hover:shadow-[#FF7F50]/50 font-semibold"
              >
                <span className="mr-2">Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-[#FF7F50] text-[#DE3163] rounded-xl hover:border-[#DE3163] hover:text-[#FF7F50] hover:shadow-lg hover:shadow-orange-300/25 transition-all duration-300 backdrop-blur-sm bg-white/70 font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-orange-100 hover:border-[#FF7F50]/30 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                  <div
                    className={`${stat.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-6 inline-block">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full text-[#DE3163] text-sm font-semibold backdrop-blur-sm shadow-sm">
                🚀 Our Expertise
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Our Services
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in creating tailored software solutions that address
              your unique business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative ${service.bgGlow} backdrop-blur-xl rounded-2xl p-8 border ${service.borderColor} ${service.hoverColor} transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-sm hover:shadow-lg`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-slate-900 transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-500 group-hover:text-slate-600 transition-colors"
                      >
                        <Star className="w-3 h-3 mr-2 text-[#FF7F50]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-[#DE3163] rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-6 inline-block">
                <span className="px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-full text-[#DE3163] text-sm font-semibold backdrop-blur-sm shadow-sm">
                  💡 Our Story
                </span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  About Gisvic
                </span>
              </h3>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-orange-100 relative overflow-hidden shadow-sm">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,127,80,0.05),transparent)] pointer-events-none"></div>

              <div className="relative z-10 text-lg text-slate-700 leading-relaxed space-y-8">
                <p className="text-xl">
                  <span className="bg-gradient-to-r from-[#FF7F50] to-[#DE3163] bg-clip-text text-transparent font-semibold">
                    Gisvic
                  </span>{" "}
                  is a forward-thinking software development company dedicated
                  to solving business problems through innovative technology
                  solutions. We believe that great software should not only
                  function flawlessly but also create meaningful impact for
                  businesses and their users.
                </p>
                <p>
                  Our team is passionate about leveraging cutting-edge
                  technologies to build solutions that are scalable, secure, and
                  user-friendly. Whether you're a startup looking to launch your
                  first mobile app or an established enterprise seeking to
                  modernize your systems, we're here to turn your vision into
                  reality.
                </p>
                <p>
                  We're committed to building long-term partnerships with our
                  clients, delivering solutions that grow with your business and
                  adapt to changing market demands. Every project we undertake
                  is an opportunity to push the boundaries of what's possible
                  with technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-white/70 rounded-xl border border-orange-100 hover:bg-white/90 transition-all duration-300">
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      Innovation
                    </div>
                    <div className="text-slate-600">Cutting-edge solutions</div>
                  </div>
                  <div className="text-center p-6 bg-white/70 rounded-xl border border-orange-100 hover:bg-white/90 transition-all duration-300">
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      Quality
                    </div>
                    <div className="text-slate-600">
                      Excellence in every detail
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/70 rounded-xl border border-orange-100 hover:bg-white/90 transition-all duration-300">
                    <div className="text-2xl font-bold text-slate-800 mb-2">
                      Partnership
                    </div>
                    <div className="text-slate-600">
                      Long-term relationships
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-r from-[#FF7F50]/30 to-[#DE3163]/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-pink-300/30 to-rose-300/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6 inline-block">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-50 to-pink-50 border border-orange-200 rounded-full text-[#DE3163] text-sm font-semibold backdrop-blur-sm shadow-sm">
                📞 Get in Touch
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to transform your business with innovative software
              solutions? We'd love to hear about your project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF7F50] to-[#DE3163] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-300/30 group-hover:shadow-[#FF7F50]/50 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                  Email Us
                </h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  hello@gisvic.com
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#DE3163] to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-300/30 group-hover:shadow-[#DE3163]/50 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                  Call Us
                </h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  +234 (0) 123-456-7890
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-[#FF7F50] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-rose-300/30 group-hover:shadow-rose-400/50 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                  Visit Us
                </h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-orange-100 relative overflow-hidden shadow-sm">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-pink-50/50 to-rose-50/50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF7F50]/20 to-[#DE3163]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl bg-white/90 border border-orange-200 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-[#FF7F50] focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 rounded-xl bg-white/90 border border-orange-200 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-[#FF7F50] focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/90 border border-orange-200 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-[#FF7F50] focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-3 group-hover:text-slate-800 transition-colors">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/90 border border-orange-200 text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-[#FF7F50] focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF7F50] to-[#DE3163] text-white py-4 px-6 rounded-xl hover:from-[#FF6B35] hover:to-[#C8284A] transition-all transform hover:scale-105 font-semibold shadow-xl shadow-orange-300/30 hover:shadow-[#FF7F50]/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF7F50] to-[#DE3163] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold">G</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Gisvic</h1>
                <p className="text-xs text-slate-400">Software Solutions</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                © 2025 Gisvic. Building the future, one solution at a time.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
