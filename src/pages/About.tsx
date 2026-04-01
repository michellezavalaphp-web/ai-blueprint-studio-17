import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { ArrowRight, Lightbulb, Target, Rocket, User, ImageIcon, Gauge, BrainCircuit, ShieldCheck, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Gauge, title: t("Operational Efficiency", "Eficiencia operativa"), desc: t("Helping organizations reduce manual work and improve productivity through intelligent automation.", "Ayudamos a las organizaciones a reducir el trabajo manual y mejorar la productividad mediante automatización inteligente.") },
    { icon: BrainCircuit, title: t("Workforce Empowerment", "Empoderamiento del equipo"), desc: t("Supporting teams with AI-assisted systems that improve decision-making and operational capacity.", "Apoyamos a los equipos con sistemas asistidos por IA que mejoran la toma de decisiones y la capacidad operativa.") },
    { icon: ShieldCheck, title: t("Responsible AI Adoption", "Adopción responsable de IA"), desc: t("Guiding organizations in implementing AI systems with transparency, accountability, and sustainability.", "Guiamos a las organizaciones en la implementación de sistemas de IA con transparencia, responsabilidad y sostenibilidad.") },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t("Vision", "Visión"),
      description: t("Empowering organizations to operate more intelligently through AI systems that reclaim time and amplify human potential.", "Empoderar a las organizaciones para operar de manera más inteligente a través de sistemas de IA que recuperan tiempo y amplifican el potencial humano."),
    },
    {
      icon: Target,
      title: t("Mission", "Misión"),
      description: t("To help every organization — from small businesses to government departments — access the transformative power of AI.", "Ayudar a toda organización — desde pequeñas empresas hasta departamentos gubernamentales — a acceder al poder transformador de la IA."),
    },
    {
      icon: Rocket,
      title: t("Approach", "Enfoque"),
      description: t("The Time Reclaimed™ Framework — our proprietary methodology for assessing, planning, and deploying AI systems that deliver measurable results.", "El marco Time Reclaimed™ — nuestra metodología propietaria para evaluar, planificar e implementar sistemas de IA que entregan resultados medibles."),
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("About Us", "Sobre nosotros")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("About Go AI Innovation", "Acerca de Go AI Innovation")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
            {t("Intelligent Systems for Modern Organizations. Powered by the Time Reclaimed™ Framework.", "Sistemas inteligentes para organizaciones modernas. Impulsado por el marco Time Reclaimed™.")}
          </p>
        </div>
      </div>

      <section className="section-light section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t(
                "Go AI Innovation helps organizations reclaim time, improve operational efficiency, and responsibly implement AI systems that drive measurable results. We serve businesses, professional service firms, nonprofits, and government departments across industries.",
                "Go AI Innovation ayuda a las organizaciones a recuperar tiempo, mejorar la eficiencia operativa e implementar de manera responsable sistemas de IA que generan resultados medibles. Atendemos a empresas, firmas de servicios profesionales, organizaciones sin fines de lucro y departamentos gubernamentales en diversas industrias."
              )}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {pillars.map((p) => (
              <div key={p.title} className="dash-card text-center">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light-alt section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="text-center mb-8">
              <span className="badge-tag mb-4 sm:mb-5 inline-flex">{t("Meet the Founder", "Conoce a la fundadora")}</span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-2">Mardel Michelle Zavala</h2>
              <p className="text-sm text-muted-foreground">{t("Founder & AI Implementation Strategist", "Fundadora y estratega de implementación de IA")}</p>
            </div>
            <div className="dash-card">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-xl bg-muted/40 border border-border flex flex-col items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground/40" />
                    <ImageIcon className="h-4 w-4 text-muted-foreground/30 mt-1" />
                  </div>
                  <span className="text-[10px] text-muted-foreground/50 tracking-wide">{t("Photo Coming Soon", "Foto próximamente")}</span>
                </div>
                <div className="text-center md:text-left flex-1 space-y-3 sm:space-y-4 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  <p>
                    {t(
                      "Mardel Michelle Zavala is the visionary behind Go AI Innovation — a consulting firm dedicated to helping organizations reclaim time and operate more intelligently using AI systems and automation.",
                      "Mardel Michelle Zavala es la visionaria detrás de Go AI Innovation — una firma de consultoría dedicada a ayudar a las organizaciones a recuperar tiempo y operar de manera más inteligente utilizando sistemas de IA y automatización."
                    )}
                  </p>
                  <p>
                    {t(
                      "With deep expertise in AI strategy, business process automation, and intelligent systems, Mardel has helped hundreds of organizations across industries transform their operations. From insurance agencies and professional services firms to nonprofits and government departments, her mission is clear: make AI accessible, actionable, and impactful.",
                      "Con amplia experiencia en estrategia de IA, automatización de procesos de negocio y sistemas inteligentes, Mardel ha ayudado a cientos de organizaciones en diversas industrias a transformar sus operaciones. Desde agencias de seguros y firmas de servicios profesionales hasta organizaciones sin fines de lucro y departamentos gubernamentales, su misión es clara: hacer que la IA sea accesible, accionable e impactante."
                    )}
                  </p>
                  <p>
                    {t(
                      "Mardel believes that AI isn't about replacing people — it's about freeing them to do their most meaningful work.",
                      "Mardel cree que la IA no se trata de reemplazar personas — se trata de liberarlas para que hagan su trabajo más significativo."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="dash-card text-center">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <v.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold mb-2">{v.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container mx-auto max-w-lg">
          <div className="dash-card p-6 sm:p-8 text-center glow-border">
            <h3 className="font-display text-base sm:text-lg font-semibold mb-2">{t("Work With Us", "Trabaja con nosotros")}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">{t("Book a strategy session and discover how AI can transform your organization.", "Agenda una sesión estratégica y descubre cómo la IA puede transformar tu organización.")}</p>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {t("Request AI Strategy Consultation", "Solicita una consulta estratégica de IA")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
