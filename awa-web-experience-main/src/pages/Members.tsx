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

import m1 from "@/assets/members/member-1.jpg";
import m2 from "@/assets/members/member-2.jpg";
import m3 from "@/assets/members/member-3.jpeg";
import m4 from "@/assets/members/member-4.jpg";
import m5 from "@/assets/members/member-5.jpeg";
import m6 from "@/assets/members/member-6.jpeg";
import m7 from "@/assets/members/member-7.jpeg";
import m8 from "@/assets/members/member-8.jpeg";
import m9 from "@/assets/members/member-9.jpeg";
import m10 from "@/assets/members/member-10.jpeg";
import m11 from "@/assets/members/member-11.jpeg";

type Doctor = {
  name: string;
  qualification: string;
  image: string;
  bio?: string;
  certificates?: string[];
};

const doctors: Doctor[] = [
  {
    name: "Dr. Bhagyashree Deshpande",
    qualification: "BDS - Bachelor of Dental Surgery",
    image: m1,
    bio: "Dr. Bhagyashree Deshpande is a qualified dental surgeon from Maharashtra University of Health Sciences (MUHS), Nashik. She completed her Bachelor of Dental Surgery degree from Government Dental College & Hospital, Aurangabad in 2016. She is dedicated to wellness practices with extensive experience in holistic care and patient wellbeing.",
    certificates: [
      "Bachelor of Dental Surgery (BDS) - MUHS Nashik (2017)",
      "PRN: 0213111629",
      "Government Dental College & Hospital, Aurangabad"
    ],
  },
  {
    name: "Dr. Dimple Thakkar",
    qualification: "Certified Holistic Wellness Practitioner",
    image: m2,
    bio: "Dr. Dimple Thakkar is a multi-certified holistic wellness practitioner specializing in alternative healing modalities. She is certified in Ho'Oponopono + EFT Healing, Handwriting Analysis & Grapho-therapy, and Tarot Card Reading. Her compassionate approach focuses on integrative wellness and preventive care through various healing techniques.",
    certificates: [
      "Certified Ho'Oponopono + EFT Healer - Indu & Mitesh Khatri (Law of Attraction Coach)",
      "Certified Handwriting Analyst & Grapho Analytical Therapist - International Council of Graphologist (April 2024)",
      "Master Tarot Card Reader - Rupal Sumaria (March 2, 2022)",
      "Unique Code: ICG 2298 (2021)"
    ],
  },
  {
    name: "Dr. Dimple Thakkar",
    qualification: "Certified Holistic Wellness Practitioner",
    image: m3,
    bio: "Dr. Dimple Thakkar is experienced in mindful living, healing therapies, and patient-centered care. She specializes in alternative healing modalities including energy healing, graphology, and tarot reading to provide comprehensive wellness solutions.",
    certificates: [
      "Certified Ho'Oponopono + EFT Healer",
      "Certified Handwriting Analyst & Grapho Analytical Therapist",
      "Master Tarot Card Reader"
    ],
  },
  {
    name: "Dr. Smita Lodhe",
    qualification: "Occupational Therapist & Physiotherapist",
    image: m4,
    bio: "Dr. Smita Lodhe (Leeha Smita Sarpankant) is a registered Occupational Therapist and Physiotherapist with the Maharashtra State Council. She is committed to holistic healing and empowering patients through wellness education and therapeutic interventions.",
    certificates: [
      "Registered Occupational Therapist/Physiotherapist - Maharashtra State Council (April 23, 2013)",
      "Registration No: 2013/04/PT/002803",
      "Valid until: April 23, 2018",
      "Maharashtra State Council for Occupational Therapy & Physiotherapy Act, 2002"
    ],
  },
  {
    name: "Dr. Samir Prabhudesai",
    qualification: "Low Carb Nutrition & Metabolic Health Specialist",
    image: m5,
    bio: "Dr. Samir Prabhudesai is a skilled practitioner with specialized training in Low Carb Nutrition and Metabolic Health. He completed his CPD accredited diploma from dLife Healthcare Foundation, focusing on integrative medicine and lifestyle wellness approaches.",
    certificates: [
      "Low Carb Nutrition & Metabolic Health Diploma - dLife Healthcare Foundation (October 13, 2024)",
      "Official CPD Certificate - CPD Standards Office Provider No: 50492",
      "Accredited by The CPD Standards Office (2023-2025)"
    ],
  },
  {
    name: "Dr. Swapnil Bhanushali",
    qualification: "M.D. (Ayurveda) - Ayurveda Vachaspati",
    image: m6,
    bio: "Dr. Swapnil Balkrishna Bhanushali holds an M.D. in Ayurveda (Ayurveda Vachaspati) with specialization in Compendium and Basic Principles from Maharashtra University of Health Sciences, Nashik. He is dedicated to advancing patient wellness through evidence-based Ayurvedic and holistic approaches.",
    certificates: [
      "Ayurveda Vachaspati - M.D. (Ayurveda) - MUHS Nashik (July 13, 2023)",
      "PRN: 2020240049",
      "Shree Saptashrungi Ayurved Mahavidyalaya and Hospital, Nashik",
      "Specialization: Compendium and Basic Principles"
    ],
  },
  {
    name: "Dr. Neelam Kaur",
    qualification: "Certified Holistic Healing & Reiki Practitioner",
    image: m7,
    bio: "Dr. Neelam Kaur Saini is a certified holistic healing practitioner with extensive training in multiple healing modalities including Reiki, Crystal Healing, Hypnotherapy, Acupressure, and Numerology. She specializes in mindful, patient-centered healing with a comprehensive approach to wellness.",
    certificates: [
      "REIKI First/Second Degree - Usui Shiki Ryoho (November 30, 2013, Kharghar)",
      "Advance Crystal Healing Course - Oorja Healing Centre (December 2, 2017, Kharghar)",
      "Certified by Priya Shah, Crystal Grand Master",
      "Redikall Healing Workshop - Omnipresence Academy of Life Pvt. Ltd. (August 6, 2016, Ahmedabad)",
      "Certificate No: RH/201608/1002",
      "Kapil Professional Numerology Workshop (January 20, 2019, Mumbai)",
      "Certified by Kapil Sailley, Astro Numerology Vaastu Consultant",
      "Acupressure Basic Course Part I & Mudra Therapy - Holistic Healing Academy (June-August 2017, Navi Mumbai)",
      "Certified by Dr. Heena Akbar Kazi (B.H.M.S., D.Ac, Reiki, Hypnotist, Diet & Nutritionist)",
      "Basic Clinical Hypnotherapy and Self-Hypnosis - The Yoga Institute (June 29-30, 2019)",
      "Certified by Dr. Yogesh R Vasandi (Facilitator), The Yoga Institute"
    ],
  },
  {
    name: "Dr. Ruby Khan",
    qualification: "Certified Nutrition and Weight Management Advisor",
    image: m8,
    bio: "Dr. Rubina Feroz Khan is a certified nutrition and weight management specialist passionate about integrated wellness, healing therapies, and patient empowerment. She has completed comprehensive education programs and is committed to the ethical code of conduct in nutrition counseling.",
    certificates: [
      "Certified Nutrition and Weight Management Advisor - FSSA Council (March 2021)",
      "Certificate No: NWM07032101",
      "Accredited Training Provider - FSSA Council",
      "Certified by Dr. (MPT) Ankita Malhotra (HEAD - TRAINING & ASSESSMENT)",
      "Certified by Gurmit Singh Dua (CEO & FOUNDER)",
      "Completed education program, passed exam on knowledge and skills",
      "Committed to ethical code of conduct"
    ],
  },
  {
    name: "Dr. Rupali Shaw",
    qualification: "Functional Medicine Health Coach & Yoga Teacher",
    image: m9,
    bio: "Dr. Rupali Shaw is a highly qualified Functional Medicine Health Coach and certified Yoga Teacher with expertise in holistic and preventive wellness. She has advanced training in functional medicine, clinical nutrition, and yoga instruction, demonstrating excellence as Best Trainer of the Batch in her Yoga Teacher Training Course.",
    certificates: [
      "Advanced Certificate in Functional Medicine and Clinical Nutrition - VitaOne Education & FMCN (March 30, 2026, Ahmedabad)",
      "Recognized as Functional Medicine Health Coach",
      "Student Registration Number: R000118",
      "Certificate Serial Number: S000118",
      "Affiliated to Indian Association of Functional Medicine",
      "Certified by Dr. Anish Musa (Institute of Functional Medicine, Board Certified Practitioner IFM, USA)",
      "Health & Wellness Coach Program - Weljii (February 1, 2023)",
      "NBHWC-Approved Program",
      "Certified by Preeti Rao, MA,MS (Founder & CEO - Weljii)",
      "Best Trainer of the Batch Award - Bodhi School of Yoga (September 7, 2022, Hyderabad)",
      "Outstanding performance in Yoga Teacher Training Course - RYT 200",
      "Certified by Ashok Kumar Vankineni (Founder-Director)"
    ],
  },
  {
    name: "Dr. Samiit Sarode",
    qualification: "Graphic Design Professional",
    image: m10,
    bio: "Dr. Samiit P. Sarode is a dedicated wellness expert with a background in graphic design and visual communication. He completed his Diploma in Graphic Design from the prestigious Graphic Design Institute (GDI) and is committed to integrative care and patient wellbeing through creative and innovative approaches.",
    certificates: [
      "Diploma in Graphic Design - Graphic Design Institute (GDI) (November 1998 to May 1999)",
      "Issued Date: January 6, 1999",
      "GDI Studio - GDI Studio Certification",
      "Certified by Director - GDI Institute"
    ],
  },
  {
    name: "Dr. Kalyani Patil",
    qualification: "Licensed Emotional Intelligence Coach Practitioner",
    image: m11,
    bio: "Dr. Kalyani Patil is a Licensed Emotional Intelligence Coach Practitioner certified by the International Association of Professional Coaches, Counselors, & Therapists (IAPCCT). She is compassionate and dedicated to holistic healing and patient-centered wellness care with a focus on emotional well-being and executive coaching.",
    certificates: [
      "Licensed Emotional Intelligence Coach Practitioner - IAPCCT (January 19, 2024)",
      "Certificate #205196",
      "International Association of Professional Coaches, Counselors, & Therapists",
      "Certified by Kiran Padhi (Emotional Well-being & Executive Coach, IAPCCT President)"
    ],
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
                      {selectedDoctor.certificates?.map((c) => (
                        <li
                          key={c}
                          className="text-sm text-foreground bg-muted/60 rounded-md px-3 py-2 border border-border"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
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
