import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, Mail, Phone } from "lucide-react";
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
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
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
            Have a question, want to explore a partnership, or need more information? We'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto max-w-lg">
          <div className="glass-panel p-4 sm:p-5 mb-5 sm:mb-6 flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium">AI Strategy Line</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground">(XXX) XXX-XXXX — Coming Soon</p>
            </div>
          </div>
          {submitted ? (
            <div className="glass-panel p-8 sm:p-10 text-center glow-border">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Your message has been received. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-panel p-5 sm:p-8 space-y-4 sm:space-y-5 glow-border">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs sm:text-[13px]">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" maxLength={100} required className="h-11 sm:h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="org" className="text-xs sm:text-[13px]">Organization <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="org" name="org" placeholder="Company or organization name" maxLength={100} className="h-11 sm:h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs sm:text-[13px]">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} required className="h-11 sm:h-10 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs sm:text-[13px]">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we help?" rows={4} maxLength={1000} required className="text-sm" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full h-12 sm:h-11 text-sm">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
