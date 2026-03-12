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

      <section className="section-light section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto max-w-lg">
          {/* Contact details */}
          <div className="dash-card p-4 sm:p-5 mb-5 sm:mb-6">
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5">Phone</div>
                  <a href="tel:3053606170" className="text-[11px] sm:text-xs text-primary hover:underline font-medium">305-360-6170</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5">Email</div>
                  <a href="mailto:MZavala@GoAIInnovation.com" className="text-[11px] sm:text-xs text-primary hover:underline">MZavala@GoAIInnovation.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold mb-0.5">Address</div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground">8958 West State Road 84 #233<br />Davie, FL 33324</div>
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="dash-card p-8 sm:p-10 text-center glow-border">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Your message has been received. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="dash-card p-5 sm:p-8 space-y-4 sm:space-y-5 glow-border">
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
                <Textarea id="message" name="message" placeholder="How can we help?" rows={4} maxLength={1000} required className="text-sm" />
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
