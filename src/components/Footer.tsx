import { ArrowRight, MapPin, Clock, ShieldCheck, HeartHandshake, Leaf, Star, Sparkles, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-deep-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Invest in Wellbeing.<br />
                Transform Lives. Build a Better Future.
              </h2>
              <p className="text-white/80 font-body text-lg mb-8 max-w-xl leading-relaxed">
                Whether you are planning a leadership retreat, employee wellness program or wellness tourism experience, we are here to create a meaningful and measurable impact.
              </p>
              <Button className="bg-warm-gold hover:bg-warm-gold/90 text-deep-green rounded-full px-8 py-6 text-lg font-bold flex items-center gap-2">
                Book A Consultation <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Right Content - Info Cards */}
            <div className="lg:w-1/2 flex flex-col md:flex-row gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex-1 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-warm-gold shrink-0" />
                  <span className="font-semibold text-sm md:text-base">amodayawellness@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-warm-gold shrink-0" />
                  <span className="font-semibold text-sm md:text-base">9224338833</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-warm-gold shrink-0" />
                  <span className="font-semibold text-sm md:text-base">Mumbai / Navi Mumbai, India</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex-1 flex flex-col items-center justify-center text-center">
                <Clock className="h-10 w-10 text-warm-gold mb-4" />
                <p className="font-semibold text-lg mb-2">Every<br />Monday</p>
                <div className="w-full h-px bg-white/20 my-2"></div>
                <p className="font-semibold text-lg">7:30 AM<br />to 10:00 AM</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#113123] py-4 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/80 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-warm-gold" /> Holistic Approach
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-warm-gold" /> Expert Facilitators
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-warm-gold" /> Customized Programs
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-4 w-4 text-warm-gold" /> Natural & Serene Location
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-warm-gold" /> Confidential & Professional
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
