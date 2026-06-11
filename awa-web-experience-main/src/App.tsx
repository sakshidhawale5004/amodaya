import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Membership from "./pages/Membership.tsx";
import Events from "./pages/Events.tsx";
import Members from "./pages/Members.tsx";
import Appointment from "./pages/Appointment.tsx";
import DoctorAppointment from "./pages/DoctorAppointment.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/membership" element={<PageTransition><Membership /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/members" element={<PageTransition><Members /></PageTransition>} />
        <Route path="/doctors" element={<PageTransition><Members /></PageTransition>} />
        <Route path="/appointment" element={<PageTransition><Appointment /></PageTransition>} />
        <Route path="/book" element={<PageTransition><Appointment /></PageTransition>} />
        <Route path="/doctor/:doctorId/appointment" element={<PageTransition><DoctorAppointment /></PageTransition>} />
        <Route path="/news" element={<PageTransition><Events /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
