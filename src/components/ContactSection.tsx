import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Simulated EmailJS function
const mockEmailJS = {
  send: (serviceId, templateId, templateParams, publicKey) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          resolve({ status: 200, text: 'OK' });
        } else {
          reject({ status: 400, text: 'Failed' });
        }
      }, 2000);
    });
  }
};

const ContactSection = () => {
  const [toast, setToast] = useState({ type: "", message: "" });
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectDetails: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitProcessing(true);

    mockEmailJS
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
      .then(() => {
        setSubmitProcessing(false);
        setToast({ type: "success", message: "Message sent successfully!" });
        setFormData({ firstName: "", lastName: "", email: "", projectDetails: "" });
        setTimeout(() => setToast({ type: "", message: "" }), 5000);
      })
      .catch(() => {
        setSubmitProcessing(false);
        setToast({ type: "error", message: "Failed to send message. Please try again." });
        setTimeout(() => setToast({ type: "", message: "" }), 5000);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Toast */}
      {toast.message && (
        <div
          aria-live="polite"
          role="alert"
          className={`fixed top-20 right-3 z-40 flex items-center w-full max-w-xs p-4 rounded-lg shadow-sm text-sm font-medium ${
            toast.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          <div className="mr-3">{toast.type === "success" ? "✅" : "❌"}</div>
          <div className="flex-1">{toast.message}</div>
          <button onClick={() => setToast({ type: "", message: "" })} className="ml-4 text-gray-500 hover:text-gray-800">
            ✖
          </button>
        </div>
      )}

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-slate-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-gray-300/20 to-slate-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-6 py-3 bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-full text-blue-700 text-sm font-semibold backdrop-blur-sm shadow-sm mb-6 inline-block">
              📞 Get in Touch
            </span>
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to transform your business with innovative software solutions? We'd love to hear about your project.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-slate-300/30 group-hover:shadow-slate-400/50 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">Email Us</h4>
                <p className="text-slate-600">gisvicsolutions@gmail.com</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">Call Us</h4>
                <p className="text-slate-600">+234 (0) 7061275837</p>
                <p className="text-slate-600">+234 (0) 8132128706</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-3 text-lg">Visit Us</h4>
                <p className="text-slate-600">Lagos, Nigeria</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 relative overflow-hidden shadow-sm space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required
                    className="w-full px-4 py-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-slate-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required
                    className="w-full px-4 py-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-slate-500"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                  className="w-full px-4 py-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Project Details</label>
                <textarea rows={5} name="projectDetails" value={formData.projectDetails} onChange={handleInputChange} required
                  className="w-full px-4 py-4 rounded-xl bg-white/90 border border-slate-200 focus:ring-2 focus:ring-slate-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {!submitProcessing ? (
                <button type="submit"
                  className="w-full bg-gradient-to-r from-slate-600 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-slate-700 hover:to-blue-700 font-semibold shadow-xl transition-transform hover:scale-105"
                >
                  Send Message
                </button>
              ) : (
                <button disabled type="button"
                  className="w-full bg-gradient-to-r from-slate-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold shadow-xl flex items-center justify-center opacity-75"
                >
                  <svg className="mr-3 w-5 h-5 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Processing…
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
