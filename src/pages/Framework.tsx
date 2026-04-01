import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Search,
  Stethoscope,
  Compass,
  Hammer,
  Rocket,
  TrendingUp,
  Crown,
  ArrowRight,
  Layers,
} from "lucide-react";

const Framework = () => {
  const { t } = useLanguage();

  const stages = [
    {
      icon: Search, number: "01",
      title: t("Discover", "Descubrir"),
      subtitle: t("Understand Your Current State", "Comprenda su estado actual"),
      description: t("We assess your organization's operations, workflows, and pain points to identify where time is being lost and where AI can create the most impact.", "Evaluamos las operaciones, flujos de trabajo y puntos críticos de su organización para identificar dónde se pierde tiempo y dónde la IA puede generar mayor impacto."),
    },
    {
      icon: Stethoscope, number: "02",
      title: t("Diagnose", "Diagnosticar"),
      subtitle: t("Pinpoint Inefficiencies", "Identifique ineficiencias"),
      description: t("Using data-driven analysis, we diagnose the root causes of operational bottlenecks and quantify the time and resources being wasted.", "Mediante análisis basado en datos, diagnosticamos las causas raíz de los cuellos de botella operativos y cuantificamos el tiempo y los recursos desperdiciados."),
    },
    {
      icon: Compass, number: "03",
      title: t("Design", "Diseñar"),
      subtitle: t("Architect the Solution", "Diseñe la solución"),
      description: t("We design a custom AI implementation strategy tailored to your goals, team, and industry — a blueprint for intelligent transformation.", "Diseñamos una estrategia de implementación de IA personalizada adaptada a sus objetivos, equipo e industria — un plan para la transformación inteligente."),
    },
    {
      icon: Hammer, number: "04",
      title: t("Develop", "Desarrollar"),
      subtitle: t("Build Intelligent Systems", "Construya sistemas inteligentes"),
      description: t("Our team develops and configures AI agents, automation workflows, and intelligent operational systems built for your organization.", "Nuestro equipo desarrolla y configura agentes de IA, flujos de automatización y sistemas operativos inteligentes construidos para su organización."),
    },
    {
      icon: Rocket, number: "05",
      title: t("Deploy", "Desplegar"),
      subtitle: t("Launch with Confidence", "Lance con confianza"),
      description: t("We deploy your AI systems with hands-on support, ensuring a smooth rollout with minimal disruption to your operations.", "Desplegamos sus sistemas de IA con soporte práctico, asegurando un lanzamiento fluido con mínima interrupción en sus operaciones."),
    },
    {
      icon: TrendingUp, number: "06",
      title: t("Drive", "Impulsar"),
      subtitle: t("Accelerate Results", "Acelere resultados"),
      description: t("We monitor performance, optimize systems, and drive measurable improvements in productivity, efficiency, and time savings.", "Monitoreamos el rendimiento, optimizamos los sistemas e impulsamos mejoras medibles en productividad, eficiencia y ahorro de tiempo."),
    },
    {
      icon: Crown, number: "07",
      title: t("Dominate", "Dominar"),
      subtitle: t("Lead Your Industry", "Lidere su industria"),
      description: t("With AI embedded in your operations, your organization operates at peak efficiency — positioning you as a leader in your industry.", "Con la IA integrada en sus operaciones, su organización funciona con máxima eficiencia — posicionándolo como líder en su industria."),
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Methodology", "Metodología")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("Time Reclaimed™ Framework", "Marco Time Reclaimed™")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("Our proprietary seven-stage methodology for transforming organizations from operational inefficiency to intelligent, AI-powered systems.", "Nuestra metodología propietaria de siete etapas para transformar organizaciones desde la ineficiencia operativa hacia sistemas inteligentes impulsados por IA.")}
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10 !pb-8 sm:!pb-12">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t(
              "The Time Reclaimed™ Framework is more than a consulting process — it's a transformation engine. Each stage builds on the last, moving your organization from manual, time-consuming operations to intelligent, automated systems that free your team to focus on what matters most.",
              "El marco Time Reclaimed™ es más que un proceso de consultoría — es un motor de transformación. Cada etapa se construye sobre la anterior, llevando a su organización de operaciones manuales y que consumen tiempo a sistemas inteligentes y automatizados que liberan a su equipo para enfocarse en lo más importante."
            )}
          </p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 hidden md:block" />
            <div className="space-y-4 sm:space-y-6">
              {stages.map((stage) => (
                <div key={stage.number} className="relative flex gap-3 sm:gap-5 md:gap-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                      <stage.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                  </div>
                  <div className="glass-panel p-4 sm:p-6 flex-1 hover:glow-border transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-primary font-semibold rounded-full px-2.5 py-1" style={{ backgroundColor: 'hsl(207 90% 54% / 0.08)' }}>
                        {t("Stage", "Etapa")} {stage.number}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold">{stage.title}</h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-primary font-medium mb-2">{stage.subtitle}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              {t("Start Your Transformation", "Inicia tu transformación")}
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
              {t("Begin with a free AI Strategy Session and see how the Time Reclaimed™ Framework can transform your organization.", "Comienza con una sesión estratégica de IA gratuita y descubre cómo el marco Time Reclaimed™ puede transformar tu organización.")}
            </p>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("Book Your Free AI Strategy Session", "Agenda tu sesión estratégica de IA gratuita")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Framework;
