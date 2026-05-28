import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cog, Bot, Workflow, GraduationCap, Layers, Globe, PenLine, ArrowRight, Settings } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import SchemaMarkup, { SERVICES_SCHEMA } from "@/components/SchemaMarkup";
import FAQSection from "@/components/FAQSection";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Brain,
      title: t("AI Transformation Strategy", "Estrategia de transformación con IA"),
      description: t("Using our Time Reclaimed™ Framework, we assess your operations, identify AI opportunities, and create a strategic roadmap tailored to your organization's goals.", "Utilizando nuestro marco Time Reclaimed™, evaluamos sus operaciones, identificamos oportunidades de IA y creamos una hoja de ruta estratégica adaptada a los objetivos de su organización."),
    },
    {
      icon: Cog,
      title: t("Workflow Automation", "Automatización de flujos de trabajo"),
      description: t("Streamline repetitive tasks with intelligent automation — from data entry and reporting to client communications.", "Optimice tareas repetitivas con automatización inteligente — desde ingreso de datos e informes hasta comunicaciones con clientes."),
    },
    {
      icon: Bot,
      title: t("AI Agent Implementation", "Implementación de agentes de IA"),
      description: t("Deploy custom AI agents that handle customer inquiries, lead follow-up, scheduling, and more — autonomously.", "Implemente agentes de IA personalizados que gestionan consultas de clientes, seguimiento de leads, programación y más — de forma autónoma."),
    },
    {
      icon: Workflow,
      title: t("Intelligent Operational Systems", "Sistemas operativos inteligentes"),
      description: t("Re-engineer your workflows to eliminate bottlenecks, reduce errors, and accelerate throughput across your organization.", "Rediseñe sus flujos de trabajo para eliminar cuellos de botella, reducir errores y acelerar la productividad en toda su organización."),
    },
    {
      icon: Layers,
      title: t("Organizational Efficiency Consulting", "Consultoría de eficiencia organizacional"),
      description: t("Holistic consulting to align your people, processes, and technology around AI-driven efficiency gains.", "Consultoría integral para alinear a su equipo, procesos y tecnología en torno a mejoras de eficiencia impulsadas por IA."),
    },
    {
      icon: GraduationCap,
      title: t("AI Training for Teams", "Capacitación en IA para equipos"),
      description: t("Empower your team with hands-on AI training so they can leverage new tools and stay ahead of the curve.", "Capacite a su equipo con entrenamiento práctico en IA para que puedan aprovechar las nuevas herramientas y mantenerse a la vanguardia."),
    },
    {
      icon: Globe,
      title: t("Website Development & Optimization", "Desarrollo y optimización de sitios web"),
      description: t("We help organizations build and optimize websites that get found — across search engines, AI tools, and voice search. From structure and design to SEO, AEO, and GEO, we make sure your digital presence works as hard as you do.", "Ayudamos a las organizaciones a construir y optimizar sitios web que sean encontrados — en motores de búsqueda, herramientas de IA y búsqueda por voz. Desde la estructura y el diseño hasta SEO, AEO y GEO, nos aseguramos de que su presencia digital trabaje tan duro como usted."),
    },
    {
      icon: PenLine,
      title: t("Content Strategy", "Estrategia de contenido"),
      description: t("We help organizations create content with purpose. From social media and email newsletters to blogs and beyond — we build AI-powered content strategies that are consistent, intentional, and aligned with real business goals.", "Ayudamos a las organizaciones a crear contenido con propósito. Desde redes sociales y boletines por correo hasta blogs y más allá — construimos estrategias de contenido impulsadas por IA que son consistentes, intencionales y alineadas con objetivos de negocio reales."),
    },
  ];

  return (
    <>
      <SEO title={"AI Strategy & Implementation Services | Go AI Innovation"} description={"From AI readiness assessment to full implementation — our Time Reclaimed™ Framework helps businesses automate operations, reduce costs, and scale with AI. Miami-based, serving nationwide."} />
      <SchemaMarkup id="services" schema={SERVICES_SCHEMA} />
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Settings className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Strategy & Implementation", "Estrategia e implementación")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("AI Strategy & Implementation", "Estrategia e implementación de IA")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("End-to-end AI solutions — from strategy to execution — so you can focus on what matters most: transforming your organization.", "Soluciones de IA de principio a fin — desde la estrategia hasta la ejecución — para que pueda enfocarse en lo más importante: transformar su organización.")}
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <div key={s.title} className="dash-card flex flex-col gap-3 sm:gap-4">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                    <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium bg-muted/60 rounded-full px-2.5 py-1">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground flex-1 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              {t("Ready to Stop Guessing and Start Implementing?", "¿Listo para dejar de adivinar y empezar a implementar?")}
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
              {t("Book a free strategy call and let's map out exactly where AI can give you back time, money, and margin.", "Agenda una llamada estratégica gratuita y descubramos exactamente dónde la IA puede devolverte tiempo, dinero y margen.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Book Strategy Call", "Agendar Llamada Estratégica")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <Link to="/tools">{t("Explore AI Tools", "Explora las herramientas de IA")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        id="services"
        tag={t("FAQ", "Preguntas frecuentes")}
        title={t("Common Questions About Our Services", "Preguntas Comunes Sobre Nuestros Servicios")}
        items={[
          {
            question: t("What's included in the free AI Readiness Assessment?", "¿Qué incluye la Evaluación de Preparación para IA gratuita?"),
            answer: t(
              "Not sure where to start with AI? Take this free 5-minute assessment and find out exactly where your business stands — and what to do first.",
              "¿No sabes por dónde empezar con la IA? Toma esta evaluación gratuita de 5 minutos y descubre exactamente dónde está tu negocio — y qué hacer primero.",
            ),
          },
          {
            question: t("Can you work with our existing software and tools?", "¿Pueden trabajar con nuestro software y herramientas existentes?"),
            answer: t(
              "Yes. We specialize in integrating AI capabilities with your existing tech stack — whether you use Salesforce, HubSpot, QuickBooks, Microsoft 365, or industry-specific software. We find AI solutions that enhance what you already have rather than forcing you to start over.",
              "Sí. Nos especializamos en integrar capacidades de IA con su stack tecnológico existente — ya sea que use Salesforce, HubSpot, QuickBooks, Microsoft 365 o software específico de su industria. Encontramos soluciones de IA que mejoran lo que ya tiene en lugar de forzarlo a empezar de cero.",
            ),
          },
          {
            question: t("What makes the Time Reclaimed™ Framework different from other AI consulting approaches?", "¿Qué hace diferente al marco Time Reclaimed™ de otros enfoques de consultoría de IA?"),
            answer: t(
              "The Time Reclaimed™ Framework is a proprietary 7-stage methodology designed specifically for businesses that want practical results, not theoretical reports. Each stage builds on the last — from assessment through full optimization — ensuring measurable time savings at every step. It's refined through 20+ years of operations experience and documented in the published book Time Reclaimed™ (May 2026) by Mardel Michelle Zavala.",
              "El marco Time Reclaimed™ es una metodología propietaria de 7 etapas diseñada específicamente para empresas que quieren resultados prácticos, no informes teóricos. Cada etapa se construye sobre la anterior — desde la evaluación hasta la optimización completa — asegurando ahorros de tiempo medibles en cada paso. Está refinado por más de 20 años de experiencia operativa y documentado en el libro publicado Time Reclaimed™ (mayo 2026) por Mardel Michelle Zavala.",
            ),
          },
        ]}
      />
    </>
  );
};

export default Services;
