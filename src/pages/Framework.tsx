import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Lightbulb,
  Filter,
  Search,
  Diamond,
  Hammer,
  Clock,
  Crown,
  ArrowRight,
  Layers,
} from "lucide-react";
import SEO from "@/components/SEO";
import SchemaMarkup, { FRAMEWORK_HOWTO_SCHEMA } from "@/components/SchemaMarkup";

const Framework = () => {
  const { t } = useLanguage();

  const stages = [
    {
      icon: Lightbulb, number: "1",
      title: t("Awaken", "Despertar"),
      subtitle: t("See What's Changing", "Vea lo que está cambiando"),
      description: t("Understand what's changing in the age of AI and why it matters for your life, not just your work.", "Comprenda lo que está cambiando en la era de la IA y por qué importa para su vida, no solo para su trabajo."),
    },
    {
      icon: Filter, number: "2",
      title: t("Clarify", "Clarificar"),
      subtitle: t("Filter the Noise", "Filtre el ruido"),
      description: t("Focus on what matters most. Filter the noise and identify what actually deserves your attention using the Clarity Filter.", "Enfóquese en lo que más importa. Filtre el ruido e identifique lo que realmente merece su atención usando el Filtro de Claridad."),
    },
    {
      icon: Search, number: "3",
      title: t("Uncover", "Descubrir"),
      subtitle: t("Find the Hidden Leaks", "Encuentre las fugas ocultas"),
      description: t("Identify where your time, money, and energy are quietly leaking — often in places you've stopped noticing.", "Identifique dónde su tiempo, dinero y energía se están escapando silenciosamente — a menudo en lugares que ha dejado de notar."),
    },
    {
      icon: Diamond, number: "4",
      title: t("Choose", "Elegir"),
      subtitle: t("Pick the Right Workflow", "Elija el flujo correcto"),
      description: t("Select one high-impact workflow to improve. Not ten. One. The right one changes everything.", "Seleccione un flujo de trabajo de alto impacto para mejorar. No diez. Uno. El correcto lo cambia todo."),
    },
    {
      icon: Hammer, number: "5",
      title: t("Build", "Construir"),
      subtitle: t("Create Your First AI System", "Cree su primer sistema de IA"),
      description: t("Create your first AI-powered system using the T.I.M.E. Method™ — a simple four-step process that gets consistent results from AI without a technical background.", "Cree su primer sistema impulsado por IA usando el Método T.I.M.E.™ — un proceso simple de cuatro pasos que obtiene resultados consistentes de la IA sin formación técnica."),
    },
    {
      icon: Clock, number: "6",
      title: t("Reclaim", "Recuperar"),
      subtitle: t("Recover Your Time", "Recupere su tiempo"),
      description: t("Recover time through smarter workflows and intentional automation. Experience what margin feels like — and what it makes possible.", "Recupere tiempo a través de flujos de trabajo más inteligentes y automatización intencional. Experimente lo que se siente tener margen — y lo que hace posible."),
    },
    {
      icon: Crown, number: "7",
      title: t("Lead", "Liderar"),
      subtitle: t("Help Others Adapt", "Ayude a otros a adaptarse"),
      description: t("Help your team, your family, and your community adapt with confidence. Your breakthrough becomes someone else's beginning.", "Ayude a su equipo, su familia y su comunidad a adaptarse con confianza. Su avance se convierte en el comienzo de alguien más."),
    },
  ];

  return (
    <>
      <SEO title={"Time Reclaimed™ Framework — 7 Steps to Reclaim Your Time with AI"} description={"The Time Reclaimed™ Framework: 7 steps — Awaken, Clarify, Uncover, Choose, Build, Reclaim, Lead — powered by the T.I.M.E. Method™ for practical AI implementation."} />
      <SchemaMarkup id="framework-howto" schema={FRAMEWORK_HOWTO_SCHEMA} />
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Methodology", "Metodología")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("The Time Reclaimed™ Framework — 7 Steps to Reclaim Your Time with AI", "El marco Time Reclaimed™ — 7 pasos para recuperar tu tiempo con la IA")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("A proven seven-step system for reclaiming your time, clarity, and focus in an AI-powered world.", "Un sistema probado de siete pasos para recuperar tu tiempo, claridad y enfoque en un mundo impulsado por IA.")}
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10 !pb-8 sm:!pb-12">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t(
              "The Time Reclaimed™ Framework is more than a process — it's a proven path. Each step builds intentionally on the last, moving you from overwhelmed and reactive to focused, free, and leading at your highest level.",
              "El marco Time Reclaimed™ es más que un proceso — es un camino probado. Cada paso se construye intencionalmente sobre el anterior, llevándote de estar abrumado y reactivo a enfocado, libre y liderando a tu máximo nivel."
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
                <div key={stage.number}>
                  <div className="relative flex gap-3 sm:gap-5 md:gap-8">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                        <stage.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                    </div>
                    <div className="glass-panel p-4 sm:p-6 flex-1 hover:glow-border transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <span className="text-[10px] uppercase tracking-widest text-primary font-semibold rounded-full px-2.5 py-1" style={{ backgroundColor: 'hsl(207 90% 54% / 0.08)' }}>
                          {t("Step", "Paso")} {stage.number}
                        </span>
                        <h3 className="font-display text-base sm:text-lg font-bold">{stage.title}</h3>
                      </div>
                      <p className="text-[11px] sm:text-xs text-primary font-medium mb-2">{stage.subtitle}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                    </div>
                  </div>

                  {stage.number === "05" && (
                    <div className="md:ml-20 mt-4 sm:mt-6 rounded-xl border-l-[3px] border-primary bg-primary/5 p-5 sm:p-7">
                      <div className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-2">
                        {t("Inside Step 5", "Dentro del Paso 5")}
                      </div>
                      <h4 className="font-display text-base sm:text-lg font-bold mb-3">
                        {t("The T.I.M.E. Method™", "El Método T.I.M.E.™")}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                        {t(
                          "The T.I.M.E. Method™ lives inside Step 5 and is the implementation engine of the entire framework.",
                          "El Método T.I.M.E.™ vive dentro del Paso 5 y es el motor de implementación de todo el marco."
                        )}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm mb-4">
                        <li><span className="text-primary font-bold">T</span> — <span className="font-semibold">{t("Task", "Tarea")}:</span> <span className="text-muted-foreground">{t("What do you need AI to do?", "¿Qué necesitas que haga la IA?")}</span></li>
                        <li><span className="text-primary font-bold">I</span> — <span className="font-semibold">{t("Instructions", "Instrucciones")}:</span> <span className="text-muted-foreground">{t("Give clear, specific direction and background context.", "Da una dirección clara y específica con contexto de fondo.")}</span></li>
                        <li><span className="text-primary font-bold">M</span> — <span className="font-semibold">{t("Mode", "Modo")}:</span> <span className="text-muted-foreground">{t("Define the tone, format, or style you need.", "Define el tono, formato o estilo que necesitas.")}</span></li>
                        <li><span className="text-primary font-bold">E</span> — <span className="font-semibold">{t("Execute", "Ejecutar")}:</span> <span className="text-muted-foreground">{t("Run it, review it, refine it.", "Ejecútalo, revísalo, refínalo.")}</span></li>
                      </ul>
                      <p className="text-xs sm:text-sm text-foreground/80 italic leading-relaxed">
                        {t(
                          "Use this every time you interact with AI. If you don't, you're guessing. If you do, you're building.",
                          "Úsalo cada vez que interactúes con la IA. Si no lo haces, estás adivinando. Si lo haces, estás construyendo."
                        )}
                      </p>
                    </div>
                  )}
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
                {t("Book Strategy Call", "Agendar Llamada Estratégica")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Framework;
