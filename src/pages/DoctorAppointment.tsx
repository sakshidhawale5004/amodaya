import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Mail, Award, CheckCircle } from "lucide-react";

import dimple from "@/assets/members/dimple-thakkar.jpeg";
import samir from "@/assets/members/dr-samir-prabhudesai-member2.jpeg";
import neelam from "@/assets/members/neelam-kaur.jpeg";
import kalyani from "@/assets/members/dr-kalyani-patil.jpeg";
import smita from "@/assets/members/dr-smita-lodhe.jpeg";
import bhagyashree from "@/assets/members/bhagyashree-deshpande.jpg";
import ruby from "@/assets/members/ruby-khan.jpeg";
import swapnil from "@/assets/members/dr-swapnil-bhanushali.jpeg";
import priti from "@/assets/members/dr-priti-yamdagni.jpeg";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  registration?: string;
  image: string;
  bio: string;
  specializations: string[];
  commonTreats: string[];
  experience?: string;
  languages?: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Diimple Punit Thakkar",
    specialization: "Grapho Therapist",
    registration: "AWA-GRAPH-001",
    image: dimple,
    bio: "Diimple Punit Thakkar is a certified Grapho Therapist specializing in handwriting analysis and grapho-therapeutic interventions. She uses the therapeutic science of handwriting to promote healing and personal development through holistic wellness approaches.",
    specializations: ["Grapho Therapy", "Handwriting Analysis", "Therapeutic Intervention"],
    commonTreats: ["Stress Management", "Behavioral Issues", "Personal Development", "Emotional Healing", "Self-discovery"],
    experience: "8+ Yrs",
    languages: "English | Hindi | Marathi"
  },
  {
    id: 2,
    name: "Samir Prabhudesai",
    specialization: "Metabolic Health Coach",
    registration: "AWA-META-002",
    image: samir,
    bio: "Samir Prabhudesai is a certified Metabolic Health Coach specializing in weight management and metabolic wellness. With expertise in personalized nutrition and lifestyle optimization, he helps clients achieve sustainable health transformation.",
    specializations: ["Metabolic Health", "Weight Management", "Nutrition Coaching"],
    commonTreats: ["Weight Loss", "Metabolic Optimization", "Nutrition Planning", "Lifestyle Change", "Health Coaching"],
    experience: "10+ Yrs",
    languages: "English | Hindi | Marathi"
  },
  {
    id: 3,
    name: "Neelam Kaur",
    specialization: "Sound Healing Practitioner",
    registration: "AWA-SOUND-003",
    image: neelam,
    bio: "Neelam Kaur is a certified Sound Healing Practitioner specializing in vibrational medicine and acoustic therapy. She harnesses the healing power of sound frequencies to promote holistic wellness and emotional balance.",
    specializations: ["Sound Healing", "Vibrational Medicine", "Acoustic Therapy"],
    commonTreats: ["Stress Relief", "Sound Bath", "Frequency Therapy", "Chakra Balancing", "Emotional Healing"],
    experience: "7+ Yrs",
    languages: "English | Hindi | Punjabi"
  },
  {
    id: 4,
    name: "Dr. Kalyani Patil",
    specialization: "Art Therapist",
    registration: "AWA-ART-004",
    image: kalyani,
    bio: "Dr. Kalyani Patil is a licensed Art Therapist and Emotional Intelligence Coach combining creative expression with psychological wellness. She utilizes art-based interventions to facilitate healing and personal transformation.",
    specializations: ["Art Therapy", "Emotional Intelligence", "Creative Healing"],
    commonTreats: ["Art-based Therapy", "EI Coaching", "Creative Expression", "Trauma Healing", "Personal Growth"],
    experience: "9+ Yrs",
    languages: "English | Hindi | Marathi"
  },
  {
    id: 5,
    name: "Dr. Smita Lodhe",
    specialization: "Work Ergonomics Specialist",
    registration: "AWA-ERGO-005",
    image: smita,
    bio: "Dr. Smita Lodhe is a registered Work Ergonomics Specialist dedicated to optimizing workplace wellness and preventing occupational injuries. She designs evidence-based ergonomic interventions for employee health.",
    specializations: ["Work Ergonomics", "Occupational Health", "Workplace Wellness"],
    commonTreats: ["Posture Correction", "Workplace Injury Prevention", "Ergonomic Assessment", "Wellness Programs"],
    experience: "11+ Yrs",
    languages: "English | Hindi | Marathi"
  },
  {
    id: 6,
    name: "Bhagyashree Deshpande",
    specialization: "Dental Health Educator",
    registration: "AWA-DENTAL-006",
    image: bhagyashree,
    bio: "Bhagyashree Deshpande is a dedicated Dental Health Educator and Consultant committed to promoting oral health awareness. With extensive dental background, she provides expert guidance on dental wellness and preventive care.",
    specializations: ["Dental Health", "Oral Care", "Health Education"],
    commonTreats: ["Oral Health Guidance", "Preventive Care", "Dental Consultation", "Oral Hygiene Training"],
    experience: "8+ Yrs",
    languages: "English | Hindi | Marathi"
  },
  {
    id: 7,
    name: "Ruby Khan",
    specialization: "Clinical Dietician",
    registration: "AWA-DIET-007",
    image: ruby,
    bio: "Ruby Khan is a certified Clinical Dietician providing personalized nutritional assessment and medical nutrition therapy. She specializes in developing evidence-based dietary interventions for various health conditions.",
    specializations: ["Clinical Dietetics", "Medical Nutrition", "Dietary Counseling"],
    commonTreats: ["Nutrition Therapy", "Diet Planning", "Weight Management", "Disease Prevention", "Healthy Lifestyle"],
    experience: "9+ Yrs",
    languages: "English | Hindi | Marathi"
  },
  {
    id: 8,
    name: "Dr. Swapnil Bhanushali",
    specialization: "Ayurveda Specialist",
    registration: "AWA-AYUR-008",
    image: swapnil,
    bio: "Dr. Swapnil Bhanushali is an Ayurveda specialist with advanced expertise in cardiovascular wellness and heart health. He combines traditional Ayurvedic principles with modern holistic approaches for cardiac health.",
    specializations: ["Ayurveda", "Heart Health", "Holistic Medicine"],
    commonTreats: ["Ayurvedic Treatment", "Heart Wellness", "Disease Prevention", "Holistic Healing", "Traditional Medicine"],
    experience: "12+ Yrs",
    languages: "English | Hindi | Marathi | Sanskrit"
  },
  {
    id: 9,
    name: "Dr. Priti Yamdagni",
    specialization: "Emotional Intelligence Specialist",
    registration: "AWA-EI-009",
    image: priti,
    bio: "Dr. Priti Yamdagni is a certified Emotional Intelligence Specialist dedicated to developing emotional competencies and psychological resilience. She provides coaching and therapeutic interventions for emotional well-being.",
    specializations: ["Emotional Intelligence", "Psychological Resilience", "Coaching"],
    commonTreats: ["EI Development", "Resilience Training", "Mental Health Support", "Life Coaching", "Wellness Programs"],
    experience: "10+ Yrs",
    languages: "English | Hindi | Marathi"
  }
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

const DoctorAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<"in-clinic" | "tele-consult">("in-clinic");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const doctor = doctors.find(d => d.id === Number(doctorId));
  const dates = generateDates();

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Not Found</h1>
            <p className="text-muted-foreground mb-6">The doctor you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/members")} variant="cta">
              Back to Doctors
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (date: Date) => date.toISOString().split("T")[0];
  const getDayName = (date: Date) => date.toLocaleDateString("en-US", { weekday: "short" });
  const getDateNum = (date: Date) => date.getDate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email && selectedDate && selectedTime) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", email: "", reason: "" });
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
          {!submitted ? (
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 mb-12">
              {/* Left Side - Doctor Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Doctor Image */}
                <div className="mb-8">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="bg-white rounded-2xl shadow-card p-8">
                  {/* Registration */}
                  {doctor.registration && (
                    <p className="text-xs text-muted-foreground mb-2">
                      Registration No: {doctor.registration}
                    </p>
                  )}

                  {/* Name & Title */}
                  <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                    {doctor.name}
                  </h1>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {doctor.specialization}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Experience & Languages */}
                  <div className="space-y-3 pb-6 border-b border-border">
                    {doctor.experience && (
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{doctor.experience} Overall Experience</span>
                      </div>
                    )}
                    {doctor.languages && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">{doctor.languages}</span>
                      </div>
                    )}
                  </div>

                  {/* Specializations */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-3">Specializations</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {doctor.specializations.map((spec, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Common Treats */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Commonly Treats</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {doctor.commonTreats.map((treat, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground bg-muted rounded px-2 py-1">
                          {treat}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Amodaya Wellness Center</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Mon–Sat · 9:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href="tel:+919876543210" className="text-primary hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Booking Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                    Book an Appointment
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Appointment Type */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Appointment Type
                      </label>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setAppointmentType("in-clinic")}
                          className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                            appointmentType === "in-clinic"
                              ? "border-primary bg-primary text-white"
                              : "border-border text-foreground hover:border-primary"
                          }`}
                        >
                          In-Clinic
                        </button>
                        <button
                          type="button"
                          onClick={() => setAppointmentType("tele-consult")}
                          className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all font-medium ${
                            appointmentType === "tele-consult"
                              ? "border-primary bg-primary text-white"
                              : "border-border text-foreground hover:border-primary"
                          }`}
                        >
                          Tele-Consult
                        </button>
                      </div>
                    </div>

                    {/* Select Date */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Select Date
                      </label>
                      <div className="grid grid-cols-7 gap-2">
                        {dates.map((date) => (
                          <button
                            key={formatDate(date)}
                            type="button"
                            onClick={() => setSelectedDate(formatDate(date))}
                            className={`p-2 rounded-lg border-2 transition-all text-center text-xs ${
                              selectedDate === formatDate(date)
                                ? "border-primary bg-primary text-white"
                                : "border-border hover:border-primary"
                            }`}
                          >
                            <div className="font-semibold">{getDayName(date)}</div>
                            <div className="text-xs">{getDateNum(date)}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Select Time */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Select Time Slot
                      </label>
                      <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto pr-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            type="button"
                            onClick={() => setSelectedTime(slot.time)}
                            disabled={!slot.available}
                            className={`p-2 rounded-lg border-2 transition-all text-sm font-medium ${
                              selectedTime === slot.time
                                ? "border-primary bg-primary text-white"
                                : slot.available
                                ? "border-border hover:border-primary"
                                : "border-border bg-muted text-muted-foreground cursor-not-allowed"
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form Inputs */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
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
                        <label className="block text-sm font-semibold text-foreground mb-2">
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

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Write your message..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-5 py-3 rounded-xl bg-gray-100 text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none h-28"
                      />
                    </div>

                    {/* Confirmation Text */}
                    <p className="text-xs text-muted-foreground">
                      By confirming you agree to our terms. We will contact you to verify the slot.
                    </p>

                    {/* Submit Buttons */}
                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedTime || !formData.name || !formData.phone || !formData.email}
                      className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Book a Appointment
                    </button>
                  </form>

                  {/* Contact Options */}
                  <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                    <a href="tel:+919876543210" className="flex-1">
                      <Button variant="outline" className="w-full gap-2">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/919876543210?text=Hi%20AWA%20team%20I%20want%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
                        <span>💬</span>
                        WhatsApp
                      </Button>
                    </a>
                  </div>
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
                <p className="text-muted-foreground text-lg mb-8">
                  Your appointment request with {doctor.name} has been received. Our team will contact you shortly to confirm.
                </p>

                <div className="bg-primary/5 rounded-lg p-6 mb-8 text-left">
                  <h4 className="font-semibold text-foreground mb-3">Appointment Details</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Doctor:</span>{" "}
                      <span className="font-semibold">{doctor.name}</span>
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
                      <span className="text-muted-foreground">Type:</span>{" "}
                      <span className="font-semibold capitalize">
                        {appointmentType === "in-clinic" ? "In-Clinic Visit" : "Tele-Consult"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="cta"
                    className="w-full rounded-full"
                    onClick={() => navigate("/members")}
                  >
                    Back to Doctors
                  </Button>
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

export default DoctorAppointment;
