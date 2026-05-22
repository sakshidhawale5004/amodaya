import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

interface MembershipFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const membershipSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  number: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long").regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  profession: z.string().trim().min(1, "Profession is required").max(100, "Profession must be under 100 characters"),
  locality: z.string().trim().min(1, "Locality is required").max(200, "Locality must be under 200 characters"),
});

export const MembershipFormDialog = ({ open, onOpenChange }: MembershipFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    profession: "",
    locality: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = membershipSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    const message = [
      "Hi, I would like to apply for AWA membership.",
      "",
      `Name: ${result.data.name}`,
      `Phone: ${result.data.number}`,
      `Email: ${result.data.email}`,
      `Profession: ${result.data.profession}`,
      `Locality: ${result.data.locality}`,
    ].join("%0A");

    const whatsappUrl = `https://wa.me/919224338833?text=${encodeURIComponent(message).replace(/%250A/g, "%0A")}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitting(false);
      setFormData({ name: "", number: "", email: "", profession: "", locality: "" });
      setErrors({});
      onOpenChange(false);
      toast.success("Redirecting you to WhatsApp to complete your application.");
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">
            Membership Application
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details below to apply for AWA membership.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="font-body text-foreground">Name</Label>
            <Input
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="bg-muted/50 mt-1.5"
              maxLength={100}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="number" className="font-body text-foreground">Phone Number</Label>
            <Input
              id="number"
              type="tel"
              placeholder="Your phone number"
              value={formData.number}
              onChange={(e) => handleChange("number", e.target.value)}
              className="bg-muted/50 mt-1.5"
              maxLength={15}
            />
            {errors.number && <p className="text-sm text-destructive mt-1">{errors.number}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="font-body text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="bg-muted/50 mt-1.5"
              maxLength={255}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="profession" className="font-body text-foreground">Profession</Label>
            <Input
              id="profession"
              placeholder="e.g. Yoga Trainer, Nutritionist"
              value={formData.profession}
              onChange={(e) => handleChange("profession", e.target.value)}
              className="bg-muted/50 mt-1.5"
              maxLength={100}
            />
            {errors.profession && <p className="text-sm text-destructive mt-1">{errors.profession}</p>}
          </div>

          <div>
            <Label htmlFor="locality" className="font-body text-foreground">Locality</Label>
            <Input
              id="locality"
              placeholder="Your city or area"
              value={formData.locality}
              onChange={(e) => handleChange("locality", e.target.value)}
              className="bg-muted/50 mt-1.5"
              maxLength={200}
            />
            {errors.locality && <p className="text-sm text-destructive mt-1">{errors.locality}</p>}
          </div>

          <Button type="submit" variant="cta" className="w-full" disabled={submitting}>
            {submitting ? "Submitting..." : "Apply for Membership"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
