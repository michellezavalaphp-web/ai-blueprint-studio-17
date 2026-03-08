import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  Star,
  Quote,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

const testimonials = [
  {
    quote: "We saved over 30 hours per week after implementing the recommendations from our AI assessment. Game-changer.",
    name: "Sarah Chen",
    role: "COO, Pacific Financial Group",
    metric: "30+ hrs/week saved",
  },
  {
    quote: "The strategy session alone gave us a clear roadmap. No jargon, just actionable steps we could start right away.",
    name: "James Rodriguez",
    role: "Director of Operations, Metro Health Services",
    metric: "3x faster workflows",
  },
  {
    quote: "As a nonprofit, we were skeptical. But their tools showed us exactly where AI could help — and it did.",
    name: "Amara Okafor",
    role: "Executive Director, Community Forward",
    metric: "40% cost reduction",
  },
  {
    quote: "Go AI Innovation helped us automate our entire client onboarding process. What used to take 3 days now takes 20 minutes.",
    name: "David Park",
    role: "Managing Partner, Apex Legal Group",
    metric: "95% time reduction",
  },
  {
    quote: "Their framework made AI accessible for our government department. We reduced processing backlogs by 60% in the first quarter.",
    name: "Lt. Maria Santos",
    role: "Operations Lead, City of Riverside",
    metric: "60% backlog cleared",
  },
  {
    quote: "The Time Reclaimed™ Calculator revealed we were losing 200+ hours per month to manual data entry. That changed everything.",
    name: "Karen Mitchell",
    role: "VP Operations, Pinnacle Insurance Group",
    metric: "200+ hrs/mo reclaimed",
  },
];

const caseStudies = [
  {
    title: "Financial Services Automation",
    description: "A mid-size financial firm reduced administrative overhead by 40% and reclaimed 120+ hours per month through AI-powered workflow automation.",
    tags: ["Financial Services", "Workflow Automation", "Time Reclaimed™"],
  },
  {
    title: "Government Operations Modernization",
    description: "A city government department modernized citizen services with AI agents, cutting average processing time from 5 days to 4 hours.",
    tags: ["Government", "AI Agents", "Citizen Services"],
  },
  {
    title: "Nonprofit Efficiency Transformation",
    description: "A national nonprofit implemented AI systems for donor engagement and reporting, doubling outreach capacity without adding staff.",
    tags: ["Nonprofit", "Donor Engagement", "Operational Efficiency"],
  },
];

const metrics = [
  { icon: BarChart3, stat: "500+", label: "Organizations assessed" },
  { icon: TrendingUp, stat: "40%", label: "Average time savings" },
  { icon: Users, stat: "10K+", label: "Hours reclaimed" },
  { icon: Award, stat: "98%", label: "Client satisfaction" },
];

const Impact = () => (
  <>
    {/* Page Header */}
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <Award className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">Results</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Impact & Client Success</h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
          Real transformation stories from organizations using AI systems to improve operations, reclaim time, and scale intelligently.
        </p>
      </div>
    </div>

    {/* Metrics */}
    <section className="section-padding !pt-6 sm:!pt-10 !pb-8 sm:!pb-12">
      <div className="container mx-auto">
        <div className="glass-panel p-1 glow-border">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {metrics.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-4 sm:py-5 px-3 sm:px-4 ${
                  i % 2 === 0 ? "border-r border-border/30" : i < 3 ? "md:border-r md:border-border/30" : ""
                } ${i < 2 ? "border-b border-border/30 md:border-b-0" : ""}`}
              >
                <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary/60 mb-1.5 sm:mb-2" />
                <div className="stat-value text-xl sm:text-2xl md:text-3xl">{s.stat}</div>
                <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5 tracking-wide text-center">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="section-padding !pt-0">
      <div className="container mx-auto">
        <SectionHeading tag="Case Studies" title="Transformation Stories" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="dash-card flex flex-col gap-3 sm:gap-4">
              <h3 className="font-display text-sm sm:text-base font-semibold">{cs.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{cs.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                {cs.tags.map((tag) => (
                  <span key={tag} className="text-[9px] sm:text-[10px] uppercase tracking-wider text-primary font-medium rounded-full px-2 py-0.5" style={{ backgroundColor: 'hsl(207 90% 54% / 0.08)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <SectionHeading tag="Testimonials" title="What Organizations Say" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="dash-card flex flex-col gap-3 sm:gap-4">
              <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-primary/30" />
              <p className="text-xs sm:text-sm text-muted-foreground flex-1 italic leading-relaxed">"{t.quote}"</p>
              <div className="text-[11px] sm:text-xs text-primary font-semibold">{t.metric}</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-primary fill-primary" />
                ))}
              </div>
              <div className="border-t border-border/30 pt-3">
                <div className="font-display font-semibold text-xs sm:text-[13px]">{t.name}</div>
                <div className="text-[10px] sm:text-[11px] text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto max-w-xl">
        <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
            Book a free strategy session and see how the Time Reclaimed™ Framework can transform your organization.
          </p>
          <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
            <Link to="/book">
              Schedule My AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Impact;
