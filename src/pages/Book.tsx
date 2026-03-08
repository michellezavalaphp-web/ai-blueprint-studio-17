import { Button } from "@/components/ui/button";
import { CalendarDays, Target, Map, ArrowRight, CheckCircle2, Calendar } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Identify Opportunities",
    description: "We'll analyze your current operations and pinpoint where AI can make the biggest impact.",
  },
  {
    icon: Map,
    title: "Build Your Roadmap",
    description: "Walk away with a clear, actionable AI implementation plan tailored to your organization.",
  },
  {
    icon: CalendarDays,
    title: "Start Implementing",
    description: "Get hands-on support as you begin deploying AI systems and automations.",
  },
];

const includes = [
  "One-on-one consultation with an AI strategist",
  "Assessment using the Time Reclaimed™ Framework",
  "Identification of top AI automation opportunities",
  "Custom AI implementation roadmap",
  "Time Reclaimed™ score for your organization",
  "No obligation — just actionable insights",
];

const Book = () => (
  <>
    {/* Page Header */}
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <Calendar className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">Free Consultation</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Book Your Free AI Strategy Session</h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
          Designed to help your organization identify automation opportunities and build a roadmap for AI implementation.
        </p>
      </div>
    </div>

    <section className="section-padding !pt-6 sm:!pt-10">
      <div className="container mx-auto">
        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {steps.map((s, i) => (
            <div key={s.title} className="dash-card text-center">
              <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold rounded-full px-2.5 py-1" style={{ backgroundColor: 'hsl(207 90% 54% / 0.08)' }}>
                  Step {i + 1}
                </span>
              </div>
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="max-w-xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-4 sm:mb-6">What's Included</h3>
            <ul className="space-y-3 text-left max-w-sm mx-auto mb-6 sm:mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-[12px] sm:text-[13px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto animate-pulse-glow">
              Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-4 tracking-wide">
              Free — no credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Book;
