import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import logo from "@/assets/logo.png";
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

  const methodology = [
    { step: "01", title: t("Discovery", "Descubrimiento"), desc: t("Assess current operations, workflows, and pain points to identify high-impact AI opportunities.", "Evalúe las operaciones, flujos de trabajo y puntos críticos actuales para identificar oportunidades de IA de alto impacto.") },
    { step: "02", title: t("Analysis", "Análisis"), desc: t("Data-driven evaluation of inefficiencies, resource allocation, and automation potential.", "Evaluación basada en datos de ineficiencias, asignación de recursos y potencial de automatización.") },
    { step: "03", title: t("Design", "Diseño"), desc: t("Architect a custom AI implementation strategy aligned with your organizational goals.", "Diseñe una estrategia de implementación de IA personalizada alineada con los objetivos de su organización.") },
    { step: "04", title: t("Integration", "Integración"), desc: t("Deploy AI systems within your existing technology stack with minimal disruption.", "Implemente sistemas de IA dentro de su infraestructura tecnológica existente con mínima interrupción.") },
    { step: "05", title: t("Deployment", "Despliegue"), desc: t("Launch with hands-on support, ensuring smooth adoption across your team.", "Lance con soporte práctico, asegurando una adopción fluida en todo su equipo.") },
    { step: "06", title: t("Optimization", "Optimización"), desc: t("Monitor performance, refine systems, and drive continuous operational improvement.", "Monitoree el rendimiento, refine los sistemas e impulse la mejora operativa continua.") },
  ];

  return (
    <>
      {/* ── 1 · Hero ── */}
      <section className="section-light relative min-h-[72vh] sm:min-h-[80vh] md:min-h-[88vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-white" />
        <div className="container mx-auto px-4 relative z-10 py-8 sm:py-14 md:py-16">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <img src={logo} alt="Go AI Innovation" className="h-28 sm:h-40 md:h-48 w-auto mx-auto mb-5 sm:mb-7" />
            <span className="badge-tag mb-5 sm:mb-6">
              <Activity className="h-3 w-3" />
              {t("AI Implementation Strategist", "Estratega de implementación de IA")}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] mb-4 sm:mb-5 mt-3 sm:mt-4">
              {t("Reclaim Time. Transform Operations.", "Recupera tu tiempo. Transforma operaciones.")}{" "}
              <span className="text-gradient">{t("Lead the AI Era.", "Lidera la era de la IA.")}</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed">
              {t(
                "Go AI Innovation helps organizations design and implement intelligent AI systems that improve operational efficiency, reduce manual work, and drive strategic growth.",
                "Go AI Innovation ayuda a las organizaciones a diseñar e implementar sistemas inteligentes de IA que mejoran la eficiencia operativa, reducen el trabajo manual e impulsan el crecimiento estratégico."
              )}
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 justify-center max-w-2xl mx-auto">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Request AI Strategy Consultation", "Solicita una consulta estratégica de IA")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <Link to="/tools">{t("Start AI Readiness Assessment", "Inicia la evaluación de preparación para IA")}</Link>
              </Button>
            </div>
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
              <img src={consultingHero} alt={t("Executive AI strategy consulting session", "Sesión de consultoría estratégica de IA ejecutiva")} className="w-full h-full object-cover" />
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

      {/* ── 5 · Methodology ── */}
      <section className="section-light-alt section-padding">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("Implementation Approach", "Enfoque de implementación")}
            title={t("AI Implementation Methodology", "Metodología de implementación de IA")}
            description={t("A structured consulting process designed to deliver measurable results at every stage.", "Un proceso de consultoría estructurado diseñado para entregar resultados medibles en cada etapa.")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {methodology.map((m) => (
              <div key={m.title} className="dash-card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold bg-primary/8 rounded-full px-2.5 py-1">
                    {m.step}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-semibold">{m.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · CTA ── */}
      <section className="section-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aiAbstract} alt="AI systems visualization" className="w-full h-full object-cover opacity-[0.08]" />
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
                  {t("Request AI Strategy Consultation", "Solicita una consulta estratégica de IA")} <ArrowRight className="ml-2 h-4 w-4" />
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
