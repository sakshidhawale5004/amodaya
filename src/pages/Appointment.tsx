import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Appointment = () => {
  const navigate = useNavigate();

  const handleViewDoctors = () => {
    navigate("/members");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl font-bold text-foreground mb-3">
                Book Your Appointment
              </h1>
              <p className="text-lg text-muted-foreground">
                Schedule a consultation with one of our wellness experts
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              {/* Info Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-orange-50 border-l-4 border-primary rounded-lg p-6 mb-8"
              >
                <h3 className="font-semibold text-foreground mb-2">Select Your Doctor</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Each of our 9 wellness experts has their own dedicated appointment page with personalized information, specializations, and availability.
                </p>
                <p className="text-sm text-foreground font-medium">
                  ✓ Visit the Doctors page to view all experts  
                  ✓ Select your preferred doctor  
                  ✓ Book directly from their appointment page
                </p>
              </motion.div>

              {/* Call to Action Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={handleViewDoctors}
                className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 mb-4"
              >
                View All Doctors
              </motion.button>

              <p className="text-center text-muted-foreground text-sm mb-8">
                Click above to browse our 9 wellness experts and select the perfect match for your health needs.
              </p>

              {/* Contact Options */}
              <div className="pt-8 border-t border-border">
                <p className="text-center text-sm font-semibold text-foreground mb-4">
                  Need Help? Contact Us
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <a href="tel:+919876543210">
                    <Button variant="outline" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Call Us
                    </Button>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 bg-green-600 hover:bg-green-700">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">9</div>
                <p className="text-muted-foreground">Expert Doctors</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Appointment Types</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <p className="text-muted-foreground">Days Availability</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Appointment;
