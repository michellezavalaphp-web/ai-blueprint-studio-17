import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Cog, Bot, Workflow, GraduationCap, Layers, ArrowRight, Settings } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

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
  ];

  return (
    <>
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
              {t("Start Your AI Transformation", "Inicia tu transformación con IA")}
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
              {t("Every organization is unique. Let us build an AI strategy that fits your operations, goals, and team.", "Cada organización es única. Permítanos crear una estrategia de IA que se adapte a sus operaciones, objetivos y equipo.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Book Your Free AI Strategy Session", "Agenda tu sesión estratégica de IA gratuita")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <Link to="/tools">{t("Explore AI Tools", "Explora las herramientas de IA")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
