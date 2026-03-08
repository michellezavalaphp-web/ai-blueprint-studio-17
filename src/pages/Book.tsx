import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { CalendarDays, Target, Map, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Identify Opportunities",
    description: "We'll analyze your current operations and pinpoint where AI can make the biggest impact.",
  },
  {
    icon: Map,
    title: "Build Your Roadmap",
    description: "Walk away with a clear, actionable AI implementation plan tailored to your business.",
  },
  {
    icon: CalendarDays,
    title: "Start Implementing",
    description: "Get hands-on support as you begin deploying AI systems and automations.",
  },
];

const includes = [
  "One-on-one consultation with an AI strategist",
  "Assessment of your current workflows",
  "Identification of top AI automation opportunities",
  "Custom AI implementation roadmap",
  "No obligation — just actionable insights",
];

const Book = () => (
  <>
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Free Consultation"
          title="Book Your AI Strategy Session"
          description="This session is designed to help your business identify automation opportunities and build a roadmap for AI implementation."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={s.title} className="glass rounded-lg p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-xs text-primary font-semibold mb-2">Step {i + 1}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto glass rounded-xl p-8 text-center glow-border">
          <h3 className="font-display text-2xl font-bold mb-6">What's Included</h3>
          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="hero" size="lg" className="animate-pulse-glow">
            Schedule My AI Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            Free — no credit card required
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Book;
