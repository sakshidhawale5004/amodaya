import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Phone, MessageCircle } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

const doctors: Doctor[] = [
  { id: 1, name: "Diimple Punit Thakkar", specialization: "Grapho Therapist" },
  { id: 2, name: "Samir Prabhudesai", specialization: "Metabolic Health Coach" },
  { id: 3, name: "Neelam Kaur", specialization: "Sound Healing Practitioner" },
  { id: 4, name: "Dr. Kalyani Patil", specialization: "Art Therapist & EI Coach" },
  { id: 5, name: "Dr. Smita Lodhe", specialization: "Work Ergonomics Specialist" },
  { id: 6, name: "Bhagyashree Deshpande", specialization: "Dental Health Educator" },
  { id: 7, name: "Ruby Khan", specialization: "Clinical Dietician" },
  { id: 8, name: "Dr. Swapnil Bhanushali", specialization: "Ayurveda Specialist" },
  { id: 9, name: "Dr. Priti Yamdagni", specialization: "Emotional Intelligence Specialist" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
];

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
};

const Appointment = () => {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const dates = generateDates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && selectedDate && selectedTime && selectedDoctor) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSelectedDate("");
        setSelectedTime("");
        setSelectedDoctor(null);
      }, 3000);
    }
  };

  const formatDate = (date: Date) => date.toISOString().split("T")[0];
  const getDayName = (date: Date) => date.toLocaleDateString("en-US", { weekday: "short" });
  const getDateNum = (date: Date) => date.getDate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="font-display text-4xl font-bold text-foreground mb-3">
                  Book Your Appointment
                </h1>
                <p className="text-lg text-muted-foreground">
                  Schedule a consultation with one of our wellness experts
                </p>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Doctor Selection */}
                  <div>
                    <label className="block text-lg font-semibold text-foreground mb-4">
                      Select Your Doctor
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-2">
                      {doctors.map((doctor) => (
                        <button
                          key={doctor.id}
                          type="button"
                          onClick={() => setSelectedDoctor(doctor.id)}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            selectedDoctor === doctor.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          <p className="font-semibold text-foreground">{doctor.name}</p>
                          <p className="text-sm text-muted-foreground">{doctor.specialization}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time Selection */}
                  {selectedDoctor && (
                    <>
                      {/* Date Selection */}
                      <div>
                        <label className="block text-lg font-semibold text-foreground mb-4">
                          Select Date
                        </label>
                        <div className="grid grid-cols-7 gap-2">
                          {dates.map((date) => (
                            <button
                              key={formatDate(date)}
                              type="button"
                              onClick={() => setSelectedDate(formatDate(date))}
                              className={`p-3 rounded-lg border-2 transition-all text-center ${
                                selectedDate === formatDate(date)
                                  ? "border-primary bg-primary text-white"
                                  : "border-border hover:border-primary"
                              }`}
                            >
                              <div className="font-semibold text-sm">{getDayName(date)}</div>
                              <div className="text-xs">{getDateNum(date)}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selection */}
                      {selectedDate && (
                        <div>
                          <label className="block text-lg font-semibold text-foreground mb-4">
                            Select Time Slot
                          </label>
                          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`p-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                  selectedTime === time
                                    ? "border-primary bg-primary text-white"
                                    : "border-border hover:border-primary"
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Your Information</h3>

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Jhon Michle"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-gray-100 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="address@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3 rounded-xl bg-gray-100 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="(123) 456 789 00"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3 rounded-xl bg-gray-100 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-gray-100 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedTime || !selectedDoctor}
                      className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Book a Appointment
                    </button>
                  </div>

                  {/* Info Text */}
                  <p className="text-xs text-center text-muted-foreground">
                    By confirming, you agree to our terms. We will contact you to verify the slot.
                  </p>
                </form>
              </div>

              {/* Contact Options */}
              <div className="flex gap-4 mt-8 justify-center flex-wrap">
                <a href="tel:+919876543210">
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </Button>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          ) : (
            /* Success Page */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative h-24 w-24">
                    <CheckCircle className="h-24 w-24 text-green-500 animate-pulse" />
                  </div>
                </div>

                <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                  Appointment Requested!
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Your appointment request has been received. Our team will contact you shortly to confirm.
                </p>

                <div className="bg-orange-50 rounded-xl p-6 mb-8 text-left">
                  <h4 className="font-semibold text-foreground mb-4 text-center">Appointment Details</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      <span className="text-muted-foreground font-medium">Doctor:</span>{" "}
                      <span className="font-semibold text-foreground">
                        {doctors.find(d => d.id === selectedDoctor)?.name}
                      </span>
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">Date:</span>{" "}
                      <span className="font-semibold text-foreground">{selectedDate}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">Time:</span>{" "}
                      <span className="font-semibold text-foreground">{selectedTime}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">Name:</span>{" "}
                      <span className="font-semibold text-foreground">{formData.name}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground font-medium">Phone:</span>{" "}
                      <span className="font-semibold text-foreground">{formData.phone}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => navigate("/")}
                    className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900"
                  >
                    Back to Home
                  </Button>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4" />
                      Message on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Appointment;
