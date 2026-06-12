import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Activity, Users, Battery, Star, Quote, ChevronRight, Leaf, ShieldAlert, HeartHandshake, PhoneOff, Sun, Flame, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import heroBg from "@/assets/hero-bg.jpg"; // Re-using existing heroBg if possible, or it might be missing. We'll find out.

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-visible pt-20 pb-24">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" alt="Serene Yoga Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-[-5vh]">
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            className="font-display text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] max-w-5xl mx-auto mb-6 drop-shadow-md tracking-tight"
          >
            Transform <br/>
            Stress Into Strength
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-white/95 font-body text-lg md:text-xl max-w-3xl mx-auto mb-10 drop-shadow font-medium leading-relaxed"
          >
            Corporate Wellness Retreats, Stress Management Programs & Wellness Tourism Experiences for Modern Professionals & Organizations.
          </motion.p>
          <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center px-4">
            <Button 
              onClick={() => window.location.href = '/members'}
              className="bg-[#2A5C3D] hover:bg-[#20492F] text-white rounded-full px-6 sm:px-8 py-6 text-base sm:text-[17px] font-semibold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
              Explore Wellness Experts <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              onClick={() => window.location.href = '/appointment'}
              className="bg-[#F3E8D6] hover:bg-[#E5D7C0] text-[#2A5C3D] rounded-full px-6 sm:px-8 py-6 text-base sm:text-[17px] font-semibold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
              Book Appointment <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Feature Bar */}
        <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} 
          className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 container mx-auto px-4">
          <div className="bg-white rounded-[2rem] py-5 px-8 shadow-2xl max-w-5xl mx-auto border border-border/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-border/60">
              <div className="flex items-center gap-4 justify-center px-2">
                <BrainCircuit className="h-7 w-7 text-[#2A5C3D] shrink-0" />
                <span className="font-semibold text-[13px] md:text-[14px] text-left leading-tight text-gray-800">Reduce Stress <br/>& Burnout</span>
              </div>
              <div className="flex items-center gap-4 justify-center px-2">
                <Activity className="h-7 w-7 text-[#2A5C3D] shrink-0" />
                <span className="font-semibold text-[13px] md:text-[14px] text-left leading-tight text-gray-800">Boost Productivity <br/>& Focus</span>
              </div>
              <div className="flex items-center gap-4 justify-center px-2">
                <Users className="h-7 w-7 text-[#2A5C3D] shrink-0" />
                <span className="font-semibold text-[13px] md:text-[14px] text-left leading-tight text-gray-800">Stronger Teams <br/>Better Bonding</span>
              </div>
              <div className="flex items-center gap-4 justify-center px-2">
                <Battery className="h-7 w-7 text-[#2A5C3D] shrink-0" />
                <span className="font-semibold text-[13px] md:text-[14px] text-left leading-tight text-gray-800">Work-Life <br/>Balance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Where Wellness Meets Performance */}
      <section id="about" className="pt-32 pb-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 uppercase tracking-wide leading-tight">
                  Where Wellness Meets Performance
                </h2>
                <div className="w-16 h-1 bg-warm-gold mb-6"></div>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  At Amodaya Wellness, we help individuals, leaders & teams recharge, reconnect and return with renewed energy, clarity and purpose.
                </p>
              </motion.div>
            </div>
            <div className="lg:w-2/3">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Corporate Team" className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md" />
                <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop" alt="Yoga Outdoors" className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md" />
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Team Bonding" className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md" />
                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop" alt="Meditation" className="w-full h-48 md:h-64 object-cover rounded-xl shadow-md" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Wellness Programs */}
      <section id="corporate" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-warm-gold w-16 md:w-32"></div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-display text-3xl md:text-4xl font-bold text-foreground text-center uppercase tracking-wider">
              Corporate Wellness Programs
            </motion.h2>
            <div className="h-px bg-warm-gold w-16 md:w-32"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {[
              { title: "Executive Wellness Retreats", desc: "For founders, CXOs & senior leaders", icon: Users, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
              { title: "Employee Wellness Retreats", desc: "Reduce burnout & improve employee wellbeing", icon: HeartHandshake, img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" },
              { title: "Team Rejuvenation Retreats", desc: "Build stronger teams through wellness", icon: Users, img: "https://images.unsplash.com/photo-1517242027094-631f8c218a0f?q=80&w=2070&auto=format&fit=crop" },
              { title: "Leadership Wellness Programs", desc: "Enhance clarity, resilience & decision making", icon: Star, img: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop" },
              { title: "Stress Management Programs", desc: "Practical tools to manage stress effectively", icon: BrainCircuit, img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop" },
              { title: "Digital Detox Retreats", desc: "Disconnect to reconnect with yourself", icon: PhoneOff, img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2119&auto=format&fit=crop" },
              { title: "Mindfulness & Productivity", desc: "Improve focus, creativity & performance", icon: Activity, img: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop" },
            ].map((program, i) => (
              <motion.div key={program.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="bg-white border border-border/50 rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all flex flex-col group">
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-border flex items-center justify-center mb-4 group-hover:bg-deep-green group-hover:text-white transition-colors">
                    <program.icon className="h-8 w-8 text-deep-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 leading-tight">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{program.desc}</p>
                </div>
                <div className="h-40 w-full overflow-hidden">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Tourism Experiences */}
      <section id="tourism" className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-warm-gold w-16 md:w-32"></div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-display text-3xl md:text-4xl font-bold text-foreground text-center uppercase tracking-wider">
              Wellness Tourism Experiences
            </motion.h2>
            <div className="h-px bg-warm-gold w-16 md:w-32"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { title: "Yoga Retreats", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" },
              { title: "Ayurveda Experiences", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" },
              { title: "Meditation Retreats", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop" },
              { title: "Nature Healing Programs", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" },
              { title: "Detox Retreats", img: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=1974&auto=format&fit=crop" },
              { title: "Weekend Wellness Escapes", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" },
              { title: "Spiritual Wellness Journeys", img: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1964&auto=format&fit=crop" },
              { title: "Luxury Wellness Holidays", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" },
            ].map((exp, i) => (
              <motion.div key={exp.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="relative h-64 md:h-80 rounded-xl overflow-hidden group cursor-pointer shadow-md">
                <img src={exp.img} alt={exp.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">{exp.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Choose Amodaya */}
      <section className="py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-warm-gold w-16 md:w-32"></div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-display text-2xl md:text-3xl font-bold text-foreground text-center uppercase tracking-wider">
              Why Organizations Choose Amodaya
            </motion.h2>
            <div className="h-px bg-warm-gold w-16 md:w-32"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { title: "Reduce Stress & Burnout", icon: BrainCircuit },
              { title: "Improve Productivity", icon: Activity },
              { title: "Employee Engagement", icon: Users },
              { title: "Stronger Team Bonding", icon: HeartHandshake },
              { title: "Boost Creativity & Innovation", icon: Sparkles },
              { title: "Better Leadership Effectiveness", icon: Star },
              { title: "Promote Mental Wellbeing", icon: Leaf },
              { title: "Work-Life Balance", icon: Battery },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp}
                className="flex flex-col items-center text-center w-28 md:w-36 group">
                <div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-border/60 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:border-warm-gold transition-all">
                  <item.icon className="h-8 w-8 text-deep-green group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-semibold text-sm leading-snug">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Testimonials */}
      <section id="testimonials" className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Journey */}
            <div>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="font-display text-3xl font-bold text-foreground mb-12 uppercase tracking-wide text-center lg:text-left">
                A Transformational Retreat Journey
              </motion.h2>
              
              <div className="relative border-t-2 border-dashed border-deep-green/30 mt-20 pt-8 pb-12 mb-8 hidden md:block">
                <div className="absolute top-[-1.5rem] left-0 right-0 flex justify-between">
                  {[
                    { step: "Arrival", sub: "Warm Welcome", icon: Users },
                    { step: "Relax", sub: "Unwind & Refresh", icon: Battery },
                    { step: "Rejuvenate", sub: "Yoga & Activities", icon: Sun },
                    { step: "Reflect", sub: "Inner Clarity", icon: BrainCircuit },
                    { step: "Transform", sub: "Return Empowered", icon: Flame },
                  ].map((phase, i) => (
                    <motion.div key={phase.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                      className="flex flex-col items-center w-24">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-deep-green flex items-center justify-center z-10 mb-4 shadow-md">
                        <phase.icon className="h-5 w-5 text-deep-green" />
                      </div>
                      <span className="font-bold text-deep-green">{phase.step}</span>
                      <span className="text-xs text-muted-foreground text-center mt-1">{phase.sub}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Journey View */}
              <div className="md:hidden space-y-6 mb-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-deep-green/30 before:to-transparent">
                 {[
                    { step: "Arrival", sub: "Warm Welcome", icon: Users },
                    { step: "Relax", sub: "Unwind & Refresh", icon: Battery },
                    { step: "Rejuvenate", sub: "Yoga & Activities", icon: Sun },
                    { step: "Reflect", sub: "Inner Clarity", icon: BrainCircuit },
                    { step: "Transform", sub: "Return Empowered", icon: Flame },
                  ].map((phase, i) => (
                    <div key={phase.step} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-deep-green bg-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                          <phase.icon className="h-4 w-4 text-deep-green" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl shadow-sm bg-white border border-border">
                          <div className="flex items-center justify-between space-x-2 mb-1">
                              <div className="font-bold text-deep-green">{phase.step}</div>
                          </div>
                          <div className="text-slate-500 text-sm">{phase.sub}</div>
                      </div>
                  </div>
                 ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="bg-white border border-border px-4 py-2 rounded-md text-sm shadow-sm flex items-center gap-2"><Activity className="h-4 w-4"/> Wellness Assessments</span>
                <span className="bg-white border border-border px-4 py-2 rounded-md text-sm shadow-sm flex items-center gap-2"><Leaf className="h-4 w-4"/> Yoga & Meditation</span>
                <span className="bg-white border border-border px-4 py-2 rounded-md text-sm shadow-sm flex items-center gap-2"><Users className="h-4 w-4"/> Workshops</span>
                <span className="bg-white border border-border px-4 py-2 rounded-md text-sm shadow-sm flex items-center gap-2"><Apple className="h-4 w-4"/> Healthy Nutrition</span>
                <span className="bg-white border border-border px-4 py-2 rounded-md text-sm shadow-sm flex items-center gap-2"><Sun className="h-4 w-4"/> Nature Experiences</span>
              </div>
            </div>

            {/* Testimonials */}
            <div>
               <div className="flex items-center gap-4 mb-12">
                  <Quote className="h-8 w-8 text-warm-gold rotate-180" />
                  <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="font-display text-3xl font-bold text-foreground uppercase tracking-wide">
                    What Our Participants Say
                  </motion.h2>
                  <Quote className="h-8 w-8 text-warm-gold" />
              </div>
              
              <div className="space-y-6">
                {[
                  { text: "This retreat helped me manage stress, improve focus and become a better leader.", author: "Rajesh Kumar, CEO, Manufacturing Co." },
                  { text: "Our team came back recharged, connected and more productive.", author: "Priya Sharma, HR Head, IT Company" },
                  { text: "Amodaya is not just a retreat, it's a life transforming experience.", author: "Amit Patel, Entrepreneur" },
                ].map((test, i) => (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                    className="bg-white p-6 rounded-xl border border-border shadow-sm flex flex-col gap-4">
                    <p className="italic text-muted-foreground leading-relaxed">"{test.text}"</p>
                    <div className="flex items-center justify-between">
                       <p className="font-semibold text-sm">— {test.author}</p>
                       <div className="flex text-warm-gold">
                         <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButton />
    </div>
  );
};

// Dummy component for Apple icon since it's not imported directly from lucide-react if missing, but we'll try to import it above. Oh wait, Apple is not standard in lucide-react, let's use Leaf or Heart.
const Apple = ({className}: {className: string}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>

export default Index;
