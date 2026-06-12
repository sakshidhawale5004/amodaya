import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, CheckCircle2, Hand } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { MembershipFormDialog } from "@/components/MembershipFormDialog";
import { ContactDialog } from "@/components/ContactDialog";
import eventsHero from "@/assets/events-hero.jpg";
import eventGroup from "@/assets/event-launch-group.jpeg";
import event2 from "@/assets/event-launch-2.jpeg";
import event3 from "@/assets/event-launch-3.jpeg";
import event4 from "@/assets/event-launch-4.jpeg";
import event5 from "@/assets/event-launch-5.jpeg";
import event6 from "@/assets/event-launch-6.jpeg";
import event7 from "@/assets/event-launch-7.jpeg";
import event8 from "@/assets/event-launch-8.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const featuredPhoto = {
  src: eventGroup,
  alt: "AWA founding members group photo at the launch event",
};

const launchPhotos = [
  { src: event2, alt: "AWA launch group photo with founding members" },
  { src: event7, alt: "AWA launch presentation on wellness ecosystem" },
  { src: event8, alt: "Wellness professionals in discussion at AWA launch" },
  { src: event5, alt: "AWA founder addressing wellness professionals" },
  { src: event4, alt: "Attendees engaged at AWA launch session" },
  { src: event6, alt: "AWA launch keynote with discounted opportunity slide" },
  { src: event3, alt: "AWA speaker presenting at the launch event" },
];

const benefits = [
  "Growing your practice",
  "Getting quality referrals",
  "Working with corporates",
  "Being part of a powerful network",
];

const Events = () => {
  const [membershipOpen, setMembershipOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const allPhotos = [featuredPhoto, ...launchPhotos];
  const totalSlides = allPhotos.length;

  useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={eventsHero}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"
          >
            <Calendar className="w-4 h-4 text-primary-foreground" />
            <span className="font-body text-sm text-primary-foreground">
              AWA Events
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Where Wellness Leaders Meet
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-primary-foreground/85 font-body text-lg md:text-xl max-w-3xl mx-auto"
          >
            Curated gatherings, launch meets, and member retreats that build
            real connections within India's most trusted wellness alliance.
          </motion.p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold tracking-wider uppercase mb-4">
              Featured Event
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              AWA Launch Meet
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              The official launch of Amodaya Wellness Alliance — where our
              founding members came together to shape the future of wellness
              collaboration.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-foreground">
                15+
              </div>
              <div className="font-body text-sm text-muted-foreground">
                Wellness Professionals
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-foreground">
                1
              </div>
              <div className="font-body text-sm text-muted-foreground">
                Powerful Launch
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center col-span-2 md:col-span-1">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-foreground">
                Limited
              </div>
              <div className="font-body text-sm text-muted-foreground">
                Seats for Next Meet
              </div>
            </div>
          </motion.div>

          {/* Event story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gradient-warm rounded-3xl p-8 md:p-12 mb-12"
          >
            <p className="font-body text-foreground text-lg leading-relaxed mb-4">
              What an incredible start to{" "}
              <strong>Amodaya Wellness Alliance (AWA)!</strong>
            </p>
            <p className="font-body text-foreground/90 leading-relaxed mb-4">
              15+ passionate wellness professionals came together for our
              launch, and the energy, connections, and vision in the room were
              truly amazing.
            </p>
            <p className="font-body text-foreground/90 leading-relaxed mb-4">
              This is just the beginning…
            </p>
            <p className="font-body text-foreground/90 leading-relaxed mb-6">
              AWA is building a strong ecosystem of trusted wellness experts
              focused on growth, collaboration, corporate opportunities, and
              premium retreats.
            </p>

            <p className="font-body text-foreground font-semibold mb-3">
              If you are serious about:
            </p>
            <ul className="space-y-2 mb-6">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 font-body text-foreground/90"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="font-body text-foreground/90 leading-relaxed mb-2">
              Then this is your opportunity. We are now opening{" "}
              <strong>limited entries</strong> for the next AWA meet.
            </p>
            <p className="font-body text-foreground/90 leading-relaxed mb-6">
              Don't miss the chance to become a part of this growing movement.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="cta"
                size="lg"
                onClick={() => setMembershipOpen(true)}
              >
                Reserve Your Spot
              </Button>
              <Button
                variant="warm"
                size="lg"
                onClick={() => setContactOpen(true)}
              >
                Connect With Us
              </Button>
            </div>
          </motion.div>

          {/* Photo gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
              Moments from the Launch
            </h3>
            <p className="font-body text-muted-foreground text-center mb-8">
              A glimpse of the energy, connection and intent that defined our
              first gathering.
            </p>
          </motion.div>

          {/* Photo slider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="relative w-full max-w-5xl mx-auto">
              {/* Decorative glow */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-warm opacity-40 blur-2xl rounded-[2rem] -z-10" />

              <Carousel
                opts={{ loop: true, align: "center", dragFree: false }}
                plugins={[autoplay.current]}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent>
                  {allPhotos.map((photo, idx) => (
                    <CarouselItem key={photo.src}>
                      <div className="group relative overflow-hidden rounded-3xl bg-muted border border-border/60 shadow-lg cursor-grab active:cursor-grabbing">
                        <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-muted to-background">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            draggable={false}
                            className="max-w-full max-h-full object-contain mx-auto select-none transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        </div>
                        {/* Slide counter overlay */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-foreground/70 backdrop-blur-md text-background font-body text-xs font-semibold tracking-wide">
                          {idx + 1} / {totalSlides}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 md:-left-12 bg-background/90 hover:bg-background border-primary/30" />
                <CarouselNext className="right-2 md:-right-12 bg-background/90 hover:bg-background border-primary/30" />
              </Carousel>

              {/* Swipe hint + dot indicators */}
              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground font-body text-xs md:text-sm">
                  <Hand className="w-4 h-4 text-primary" />
                  <span>Swipe or drag to explore</span>
                </div>

                <div className="flex items-center gap-2">
                  {allPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => api?.scrollTo(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-8 bg-primary"
                          : "w-2 bg-primary/30 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>

                <p className="font-body text-sm text-foreground/80">
                  <span className="font-semibold text-primary">
                    {String(currentSlide + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground"> of </span>
                  <span className="font-semibold">
                    {String(totalSlides).padStart(2, "0")}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
          >
            Be Part of the Next AWA Meet
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-body text-primary-foreground/85 text-lg mb-8"
          >
            Limited entries open. Let's grow together. 👍
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            <Button
              variant="cta"
              size="lg"
              onClick={() => setMembershipOpen(true)}
            >
              Apply for Membership
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButton />
      <MembershipFormDialog
        open={membershipOpen}
        onOpenChange={setMembershipOpen}
      />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Events;
