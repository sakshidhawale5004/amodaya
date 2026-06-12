import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { MembershipFormDialog } from "@/components/MembershipFormDialog";
import logo from "@/assets/awa-logo.jpeg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/#corporate", label: "Corporate Wellness" },
    { to: "/#tourism", label: "Wellness Tourism" },
    { to: "/#programs", label: "Programs" },
    { to: "/about", label: "About Us" },
    { to: "/#testimonials", label: "Testimonials" },
    { to: "/#contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Amodaya Wellness Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className={`font-body text-[15px] font-semibold transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-deep-green hover:bg-deep-green/90 text-white rounded-md px-6 py-5 text-[15px] font-semibold flex items-center gap-2" onClick={() => setContactOpen(true)}>
              <CalendarDays className="h-5 w-5" />
              Book A Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block font-body text-[15px] font-semibold py-2 ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-deep-green hover:bg-deep-green/90 text-white w-full rounded-md py-5 text-[15px] font-semibold flex items-center gap-2" onClick={() => { setContactOpen(true); setMobileOpen(false); }}>
              <CalendarDays className="h-5 w-5" />
              Book A Consultation
            </Button>
          </div>
        )}
      </nav>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Navbar;
