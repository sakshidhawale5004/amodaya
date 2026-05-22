import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Heart, Handshake, Shield, Users, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import aboutHero from "@/assets/about-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            About Amodaya Wellness Alliance
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-3xl mx-auto">
            A professional network bringing together wellness experts from diverse disciplines under one collaborative platform.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Our Story</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-muted-foreground font-body text-lg leading-relaxed space-y-6">
            <p>
              Amodaya Wellness Alliance (AWA) is a professional network designed to bring together wellness experts from diverse disciplines under one collaborative platform. The wellness industry in India is growing rapidly, but professionals often work independently with limited opportunities for meaningful collaboration.
            </p>
            <p>
              AWA was created to bridge this gap by building a structured community where wellness experts can connect, collaborate, and grow together. The alliance encourages interdisciplinary wellness solutions where professionals work together to address health challenges through holistic and integrated approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-card rounded-xl p-8 shadow-card border border-border">
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To build India's most trusted network of wellness professionals collaborating for holistic health, referrals, and sustained business growth.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="bg-card rounded-xl p-8 shadow-card border border-border">
              <Target className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                To create a structured community where wellness experts connect, collaborate, and grow together while delivering integrated wellness solutions to communities across India.
              </p>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Handshake, title: "Collaboration over Competition", desc: "Members help each other grow their wellness practice through mutual support and shared opportunities." },
              { icon: Shield, title: "Integrity & Credibility", desc: "Only qualified and ethical professionals are allowed, ensuring trust and high standards across the entire network." },
              { icon: Heart, title: "Contribution to Society", desc: "Promoting holistic health and preventive healthcare for the betterment of communities across India." },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="text-center p-8 rounded-xl bg-gradient-warm border border-border shadow-card">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
            AWA welcomes professionals from various wellness fields and disciplines
          </motion.p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Leaf, label: "Yoga Trainers" },
              { icon: Heart, label: "Ayurvedic Doctors" },
              { icon: Users, label: "Nutritionists & Dieticians" },
              { icon: Users, label: "Physiotherapists" },
              { icon: Heart, label: "Psychologists & Mental Health" },
              { icon: Leaf, label: "Meditation Teachers" },
              { icon: Leaf, label: "Naturopaths" },
              { icon: Users, label: "Fitness Trainers" },
              { icon: Heart, label: "Wellness Coaches" },
              { icon: Leaf, label: "Panchakarma Specialists" },
              { icon: Users, label: "Wellness Resort Operators" },
              { icon: Users, label: "Corporate Wellness Trainers" },
            ].map((item, i) => (
              <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 shadow-card">
                <item.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="font-body text-sm text-foreground">{item.label}</span>
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
            Ready to Join Our Community?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="text-primary-foreground/80 font-body text-lg mb-8 max-w-2xl mx-auto">
            Become part of India's most trusted professional wellness network today.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <Button variant="hero" size="lg" asChild><Link to="/membership">Apply for Membership</Link></Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default About;
