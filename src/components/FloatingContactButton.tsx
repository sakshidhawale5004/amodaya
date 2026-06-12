import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { ContactDialog } from "@/components/ContactDialog";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-secondary text-secondary-foreground rounded-full p-4 shadow-warm hover:scale-105 transition-transform animate-float"
        aria-label="Contact Us"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <ContactDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default FloatingContactButton;
