import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Presentation,
  ArrowRight,
  Library,
} from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Books",
    description: "AI strategy books and guides written for organizational leaders who want to understand and implement AI systems.",
    status: "Coming Soon",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Structured AI training programs designed to upskill teams and build internal AI capabilities.",
    status: "Coming Soon",
  },
  {
    icon: FileText,
    title: "AI Implementation Guides",
    description: "Step-by-step guides covering AI adoption, automation best practices, and operational transformation.",
    status: "Coming Soon",
  },
  {
    icon: Presentation,
    title: "Workshops & Courses",
    description: "Live and on-demand workshops teaching organizations how to implement AI systems and reclaim time.",
    status: "Coming Soon",
  },
];

const Resources = () => (
  <>
    {/* Page Header */}
    <div className="page-header">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <Library className="h-4 w-4 text-primary" />
          </div>
          <span className="badge-tag">Knowledge Hub</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Learning & Resources</h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
          Explore books, training programs, guides, and workshops designed to help organizations adopt AI and transform operations.
        </p>
      </div>
    </div>

    <section className="section-padding !pt-10">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
          {resources.map((r) => (
            <div key={r.title} className="dash-card flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-semibold rounded-full px-2.5 py-1 bg-muted/60 text-muted-foreground">
                  {r.status}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-lg mx-auto">
          <div className="glass-panel p-8 text-center glow-border">
            <h3 className="font-display text-lg font-semibold mb-2">Want Early Access?</h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Book a strategy session to learn more about upcoming resources and get personalized AI guidance.
            </p>
            <Button variant="hero" size="lg" className="h-11 text-sm" asChild>
              <Link to="/book">
                Book a Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Resources;
