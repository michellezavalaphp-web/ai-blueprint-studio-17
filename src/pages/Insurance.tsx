import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Users, MessageSquare, TrendingUp, ClipboardList, ArrowRight, Shield } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Automated Lead Follow-Up",
    description:
      "Never miss a prospect again. AI agents follow up with leads instantly via email, SMS, and chat — 24/7.",
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    description:
      "AI-powered messaging keeps your clients informed about policy updates, renewals, and claims — automatically.",
  },
  {
    icon: TrendingUp,
    title: "Agent Productivity",
    description:
      "Free your agents from admin work so they can focus on selling, advising, and building relationships.",
  },
  {
    icon: ClipboardList,
    title: "Administrative Automation",
    description:
      "From data entry to compliance paperwork — automate the tedious tasks that slow your agency down.",
  },
];

const Insurance = () => (
  <>
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
          </div>
        </div>
        <SectionHeading
          tag="Industry Focus"
          title="AI for Insurance Agencies"
          description="Whether you specialize in life insurance, health insurance, Medicare, or financial services — AI can revolutionize how your agency operates."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="glass rounded-lg p-6 flex gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Discover AI for Insurance Agencies
        </h2>
        <p className="text-muted-foreground mb-8">
          See how leading agencies are using AI to close more deals, retain more clients, and run leaner operations.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/book">
            Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  </>
);

export default Insurance;
