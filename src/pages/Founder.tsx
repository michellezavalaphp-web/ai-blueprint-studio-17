import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Target, Rocket } from "lucide-react";

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
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Meet the Founder
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Mardel Michelle Zavala
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            AI Implementation Strategist & Founder of Go AI Innovation
          </p>
          <div className="glass rounded-xl p-8 text-left space-y-4 text-muted-foreground text-sm leading-relaxed">
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

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-lg p-6 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/book">
              Book a Strategy Session with Mardel <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Founder;
