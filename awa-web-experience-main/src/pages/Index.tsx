import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Handshake, BookOpen, Building2, Heart, Leaf, Shield, Calendar, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { MembershipFormDialog } from "@/components/MembershipFormDialog";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);

  const philosophyItems = [
    { icon: Handshake, title: "Collaboration over Competition", desc: "Members help each other grow their wellness practice through mutual support, shared resources, and collaborative opportunities." },
    { icon: Shield, title: "Integrity & Credibility", desc: "Only qualified and ethical professionals are allowed into the trusted network." },
    { icon: Heart, title: "Contribution to Society", desc: "Promoting holistic health and preventive healthcare for communities across India." },
  ];

  const whyJoinItems = [
    { icon: Users, title: "Professional Networking", desc: "Connect with other wellness experts and build meaningful professional relationships together." },
    { icon: Sparkles, title: "Business Referrals", desc: "Receive and give referrals within the trusted AWA professional network." },
    { icon: Calendar, title: "Collaborative Programs", desc: "Participate in retreats, workshops, and wellness programs with fellow members." },
    { icon: BookOpen, title: "Knowledge Sharing", desc: "Learn from experts through presentations, discussions, and curated wellness events." },
    { icon: Building2, title: "Corporate Opportunities", desc: "Access corporate wellness projects and collaborative programs with fellow members." },
  ];

  const whoCanJoin = [
    "Yoga Trainers", "Ayurvedic Doctors", "Nutritionists & Dieticians", "Physiotherapists",
    "Psychologists & Mental Health Experts", "Meditation Teachers", "Naturopaths", "Fitness Trainers",
    "Wellness Coaches", "Panchakarma Specialists", "Wellness Resort Operators", "Corporate Wellness Trainers",
  ];

  const activities = [
    "Monthly networking meetings", "Wellness workshops and seminars", "Corporate wellness programs",
    "Wellness retreats", "Collaborative wellness events", "Community wellness initiatives",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-secondary font-body font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Connecting Wellness Experts
          </motion.p>
          <motion.h1
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6"
          >
            India's First Professional Wellness Network for Health Experts
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Amodaya Wellness Alliance (AWA) connects wellness professionals to collaborate, share knowledge, grow their businesses, and create holistic health solutions for communities.
          </motion.p>
          <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => setFormOpen(true)}>Join AWA</Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/about">About AWA</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            About AWA
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="space-y-4 text-muted-foreground font-body leading-relaxed text-lg">
            <p>Amodaya Wellness Alliance (AWA) is a professional community of wellness experts committed to promoting holistic health and collaborative professional growth.</p>
            <p>The alliance brings together professionals from various wellness disciplines including yoga, Ayurveda, nutrition, mental health, physiotherapy, and holistic therapies to create an integrated wellness ecosystem in India.</p>
            <p>Through structured networking, knowledge exchange, and collaborative programs, AWA empowers wellness professionals to grow their practice while improving overall community health outcomes.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
              className="bg-card rounded-lg p-8 shadow-card border border-border">
              <Leaf className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground font-body">To build India's most trusted network of wellness professionals collaborating for holistic health, referrals, and sustained business growth.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
              className="bg-card rounded-lg p-8 shadow-card border border-border">
              <Heart className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground font-body">To create a structured community where wellness experts connect, collaborate, and grow together while delivering integrated wellness solutions across India.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            AWA Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {philosophyItems.map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="text-center p-8 rounded-lg bg-card border border-border shadow-card hover:shadow-warm transition-shadow">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2" style={{ textWrap: 'balance' }}>{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm" style={{ textWrap: 'balance' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Who Can Join AWA
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-6">
            {whoCanJoin.map((role, i) => (
              <motion.span key={role} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp}
                className="bg-card border border-border text-foreground font-body text-sm px-5 py-2.5 rounded-full shadow-card hover:shadow-warm hover:border-primary/30 transition-all">
                {role}
              </motion.span>
            ))}
          </div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={7} variants={fadeUp}
            className="font-display text-lg md:text-xl font-bold text-foreground">
            All Wellness Professionals
          </motion.p>
        </div>
      </section>

      {/* Why Join AWA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Join AWA
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyJoinItems.map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex gap-4 p-6 rounded-lg bg-card border border-border shadow-card hover:shadow-warm transition-shadow">
                <item.icon className="h-8 w-8 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            AWA Activities
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.map((activity, i) => (
              <motion.div key={activity} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-5 shadow-card">
                <Calendar className="h-5 w-5 text-primary shrink-0" />
                <span className="font-body text-foreground">{activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join the First Community Dedicated to Connecting Wellness Professionals
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="text-primary-foreground/80 font-body text-lg mb-8 max-w-2xl mx-auto">
            Apply for membership and become part of India's most trusted professional wellness network today.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <Button variant="hero" size="lg" onClick={() => setFormOpen(true)}>Apply for Membership</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButton />
      <MembershipFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Index;
