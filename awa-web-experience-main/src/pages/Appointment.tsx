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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Book Your Wellness Appointment
            </h1>
            <p className="text-muted-foreground text-lg">
              Schedule a consultation with our certified wellness doctors. Choose
              in-clinic visits or tele-consultations based on your preference.
            </p>
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
                  <div className="bg-white rounded-2xl shadow-card p-6 sticky top-28">
                    {selectedDoctor && (
                      <>
                        <div className="mb-6">
                          <h3 className="font-display text-xl font-bold text-foreground mb-1">
                            {selectedDoctor.name}
                          </h3>
                          <p className="text-sm text-primary font-semibold mb-2">
                            {selectedDoctor.specialization}
                          </p>
                          {selectedDoctor.registration && (
                            <p className="text-xs text-muted-foreground">
                              Reg. No: {selectedDoctor.registration}
                            </p>
                          )}
                        </div>

                        {/* Appointment Type Selector */}
                        <div className="space-y-2 mb-6">
                          <label className="text-sm font-semibold text-foreground">
                            Appointment Type
                          </label>
                          <div className="space-y-2">
                            <button
                              onClick={() => setSelectedType("in-clinic")}
                              className={`w-full p-3 rounded-lg border-2 transition-all text-left font-medium ${
                                selectedType === "in-clinic"
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-border text-foreground hover:border-primary"
                              }`}
                            >
                              In-Clinic Visit
                            </button>
                            <button
                              onClick={() => setSelectedType("tele-consult")}
                              className={`w-full p-3 rounded-lg border-2 transition-all text-left font-medium ${
                                selectedType === "tele-consult"
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-border text-foreground hover:border-primary"
                              }`}
                            >
                              Tele-Consult
                            </button>
                          </div>
                        </div>

                        {/* Appointment Details */}
                        <div className="space-y-3 pt-6 border-t border-border">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">
                              Amodaya Wellness Center
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">
                              Mon–Sat · 9:00 AM – 6:00 PM
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <a
                              href="tel:+919876543210"
                              className="text-primary hover:underline"
                            >
                              +91 98765 43210
                            </a>
                          </div>
                        </div>

                        <Button
                          variant="cta"
                          className="w-full mt-4 rounded-full"
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
                  <div className="bg-white rounded-2xl shadow-card p-8">
                    {/* Step Indicator */}
                    <div className="flex items-center justify-between mb-8">
                      {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex items-center">
                          <div
                            className={`h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all ${
                              appointmentStep >= step
                                ? "bg-primary text-white"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {step}
                          </div>
                          {step < 4 && (
                            <div
                              className={`h-1 flex-1 mx-2 transition-all ${
                                appointmentStep > step
                                  ? "bg-primary"
                                  : "bg-muted"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Step 1: Doctor Selection */}
                    {appointmentStep === 1 && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                          Select a Doctor
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                          {doctors.map((doctor) => (
                            <button
                              key={doctor.id}
                              onClick={() => {
                                setSelectedDoctor(doctor);
                                setAppointmentStep(2);
                              }}
                              className={`p-4 rounded-lg border-2 transition-all text-left ${
                                selectedDoctor?.id === doctor.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary"
                              }`}
                            >
                              <p className="font-semibold text-foreground">
                                {doctor.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {doctor.specialization}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Date & Time Selection */}
                    {appointmentStep === 2 && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                          Select Date & Time
                        </h3>

                        {/* Date Selection */}
                        <div className="mb-8">
                          <label className="block font-semibold text-foreground mb-4">
                            <Calendar className="inline h-4 w-4 mr-2" />
                            Choose a Date
                          </label>
                          <div className="grid grid-cols-7 gap-2">
                            {dates.map((date) => (
                              <button
                                key={formatDate(date)}
                                onClick={() => setSelectedDate(formatDate(date))}
                                className={`p-3 rounded-lg border-2 transition-all text-center ${
                                  selectedDate === formatDate(date)
                                    ? "border-primary bg-primary text-white"
                                    : "border-border hover:border-primary text-foreground"
                                }`}
                              >
                                <div className="text-xs font-semibold">
                                  {getDayName(date)}
                                </div>
                                <div className="text-sm font-bold">
                                  {getDateNum(date)}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Time Slot Selection */}
                        <div>
                          <label className="block font-semibold text-foreground mb-4">
                            <Clock className="inline h-4 w-4 mr-2" />
                            Choose a Time Slot
                          </label>
                          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot.time}
                                onClick={() => setSelectedTime(slot.time)}
                                disabled={!slot.available}
                                className={`p-2 rounded-lg border-2 transition-all text-sm font-medium ${
                                  selectedTime === slot.time
                                    ? "border-primary bg-primary text-white"
                                    : slot.available
                                    ? "border-border hover:border-primary text-foreground"
                                    : "border-border bg-muted text-muted-foreground cursor-not-allowed"
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex gap-3 mt-8">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => setAppointmentStep(1)}
                          >
                            Back
                          </Button>
                          <Button
                            variant="cta"
                            className="flex-1"
                            onClick={() => setAppointmentStep(3)}
                            disabled={!selectedDate || !selectedTime}
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Personal Information */}
                    {appointmentStep === 3 && (
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                          Your Information
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              <User className="inline h-4 w-4 mr-2" />
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                              placeholder="Your full name"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              <Phone className="inline h-4 w-4 mr-2" />
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              <Mail className="inline h-4 w-4 mr-2" />
                              Email Address *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                              Message (Optional)
                            </label>
                            <textarea
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
                              className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                              placeholder="Tell us about your health concern or reason for visit..."
                              rows={4}
                            />
                          </div>

                          {/* Appointment Summary */}
                          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                            <h4 className="font-semibold text-foreground mb-3">
                              Appointment Summary
                            </h4>
                            <div className="space-y-2 text-sm">
                              <p>
                                <span className="text-muted-foreground">Doctor:</span>{" "}
                                <span className="font-semibold">
                                  {selectedDoctor?.name}
                                </span>
                              </p>
                              <p>
                                <span className="text-muted-foreground">Type:</span>{" "}
                                <span className="font-semibold capitalize">
                                  {selectedType === "in-clinic"
                                    ? "In-Clinic Visit"
                                    : "Tele-Consult"}
                                </span>
                              </p>
                              <p>
                                <span className="text-muted-foreground">Date:</span>{" "}
                                <span className="font-semibold">{selectedDate}</span>
                              </p>
                              <p>
                                <span className="text-muted-foreground">Time:</span>{" "}
                                <span className="font-semibold">{selectedTime}</span>
                              </p>
                            </div>
                          </div>

                          {/* Navigation Buttons */}
                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              className="flex-1"
                              onClick={() => setAppointmentStep(2)}
                            >
                              Back
                            </Button>
                            <Button
                              type="submit"
                              variant="cta"
                              className="flex-1"
                            >
                              Confirm Appointment
                            </Button>
                          </div>

                          <p className="text-xs text-muted-foreground text-center">
                            By confirming you agree to our terms. We will contact you
                            to verify the slot.
                          </p>
                        </form>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Success Message */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-card p-12 text-center">
                  <div className="mb-6 flex justify-center">
                    <CheckCircle className="h-20 w-20 text-primary animate-pulse" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                    Appointment Requested!
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Your appointment request has been received. Our team will contact
                    you shortly to confirm the booking.
                  </p>

                  <div className="bg-primary/5 rounded-lg p-6 mb-8 text-left">
                    <h4 className="font-semibold text-foreground mb-3">
                      Appointment Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-muted-foreground">Doctor:</span>{" "}
                        <span className="font-semibold">
                          {selectedDoctor?.name}
                        </span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Date:</span>{" "}
                        <span className="font-semibold">{selectedDate}</span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Time:</span>{" "}
                        <span className="font-semibold">{selectedTime}</span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Name:</span>{" "}
                        <span className="font-semibold">{formData.name}</span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Phone:</span>{" "}
                        <span className="font-semibold">{formData.phone}</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="cta"
                      className="w-full rounded-full"
                      onClick={() => {
                        window.location.href = "/";
                      }}
                    >
                      Back to Home
                    </Button>
                    <a
                      href="https://wa.me/919876543210?text=Hi%20AWA%20team%20I%20booked%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button variant="outline" className="w-full rounded-full">
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
