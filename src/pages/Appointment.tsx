import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

const Appointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    mobileNumber: "",
    emailAddress: "",
    appointmentType: "consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.mobileNumber && formData.emailAddress) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          gender: "",
          mobileNumber: "",
          emailAddress: "",
          appointmentType: "consultation",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {!submitted ? (
          <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
            {/* Left Side - Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-12 flex-col justify-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="font-display text-5xl font-bold mb-6">
                  Book Appointment
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Just enter your basic details and book your appointment in just a second with our wellness experts.
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold mb-1">Easy Booking</h4>
                      <p className="text-sm text-gray-300">Simple form, quick confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Doctors</h4>
                      <p className="text-sm text-gray-300">9 certified wellness specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold mb-1">Flexible Options</h4>
                      <p className="text-sm text-gray-300">In-clinic or tele-consult available</p>
                    </div>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-primary text-xl">ℹ</span>
                    Fill form and take rest, We will contact you for your schedule confirmation
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-gradient-to-br from-orange-50 to-white"
            >
              <div className="w-full max-w-lg">
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Book Appointment
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Just enter your basic details and book your appointment in just a second
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4">Personal details</h4>

                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <input
                          type="text"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-100 text-foreground placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-100 text-foreground placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Gender & Mobile */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-100 text-foreground placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Mobile number"
                          value={formData.mobileNumber}
                          onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-100 text-foreground placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-100 text-foreground placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Appointment Type Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4">Appointment type</h4>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, appointmentType: "consultation" })}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all font-medium text-sm ${
                          formData.appointmentType === "consultation"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 text-foreground hover:border-primary"
                        }`}
                      >
                        Doctor consultation
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, appointmentType: "checkup" })}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all font-medium text-sm ${
                          formData.appointmentType === "checkup"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300 text-foreground hover:border-primary"
                        }`}
                      >
                        Health checkup
                      </button>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4">Message</h4>
                    <textarea
                      placeholder="Write your queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-100 text-foreground placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none h-24"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 mt-8"
                  >
                    Book Appointment
                  </button>
                </form>

                {/* Info Text */}
                <p className="text-xs text-center text-muted-foreground mt-6">
                  By confirming, you agree to our terms. We will contact you to verify the slot.
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Success Page */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 bg-gradient-to-br from-orange-50 to-white"
          >
            <div className="text-center max-w-md">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-block"
              >
                <CheckCircle className="h-20 w-20 text-green-500" />
              </motion.div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                Appointment Requested!
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Your appointment request has been received. Our team will contact you shortly to confirm.
              </p>
              <Button
                onClick={() => navigate("/")}
                className="w-full bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary"
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Appointment;
