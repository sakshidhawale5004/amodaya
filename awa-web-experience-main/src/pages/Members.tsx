import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Award, BadgeCheck } from "lucide-react";

import placeholder from "@/assets/members/member-1.jpg";
import dimple from "@/assets/members/dimple-thakkar.jpeg";
import samir from "@/assets/members/dr-samir-prabhudesai.jpg";
import neelam from "@/assets/members/neelam-kaur.jpeg";
import kalyani from "@/assets/members/dr-kalyani-patil.jpeg";
import smita from "@/assets/members/dr-smita-lodhe.jpeg";
import bhagyashree from "@/assets/members/bhagyashree-deshpande.jpg";
import ruby from "@/assets/members/ruby-khan.jpeg";
import swapnil from "@/assets/members/dr-swapnil-bhanushali.jpeg";

type Certificate = {
  title: string;
  file?: string;
};

type Doctor = {
  name: string;
  qualification: string;
  image: string;
  bio?: string;
  certificates?: Certificate[];
  certificateFiles?: string[];
};

const doctors: Doctor[] = [
  {
    name: "Dr. Pallavi Rahane",
    qualification: "Cosmetic Dentistry Specialist",
    image: placeholder,
    bio: "Dr. Pallavi Rahane is a highly skilled cosmetic dentistry specialist dedicated to enhancing smiles and promoting oral wellness. With extensive training in advanced cosmetic dental procedures, she combines aesthetics with functional dentistry to deliver exceptional patient care and confidence.",
    certificates: [
      { title: "Cosmetic Dentistry Certification", file: "/certificates/Degree certificate bhagyashree deshpande.jpg" },
    ],
    certificateFiles: ["/certificates/Degree certificate bhagyashree deshpande.jpg"],
  },
  {
    name: "Diimple Punit Thakkar",
    qualification: "Grapho Therapist",
    image: dimple,
    bio: "Diimple Punit Thakkar is a certified Grapho Therapist specializing in handwriting analysis and grapho-therapeutic interventions. She uses the therapeutic science of handwriting to promote healing and personal development through holistic wellness approaches.",
    certificates: [
      { title: "Certified Grapho Therapist", file: "/certificates/dimplethakkarcerifcates (1).jpg" },
      { title: "Graphotherapy Certification", file: "/certificates/dimplethakkarcerifcates (2).jpg" },
      { title: "Handwriting Analysis Expert", file: "/certificates/dimplethakkarcerifcates (3).jpg" },
    ],
    certificateFiles: [
      "/certificates/dimplethakkarcerifcates (1).jpg",
      "/certificates/dimplethakkarcerifcates (2).jpg",
      "/certificates/dimplethakkarcerifcates (3).jpg"
    ],
  },
  {
    name: "Samir Prabhudesai",
    qualification: "Metabolic Health Coach - Weight Management",
    image: samir,
    bio: "Samir Prabhudesai is a certified Metabolic Health Coach specializing in weight management and metabolic wellness. With expertise in personalized nutrition and lifestyle optimization, he helps clients achieve sustainable health transformation through evidence-based metabolic coaching.",
    certificates: [
      { title: "Metabolic Health Coaching Certification", file: "/certificates/smitalodhe.jpg" },
      { title: "Weight Management Specialist Diploma", file: "/certificates/dr samir prabhudesai.pdf" },
      { title: "Metabolic Health Expert - CPD Accredited" }
    ],
    certificateFiles: ["/certificates/smitalodhe.jpg", "/certificates/dr samir prabhudesai.pdf"],
  },
  {
    name: "Sneha Sravya",
    qualification: "Clinical Physiotherapist",
    image: placeholder,
    bio: "Sneha Sravya is a dedicated Clinical Physiotherapist with comprehensive expertise in evidence-based physical rehabilitation and movement therapy. She specializes in treating musculoskeletal conditions and optimizing functional recovery through personalized therapeutic interventions.",
    certificates: [
      { title: "Bachelor of Physiotherapy - Clinical Practitioner", file: "/certificates/drswapnilbhanushali.jpeg" },
      { title: "Clinical Physiotherapy Certification" },
      { title: "Advanced Rehabilitation Therapy" }
    ],
    certificateFiles: ["/certificates/drswapnilbhanushali.jpeg"],
  },
  {
    name: "Neelam Kaur",
    qualification: "Sound Healing Practitioner",
    image: neelam,
    bio: "Neelam Kaur is a certified Sound Healing Practitioner specializing in vibrational medicine and acoustic therapy. She harnesses the healing power of sound frequencies and vibrations to promote holistic wellness, stress relief, and emotional balance in patients.",
    certificates: [
      { title: "Sound Healing Certification", file: "/certificates/neelamkaur (1).pdf" },
      { title: "Vibrational Medicine Practitioner", file: "/certificates/neelamkaur (2).pdf" },
      { title: "Acoustic Therapy Specialist" },
    ],
    certificateFiles: [
      "/certificates/neelamkaur (1).pdf",
      "/certificates/neelamkaur (2).pdf"
    ],
  },
  {
    name: "Dr. Kalyani Patil",
    qualification: "Art Therapist & Emotional Intelligence Coach",
    image: kalyani,
    bio: "Dr. Kalyani Patil is a licensed Art Therapist and Emotional Intelligence Coach combining creative expression with psychological wellness. She utilizes art-based interventions and emotional intelligence coaching to facilitate healing, self-discovery, and personal transformation.",
    certificates: [
      { title: "Licensed Art Therapist Certification", file: "/certificates/Dr Kalyani Certificate.pdf" },
      { title: "Emotional Intelligence Coach Practitioner - IAPCCT (January 19, 2024)", file: "/certificates/KALYANI PATIL  Udyam Registration Certificate.pdf" },
      { title: "Certificate #205196" },
    ],
    certificateFiles: [
      "/certificates/Dr Kalyani Certificate.pdf",
      "/certificates/KALYANI PATIL  Udyam Registration Certificate.pdf"
    ],
  },
  {
    name: "Dr. Smita Lodhe",
    qualification: "Work Ergonomics Specialist",
    image: smita,
    bio: "Dr. Smita Lodhe is a registered Work Ergonomics Specialist dedicated to optimizing workplace wellness and preventing occupational injuries. She designs evidence-based ergonomic interventions and workplace accommodations to promote employee health and productivity.",
    certificates: [
      { title: "Work Ergonomics Certification", file: "/certificates/rameshsuryavanshi.jpeg" },
      { title: "Occupational Health & Safety Specialist" },
      { title: "Workplace Wellness Program Developer" }
    ],
    certificateFiles: ["/certificates/rameshsuryavanshi.jpeg"],
  },
  {
    name: "Bhagyashree Deshpande",
    qualification: "Dental Health Educator & Consultant",
    image: bhagyashree,
    bio: "Bhagyashree Deshpande is a dedicated Dental Health Educator and Consultant committed to promoting oral health awareness and prevention. With extensive dental background, she provides expert guidance on dental wellness and preventive oral care strategies.",
    certificates: [
      { title: "Dental Health Certification", file: "/certificates/rubykhan  (1).png" },
      { title: "Dental Health Educator Diploma", file: "/certificates/rubykhan  (2).png" },
      { title: "Oral Health Promotion Specialist", file: "/certificates/rubykhan  (3).png" },
    ],
    certificateFiles: [
      "/certificates/rubykhan  (1).png",
      "/certificates/rubykhan  (2).png",
      "/certificates/rubykhan  (3).png"
    ],
  },
  {
    name: "Ruby Khan",
    qualification: "Clinical Dietician",
    image: ruby,
    bio: "Ruby Khan is a certified Clinical Dietician providing personalized nutritional assessment and medical nutrition therapy. She specializes in developing evidence-based dietary interventions for various health conditions and promoting optimal nutritional wellness.",
    certificates: [
      { title: "Clinical Dietician Certification - FSSA Council", file: "/certificates/rupalishaw (1).jpeg" },
      { title: "Medical Nutrition Therapy Specialist", file: "/certificates/rupalishaw (2).jpeg" },
      { title: "Registered Dietician - Professional Standards", file: "/certificates/rupalishaw (3).jpeg" },
    ],
    certificateFiles: [
      "/certificates/rupalishaw (1).jpeg",
      "/certificates/rupalishaw (2).jpeg",
      "/certificates/rupalishaw (3).jpeg"
    ],
  },
  {
    name: "Dr. Swapnil Bhanushali",
    qualification: "Ayurveda Specialist - Healthy Heart Wellness",
    image: swapnil,
    bio: "Dr. Swapnil Bhanushali is an Ayurveda specialist with advanced expertise in cardiovascular wellness and heart health. He combines traditional Ayurvedic principles with modern holistic approaches to promote cardiac health and prevention of heart disease through integrative medicine.",
    certificates: [
      { title: "Ayurveda Vachaspati - M.D. (Ayurveda) - MUHS Nashik (July 13, 2023)", file: "/certificates/samiitsarode.jpg" },
      { title: "Cardiovascular Wellness Specialist - Ayurveda" },
      { title: "Heart Health & Disease Prevention Practitioner" },
    ],
    certificateFiles: ["/certificates/samiitsarode.jpg"],
  },
  {
    name: "Dr. Priti Yamdagni",
    qualification: "Emotional Intelligence Specialist",
    image: placeholder,
    bio: "Dr. Priti Yamdagni is a certified Emotional Intelligence Specialist dedicated to developing emotional competencies and psychological resilience. She provides coaching and therapeutic interventions focused on emotional well-being, interpersonal effectiveness, and holistic mental health.",
    certificates: [
      { title: "Emotional Intelligence Certification", file: "/certificates/smitalodhe.jpg" },
      { title: "Emotional Wellness Coach - Certified Professional" },
      { title: "Psychological Resilience Practitioner" },
    ],
    certificateFiles: ["/certificates/smitalodhe.jpg"],
  },
];

const Members = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
              Meet Our Wellness Doctors
            </h1>
            <p className="text-muted-foreground text-lg">
              A growing circle of certified doctors committed to holistic
              healing, mindful living, and integrated wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={`${doctor.name}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="bg-card rounded-2xl shadow-card hover:shadow-warm transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-contain object-center bg-muted group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    {doctor.qualification}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto justify-center">
                    <Button
                      variant="warm"
                      size="sm"
                      className="rounded-full px-5"
                      onClick={() => setContactOpen(true)}
                    >
                      Appointment
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full px-5"
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingContactButton />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />

      <Dialog open={!!selectedDoctor} onOpenChange={(o) => !o && setSelectedDoctor(null)}>
        <DialogContent className="sm:max-w-2xl bg-background max-h-[90vh] overflow-y-auto">
          {selectedDoctor && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-primary">
                  {selectedDoctor.name}
                </DialogTitle>
                <DialogDescription>{selectedDoctor.qualification}</DialogDescription>
              </DialogHeader>

              <div className="grid sm:grid-cols-[180px_1fr] gap-5 mt-2">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-primary" /> About
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedDoctor.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" /> Certificates
                    </h4>
                    <ul className="space-y-2">
                      {selectedDoctor.certificates?.map((c, idx) => (
                        <li key={idx}>
                          {c.file ? (
                            <a
                              href={`/certificate-viewer.html?file=${encodeURIComponent(c.file)}&title=${encodeURIComponent(c.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-foreground bg-muted/60 rounded-md px-3 py-2 border border-border hover:bg-primary/10 hover:border-primary transition-colors flex items-center justify-between group"
                            >
                              <span>{c.title}</span>
                              <svg className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            <div className="text-sm text-foreground bg-muted/60 rounded-md px-3 py-2 border border-border">
                              {c.title}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                    {selectedDoctor.certificateFiles && selectedDoctor.certificateFiles.length > 0 && (
                      <div className="mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => {
                            if (selectedDoctor.certificateFiles && selectedDoctor.certificateFiles.length > 0) {
                              selectedDoctor.certificateFiles.forEach(file => {
                                window.open(`/certificate-viewer.html?file=${encodeURIComponent(file)}&title=${encodeURIComponent(selectedDoctor.name + ' Certificate')}`, '_blank');
                              });
                            }
                          }}
                        >
                          View All Certificates
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  variant="cta"
                  size="sm"
                  className="rounded-full px-6"
                  onClick={() => {
                    setSelectedDoctor(null);
                    setContactOpen(true);
                  }}
                >
                  Book Appointment
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Members;
