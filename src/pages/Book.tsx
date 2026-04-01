import { CalendarDays, Target, Map, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const Book = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Target,
      title: t("Identify Opportunities", "Identifica oportunidades"),
      description: t("We'll analyze your current operations and pinpoint where AI can make the biggest impact.", "Analizaremos sus operaciones actuales e identificaremos dónde la IA puede generar el mayor impacto."),
    },
    {
      icon: Map,
      title: t("Build Your Roadmap", "Construye tu hoja de ruta"),
      description: t("Walk away with a clear, actionable AI implementation plan tailored to your organization.", "Llévese un plan de implementación de IA claro y accionable adaptado a su organización."),
    },
    {
      icon: CalendarDays,
      title: t("Start Implementing", "Comienza a implementar"),
      description: t("Get hands-on support as you begin deploying AI systems and automations.", "Reciba soporte práctico mientras comienza a desplegar sistemas de IA y automatizaciones."),
    },
  ];

  const includes = [
    t("One-on-one consultation with an AI strategist", "Consulta personalizada con un estratega de IA"),
    t("Assessment using the Time Reclaimed™ Framework", "Evaluación utilizando el marco Time Reclaimed™"),
    t("Identification of top AI automation opportunities", "Identificación de las principales oportunidades de automatización con IA"),
    t("Custom AI implementation roadmap", "Hoja de ruta personalizada de implementación de IA"),
    t("Time Reclaimed™ score for your organization", "Puntuación Time Reclaimed™ para su organización"),
    t("No obligation — just actionable insights", "Sin compromiso — solo información accionable"),
  ];

  return (
    <>
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Free Consultation", "Consulta gratuita")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("Book Your Free AI Strategy Session", "Agenda tu sesión estratégica de IA gratuita")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("Designed to help your organization identify automation opportunities and build a roadmap for AI implementation.", "Diseñada para ayudar a su organización a identificar oportunidades de automatización y construir una hoja de ruta para la implementación de IA.")}
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
            {steps.map((s, i) => (
              <div key={s.title} className="dash-card text-center">
                <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-semibold rounded-full px-2.5 py-1" style={{ backgroundColor: 'hsl(207 90% 54% / 0.08)' }}>
                    {t("Step", "Paso")} {i + 1}
                  </span>
                </div>
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto">
            <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
              <h3 className="font-display text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t("What's Included", "Qué incluye")}</h3>
              <ul className="space-y-3 text-left max-w-sm mx-auto mb-6 sm:mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-[12px] sm:text-[13px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Book Your Free Session Now", "Agenda tu sesión gratuita ahora")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-[10px] sm:text-[11px] text-muted-foreground mt-4 tracking-wide">
                {t("Free — no credit card required", "Gratis — no se requiere tarjeta de crédito")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
