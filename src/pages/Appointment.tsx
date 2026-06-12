import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

type AppointmentType = "in-clinic" | "tele-consult";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  registration?: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Diimple Punit Thakkar",
    specialization: "Grapho Therapist",
    registration: "AWA-GRAPH-001",
  },
  {
    id: 2,
    name: "Samir Prabhudesai",
    specialization: "Metabolic Health Coach",
    registration: "AWA-META-002",
  },
  {
    id: 3,
    name: "Neelam Kaur",
    specialization: "Sound Healing Practitioner",
    registration: "AWA-SOUND-003",
  },
  {
    id: 4,
    name: "Dr. Kalyani Patil",
    specialization: "Art Therapist & Emotional Intelligence Coach",
    registration: "AWA-ART-004",
  },
  {
    id: 5,
    name: "Dr. Smita Lodhe",
    specialization: "Work Ergonomics Specialist",
    registration: "AWA-ERGO-005",
  },
  {
    id: 6,
    name: "Bhagyashree Deshpande",
    specialization: "Dental Health Educator & Consultant",
    registration: "AWA-DENTAL-006",
  },
  {
    id: 7,
    name: "Ruby Khan",
    specialization: "Clinical Dietician",
    registration: "AWA-DIET-007",
  },
  {
    id: 8,
    name: "Dr. Swapnil Bhanushali",
    specialization: "Ayurveda Specialist",
    registration: "AWA-AYUR-008",
  },
  {
    id: 9,
    name: "Dr. Priti Yamdagni",
    specialization: "Emotional Intelligence Specialist",
    registration: "AWA-EI-009",
  },
];

const timeSlots: TimeSlot[] = [
  { time: "09:00", available: true },
  { time: "09:30", available: true },
  { time: "10:00", available: true },
  { time: "10:30", available: false },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "12:00", available: true },
  { time: "12:30", available: false },
  { time: "14:00", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: true },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: true },
  { time: "17:00", available: true },
  { time: "17:30", available: true },
];

const Appointment = () => {
  const [selectedType, setSelectedType] = useState<AppointmentType>("in-clinic");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(doctors[0]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentStep, setAppointmentStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Generate next 7 days
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

  const dates = generateDates();

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const getDateNum = (date: Date) => {
    return date.getDate();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setAppointmentStep(1);
        setSelectedTime("");
        setSelectedDate("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-deep-green mb-6 tracking-tight">
              Book Your Wellness Appointment
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body">
              Schedule a consultation with our certified wellness doctors. Choose
              in-clinic visits or tele-consultations based on your preference.
            </p>
            <div className="w-24 h-1 bg-warm-gold mx-auto mt-8 rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            {!submitted ? (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Sidebar - Doctor Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-white rounded-[2rem] shadow-xl p-8 sticky top-28 border border-border/40">
                    {selectedDoctor && (
                      <>
                        <div className="mb-8">
                          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                            {selectedDoctor.name}
                          </h3>
                          <p className="text-sm text-deep-green font-semibold mb-2">
                            {selectedDoctor.specialization}
                          </p>
                          {selectedDoctor.registration && (
                            <p className="text-xs text-muted-foreground bg-gray-50 inline-block px-2 py-1 rounded-md border border-gray-100">
                              Reg. No: {selectedDoctor.registration}
                            </p>
                          )}
                        </div>

                        {/* Appointment Type Selector */}
                        <div className="space-y-3 mb-8">
                          <label className="text-sm font-semibold text-foreground uppercase tracking-wider text-xs text-gray-500">
                            Appointment Type
                          </label>
                          <div className="space-y-3">
                            <button
                              onClick={() => setSelectedType("in-clinic")}
                              className={`w-full p-4 rounded-xl border-2 transition-all text-left font-semibold ${
                                selectedType === "in-clinic"
                                  ? "border-deep-green bg-deep-green/5 text-deep-green shadow-sm"
                                  : "border-border text-foreground hover:border-deep-green/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <MapPin className={`h-5 w-5 ${selectedType === "in-clinic" ? "text-deep-green" : "text-gray-400"}`} />
                                In-Clinic Visit
                              </div>
                            </button>
                            <button
                              onClick={() => setSelectedType("tele-consult")}
                              className={`w-full p-4 rounded-xl border-2 transition-all text-left font-semibold ${
                                selectedType === "tele-consult"
                                  ? "border-deep-green bg-deep-green/5 text-deep-green shadow-sm"
                                  : "border-border text-foreground hover:border-deep-green/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Phone className={`h-5 w-5 ${selectedType === "tele-consult" ? "text-deep-green" : "text-gray-400"}`} />
                                Tele-Consult
                              </div>
                            </button>
                          </div>
                        </div>

                        {/* Appointment Details */}
                        <div className="space-y-4 pt-6 border-t border-border/60">
                          <div className="flex items-start gap-3 text-sm">
                            <MapPin className="h-5 w-5 text-warm-gold shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">
                              Vihangs Inn, Ghodbunder Road, Thane West
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Clock className="h-5 w-5 text-warm-gold shrink-0" />
                            <span className="text-muted-foreground">
                              Every Monday · 7:30 AM – 10:00 AM
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-5 w-5 text-warm-gold shrink-0" />
                            <a
                              href="tel:9224338833"
                              className="text-muted-foreground hover:text-deep-green font-semibold transition-colors"
                            >
                              9224338833
                            </a>
                          </div>
                        </div>

                        <Button
                          className={`w-full mt-8 rounded-full py-6 text-[15px] font-bold shadow-md transition-all ${!selectedDate || !selectedTime ? 'bg-gray-200 text-gray-400' : 'bg-deep-green hover:bg-deep-green/90 text-white hover:shadow-lg'}`}
                          onClick={() => {
                            if (selectedTime && selectedDate) {
                              setAppointmentStep(3);
                            }
                          }}
                          disabled={!selectedDate || !selectedTime}
                        >
                          Continue Booking
                        </Button>
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Right Content - Booking Steps */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-2"
                >
                  <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-10 border border-border/40">
                    {/* Step Indicator */}
                    <div className="flex items-center justify-between mb-10">
                      {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex items-center">
                          <div
                            className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center font-bold transition-all shadow-sm ${
                              appointmentStep >= step
                                ? "bg-deep-green text-white"
                                : "bg-gray-100 text-gray-400 border border-gray-200"
                            }`}
                          >
                            {step}
                          </div>
                          {step < 4 && (
                            <div
                              className={`h-1 w-8 md:w-16 mx-2 md:mx-4 rounded-full transition-all ${
                                appointmentStep > step
                                  ? "bg-deep-green"
                                  : "bg-gray-100"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Step 1: Doctor Selection */}
                    {appointmentStep === 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="font-display text-3xl font-bold text-foreground mb-8">
                          Select a Doctor
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          {doctors.map((doctor) => (
                            <button
                              key={doctor.id}
                              onClick={() => {
                                setSelectedDoctor(doctor);
                                setAppointmentStep(2);
                              }}
                              className={`p-5 rounded-2xl border-2 transition-all text-left shadow-sm ${
                                selectedDoctor?.id === doctor.id
                                  ? "border-deep-green bg-deep-green/5 shadow-md scale-[1.02]"
                                  : "border-border hover:border-deep-green/30 hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <p className="font-bold text-foreground text-lg">
                                  {doctor.name}
                                </p>
                                {selectedDoctor?.id === doctor.id && (
                                  <div className="h-5 w-5 bg-deep-green rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-3 w-3 text-white" />
                                  </div>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground font-medium">
                                {doctor.specialization}
                              </p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Date & Time Selection */}
                    {appointmentStep === 2 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="font-display text-3xl font-bold text-foreground mb-8">
                          Select Date & Time
                        </h3>

                        {/* Date Selection */}
                        <div className="mb-10">
                          <label className="flex items-center font-semibold text-foreground mb-4 text-lg">
                            <Calendar className="h-5 w-5 mr-2 text-deep-green" />
                            Choose a Date
                          </label>
                          <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                            {dates.map((date) => (
                              <button
                                key={formatDate(date)}
                                onClick={() => setSelectedDate(formatDate(date))}
                                className={`p-3 rounded-xl border-2 transition-all text-center flex flex-col items-center justify-center h-20 ${
                                  selectedDate === formatDate(date)
                                    ? "border-deep-green bg-deep-green text-white shadow-md scale-105"
                                    : "border-border hover:border-deep-green/50 hover:bg-gray-50 text-foreground"
                                }`}
                              >
                                <div className={`text-xs font-semibold mb-1 ${selectedDate === formatDate(date) ? "text-white/80" : "text-gray-500"}`}>
                                  {getDayName(date).toUpperCase()}
                                </div>
                                <div className="text-xl font-bold">
                                  {getDateNum(date)}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Time Slot Selection */}
                        <div className="mb-10">
                          <label className="flex items-center font-semibold text-foreground mb-4 text-lg">
                            <Clock className="h-5 w-5 mr-2 text-deep-green" />
                            Choose a Time Slot
                          </label>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot.time}
                                onClick={() => setSelectedTime(slot.time)}
                                disabled={!slot.available}
                                className={`p-3 rounded-xl border-2 transition-all text-sm font-bold ${
                                  selectedTime === slot.time
                                    ? "border-deep-green bg-deep-green text-white shadow-md scale-105"
                                    : slot.available
                                    ? "border-border hover:border-deep-green/50 hover:bg-gray-50 text-foreground"
                                    : "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed"
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 mt-8 pt-6 border-t border-border/40">
                          <Button
                            variant="outline"
                            className="flex-1 rounded-full py-6 text-[15px] font-bold border-gray-300 text-gray-600 hover:bg-gray-50"
                            onClick={() => setAppointmentStep(1)}
                          >
                            Back
                          </Button>
                          <Button
                            className={`flex-1 rounded-full py-6 text-[15px] font-bold shadow-md transition-all ${!selectedDate || !selectedTime ? 'bg-gray-200 text-gray-400' : 'bg-deep-green hover:bg-deep-green/90 text-white hover:shadow-lg'}`}
                            onClick={() => setAppointmentStep(3)}
                            disabled={!selectedDate || !selectedTime}
                          >
                            Continue
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Personal Information */}
                    {appointmentStep === 3 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h3 className="font-display text-3xl font-bold text-foreground mb-8">
                          Your Information
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid md:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">
                                Full Name *
                              </label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                  type="text"
                                  value={formData.name}
                                  onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                  }
                                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-border focus:outline-none focus:border-deep-green focus:ring-2 focus:ring-deep-green/20 transition-all font-medium"
                                  placeholder="Your full name"
                                  required
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-bold text-gray-700 mb-2">
                                Phone Number *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                  }
                                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-border focus:outline-none focus:border-deep-green focus:ring-2 focus:ring-deep-green/20 transition-all font-medium"
                                  placeholder="+91 98765 43210"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-border focus:outline-none focus:border-deep-green focus:ring-2 focus:ring-deep-green/20 transition-all font-medium"
                                placeholder="your.email@example.com"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                              Message (Optional)
                            </label>
                            <textarea
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
                              className="w-full p-4 bg-gray-50 rounded-xl border border-border focus:outline-none focus:border-deep-green focus:ring-2 focus:ring-deep-green/20 transition-all font-medium resize-none"
                              placeholder="Tell us about your health concern or reason for visit..."
                              rows={4}
                            />
                          </div>

                          {/* Appointment Summary */}
                          <div className="bg-[#F3E8D6]/30 border border-warm-gold/30 rounded-xl p-5 mb-8">
                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-warm-gold" />
                              Appointment Summary
                            </h4>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                              <div>
                                <span className="text-gray-500 block text-xs uppercase tracking-wider mb-1">Doctor</span>
                                <span className="font-bold text-gray-800">
                                  {selectedDoctor?.name}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-500 block text-xs uppercase tracking-wider mb-1">Type</span>
                                <span className="font-bold text-gray-800 capitalize">
                                  {selectedType === "in-clinic"
                                    ? "In-Clinic Visit"
                                    : "Tele-Consult"}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-500 block text-xs uppercase tracking-wider mb-1">Date</span>
                                <span className="font-bold text-gray-800">{selectedDate}</span>
                              </div>
                              <div>
                                <span className="text-gray-500 block text-xs uppercase tracking-wider mb-1">Time</span>
                                <span className="font-bold text-gray-800">{selectedTime}</span>
                              </div>
                            </div>
                          </div>

                          {/* Navigation Buttons */}
                          <div className="flex gap-4">
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1 rounded-full py-6 text-[15px] font-bold border-gray-300 text-gray-600 hover:bg-gray-50"
                              onClick={() => setAppointmentStep(2)}
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              className="flex-1 bg-deep-green hover:bg-deep-green/90 text-white rounded-full py-6 text-[15px] font-bold shadow-md hover:shadow-lg transition-all"
                            >
                              Confirm Appointment
                            </Button>
                          </div>

                          <p className="text-xs text-gray-500 text-center mt-4">
                            By confirming you agree to our terms. We will contact you
                            to verify the slot.
                          </p>
                        </form>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Success Message */
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-[2rem] shadow-xl p-12 text-center border border-border/40">
                  <div className="mb-8 flex justify-center">
                    <div className="h-24 w-24 bg-green-50 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-12 w-12 text-green-500 animate-bounce" />
                    </div>
                  </div>
                  <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                    Appointment Requested!
                  </h2>
                  <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name.split(' ')[0]}. Your appointment request has been received. Our team will contact
                    you shortly to confirm the booking.
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-8 mb-10 text-left border border-gray-100">
                    <h4 className="font-bold text-foreground mb-5 text-lg border-b border-gray-200 pb-3">
                      Booking Details
                    </h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Doctor</span>
                        <span className="font-bold text-gray-800 text-right">
                          {selectedDoctor?.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Date & Time</span>
                        <span className="font-bold text-gray-800 text-right">
                          {selectedDate} at {selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 font-medium">Contact</span>
                        <span className="font-bold text-gray-800 text-right">
                          {formData.phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 max-w-sm mx-auto">
                    <Button
                      className="w-full bg-deep-green hover:bg-deep-green/90 text-white rounded-full py-6 text-[15px] font-bold shadow-md hover:shadow-lg transition-all"
                      onClick={() => {
                        window.location.href = "/";
                      }}
                    >
                      Back to Home
                    </Button>
                    <a
                      href={`https://wa.me/919224338833?text=Hi%20AWA%20team,%20I%20just%20booked%20an%20appointment%20with%20${selectedDoctor?.name}%20for%20${selectedDate}%20at%20${selectedTime}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button variant="outline" className="w-full rounded-full py-6 text-[15px] font-bold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                        Message on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Appointment;
