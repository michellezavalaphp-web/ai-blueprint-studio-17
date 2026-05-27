import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import michellePortrait from "@/assets/michelle-portrait.png";
import consultingHero from "@/assets/consulting-hero.jpg";
import aiAbstract from "@/assets/ai-systems-abstract.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Gauge,
  Clock,
  ScanSearch,
  Activity,
  Cpu,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  Search,
  Settings,
  Layers,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogPosts";
import BlogCard from "@/components/BlogCard";
import SEO from "@/components/SEO";
import SchemaMarkup, { LOCAL_BUSINESS_SCHEMA } from "@/components/SchemaMarkup";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { title: t("AI Strategy & Roadmaps", "Estrategia y hojas de ruta de IA"), desc: t("Custom AI roadmaps aligned with your organization's operational goals and growth targets.", "Hojas de ruta de IA personalizadas alineadas con los objetivos operativos y metas de crecimiento de su organización.") },
    { title: t("Workflow Automation Systems", "Sistemas de automatización de flujos de trabajo"), desc: t("Eliminate repetitive tasks and accelerate throughput with intelligent process automation.", "Elimine tareas repetitivas y acelere la productividad con automatización inteligente de procesos.") },
    { title: t("AI Implementation & Integration", "Implementación e integración de IA"), desc: t("End-to-end deployment of AI systems into your existing operations and technology stack.", "Implementación integral de sistemas de IA en sus operaciones y tecnología existentes.") },
    { title: t("AI Adoption & Training", "Adopción y capacitación en IA"), desc: t("Empower your team to leverage AI tools confidently with hands-on training and change management.", "Capacite a su equipo para usar herramientas de IA con confianza mediante entrenamiento práctico y gestión del cambio.") },
  ];

  const frameworkStages = [
    { step: "01", name: t("Discover", "Descubrir"), icon: ScanSearch },
    { step: "02", name: t("Diagnose", "Diagnosticar"), icon: Activity },
    { step: "03", name: t("Design", "Diseñar"), icon: BrainCircuit },
    { step: "04", name: t("Develop", "Desarrollar"), icon: Cpu },
    { step: "05", name: t("Deploy", "Desplegar"), icon: ArrowRight },
    { step: "06", name: t("Drive", "Impulsar"), icon: BarChart3 },
    { step: "07", name: t("Dominate", "Dominar"), icon: Gauge },
  ];

  const diagnostics = [
    { icon: Gauge, title: t("AI Readiness Assessment", "Evaluación de preparación para IA"), desc: t("Discover your AI Readiness Score and get tailored recommendations.", "Descubra su puntuación de preparación para IA y reciba recomendaciones personalizadas.") },
    { icon: Clock, title: t("Time Reclaimed™ Calculator", "Calculadora Time Reclaimed™"), desc: t("Quantify how many hours per week AI could save your team.", "Cuantifique cuántas horas por semana la IA podría ahorrarle a su equipo.") },
    { icon: ScanSearch, title: t("AI Opportunity Finder", "Buscador de oportunidades de IA"), desc: t("Uncover processes ripe for automation and AI enhancement.", "Identifique procesos listos para automatización y mejora con IA.") },
  ];


  return (
    <>
      <SEO title={"Go AI Innovation — AI Consulting & Implementation | Miami"} description={"Go AI Innovation helps businesses implement AI systems that save 10+ hours per week. Led by CPD Accredited AI Consultant Mardel Michelle Zavala. Free AI Readiness Assessment."} />
      <SchemaMarkup id="local-business" schema={LOCAL_BUSINESS_SCHEMA} />
      {/* ── 1 · Hero ── */}
      <section className="section-light relative flex items-center overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 py-12 sm:py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Left: Text (60%) */}
            <div className="lg:col-span-3 order-2 lg:order-1 animate-fade-up text-center lg:text-left">
              <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-primary mb-5 sm:mb-6 uppercase">
                {t("International CPD Accredited AI Consultant", "Consultora de IA Acreditada Internacional CPD")}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] mb-5 sm:mb-6 tracking-tight">
                {t("Less Overwhelm. More Freedom. ", "Menos agobio. Más libertad. ")}
                <span className="text-gradient">{t("Powered by AI.", "Impulsado por IA.")}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-7 sm:mb-8 leading-relaxed">
                {t(
                  "I help overwhelmed business owners and organizations implement AI systems that reclaim time, reduce chaos, and drive real growth — without the hype, without the overwhelm.",
                  "Ayudo a dueños de negocios y organizaciones agobiadas a implementar sistemas de IA que recuperan tiempo, reducen el caos e impulsan crecimiento real — sin hype, sin agobio."
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start max-w-xl mx-auto lg:mx-0">
                <Button variant="hero" size="lg" className="h-12 text-sm w-full sm:w-auto" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t("Book a Strategy Call", "Agendar Llamada Estratégica")} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" className="h-12 text-sm w-full sm:w-auto" asChild>
                  <Link to="/assessment">{t("Take the AI Readiness Assessment", "Evaluación de preparación para IA")}</Link>
                </Button>
              </div>
              <p className="mt-6 text-xs sm:text-sm italic text-muted-foreground/80 max-w-xl mx-auto lg:mx-0">
                {t(
                  "Freedom isn't a reward for working harder. It's what happens when you work smarter.",
                  "La libertad no es una recompensa por trabajar más duro. Es lo que ocurre cuando trabajas con más inteligencia."
                )}
              </p>
            </div>

            {/* Right: Portrait (40%) */}
            <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-transparent rounded-3xl blur-2xl" aria-hidden="true" />
                <img
                  src={michellePortrait}
                  alt={t("Mardel Michelle Zavala, AI Implementation Consultant", "Mardel Michelle Zavala, Consultora de Implementación de IA")}
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover aspect-square"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1b · Credentials Bar ── */}
      <section className="py-5 sm:py-6 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-muted-foreground tracking-wide">
            <span>{t("International CPD Accredited", "Acreditada Internacional CPD")}</span>
            <span className="text-primary/40 select-none" aria-hidden="true">•</span>
            <span>{t("AI Implementation Strategist", "Estratega de Implementación de IA")}</span>
            <span className="text-primary/40 select-none" aria-hidden="true">•</span>
            <span>{t("Bilingual: English & Español", "Bilingüe: Inglés y Español")}</span>
            <span className="text-primary/40 select-none" aria-hidden="true">•</span>
            <span>{t("Author — Time Reclaimed™ (June 2026)", "Autora — Time Reclaimed™ (Junio 2026)")}</span>
            <span className="text-primary/40 select-none" aria-hidden="true">•</span>
            <span>{t("Featured Speaker", "Oradora Destacada")}</span>
          </div>
        </div>
      </section>

      {/* ── 2 · Services ── */}
      <section className="section-light section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("Services", "Servicios")}
            title={t("AI Strategy & Implementation Services", "Servicios de estrategia e implementación de IA")}
            description={t("End-to-end consulting to bring intelligent systems into your organization — from strategy to execution.", "Consultoría integral para incorporar sistemas inteligentes en su organización — desde la estrategia hasta la ejecución.")}
          />
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-center">
            <div className="grid sm:grid-cols-1 gap-4 sm:gap-5">
              {services.map((s, i) => (
                <div key={s.title} className="dash-card flex items-start gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-semibold mb-1.5">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block overflow-hidden rounded-xl border border-border">
              <img src={consultingHero} alt={t("Executive AI strategy consulting session", "Sesión de consultoría estratégica de IA ejecutiva")} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/services">
                {t("View All Services", "Ver todos los servicios")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 3 · Framework ── */}
      <section className="section-dark section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("Our Methodology", "Nuestra metodología")}
            title={t("The Time Reclaimed™ Framework", "El marco Time Reclaimed™")}
            description={t("Seven stages from operational inefficiency to AI-powered transformation.", "Siete etapas desde la ineficiencia operativa hasta la transformación impulsada por IA.")}
          />
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-center max-w-5xl mx-auto">
            {frameworkStages.map((stage, i) => (
              <div key={stage.name} className="flex items-center">
                <div className="flex flex-col items-center text-center w-[100px] group">
                  <div className="text-[10px] font-bold text-primary tracking-wider mb-1.5">{stage.step}</div>
                  <div className="w-12 h-12 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:shadow-md transition-all duration-300">
                    <stage.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-display text-xs font-semibold mt-2 text-foreground">{stage.name}</div>
                </div>
                {i < frameworkStages.length - 1 && (
                  <div className="flex items-center mx-1">
                    <div className="w-6 h-px bg-primary/20" />
                    <ArrowRight className="h-3 w-3 text-primary/30 -ml-0.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Mobile */}
          <div className="lg:hidden grid grid-cols-4 sm:grid-cols-4 gap-x-1 gap-y-4 max-w-sm sm:max-w-md mx-auto">
            {frameworkStages.map((stage, i) => (
              <div key={stage.name} className="flex flex-col items-center text-center relative">
                <div className="text-[10px] font-bold text-primary tracking-wider mb-1">{stage.step}</div>
                <div className="w-11 h-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center">
                  <stage.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="font-display text-[11px] font-semibold mt-1.5 text-foreground">{stage.name}</div>
                {i < frameworkStages.length - 1 && i !== 3 && (
                  <ArrowRight className="absolute right-[-8px] top-[28px] h-2.5 w-2.5 text-primary/25" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/framework">
                {t("Explore the Full Framework", "Explora la metodología completa")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 4 · AI Readiness Diagnostics ── */}
      <section className="section-light section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("AI Readiness Diagnostics", "Diagnóstico de preparación para IA")}
            title={t("Assess Your AI Readiness", "Evalúa tu preparación para la IA")}
            description={t("Evaluate your organization's AI readiness and uncover high-impact opportunities before implementation.", "Evalúe la preparación de su organización para la IA y descubra oportunidades de alto impacto antes de la implementación.")}
          />
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {diagnostics.map((d) => (
              <div key={d.title} className="dash-card text-center">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{d.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">
                {t("Start Your Assessment", "Inicia tu evaluación")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* ── 5 · Latest AI Insights ── */}
      <section className="section-light section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("Insights", "Perspectivas")}
            title={t("Latest AI Insights", "Últimas Perspectivas de IA")}
            description={t(
              "Practical strategies and real-world ideas to help you reclaim time, improve operations, and scale smarter with AI.",
              "Estrategias prácticas e ideas reales para ayudarte a recuperar tiempo, mejorar operaciones y escalar con inteligencia artificial."
            )}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to={t("/insights", "/es/perspectivas")}>
                {t("View All Insights", "Ver todas las perspectivas")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 6 · FAQ ── */}
      <FAQSection
        id="home"
        tag={t("FAQ", "Preguntas frecuentes")}
        title={t("Frequently Asked Questions", "Preguntas Frecuentes")}
        items={[
          {
            question: t("What does an AI consultant do?", "¿Qué hace un consultor de IA?"),
            answer: t(
              "An AI consultant evaluates your business operations, identifies where artificial intelligence can save time and money, and helps you implement AI tools strategically. At Go AI Innovation, we use our proprietary Time Reclaimed™ Framework to help businesses save 10+ hours per week through AI automation — without disrupting your current operations.",
              "Un consultor de IA evalúa las operaciones de su negocio, identifica dónde la inteligencia artificial puede ahorrar tiempo y dinero, y le ayuda a implementar herramientas de IA estratégicamente. En Go AI Innovation, usamos nuestro marco propietario Time Reclaimed™ para ayudar a las empresas a ahorrar más de 10 horas por semana mediante la automatización con IA — sin interrumpir sus operaciones actuales.",
            ),
          },
          {
            question: t("How much does AI consulting cost for a small business?", "¿Cuánto cuesta la consultoría de IA para una pequeña empresa?"),
            answer: t(
              "AI consulting costs vary based on scope and complexity. Go AI Innovation offers a free AI Readiness Assessment to help you understand where AI can help your business before any commitment. Our engagements range from strategy sessions to full implementation programs.",
              "Los costos de la consultoría de IA varían según el alcance y la complejidad. Go AI Innovation ofrece una Evaluación de Preparación para IA gratuita para ayudarle a entender dónde la IA puede ayudar a su negocio antes de cualquier compromiso. Nuestros servicios van desde sesiones de estrategia hasta programas de implementación completos.",
            ),
          },
          {
            question: t("How long does it take to implement AI in a business?", "¿Cuánto tiempo toma implementar IA en un negocio?"),
            answer: t(
              "Most businesses see initial results within 2–4 weeks using our Time Reclaimed™ Framework. The full 7-stage transformation typically takes 3–6 months depending on the complexity of your operations and the number of processes being automated.",
              "La mayoría de las empresas ven resultados iniciales en 2–4 semanas usando nuestro marco Time Reclaimed™. La transformación completa de 7 etapas suele tomar de 3 a 6 meses dependiendo de la complejidad de sus operaciones y la cantidad de procesos a automatizar.",
            ),
          },
          {
            question: t("Is AI going to replace my employees?", "¿La IA reemplazará a mis empleados?"),
            answer: t(
              "No. Our approach focuses on augmenting your team, not replacing them. AI handles repetitive, time-consuming tasks so your employees can focus on higher-value work that requires human creativity, judgment, and relationships. Most clients report higher employee satisfaction after AI implementation.",
              "No. Nuestro enfoque se centra en potenciar a su equipo, no en reemplazarlo. La IA maneja tareas repetitivas y tediosas para que sus empleados puedan enfocarse en trabajo de mayor valor que requiere creatividad humana, juicio y relaciones. La mayoría de los clientes reportan mayor satisfacción del personal tras la implementación de IA.",
            ),
          },
          {
            question: t("Do I need technical skills to use AI in my business?", "¿Necesito conocimientos técnicos para usar IA en mi negocio?"),
            answer: t(
              "Not at all. That's exactly why businesses work with an AI consultant. Go AI Innovation handles the technical implementation while training your team to use the new tools effectively. Our goal is to make AI accessible to every business leader, regardless of technical background.",
              "Para nada. Por eso las empresas trabajan con un consultor de IA. Go AI Innovation se encarga de la implementación técnica mientras capacita a su equipo para usar las nuevas herramientas de forma efectiva. Nuestro objetivo es hacer que la IA sea accesible para todo líder empresarial, independientemente de su trasfondo técnico.",
            ),
          },
          {
            question: t("What industries do you work with?", "¿Con qué industrias trabajan?"),
            answer: t(
              "We work with businesses across all industries, with particular expertise in professional services, healthcare, real estate, insurance, retail, and government organizations. Our Time Reclaimed™ Framework is industry-agnostic — it works wherever there are repetitive processes consuming your team's time.",
              "Trabajamos con empresas de todas las industrias, con experiencia particular en servicios profesionales, salud, bienes raíces, seguros, retail y organizaciones gubernamentales. Nuestro marco Time Reclaimed™ es agnóstico a la industria — funciona dondequiera que haya procesos repetitivos consumiendo el tiempo de su equipo.",
            ),
          },
        ]}
      />

      {/* ── 6 · CTA ── */}
      <section className="section-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aiAbstract} alt="AI systems visualization" loading="lazy" className="w-full h-full object-cover opacity-[0.08]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,30%,5%)] via-[hsl(222,30%,5%/0.8)] to-[hsl(222,30%,5%/0.6)]" />
        </div>
        <div className="container mx-auto max-w-xl relative z-10">
          <div className="glass-panel p-7 sm:p-10 md:p-12 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              {t("Ready to Implement AI in Your Organization?", "¿Listo para implementar IA en su organización?")}
            </h2>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground mb-7 sm:mb-9 text-xs sm:text-sm leading-relaxed">
              {t("Discover where AI can create the greatest operational impact in your organization.", "Descubra dónde la IA puede generar el mayor impacto operativo en su organización.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Book Strategy Call", "Agendar Llamada Estratégica")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/tools">{t("Start AI Readiness Assessment", "Inicia la evaluación de preparación para IA")}</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              {t("Or call us directly:", "O llámanos directamente:")} <a href="tel:7869366937" className="text-primary hover:underline font-medium">786-936-6937</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
