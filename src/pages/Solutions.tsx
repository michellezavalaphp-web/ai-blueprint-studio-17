import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Building2,
  Briefcase,
  Shield,
  Home,
  Heart,
  Landmark,
  ArrowRight,
  CheckCircle2,
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
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          tag="Solutions"
          title="AI Solutions for Every Organization"
          description="Go AI Innovation delivers intelligent systems powered by the Time Reclaimed™ Framework — improving efficiency, automation, and decision-making across your entire organization."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <div key={s.title} className="glass rounded-lg p-6 flex flex-col gap-4 hover:glow-border transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
              <ul className="space-y-2 mt-auto">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Find the Right AI Solution for Your Organization
        </h2>
        <p className="text-muted-foreground mb-8">
          Every organization is unique. Let us assess your operations and build an AI strategy that fits.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/book">
              Book an AI Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/tools">Explore AI Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Solutions;
