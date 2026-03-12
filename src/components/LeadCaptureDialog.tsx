import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  toolTitle: string;
  onSubmitSuccess: () => void;
}

const STORAGE_KEY = "goai_lead_captured";

export function hasLeadBeenCaptured(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function markLeadCaptured() {
  try {
    localStorage.setItem(STORAGE_KEY, "true");
  } catch {}
}

const LeadCaptureDialog = ({
  open,
  onOpenChange,
  toolTitle,
  onSubmitSuccess,
}: LeadCaptureDialogProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.company.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      markLeadCaptured();
      setIsSubmitting(false);
      toast({
        title: "You're all set!",
        description: `Your results for "${toolTitle}" are ready.`,
      });
      onOpenChange(false);
      onSubmitSuccess();
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">
            Unlock Your Results
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
            Enter your details below to view your personalized results
            instantly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="h-9 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">
              Business Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={255}
              className="h-9 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs">
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={20}
              className="h-9 text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-xs">
              Company <span className="text-destructive">*</span>
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="Acme Inc."
              value={formData.company}
              onChange={handleChange}
              required
              maxLength={200}
              className="h-9 text-sm"
            />
          </div>

          <div className="flex items-start gap-2 text-[11px] text-muted-foreground/70 pt-1">
            <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" />
            <span>
              Your information is secure and will only be used to deliver your
              results and relevant insights.
            </span>
          </div>

          <Button
            type="submit"
            variant="hero"
            className="w-full h-11 text-sm"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Processing…" : "View My Results"}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
