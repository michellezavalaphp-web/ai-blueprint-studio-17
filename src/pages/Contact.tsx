import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const company = (formData.get("company") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !phone || !company || !message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll be in touch soon." });
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">Get in Touch</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Contact Go AI Innovation</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
            Have a question, want to explore a partnership, or ready to start your AI transformation? We'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="section-light section-padding">
        <div className="container mx-auto max-w-xl">
          {submitted ? (
            <div className="dash-card p-10 sm:p-14 text-center glow-border">
              <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-5" />
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">Thank You!</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                Your message has been received. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="dash-card p-6 sm:p-10 space-y-5 sm:space-y-6 glow-border">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs sm:text-[13px]">Full Name <span className="text-destructive">*</span></Label>
                <Input id="name" name="name" placeholder="Your full name" maxLength={100} required className="h-11 sm:h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs sm:text-[13px]">Business Email <span className="text-destructive">*</span></Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" maxLength={255} required className="h-11 sm:h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs sm:text-[13px]">Phone <span className="text-destructive">*</span></Label>
                <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" maxLength={20} required className="h-11 sm:h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-xs sm:text-[13px]">Company <span className="text-destructive">*</span></Label>
                <Input id="company" name="company" placeholder="Company or organization name" maxLength={100} required className="h-11 sm:h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs sm:text-[13px]">Message <span className="text-destructive">*</span></Label>
                <Textarea id="message" name="message" placeholder="How can we help?" rows={5} maxLength={1000} required className="text-sm" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full h-12 sm:h-11 text-sm">
                Request AI Strategy Consultation <Send className="ml-2 h-4 w-4" />
              </Button>
              <div className="text-center">
                <Button variant="hero-outline" size="lg" className="w-full h-12 sm:h-11 text-sm" asChild>
                  <Link to="/tools">
                    Start AI Readiness Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Or call us directly: <a href="tel:3053606170" className="text-primary hover:underline font-medium">305-360-6170</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
