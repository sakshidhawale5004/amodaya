import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { MembershipFormDialog } from "@/components/MembershipFormDialog";
import logo from "@/assets/awa-logo.jpeg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/membership", label: "Membership" },
    { to: "/events", label: "Events" },
    { to: "/members", label: "Doctors" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="AWA Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="warm" size="sm" onClick={() => setContactOpen(true)}>
              Contact Us
            </Button>
            <Button variant="cta" size="sm" onClick={() => setMembershipOpen(true)}>
              Join AWA
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block font-body text-sm font-medium py-2 ${
                  isActive(link.to) ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="warm" size="sm" className="w-full" onClick={() => { setContactOpen(true); setMobileOpen(false); }}>
              Contact Us
            </Button>
            <Button variant="cta" size="sm" className="w-full" onClick={() => { setMembershipOpen(true); setMobileOpen(false); }}>
              Join AWA
            </Button>
          </div>
        )}
      </nav>
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <MembershipFormDialog open={membershipOpen} onOpenChange={setMembershipOpen} />
    </>
  );
};

export default Navbar;
