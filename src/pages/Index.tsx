import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import michellePortrait from "@/assets/michelle-portrait.png";
import michelleStory from "@/assets/michelle-story.jpg";
import bookCover from "@/assets/time-reclaimed-cover.jpg";

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
  Filter,
  Lightbulb,
  Diamond,
  ArrowDown,
} from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import BlogCard from "@/components/BlogCard";

import SEO from "@/components/SEO";
import SchemaMarkup, { LOCAL_BUSINESS_SCHEMA } from "@/components/SchemaMarkup";
import FAQSection from "@/components/FAQSection";

type FrameworkStage = {
  step: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
};

const FrameworkCard = ({ stage, index }: { stage: FrameworkStage; index: number }) => {
  // Gradually deepen brand color from step 1 (light) to step 7 (deepest)
  const bgOpacity = 0.06 + index * 0.06; // 0.06 -> 0.42
  const borderOpacity = 0.18 + index * 0.06;
  const Icon = stage.icon;
  return (
    <div
      className="group rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 h-full flex flex-col max-w-[210px] w-full justify-self-center"
      style={{
        backgroundColor: `hsl(var(--primary) / ${bgOpacity})`,
        borderColor: `hsl(var(--primary) / ${borderOpacity})`,
      }}
    >
      <div className="font-display text-xl md:text-2xl font-bold leading-none mb-3 tracking-tight">
        <span className="text-primary">{stage.step}</span>
        <span className="text-muted-foreground mx-1">—</span>
        <span className="text-foreground">{stage.name.toUpperCase()}</span>
      </div>
      <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center mb-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="text-xs sm:text-[13px] text-muted-foreground leading-snug">{stage.desc}</div>
    </div>
  );
};

const FrameworkCardRow = ({ stage, index, isLast }: { stage: FrameworkStage; index: number; isLast: boolean }) => (
  <>
    <FrameworkCard stage={stage} index={index} />
    {!isLast && (
      <div className="flex items-center justify-center px-1">
        <ArrowRight className="h-5 w-5 text-primary/60" />
      </div>
    )}
  </>
);

const Index = () => {
  const { t, language } = useLanguage();

  const { posts } = useBlogPosts();



  const frameworkStages = [
    { step: "1", name: t("Awaken", "Despertar"), icon: Lightbulb, desc: t("Recognize where your time is actually going", "Reconoce a dónde se va realmente tu tiempo") },
    { step: "2", name: t("Clarify", "Clarificar"), icon: Filter, desc: t("Define what matters most and why", "Define lo que más importa y por qué") },
    { step: "3", name: t("Uncover", "Descubrir"), icon: ScanSearch, desc: t("Identify the gaps, bottlenecks, and hidden drains", "Identifica las brechas, cuellos de botella y fugas ocultas") },
    { step: "4", name: t("Choose", "Elegir"), icon: Diamond, desc: t("Make intentional decisions about where AI fits", "Toma decisiones intencionales sobre dónde encaja la IA") },
    { step: "5", name: t("Build", "Construir"), icon: Cpu, desc: t("Implement the systems that work while you lead", "Implementa los sistemas que trabajan mientras lideras") },
    { step: "6", name: t("Reclaim", "Recuperar"), icon: Clock, desc: t("Take back your time, energy, and focus", "Recupera tu tiempo, energía y enfoque") },
    { step: "7", name: t("Lead", "Liderar"), icon: TrendingUp, desc: t("Operate at your highest level with confidence", "Opera a tu más alto nivel con confianza") },
  ];

  const diagnostics = [
    { icon: Gauge, title: t("AI Readiness Assessment", "Evaluación de preparación para IA"), desc: t("Not sure where to start with AI? Take this free 5-minute assessment and find out exactly where your business stands — and what to do first.", "¿No sabes por dónde empezar con la IA? Toma esta evaluación gratuita de 5 minutos y descubre exactamente dónde está tu negocio — y qué hacer primero.") },
    { icon: Clock, title: t("Time Reclaimed™ Calculator", "Calculadora Time Reclaimed™"), desc: t("Quantify how many hours per week AI could save your team.", "Cuantifique cuántas horas por semana la IA podría ahorrarle a su equipo.") },
    { icon: ScanSearch, title: t("AI Opportunity Finder", "Buscador de oportunidades de IA"), desc: t("Uncover processes ripe for automation and AI enhancement.", "Identifique procesos listos para automatización y mejora con IA.") },
  ];


  return (
    <>
      <SEO title={"Go AI Innovation — AI Consulting & Implementation | Miami"} description={"Go AI Innovation helps businesses implement AI systems that save 10+ hours per week. Led by International CPD Accredited AI Consultant Mardel Michelle Zavala. Free AI Readiness Assessment."} />
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
                  <a href="https://aireadiness-assessment.lovable.app" target="_blank" rel="noopener noreferrer">{t("Take the AI Readiness Assessment", "Evaluación de preparación para IA")}</a>
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

      {/* ── 2 · Sound Familiar? ── */}
      <section className="section-light bg-white py-10 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {t("Sound Familiar?", "¿Te suena familiar?")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-7 flex flex-col">
              <div className="h-10 w-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-4">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2.5">
                {t("Drowning in Manual Processes", "Ahogándose en procesos manuales")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {t(
                  "You're spending hours on tasks that should take minutes. We implement AI systems that automate the repetitive work so you can focus on what actually grows your business.",
                  "Pasa horas en tareas que deberían tomar minutos. Implementamos sistemas de IA que automatizan el trabajo repetitivo para que pueda enfocarse en lo que realmente hace crecer su negocio."
                )}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {t("See How →", "Ver cómo →")}
              </Link>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-7 flex flex-col">
              <div className="h-10 w-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-4">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2.5">
                {t("Losing Leads to Slow Follow-Up", "Perdiendo clientes por seguimiento lento")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {t(
                  "Every hour a lead waits, your close rate drops. We build automated workflows that respond instantly — so no opportunity slips through the cracks.",
                  "Cada hora que un cliente potencial espera, su tasa de cierre baja. Construimos flujos de trabajo automatizados que responden al instante — para que ninguna oportunidad se escape."
                )}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {t("See How →", "Ver cómo →")}
              </Link>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-7 flex flex-col">
              <div className="h-10 w-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2.5">
                {t("AI-Curious but Overwhelmed", "Curioso sobre IA pero abrumado")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {t(
                  "You know AI can help but don't know where to start. We give you a clear roadmap — strategy first, tools second — so you move forward with confidence, not confusion.",
                  "Sabe que la IA puede ayudar pero no sabe por dónde empezar. Le damos una hoja de ruta clara — estrategia primero, herramientas después — para que avance con confianza, no confusión."
                )}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {t("See How →", "Ver cómo →")}
              </Link>
            </div>
          </div>

          {/* Quote Divider */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center text-center max-w-xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary/25" />
              <Diamond className="h-3 w-3 text-primary/40" />
              <div className="w-8 h-px bg-primary/25" />
            </div>
            <p className="text-sm sm:text-base italic text-muted-foreground leading-relaxed">
              {t(
                "Real AI transformation starts with understanding your operations — not buying software.",
                "La transformación real con IA comienza con entender sus operaciones — no comprando software."
              )}
            </p>
          </div>
        </div>
    </section>

    {/* ── 2b · Services ── */}
    <section className="bg-muted py-10 sm:py-12 md:py-16 px-4">
      <div className="container mx-auto">
        {/* Badge */}
        <span className="block text-center text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-primary mb-4 sm:mb-5 uppercase">
          {t("WHAT WE DO", "QUÉ HACEMOS")}
        </span>
        {/* Heading */}
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-4 sm:mb-5 max-w-3xl mx-auto">
          {t("Practical AI Support for Real Organizations", "Apoyo práctico de IA para organizaciones reales")}
        </h2>
        {/* Subheading */}
        <p className="text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed">
          {t(
            "Whether you need a clear strategy or full implementation, we meet you where you are — with structure, clarity, and zero hype.",
            "Ya sea que necesite una estrategia clara o implementación completa, lo acompañamos donde esté — con estructura, claridad y cero hype."
          )}
        </p>
        {/* Italic gold text */}
        <p className="text-center text-xs sm:text-sm italic text-primary/90 max-w-xl mx-auto mb-10 sm:mb-14">
          {t(
            "We work best with people who want to get this right, not just get it done.",
            "Trabajamos mejor con personas que quieren hacer esto bien, no solo terminarlo."
          )}
        </p>

        {/* 3 service cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <Link to="/services" className="relative bg-white rounded-xl border border-border/60 p-6 sm:p-8 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer hover:border-primary/40 block">
            <span className="absolute top-1 right-2 font-display text-[6rem] sm:text-[7rem] font-bold text-primary/[0.06] leading-none select-none">01</span>
            <div className="relative z-10 border-l-[3px] border-primary/20 pl-5 sm:pl-6">
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2.5">
                {t("AI Strategy & Roadmaps", "Estrategia de IA y hojas de ruta")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                {t(
                  "We assess where you are, identify your highest-impact opportunities, and build a custom AI roadmap that fits your budget, team, and goals.",
                  "Evaluamos dónde se encuentra, identificamos sus oportunidades de mayor impacto y construimos una hoja de ruta de IA personalizada que se ajusta a su presupuesto, equipo y objetivos."
                )}
              </p>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-primary uppercase mb-2.5">
                {t("WHAT'S INCLUDED", "QUÉ INCLUYE")}
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground mb-5">
                <li>{t("Current-state assessment", "Evaluación del estado actual")}</li>
                <li>{t("Risk analysis", "Análisis de riesgos")}</li>
                <li>{t("Custom integration roadmap", "Hoja de ruta de integración personalizada")}</li>
                <li>{t("Tool evaluation & vendor guidance", "Evaluación de herramientas y guía de proveedores")}</li>
              </ul>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-primary uppercase mb-1.5">
                {t("OUTCOME", "RESULTADO")}
              </p>
              <p className="text-xs sm:text-sm italic text-muted-foreground">
                {t(
                  "You get a clear, actionable strategy — no guessing, no wasted tools.",
                  "Obtiene una estrategia clara y accionable — sin adivinanzas, sin herramientas desperdiciadas."
                )}
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/services" className="relative bg-white rounded-xl border border-border/60 p-6 sm:p-8 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer hover:border-primary/40 block">
            <span className="absolute top-1 right-2 font-display text-[6rem] sm:text-[7rem] font-bold text-primary/[0.06] leading-none select-none">02</span>
            <div className="relative z-10 border-l-[3px] border-primary/20 pl-5 sm:pl-6">
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2.5">
                {t("Workflow Automation Systems", "Sistemas de automatización de flujos de trabajo")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                {t(
                  "We design and implement the automated systems that eliminate bottlenecks — from lead capture to client onboarding to internal operations.",
                  "Diseñamos e implementamos los sistemas automatizados que eliminan cuellos de botella — desde la captura de leads hasta la incorporación de clientes y las operaciones internas."
                )}
              </p>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-primary uppercase mb-2.5">
                {t("WHAT'S INCLUDED", "QUÉ INCLUYE")}
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground mb-5">
                <li>{t("Process mapping", "Mapeo de procesos")}</li>
                <li>{t("Automation design & build", "Diseño y construcción de automatización")}</li>
                <li>{t("CRM integration", "Integración de CRM")}</li>
                <li>{t("Testing & optimization", "Pruebas y optimización")}</li>
              </ul>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-primary uppercase mb-1.5">
                {t("OUTCOME", "RESULTADO")}
              </p>
              <p className="text-xs sm:text-sm italic text-muted-foreground">
                {t(
                  "Your business runs tighter, faster, and without you being the bottleneck.",
                  "Su negocio funciona de manera más eficiente, rápida y sin que usted sea el cuello de botella."
                )}
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/services" className="relative bg-white rounded-xl border border-border/60 p-6 sm:p-8 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer hover:border-primary/40 block">
            <span className="absolute top-1 right-2 font-display text-[6rem] sm:text-[7rem] font-bold text-primary/[0.06] leading-none select-none">03</span>
            <div className="relative z-10 border-l-[3px] border-primary/20 pl-5 sm:pl-6">
              <h3 className="font-display text-sm sm:text-base font-semibold mb-2.5">
                {t("AI Training & Implementation", "Capacitación e implementación de IA")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                {t(
                  "We train your team to actually use the tools — confidently and correctly. Not just a demo, but real adoption that sticks.",
                  "Capacitamos a su equipo para usar las herramientas con confianza y correctamente. No solo una demo, sino una adopción real que perdura."
                )}
              </p>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-primary uppercase mb-2.5">
                {t("WHAT'S INCLUDED", "QUÉ INCLUYE")}
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground mb-5">
                <li>{t("Team training sessions", "Sesiones de capacitación para el equipo")}</li>
                <li>{t("AI literacy workshops", "Talleres de alfabetización en IA")}</li>
                <li>{t("Implementation support", "Soporte de implementación")}</li>
                <li>{t("Ongoing advisory", "Asesoría continua")}</li>
              </ul>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-primary uppercase mb-1.5">
                {t("OUTCOME", "RESULTADO")}
              </p>
              <p className="text-xs sm:text-sm italic text-muted-foreground">
                {t(
                  "Your team operates with confidence, not confusion — and adoption actually sticks.",
                  "Su equipo opera con confianza, no confusión — y la adopción realmente perdura."
                )}
              </p>
            </div>
          </Link>
        </div>

        {/* Quote Divider */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center text-center max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary/25" />
            <Diamond className="h-3 w-3 text-primary/40" />
            <div className="w-8 h-px bg-primary/25" />
          </div>
          <p className="text-sm sm:text-base italic text-muted-foreground leading-relaxed">
            {t(
              "Freedom isn't a reward for working harder. It's what happens when you work smarter.",
              "La libertad no es una recompensa por trabajar más duro. Es lo que ocurre cuando trabajas con más inteligencia."
            )}
          </p>
        </div>
      </div>
    </section>

      {/* ── Personal Story ── */}
      <section className="section-light bg-white py-10 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left: Photo */}
            <div className="order-1">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <img
                  src={michelleStory}
                  alt={t("Mardel Michelle Zavala at her AI strategy workspace", "Mardel Michelle Zavala en su espacio de trabajo de estrategia de IA")}
                  className="w-full aspect-[4/5] object-cover rounded-2xl shadow-elegant"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Right: Text */}
            <div className="order-2">
              <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-primary mb-4 uppercase">
                {t("My Story", "Mi Historia")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.12] mb-6 tracking-tight">
                {t("The Moment I Realized Harder Wasn't the Answer", "El momento en que entendí que trabajar más no era la solución")}
              </h2>
              <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>{t(
                  "I was a business leader, consultant, and mother of six — and I was drowning.",
                  "Era líder de negocios, consultora y madre de seis hijos — y me estaba ahogando."
                )}</p>
                <p>{t(
                  "Not because I wasn't working hard enough.",
                  "No porque no estuviera trabajando lo suficiente."
                )}</p>
                <p>{t(
                  "Because no amount of hard work was creating more hours in the day.",
                  "Porque ninguna cantidad de trabajo duro estaba creando más horas en el día."
                )}</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug py-2">
                  {t(
                    "The problem wasn't effort. The problem was capacity.",
                    "El problema no era el esfuerzo. El problema era la capacidad."
                  )}
                </p>
                <p>{t(
                  "That's when everything changed.",
                  "Fue entonces cuando todo cambió."
                )}</p>
                <p>{t(
                  "AI gave me back my time. My clarity. My ability to lead without burning out.",
                  "La IA me devolvió mi tiempo. Mi claridad. Mi capacidad de liderar sin agotarme."
                )}</p>
                <p>{t(
                  "Now I help leaders and organizations do the same.",
                  "Ahora ayudo a líderes y organizaciones a hacer lo mismo."
                )}</p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug py-2">
                  {t(
                    "AI isn't your replacement. It's your relief.",
                    "La IA no es tu reemplazo. Es tu alivio."
                  )}
                </p>
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" className="h-12 text-sm" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t("Book a Strategy Call", "Agendar Llamada Estratégica")} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Quote Divider */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-primary/25" />
              <Diamond className="h-3 w-3 text-primary/40" />
              <div className="w-8 h-px bg-primary/25" />
            </div>
            <p className="text-sm sm:text-base italic text-muted-foreground leading-relaxed">
              {t(
                "I didn't start this company because AI was trending. I started it because I was tired of watching capable people run out of time.",
                "No comencé esta empresa porque la IA estuviera de moda. La comencé porque estaba cansada de ver a personas capaces quedarse sin tiempo."
              )}
            </p>
          </div>
        </div>
      </section>



      {/* ── 3 · Framework ── */}
      <section className="section-dark py-10 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="badge-tag mb-4 inline-flex">
              {t("The Time Reclaimed™ Framework", "El marco Time Reclaimed™")}
            </span>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-bold mb-4 leading-[1.15]">
              {t("7 Steps to Reclaim Your Time with AI", "7 pasos para recuperar tu tiempo con IA")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
              {t(
                "A proven system for leaders and organizations ready to move from overwhelm to operational clarity — and from busyness to real impact.",
                "Un sistema probado para líderes y organizaciones listas para pasar del agobio a la claridad operativa — y del ajetreo al impacto real."
              )}
            </p>
            <p className="text-muted-foreground/80 text-xs sm:text-sm leading-relaxed italic">
              {t(
                "Every step is intentional. Every stage builds on the last. This is not a productivity hack. This is a transformation system.",
                "Cada paso es intencional. Cada etapa se construye sobre la anterior. Esto no es un truco de productividad. Es un sistema de transformación."
              )}
            </p>
          </div>

          {/* Desktop / Tablet roadmap */}
          <div className="hidden md:block max-w-6xl mx-auto">
            {/* Row 1: steps 1-4 */}
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-y-6 justify-items-center">
              {frameworkStages.slice(0, 4).map((stage, i) => (
                <FrameworkCardRow key={stage.step} stage={stage} index={i} isLast={i === 3} />
              ))}
            </div>
            {/* Connector down arrow */}
            <div className="flex justify-center my-4">
              <ArrowDown className="h-5 w-5 text-primary/60" />
            </div>
            {/* Row 2: steps 5-7 centered */}
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch max-w-4xl mx-auto justify-items-center">
              {frameworkStages.slice(4).map((stage, i) => (
                <FrameworkCardRow key={stage.step} stage={stage} index={i + 4} isLast={i === 2} />
              ))}
            </div>
          </div>

          {/* Mobile stack */}
          <div className="md:hidden flex flex-col items-stretch max-w-sm mx-auto">
            {frameworkStages.map((stage, i) => (
              <div key={stage.step} className="flex flex-col items-stretch">
                <FrameworkCard stage={stage} index={i} />
                {i < frameworkStages.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-5 w-5 text-primary/60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/framework">
                {t("Explore the Full Framework", "Explora la metodología completa")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Divider */}
      <section className="bg-white py-8 sm:py-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-primary/25" />
            <Diamond className="h-3 w-3 text-primary/40" />
            <div className="w-8 h-px bg-primary/25" />
          </div>
          <p className="text-sm sm:text-base italic text-muted-foreground leading-relaxed">
            {t(
              "Strategy without execution is a daydream. Execution without strategy is a nightmare.",
              "La estrategia sin ejecución es una fantasía. La ejecución sin estrategia es una pesadilla."
            )}
          </p>
        </div>
      </section>

      {/* Speaking & Book Section */}
      <section className="bg-white py-10 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">
            {t("SPEAKING & EVENTS", "CONFERENCIAS Y EVENTOS")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            {t("Book Michelle for Your Next Event", "Reserva a Michelle para tu próximo evento")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            {t(
              "Bringing the message of AI implementation, time reclaimed, and operational freedom to stages across the country. Available for keynotes, panels, workshops, and summits.",
              "Llevando el mensaje de implementación de IA, recuperación del tiempo y libertad operativa a escenarios de todo el país. Disponible para conferencias magistrales, paneles, talleres y cumbres."
            )}
          </p>
          <p className="text-sm text-muted-foreground/80 mb-10">
            {t("Upcoming:", "Próximos eventos:")} <a href="https://yourhotaisummer.com/?am_id=mardelmichelle1207" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground/70 hover:text-primary transition-colors underline underline-offset-2">{t("Hot AI Summit — May 30 speaking at 1pm", "Hot AI Summit — 30 de mayo, presentación a la 1pm")}</a> <span className="text-primary/50 mx-2">•</span> <a href="https://go.aiclaritysummit.com/summit-registration?ref=michelle" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground/70 hover:text-primary transition-colors underline underline-offset-2">{t("AI Clarity Summit — June 1-14, speaking Day 13", "AI Clarity Summit — 1-14 de junio, presentación Día 13")}</a>
          </p>

          <Link to="/time-reclaimed" className="block">
            <div className="bg-primary/5 border-l-[3px] border-primary rounded-r-lg p-6 sm:p-8 text-left max-w-3xl mx-auto mb-10 shadow-sm hover:bg-primary/[0.08] transition-colors duration-300 cursor-pointer">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <img
                  src={bookCover}
                  alt="Time Reclaimed™ book cover"
                  className="w-20 sm:w-24 rounded-md shadow-md border border-primary/20 shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-3">
                    {t("📖 Coming June 2026", "📖 Próximamente Junio 2026")}
                  </p>
                  <p className="font-display text-lg sm:text-xl font-semibold leading-snug">
                    Time Reclaimed™: {t(
                      "7 Practical Steps to Create Margin, Lead with Confidence, and Thrive in an AI-Powered World",
                      "7 Pasos Prácticos para Crear Margen, Liderar con Confianza y Prosperar en un Mundo Impulsado por IA"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Button variant="hero" size="lg" className="h-12 text-sm" asChild>
            <Link to="/speaking">
              {t("Request Speaking Info", "Solicitar información de conferencias")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

      </section>


      {/* ── 4 · AI Readiness Diagnostics ── */}
      <section className="section-light py-10 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("AI Readiness Diagnostics", "Diagnóstico de preparación para IA")}
            title={t("Assess Your AI Readiness", "Evalúa tu preparación para la IA")}
            description={t("Evaluate your organization's AI readiness and uncover high-impact opportunities before implementation.", "Evalúe la preparación de su organización para la IA y descubra oportunidades de alto impacto antes de la implementación.")}
          />
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <Link to="/tools">
                {t("Start Your Assessment", "Inicia tu evaluación")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* ── 5 · Latest AI Blog ── */}
      <section className="section-light py-10 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left column: intro */}
            <div>
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-primary mb-4">
                {t("From the Blog", "Desde el Blog")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
                {t(
                  "Practical AI Insights for Leaders and Organizations.",
                  "Perspectivas prácticas de IA para líderes y organizaciones."
                )}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                {t(
                  "Real strategies, honest insights, and actionable guidance on AI implementation, time reclamation, and building systems that work.",
                  "Estrategias reales, perspectivas honestas y orientación práctica sobre la implementación de IA, la recuperación de tiempo y la creación de sistemas que funcionan."
                )}
              </p>
              <Button variant="hero-outline" size="lg" className="h-12 text-sm" asChild>
                <Link to={t("/blog", "/es/blog")}>
                  {t("View All Blog Posts", "Ver todas las entradas del blog")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right column: featured post */}
            {posts.slice(0, 1).map((post) => {
              const basePath = language === "es" ? "/es/blog" : "/blog";
              const title = language === "es" ? post.title.es : post.title.en;
              const dateStr = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "";
              return (
                <Link
                  key={post.slug}
                  to={`${basePath}/${post.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[hsl(222,30%,12%)] to-[hsl(222,30%,5%)]">
                    {post.coverImageUrl && (
                      <img
                        src={post.coverImageUrl}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-6 sm:p-7">
                    {dateStr && (
                      <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                        {dateStr}
                      </p>
                    )}
                    <h3 className="font-display text-xl sm:text-2xl font-semibold leading-snug mb-4 group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      {t("Read More", "Leer más")} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6 · FAQ ── */}
      <FAQSection
        className="py-10 sm:py-12 md:py-16 px-4"
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
      <section className="section-dark py-10 sm:py-12 md:py-16 px-4 relative overflow-hidden">
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
                <a href="https://aireadiness-assessment.lovable.app" target="_blank" rel="noopener noreferrer">{t("Start AI Readiness Assessment", "Inicia la evaluación de preparación para IA")}</a>
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
