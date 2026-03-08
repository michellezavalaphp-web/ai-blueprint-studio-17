import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeading from "@/components/SectionHeading";
import { Send, CheckCircle2 } from "lucide-react";
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

    // Placeholder — replace with real submission logic
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll be in touch soon." });
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <SectionHeading
          tag="Get in Touch"
          title="Contact Go AI Innovation"
          description="Have a question, want to explore a partnership, or need more information? We'd love to hear from you."
        />

        {submitted ? (
          <div className="glass rounded-xl p-10 text-center glow-border">
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground text-sm">
              Your message has been received. Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6 glow-border">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your full name" maxLength={100} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org">Organization (optional)</Label>
              <Input id="org" name="org" placeholder="Company or organization name" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="How can we help?" rows={5} maxLength={1000} required />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Send Message <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
