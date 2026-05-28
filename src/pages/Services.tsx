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
      description: t("We assess your operations, identify your biggest AI opportunities, and build a strategic roadmap using the Time Reclaimed™ Framework — so you move forward with clarity, not guesswork.", "Evaluamos tus operaciones, identificamos tus mayores oportunidades de IA y construimos una hoja de ruta estratégica utilizando el marco Time Reclaimed™ — para que avances con claridad, no con conjeturas."),
    },
    {
      icon: Cog,
      title: t("Workflow Automation", "Automatización de flujos de trabajo"),
      description: t("We eliminate the repetitive work draining your team's time — from client communications and reporting to data management and follow-up — so your people can focus on what actually moves the needle.", "Eliminamos el trabajo repetitivo que drena el tiempo de tu equipo — desde comunicaciones con clientes e informes hasta gestión de datos y seguimiento — para que tu gente pueda enfocarse en lo que realmente mueve la aguja."),
    },
    {
      icon: Bot,
      title: t("AI Agent Implementation", "Implementación de agentes de IA"),
      description: t("We design and deploy custom AI agents that handle customer inquiries, lead follow-up, scheduling, and more — working autonomously so your business keeps moving even when you're not in the room.", "Diseñamos e implementamos agentes de IA personalizados que gestionan consultas de clientes, seguimiento de leads, programación y más — trabajando de forma autónoma para que tu negocio siga avanzando incluso cuando no estés en la sala."),
    },
    {
      icon: Workflow,
      title: t("Intelligent Operational Systems", "Sistemas operativos inteligentes"),
      description: t("We rebuild the workflows slowing you down — eliminating bottlenecks, reducing errors, and creating systems that scale with your organization instead of breaking under pressure.", "Reconstruimos los flujos de trabajo que te están ralentizando — eliminando cuellos de botella, reduciendo errores y creando sistemas que escalan con tu organización en lugar de romperse bajo presión."),
    },
    {
      icon: Layers,
      title: t("Organizational Efficiency Consulting", "Consultoría de eficiencia organizacional"),
      description: t("We align your people, processes, and technology around one goal — a more efficient, AI-ready organization. Less friction. More output. Built to last.", "Alineamos a tu equipo, procesos y tecnología alrededor de un solo objetivo — una organización más eficiente y preparada para la IA. Menos fricción. Más output. Construido para durar."),
    },
    {
      icon: GraduationCap,
      title: t("AI Training for Teams", "Capacitación en IA para equipos"),
      description: t("We equip your team with the skills and confidence to use AI effectively — through hands-on training that goes beyond theory and delivers real results from day one.", "Equipamos a tu equipo con las habilidades y la confianza para usar la IA de manera efectiva — a través de capacitación práctica que va más allá de la teoría y entrega resultados reales desde el primer día."),
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
            <span className="badge-tag">{t("STRATEGY & IMPLEMENTATION", "ESTRATEGIA E IMPLEMENTACIÓN")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("AI Solutions for Every Stage of Growth", "Soluciones de IA para cada etapa de crecimiento")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("From startups to corporations — we meet you where you are and build what you need. Bilingual delivery. Real implementation. Measurable results.", "Desde startups hasta corporaciones — te encontramos donde estás y construimos lo que necesitas. Entrega bilingüe. Implementación real. Resultados medibles.")}
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
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed italic">
              {t("Don't see exactly what you need? If it moves your organization forward — we can make it happen. Let's talk.", "¿No ves exactamente lo que necesitas? Si impulsa tu organización hacia adelante, nosotros podemos hacerlo realidad. Hablemos.")}
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
