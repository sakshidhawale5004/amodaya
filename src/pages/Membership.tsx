import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Sparkles, Handshake, Calendar, Building2, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { MembershipFormDialog } from "@/components/MembershipFormDialog";
import membershipHero from "@/assets/membership-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const benefits = [
  { icon: Users, title: "Professional Networking", desc: "Connect with other wellness experts and build meaningful professional relationships together." },
  { icon: Sparkles, title: "Business Referrals", desc: "Receive and give referrals within the trusted AWA professional network." },
  { icon: Handshake, title: "Collaboration Opportunities", desc: "Partner with fellow professionals on wellness projects and collaborative programs." },
  { icon: Calendar, title: "Retreats & Wellness Programs", desc: "Participate in curated retreats, workshops, and wellness programs with members." },
  { icon: Building2, title: "Corporate Wellness Projects", desc: "Access corporate wellness projects and collaborative programs with fellow members." },
  { icon: BookOpen, title: "Knowledge Sharing Sessions", desc: "Learn from experts through presentations, discussions, and curated wellness events." },
];

const steps = [
  { num: "01", title: "Submit Application", desc: "Fill out the membership application form with your professional details and wellness expertise information." },
  { num: "02", title: "Membership Review", desc: "Our team reviews your application to ensure alignment with AWA's values and professional standards." },
  { num: "03", title: "Category Approval", desc: "Your wellness discipline category is confirmed and approved by the review committee." },
  { num: "04", title: "Membership Confirmation", desc: "Welcome to AWA! You receive your membership confirmation and gain full access to the entire network." },
];

const Membership = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={membershipHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Membership at AWA
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-3xl mx-auto">
            AWA offers membership to qualified wellness professionals who are committed to ethical practice and meaningful collaboration.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Membership Benefits
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="text-muted-foreground font-body text-lg text-center mb-12 max-w-2xl mx-auto">
            As an AWA member, you gain access to a powerful ecosystem designed for your professional growth and success.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-warm transition-shadow group">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Membership Process
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="text-muted-foreground font-body text-lg text-center mb-16 max-w-2xl mx-auto">
            Joining AWA is simple. Here's how it works:
          </motion.p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, i) => (
                <motion.div key={step.num} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className="relative flex gap-5 p-6 rounded-xl bg-card border border-border shadow-card">
                  <div className="shrink-0">
                    <span className="font-display text-3xl font-bold text-primary/20">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Become a Member?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="text-primary-foreground/80 font-body text-lg mb-8 max-w-2xl mx-auto">
            Join India's most trusted professional wellness network and grow your practice alongside fellow experts.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
            <Button variant="hero" size="lg" className="gap-2" onClick={() => setFormOpen(true)}>
              Apply for Membership <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButton />
      <MembershipFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default Membership;
