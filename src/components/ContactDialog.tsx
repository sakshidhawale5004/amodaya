import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      onOpenChange(false);
      toast.success("Thank you! We'll get back to you soon.");
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">Contact Us</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Reach out to learn more about AWA or explore membership opportunities.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 mb-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <span>amodayawellness@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>9224338833</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Mumbai / Navi Mumbai, India</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="Your Name" required className="bg-muted/50" />
            <Input type="email" placeholder="Email" required className="bg-muted/50" />
          </div>
          <Input placeholder="Subject" className="bg-muted/50" />
          <Textarea placeholder="Your message..." rows={4} required className="bg-muted/50" />
          <Button type="submit" variant="cta" className="w-full" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
