import React, { useState } from "react";
import {
  Smartphone,
  Code,
  Users,
  CreditCard,
  Globe,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import TestimonialSection from "../components/TestimonialSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Header from "../components/Header";
import AppFooter from "../components/AppFooter";
import Toast from "../components/Toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectDetails: "",
  });

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description:
        "Custom mobile applications for iOS and Android that solve real business problems and enhance user experience.",
      features: [
        "Native iOS/Android Development",
        "Cross-platform Solutions",
        "UI/UX Design Excellence",
        "App Store Publishing Support",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Business Solutions",
      description:
        "Technology-driven solutions that streamline operations, increase efficiency, and drive sustainable business growth.",
      features: [
        "Process Automation",
        "Custom Software Development",
        "System Integration",
        "Cloud Solutions Architecture",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Admin/HR Solutions",
      description:
        "Comprehensive administrative and human resource management systems tailored to your organization's unique needs.",
      features: [
        "Employee Management Systems",
        "Payroll & Benefits Management",
        "Performance Tracking Tools",
        "Document Management Solutions",
      ],
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Fintech Solutions",
      description:
        "Secure and innovative financial technology solutions for modern banking, payments, and financial services.",
      features: [
        "Payment Processing Systems",
        "Digital Banking Platforms",
        "Security & Compliance",
        "Blockchain Integration",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Design",
      description:
        "Professional, responsive websites that represent your brand effectively and engage your target audience.",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "SEO Optimization",
        "Content Management Systems",
      ],
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
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
    setSubmitProcessing(true);
    emailjs
      .send(
        "service_ytfihlh",
        "template_x65zqxm",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          projectDetails: formData.projectDetails,
        },
        "91TPBiw4vfGBgMJ6c"
      )
      .then((response) => {
        setSubmitProcessing(false);
        setToast({ type: "success", message: "Message sent successfully!" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectDetails: "",
        });
      })
      .catch((error) => {
        setSubmitProcessing(false);
        setToast({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-blue-50/30 relative overflow-hidden">
      <Toast 
        type={toast.type} 
        message={toast.message} 
        onClose={() => setToast({ type: "", message: "" })} 
      />

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <HeroSection stats={stats} />

      <ServicesSection services={services} />

      <AboutSection />

      <TestimonialSection />

      <ContactSection 
        formData={formData}
        submitProcessing={submitProcessing}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      <AppFooter />
    </div>
  );
};

export default Index;
