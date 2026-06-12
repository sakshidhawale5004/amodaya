import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/awa-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#1b4e33] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-md inline-block">
              <img src={logo} alt="AWA Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-white/90 text-sm md:text-base max-w-sm font-medium leading-relaxed">
              India's First Professional Network for Wellness Experts. Connecting professionals to collaborate and grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-white/80 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-white/80" />
                <span className="text-white/80">amodayawellness@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-white/80" />
                <span className="text-white/80">9224338833</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-white/80" />
                <span className="text-white/80">Mumbai / Navi Mumbai, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Amodaya Wellness Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
