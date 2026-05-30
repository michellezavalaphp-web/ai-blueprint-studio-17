import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles, FileText } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.png";
import bookCover from "@/assets/time-reclaimed-cover.jpg";
import SEO from "@/components/SEO";

const WaitlistForm = () => (
  <div className="rounded-xl border border-border/40 bg-card/60 backdrop-blur p-3 sm:p-4 shadow-sm">
    <iframe
      src="https://api.growthhub365.com/widget/form/J5kMVFpuFCPx3FaFwS0X"
      style={{ width: "100%", border: "none", minHeight: 400 }}
      scrolling="no"
      id="time-reclaimed-waitlist-form"
      title="Time Reclaimed waitlist form"
    />
  </div>
);

const TimeReclaimed = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Early Book Launch Updates",
      description: "Be the first to know when Time Reclaimed™ goes live, plus pre-order windows and bonus offers.",
    },
    {
      icon: FileText,
      title: "Free T.I.M.E. Method™ One-Page Guide",
      description: "A practical one-page framework you can apply this week to reclaim focused, intentional time.",
    },
    {
      icon: Sparkles,
      title: "Exclusive Time Reclaimed™ Resources",
      description: "Subscriber-only worksheets, workshops, and behind-the-scenes content from Michelle.",
    },
  ];

  return (
    <>
      <SEO
        title="Time Reclaimed™ | Mardel Michelle Zavala"
        description="Join the early access list for Time Reclaimed™, the upcoming book by Mardel Michelle Zavala. Learn how to create margin, lead with confidence, and thrive in an AI-powered world."
      />

      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <img
                src={bookCover}
                alt="Time Reclaimed™ by Mardel Michelle Zavala — book cover"
                width={300}
                height={400}
                className="w-[260px] sm:w-[300px] h-auto rounded-md shadow-2xl"
                loading="eager"
              />
            </div>

            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="badge-tag">Coming Soon — New Book</span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-3 tracking-tight">
                TIME RECLAIMED™
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 font-medium leading-snug mb-4">
                7 Practical Steps to Create Margin, Lead with Confidence, and Thrive in an AI-Powered World
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                The future belongs to people who know how to reclaim their time, focus on what matters most, and use AI as a tool for greater impact. Join the early access list and be among the first to receive launch updates, exclusive content, and a free copy of The T.I.M.E. Method™ One-Page Guide.
              </p>

              <div className="max-w-md mx-auto lg:mx-0">
                <WaitlistForm />
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto mt-4"
                  asChild
                >
                  <a href="#time-reclaimed-waitlist-form">
                    GET EARLY ACCESS <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Why This Book */}
      <section className="section-light py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
            Why Time Reclaimed™ Matters
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Most people don't need more productivity hacks. They need more margin. Time Reclaimed™ introduces a practical framework for creating space, reducing overwhelm, leading with confidence, and thriving in an AI-powered world. This book is designed for professionals, leaders, entrepreneurs, and anyone who wants to stop feeling constantly busy and start making intentional progress.
          </p>
        </div>
      </section>

      {/* Section 3 — What You'll Receive */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              What You'll Receive
            </h2>
            <p className="text-sm text-muted-foreground">Join the early access list and unlock immediate value.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="dash-card p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Author */}
      <section className="section-light py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-panel p-6 sm:p-10 glow-border">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
              <div className="shrink-0">
                <img
                  src={founderPhoto}
                  alt="Mardel Michelle Zavala"
                  loading="lazy"
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-primary/20 shadow-md"
                />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  Meet Mardel Michelle Zavala
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Mardel Michelle Zavala is an AI Implementation Strategist, Business Systems Integrator, speaker, and founder of Go AI Innovation. Her mission is to help professionals and organizations reclaim time, reduce overwhelm, and create greater impact through practical AI integration and intelligent systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Be First In Line
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
            Time Reclaimed™ is coming soon. Join the waitlist today and receive exclusive updates before the public launch.
          </p>
          <WaitlistForm />
          <Button variant="hero" size="lg" className="w-full sm:w-auto mt-5" asChild>
            <a href="#time-reclaimed-waitlist-form">
              JOIN THE WAITLIST <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default TimeReclaimed;
