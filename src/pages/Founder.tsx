import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Target, Rocket, User, ImageIcon } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

const values = [
  {
    icon: Lightbulb,
    title: "Vision",
    description: "Empowering organizations to operate more intelligently through AI systems that reclaim time and amplify human potential.",
  },
  {
    icon: Target,
    title: "Mission",
    description: "To help every organization — from small businesses to government departments — access the transformative power of AI.",
  },
  {
    icon: Rocket,
    title: "Approach",
    description: "The Time Reclaimed™ Framework — our proprietary methodology for assessing, planning, and deploying AI systems that deliver measurable results from day one.",
  },
];

const Founder = () => (
  <>
    {/* Page Header */}
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <User className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">Meet the Founder</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Mardel Michelle Zavala</h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
          Founder & AI Implementation Strategist
        </p>
      </div>
    </div>

    <section className="section-padding !pt-6 sm:!pt-10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="glass-panel p-5 sm:p-8 glow-border">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              {/* Headshot placeholder */}
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-xl bg-muted/40 border border-border/30 flex flex-col items-center justify-center">
                  <User className="h-12 w-12 text-muted-foreground/40" />
                  <ImageIcon className="h-4 w-4 text-muted-foreground/30 mt-1" />
                </div>
                <span className="text-[10px] text-muted-foreground/50 tracking-wide">Founder Photo Coming Soon</span>
              </div>
              {/* Bio */}
              <div className="text-center md:text-left flex-1 space-y-3 sm:space-y-4 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                <p>
                  Mardel Michelle Zavala is the visionary behind Go AI Innovation — a platform dedicated to
                  helping organizations reclaim time and operate more intelligently using AI systems and automation.
                </p>
                <p>
                  With deep expertise in AI strategy, business process automation, and intelligent systems,
                  Mardel has helped hundreds of organizations across industries transform their operations.
                  From insurance agencies and professional services firms to nonprofits and government
                  departments, her mission is clear: make AI accessible, actionable, and impactful.
                </p>
                <p>
                  Mardel believes that AI isn't about replacing people — it's about freeing them to do
                  their most meaningful work. Every strategy session, every tool, and every implementation
                  plan is designed to empower teams, not replace them.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-16">
          {values.map((v) => (
            <div key={v.title} className="dash-card text-center">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <v.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{v.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-panel p-6 sm:p-8 text-center glow-border">
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">Connect with Mardel</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">Book a strategy session and work directly with the founder.</p>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/book">
                Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Founder;
