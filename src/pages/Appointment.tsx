import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    mobile: "",
    email: "",
    type: "Doctor consultation",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.mobile && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "", lastName: "", gender: "", mobile: "", email: "", type: "Doctor consultation", message: ""
        });
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
          
          {/* Left Side - Image */}
          <div className="hidden lg:block lg:w-[35%] relative">
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" 
              alt="Serene Texture" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale brightness-50"
            />
          </div>

          {/* Right Side - Form Area */}
          <div className="w-full lg:w-[65%] flex">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 p-8 md:p-16 lg:p-20">
              
              {/* Form Info Text */}
              <div className="md:w-[40%] flex flex-col justify-between">
                <div>
                  <h1 className="font-display text-4xl font-bold text-[#1b4e33] mb-4">Book Appointment</h1>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    Just enter your basic details and book your appointment in just a second.
                  </p>
                </div>

                <div className="mt-12 flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-[#1b4e33] shrink-0 mt-1" />
                  <p className="text-[#1b4e33] font-medium leading-relaxed">
                    Fill form and take rest, We will contact you for your schedule confirmation
                  </p>
                </div>
              </div>

              {/* Form Container */}
              <div className="md:w-[60%] bg-[#f4f7f5] rounded-2xl p-8">
                {submitted ? (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center py-12">
                     <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                       <Sparkles className="h-10 w-10 text-[#1b4e33]" />
                     </div>
                     <h3 className="font-display text-2xl font-bold text-[#1b4e33] mb-2">Request Sent Successfully!</h3>
                     <p className="text-gray-600">We will reach out to you shortly to confirm your schedule.</p>
                   </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Details */}
                    <div>
                      <h3 className="text-[#1b4e33] font-semibold mb-4 text-lg">Personal details</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full p-3 rounded-lg bg-white border border-transparent focus:border-[#1b4e33] focus:ring-1 focus:ring-[#1b4e33] outline-none text-sm transition-all"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full p-3 rounded-lg bg-white border border-transparent focus:border-[#1b4e33] focus:ring-1 focus:ring-[#1b4e33] outline-none text-sm transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="relative">
                          <select
                            value={formData.gender}
                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                            className="w-full p-3 rounded-lg bg-white border border-transparent focus:border-[#1b4e33] focus:ring-1 focus:ring-[#1b4e33] outline-none text-sm appearance-none cursor-pointer text-gray-500"
                          >
                            <option value="" disabled>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                        </div>
                        <input
                          type="tel"
                          placeholder="Mobile number"
                          value={formData.mobile}
                          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                          className="w-full p-3 rounded-lg bg-white border border-transparent focus:border-[#1b4e33] focus:ring-1 focus:ring-[#1b4e33] outline-none text-sm transition-all"
                          required
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-3 rounded-lg bg-white border border-transparent focus:border-[#1b4e33] focus:ring-1 focus:ring-[#1b4e33] outline-none text-sm transition-all"
                        required
                      />
                    </div>

                    {/* Appointment Type */}
                    <div>
                      <h3 className="text-[#1b4e33] font-semibold mb-4 text-lg">Appointment type</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, type: "Doctor consultation"})}
                          className={`p-3 rounded-lg text-sm transition-all border ${formData.type === "Doctor consultation" ? "bg-white border-[#1b4e33] text-[#1b4e33] font-medium" : "bg-white border-transparent text-gray-500 hover:border-gray-300"}`}
                        >
                          Doctor consultation
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, type: "Health checkup"})}
                          className={`p-3 rounded-lg text-sm transition-all border ${formData.type === "Health checkup" ? "bg-white border-[#1b4e33] text-[#1b4e33] font-medium" : "bg-white border-transparent text-gray-500 hover:border-gray-300"}`}
                        >
                          Health checkup
                        </button>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <h3 className="text-[#1b4e33] font-semibold mb-4 text-lg">Message</h3>
                      <textarea
                        placeholder="Write your queries.."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full p-4 rounded-lg bg-white border border-transparent focus:border-[#1b4e33] focus:ring-1 focus:ring-[#1b4e33] outline-none text-sm transition-all resize-none min-h-[120px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#1b4e33] hover:bg-[#143a26] text-white rounded-lg py-4 font-semibold shadow-md transition-colors"
                    >
                      Book Appointment
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Appointment;
