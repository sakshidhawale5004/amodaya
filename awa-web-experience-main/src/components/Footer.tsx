import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/awa-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-deep-green text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="AWA Logo" className="h-16 w-auto mb-4 rounded bg-primary-foreground p-1" />
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              India's First Professional Network for Wellness Experts. Connecting professionals to collaborate and grow.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Home</Link>
              <Link to="/about" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">About Us</Link>
              <Link to="/membership" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">Membership</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70 font-body">
                <Mail className="h-4 w-4 shrink-0" />
                amodayawellness@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70 font-body">
                <Phone className="h-4 w-4 shrink-0" />
                9224338833
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70 font-body">
                <MapPin className="h-4 w-4 shrink-0" />
                Mumbai / Navi Mumbai, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50 font-body">
          © {new Date().getFullYear()} Amodaya Wellness Alliance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
