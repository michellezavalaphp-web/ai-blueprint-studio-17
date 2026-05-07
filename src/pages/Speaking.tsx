import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight, Globe, Sparkles, Users, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_URL } from "@/lib/constants";
import SEO from "@/components/SEO";

const Speaking = () => {
  const { t } = useLanguage();

  const topics = [
    {
      icon: Sparkles,
      title: t("AI Strategy for Business Leaders", "Estrategia de IA para Líderes Empresariales"),
      desc: t(
        "How executives can lead AI transformation without becoming technologists.",
        "Cómo los ejecutivos pueden liderar la transformación de IA sin convertirse en tecnólogos."
      ),
    },
    {
      icon: Award,
      title: t("The Time Reclaimed™ Framework", "El Framework Time Reclaimed™"),
      desc: t(
        "A 7-stage methodology to save thousands of hours through strategic AI implementation.",
        "Una metodología de 7 etapas para ahorrar miles de horas con implementación estratégica de IA."
      ),
    },
    {
      icon: Users,
      title: t("AI for Small & Mid-Sized Businesses", "IA para Pequeñas y Medianas Empresas"),
      desc: t(
        "Practical, affordable AI adoption paths for organizations under 500 employees.",
        "Rutas prácticas y asequibles de adopción de IA para organizaciones de menos de 500 empleados."
      ),
    },
    {
      icon: Globe,
      title: t("Bilingual Digital Transformation", "Transformación Digital Bilingüe"),
      desc: t(
        "Bridging Latin and U.S. markets through bilingual AI strategy and execution.",
        "Conectando mercados latinos y estadounidenses con estrategia y ejecución de IA bilingüe."
      ),
    },
  ];

  const formats = [
    t("Keynote Presentations (30–60 min)", "Presentaciones Magistrales (30–60 min)"),
    t("Executive Workshops (half / full day)", "Talleres Ejecutivos (medio día / día completo)"),
    t("Panel Moderation & Fireside Chats", "Moderación de Paneles y Conversaciones"),
    t("Corporate Training & Team Sessions", "Capacitación Corporativa y Sesiones de Equipo"),
    t("Bilingual Engagements (English / Spanish)", "Eventos Bilingües (Inglés / Español)"),
    t("Virtual & In-Person Events", "Eventos Virtuales y Presenciales"),
  ];

  return (
    <>
      <SEO
        title={"Book Michelle Zavala — AI Keynote Speaker | Go AI Innovation"}
        description={"Book Mardel Michelle Zavala for your next event. Keynote speaker on AI strategy, Time Reclaimed™ Framework, and digital transformation. Bilingual (EN/ES). Miami, FL."}
      />

      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Mic className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Speaking", "Conferencias")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t(
              "Book Mardel Michelle Zavala — AI Keynote Speaker",
              "Contrata a Mardel Michelle Zavala — Conferencista de IA"
            )}
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            {t(
              "Bilingual keynotes and executive workshops on AI strategy, the Time Reclaimed™ Framework, and digital transformation — for conferences, corporate events, and leadership summits.",
              "Conferencias bilingües y talleres ejecutivos sobre estrategia de IA, el Framework Time Reclaimed™ y transformación digital — para congresos, eventos corporativos y cumbres de liderazgo."
            )}
          </p>
        </div>
      </div>

      {/* Topics */}
      <section className="section-light section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="badge-tag">{t("Signature Topics", "Temas Principales")}</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-3">
              {t("Talks That Drive Action", "Conferencias Que Generan Acción")}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {topics.map((topic, i) => (
              <div key={i} className="dash-card p-6 sm:p-7">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
                  <topic.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold mb-2">{topic.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-light-alt section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <span className="badge-tag">{t("Engagement Formats", "Formatos de Eventos")}</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-3">
              {t("Flexible Formats for Any Event", "Formatos Flexibles para Cualquier Evento")}
            </h2>
          </div>
          <div className="dash-card p-6 sm:p-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {formats.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/90">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-7 sm:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">
              {t("Bring Michelle to Your Stage", "Lleva a Michelle a Tu Escenario")}
            </h2>
            <p className="text-muted-foreground mb-6 text-xs sm:text-sm leading-relaxed">
              {t(
                "Share your event details and we'll respond within 1 business day to discuss availability, format, and goals.",
                "Comparte los detalles de tu evento y responderemos en 1 día hábil para discutir disponibilidad, formato y objetivos."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Book Strategy Call", "Agendar Llamada Estratégica")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <Link to="/contact">
                  {t("Contact for Speaking", "Contactar para Conferencias")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Speaking;
