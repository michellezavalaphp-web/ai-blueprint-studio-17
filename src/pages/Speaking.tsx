import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mic,
  ArrowRight,
  Award,
  BookOpen,
  Layers,
  Briefcase,
  Globe,
  HeartHandshake,
  Calendar,
  Mail,
  Download,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import SectionHeading from "@/components/SectionHeading";

const SPEAKER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mardel Michelle Zavala",
  jobTitle: "AI Keynote Speaker, Founder & CEO",
  description:
    "CPD Accredited AI Consultant, keynote speaker, and creator of the Time Reclaimed™ Framework. 20+ years in operations and business transformation. Bilingual (EN/ES).",
  url: "https://www.goaiinnovation.com/speaking",
  image: "https://www.goaiinnovation.com/assets/logo-DDEgW9NJ.png",
  worksFor: {
    "@type": "Organization",
    name: "Go AI Innovation",
    url: "https://www.goaiinnovation.com",
  },
  knowsLanguage: ["en", "es"],
  email: "speaking@goaiinnovation.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  author: {
    "@type": "Book",
    name: "Time Reclaimed™",
    author: { "@type": "Person", name: "Mardel Michelle Zavala" },
    datePublished: "2026-05",
  },
  performerIn: [
    {
      "@type": "Event",
      name: "AI Clarity Summit",
      organizer: { "@type": "Person", name: "Stephanie Swanson" },
      startDate: "2026-06-01",
      endDate: "2026-06-14",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    },
    {
      "@type": "Event",
      name: "AI Tech Boss Summit — Your Hot AI Summer",
      organizer: { "@type": "Person", name: "Jenn, AI Tech Boss" },
      startDate: "2026-05-30T13:00-04:00",
      endDate: "2026-05-30T13:20-04:00",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    },
  ],
};

const Speaking = () => {
  const { t } = useLanguage();

  const topics = [
    {
      icon: Layers,
      title: t(
        "Time Reclaimed™: The 7-Stage AI Transformation",
        "Time Reclaimed™: La Transformación de IA en 7 Etapas",
      ),
      desc: t(
        "A step-by-step walkthrough of the proprietary framework helping businesses save 10+ hours per week through strategic AI implementation. Tactical, actionable, no fluff. Based on the published book.",
        "Un recorrido paso a paso del marco propietario que ayuda a las empresas a ahorrar más de 10 horas por semana mediante la implementación estratégica de IA. Táctico, accionable, sin relleno. Basado en el libro publicado.",
      ),
      bestFor: t(
        "Corporate events, business summits, trade associations",
        "Eventos corporativos, cumbres empresariales, asociaciones comerciales",
      ),
    },
    {
      icon: HeartHandshake,
      title: t(
        "Stop the Overwhelm: How to Reclaim Your Time with AI",
        "Detén el Agobio: Cómo Recuperar Tu Tiempo con IA",
      ),
      desc: t(
        "The clarity keynote. How overwhelmed business leaders can use AI not just as a tool, but as a system — to get margin back, lead confidently, and stop drowning in busy work.",
        "La conferencia de claridad. Cómo los líderes empresariales agobiados pueden usar la IA no solo como herramienta, sino como sistema — para recuperar margen, liderar con confianza y dejar de ahogarse en trabajo improductivo.",
      ),
      bestFor: t(
        "Entrepreneur summits, women in business events, leadership retreats",
        "Cumbres de emprendedores, eventos de mujeres en los negocios, retiros de liderazgo",
      ),
    },
    {
      icon: Award,
      title: t("From Night Builder to AI CEO", "De Constructora Nocturna a CEO de IA"),
      desc: t(
        "Building a tech company as a single mom of six — working nights, fueled by faith and grit. An inspirational talk for entrepreneurs and anyone who has been told they can't.",
        "Construir una empresa de tecnología como madre soltera de seis — trabajando de noche, impulsada por la fe y la determinación. Una charla inspiradora para emprendedores y para cualquiera a quien le hayan dicho que no puede.",
      ),
      bestFor: t(
        "Women in business events, Latino business summits, university programs, faith-based organizations",
        "Eventos de mujeres en los negocios, cumbres empresariales latinas, programas universitarios, organizaciones de fe",
      ),
    },
    {
      icon: Briefcase,
      title: t(
        "AI as a Team Member: Real Workflows in Practice",
        "La IA como Miembro del Equipo: Flujos Reales en Práctica",
      ),
      desc: t(
        "Move beyond the hype. Real AI workflows, real tools, real ROI — implemented inside actual business operations. Attendees leave with workflows they can deploy immediately.",
        "Más allá del hype. Flujos de trabajo de IA reales, herramientas reales, ROI real — implementados dentro de operaciones reales. Los asistentes se llevan flujos que pueden desplegar de inmediato.",
      ),
      bestFor: t(
        "Chambers of commerce, SBA events, small business conferences, tech summits",
        "Cámaras de comercio, eventos SBA, conferencias de pequeñas empresas, cumbres tecnológicas",
      ),
    },
  ];

  const credentials = [
    t("CPD Accredited AI Consultant", "Consultora de IA Acreditada CPD"),
    t("Published Author — Time Reclaimed™ (May 2026)", "Autora Publicada — Time Reclaimed™ (Mayo 2026)"),
    t("Creator, Time Reclaimed™ Framework", "Creadora del Framework Time Reclaimed™"),
    t("20+ years operations experience", "Más de 20 años de experiencia operativa"),
    t("Bilingual: English & Spanish", "Bilingüe: Inglés y Español"),
    t(
      "Serving underserved & Latino-owned businesses",
      "Sirviendo a empresas desatendidas y de propiedad latina",
    ),
  ];

  const formats = [
    t("Keynote (30–60 minutes)", "Conferencia magistral (30–60 minutos)"),
    t("Panel Participation", "Participación en panel"),
    t("Half-Day Workshop / Masterclass", "Taller de medio día / Masterclass"),
    t("Fireside Chat / Interview", "Conversación / Entrevista"),
    t("Virtual & Hybrid Events", "Eventos virtuales e híbridos"),
  ];

  const events = [
    {
      name: "AI Clarity Summit",
      host: t("Host: Stephanie Swanson", "Anfitriona: Stephanie Swanson"),
      format: t(
        "Pre-recorded conversation — airs June 1–14, 2026",
        "Conversación pregrabada — se transmite del 1 al 14 de junio, 2026",
      ),
      topic: t(
        '"Stop the Overwhelm: How to Reclaim Your Time with AI"',
        '"Detén el Agobio: Cómo Recuperar Tu Tiempo con IA"',
      ),
    },
    {
      name: 'AI Tech Boss Summit — "Your Hot AI Summer"',
      host: t("Host: Jenn, AI Tech Boss", "Anfitriona: Jenn, AI Tech Boss"),
      format: t(
        "Live Zoom keynote · May 30, 2026 · 1:00–1:20 PM EST",
        "Conferencia magistral en vivo por Zoom · 30 de mayo, 2026 · 1:00–1:20 PM EST",
      ),
      topic: t(
        '"AI as a Team Member: Real Workflows in Practice"',
        '"La IA como Miembro del Equipo: Flujos Reales en Práctica"',
      ),
    },
  ];

  return (
    <>
      <SEO
        title={"Book Michelle Zavala — AI Keynote Speaker | Go AI Innovation"}
        description={
          "Book Mardel Michelle Zavala for your next event. Keynote speaker on AI strategy, Time Reclaimed™ Framework, and digital transformation. Bilingual (EN/ES). Miami, FL."
        }
      />
      <SchemaMarkup id="speaker" schema={SPEAKER_SCHEMA} />

      {/* Hero */}
      <section className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Mic className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Speaking", "Conferencias")}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t("Book Michelle for Your Next Event", "Reserve a Michelle para su próximo evento")}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-7">
            {t(
              "Keynote speaker on AI strategy, business transformation, and the future of work. Bilingual (EN/ES). Available for corporate events, conferences, summits, and workshops.",
              "Conferencista magistral sobre estrategia de IA, transformación empresarial y el futuro del trabajo. Bilingüe (EN/ES). Disponible para eventos corporativos, conferencias, cumbres y talleres.",
            )}
          </p>
          <Button variant="hero" size="lg" className="h-12 text-sm" asChild>
            <Link to="/contact?ref=speaking">
              {t("Request Availability", "Consultar disponibilidad")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Keynote Topics */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("Keynote Topics", "Temas de conferencias")}
            title={t("Signature Talks", "Conferencias destacadas")}
            description={t(
              "Customized for corporate, entrepreneurial, and community audiences.",
              "Personalizadas para audiencias corporativas, emprendedoras y comunitarias.",
            )}
          />
          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {topics.map((topic) => (
              <div key={topic.title} className="dash-card flex flex-col gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <topic.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {topic.desc}
                </p>
                <div className="pt-3 mt-auto border-t border-border/60">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1.5">
                    {t("Best for", "Ideal para")}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {topic.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Michelle */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            tag={t("About the Speaker", "Sobre la conferencista")}
            title={t("Mardel Michelle Zavala", "Mardel Michelle Zavala")}
          />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-center">
            {t(
              "Mardel Michelle Zavala is the founder of Go AI Innovation and creator of the Time Reclaimed™ Framework. A CPD Accredited AI Consultant with 20+ years in operations and business transformation — and published author of Time Reclaimed™ — Michelle brings raw authenticity, practical expertise, and contagious energy to every stage. She built her company at night as a single mother of six while working full-time, and she brings that same relentless, faith-driven drive to every audience she serves.",
              "Mardel Michelle Zavala es la fundadora de Go AI Innovation y creadora del Framework Time Reclaimed™. Consultora de IA acreditada CPD con más de 20 años en operaciones y transformación empresarial — y autora publicada de Time Reclaimed™ — Michelle aporta autenticidad cruda, experiencia práctica y energía contagiosa a cada escenario. Construyó su empresa por las noches como madre soltera de seis mientras trabajaba a tiempo completo, y trae esa misma determinación incansable y guiada por la fe a cada audiencia que sirve.",
            )}
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {credentials.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-snug">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Formats */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            tag={t("Formats", "Formatos")}
            title={t("Speaking Formats", "Formatos de conferencia")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((f) => (
              <div
                key={f}
                className="dash-card flex items-center gap-3 text-xs sm:text-sm"
              >
                <Mic className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming & Recent Events */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            tag={t("Events", "Eventos")}
            title={t("Upcoming & Recent Events", "Eventos próximos y recientes")}
          />
          <div className="space-y-4">
            {events.map((e) => (
              <div key={e.name} className="dash-card flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base sm:text-lg font-semibold mb-1">
                    {e.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{e.host}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">{e.format}</p>
                  <p className="text-xs sm:text-sm text-foreground/85 italic">{e.topic}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6">
            {t(
              "More events added regularly. Request availability below.",
              "Se agregan más eventos con regularidad. Consulte disponibilidad abajo.",
            )}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-panel p-7 sm:p-10 md:p-12 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              {t(
                "Ready to bring Michelle to your event?",
                "¿Listo para traer a Michelle a su evento?",
              )}
            </h2>
            <p className="text-muted-foreground mb-2 text-xs sm:text-sm leading-relaxed">
              {t(
                "For speaking inquiries, contact our team.",
                "Para consultas de conferencias, contacte a nuestro equipo.",
              )}
            </p>
            <a
              href="mailto:speaking@goaiinnovation.com"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline mb-7"
            >
              <Mail className="h-4 w-4" /> speaking@goaiinnovation.com
            </a>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <Link to="/contact?ref=speaking">
                  {t("Request Availability", "Consultar disponibilidad")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 sm:h-11 text-sm" asChild>
                <a
                  href="/speaker-one-sheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("Download Speaker One-Sheet", "Descargar ficha de conferencista")}{" "}
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Speaking;
