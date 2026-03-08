import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Briefcase,
  Shield,
  Home,
  Heart,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "Businesses & Enterprises",
    description: "Automate operations, optimize workflows, and scale intelligently with AI systems tailored to your business model.",
    benefits: ["Workflow automation", "AI-powered customer service", "Data-driven decision making"],
  },
  {
    icon: Briefcase,
    title: "Professional Service Firms",
    description: "Streamline client management, automate reporting, and free up billable hours with intelligent process automation.",
    benefits: ["Automated client communications", "Document processing", "Time tracking optimization"],
  },
  {
    icon: Shield,
    title: "Insurance Agencies",
    description: "Transform lead follow-up, client communication, and administrative work with AI agents built for insurance.",
    benefits: ["Automated lead nurturing", "Policy management AI", "Claims processing automation"],
  },
  {
    icon: Home,
    title: "Real Estate Organizations",
    description: "Accelerate deal flow, automate marketing, and manage client relationships with intelligent real estate systems.",
    benefits: ["AI listing optimization", "Automated follow-up sequences", "Market analysis tools"],
  },
  {
    icon: Heart,
    title: "Nonprofits",
    description: "Do more with less by automating donor outreach, volunteer coordination, and program administration.",
    benefits: ["Donor engagement automation", "Grant writing assistance", "Impact reporting"],
  },
  {
    icon: Landmark,
    title: "Government Departments",
    description: "Modernize citizen services, automate compliance workflows, and improve interdepartmental efficiency.",
    benefits: ["Citizen service automation", "Compliance monitoring", "Resource optimization"],
  },
];

const Solutions = () => (
  <>
    {/* Page Header */}
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <Globe className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">Solutions</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">AI Solutions for Every Organization</h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
          Intelligent systems powered by the Time Reclaimed™ Framework — improving efficiency, automation, and decision-making across your entire organization.
        </p>
      </div>
    </div>

    <section className="section-padding !pt-6 sm:!pt-10">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {sectors.map((s) => (
            <div key={s.title} className="dash-card flex flex-col gap-3 sm:gap-4">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold">{s.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              <ul className="space-y-2 mt-auto pt-3 border-t border-border/30">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-xl">
        <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Find the Right AI Solution
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
            Every organization is unique. Let us assess your operations and build an AI strategy that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
            <Link to="/book">
              Book Your Free AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm" asChild>
              <Link to="/tools">Explore AI Tools</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Solutions;
