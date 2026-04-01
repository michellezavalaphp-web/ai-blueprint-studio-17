import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import ToolCard from "@/components/ToolCard";
import { Gauge, Clock, ScanSearch, ArrowRight, LayoutDashboard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Tools = () => {
  const { t } = useLanguage();

  const allTools = [
    {
      icon: Gauge,
      title: "AI Readiness Assessment",
      titleDisplay: t("AI Readiness Assessment", "Evaluación de preparación para IA"),
      description: t("Answer a few questions about your organization to discover your AI Readiness Score and get tailored recommendations.", "Responda algunas preguntas sobre su organización para descubrir su puntuación de preparación para IA y recibir recomendaciones personalizadas."),
      benefit: t("Identify your biggest AI opportunities in minutes", "Identifique sus mayores oportunidades de IA en minutos"),
    },
    {
      icon: Clock,
      title: "Time Reclaimed™ Calculator",
      titleDisplay: t("Time Reclaimed™ Calculator", "Calculadora Time Reclaimed™"),
      description: t("Built on our proprietary Time Reclaimed™ Framework — input your daily tasks and see exactly how many hours per week AI could save your team.", "Basada en nuestro marco propietario Time Reclaimed™ — ingrese sus tareas diarias y vea exactamente cuántas horas por semana la IA podría ahorrarle a su equipo."),
      benefit: t("Quantify your ROI before you invest", "Cuantifique su retorno de inversión antes de invertir"),
    },
    {
      icon: ScanSearch,
      title: "AI Opportunity Finder",
      titleDisplay: t("AI Opportunity Finder", "Buscador de oportunidades de IA"),
      description: t("Scan your organization's workflows to uncover processes ripe for automation and AI enhancement.", "Analice los flujos de trabajo de su organización para descubrir procesos listos para automatización y mejora con IA."),
      benefit: t("Discover bottlenecks you didn't know existed", "Descubra cuellos de botella que no sabía que existían"),
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <LayoutDashboard className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("AI Readiness Diagnostics", "Diagnóstico de preparación para IA")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("AI Readiness Diagnostics", "Diagnóstico de preparación para IA")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("Evaluate your organization's AI readiness and uncover opportunities to prepare for successful AI implementation.", "Evalúe la preparación de su organización para la IA y descubra oportunidades para una implementación exitosa.")}
          </p>
        </div>
      </div>

      <section className="section-light section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {allTools.map((t) => (
              <ToolCard key={t.title} icon={t.icon} title={t.title} description={t.description} benefit={t.benefit} />
            ))}
          </div>
          <div className="mt-10 sm:mt-14">
            <div className="dash-card p-6 sm:p-8 text-center glow-border max-w-lg mx-auto">
              <h3 className="font-display text-base sm:text-lg font-semibold mb-2">{t("Need a Custom Solution?", "¿Necesita una solución personalizada?")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                {t("Book a strategy session and we'll build a personalized AI roadmap for your organization.", "Agenda una sesión estratégica y crearemos una hoja de ruta de IA personalizada para su organización.")}
              </p>
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Request AI Strategy Consultation", "Solicita una consulta estratégica de IA")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tools;
