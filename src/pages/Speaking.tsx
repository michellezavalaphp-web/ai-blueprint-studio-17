import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Mic,
  ArrowRight,
  Award,
  Layers,
  Briefcase,
  HeartHandshake,
  Calendar as CalendarIcon,
  Mail,
  Download,
  CheckCircle2,
  Users,
  MessageCircle,
  Presentation,
  Video,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import SectionHeading from "@/components/SectionHeading";
import eventHotAiSummer from "@/assets/event-hot-ai-summer.png";
import eventAiClaritySummit from "@/assets/event-ai-clarity-summit.jpeg";

const SPEAKER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mardel Michelle Zavala",
  jobTitle: "AI Keynote Speaker, Founder & CEO",
  description:
    "International CPD Accredited AI Consultant, keynote speaker, and creator of the Time Reclaimed™ Framework. 20+ years in operations and business transformation. Bilingual (EN/ES).",
  url: "https://www.goaiinnovation.com/speaking",
  image: "https://www.goaiinnovation.com/assets/logo-DDEgW9NJ.png",
  worksFor: {
    "@type": "Organization",
    name: "Go AI Innovation",
    url: "https://www.goaiinnovation.com",
  },
  knowsLanguage: ["en", "es"],
  email: "speaking@goaiinnovation.com",
};

const InquiryIframe = () => (
  <iframe
    src="https://api.growthhub365.com/widget/form/IEBuZdlc7FC3mOwC4tmI"
    style={{ width: "100%", border: "none", minHeight: "600px" }}
    scrolling="no"
    id="speaking-inquiry-form"
    title="Speaking Inquiry Form"
  />
);

const Speaking = () => {
  const { t } = useLanguage();
  const [inquiryOpen, setInquiryOpen] = useState(false);

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
    t("International CPD Accredited AI Consultant", "Consultora de IA Acreditada Internacional CPD"),
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
    { icon: Mic, label: t("Keynote", "Conferencia magistral") },
    { icon: Users, label: t("Panel", "Panel") },
    { icon: Presentation, label: t("Half-Day Workshop", "Taller de medio día") },
    { icon: MessageCircle, label: t("Fireside Chat", "Conversación") },
    { icon: Video, label: t("Virtual", "Virtual") },
  ];

  const events = [
    {
      name: "Hot AI Summit with AI Tech Boss Jenn",
      date: t("May 30 — Speaking at 1:00 PM", "30 de mayo — Conferencia a la 1:00 PM"),
      image: eventHotAiSummer,
      link: "https://yourhotaisummer.com/?am_id=mardelmichelle1207",
    },
    {
      name: "AI Clarity Summit with Stephanie",
      date: t("June 1–14 — Speaking June 13", "1–14 de junio — Conferencia el 13 de junio"),
      image: eventAiClaritySummit,
      link: "https://go.aiclaritysummit.com/summit-registration?ref=michelle",
    },
  ];

  return (
    <>
      <SEO
        title={"AI Keynote Speaker — Michelle Zavala | Go AI Innovation"}
        description={
          "Book Mardel Michelle Zavala for your next event. Keynote speaker on AI strategy, Time Reclaimed™ Framework, and digital transformation. Bilingual (EN/ES). Miami, FL."
        }
      />
      <SchemaMarkup id="speaker" schema={SPEAKER_SCHEMA} />

      {/* Hero */}
      <section className="page-header pb-10 sm:pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Mic className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Booking & Speaking", "Reservas y conferencias")}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t(
              "Bring Michelle Zavala to Your Next Event",
              "Lleve a Michelle Zavala a su próximo evento",
            )}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-7">
            {t(
              "International CPD Accredited AI Consultant, Author & Keynote Speaker delivering practical, powerful messages on AI implementation, time reclamation, and business transformation.",
              "Consultora de IA Acreditada Internacional CPD, autora y conferencista magistral que entrega mensajes prácticos y poderosos sobre implementación de IA, recuperación del tiempo y transformación empresarial.",
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="h-12 w-full sm:w-auto text-sm"
              onClick={() => setInquiryOpen(true)}
            >
              {t("Request Availability", "Solicitar disponibilidad")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="hero-outline" size="lg" className="h-12 w-full sm:w-auto text-sm" asChild>
              <a href="/speaker-one-sheet.pdf" target="_blank" rel="noopener noreferrer">
                {t("Download Speaker One Sheet", "Descargar ficha de conferencista")}
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Michelle */}
      <section className="py-10 sm:py-12 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            tag={t("About the Speaker", "Sobre la conferencista")}
            title={t("Mardel Michelle Zavala", "Mardel Michelle Zavala")}
          />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto text-center">
            {t(
              "Mardel Michelle Zavala is the founder of Go AI Innovation and creator of the Time Reclaimed™ Framework. An International CPD Accredited AI Consultant with 20+ years in operations and business transformation — and published author of Time Reclaimed™ — Michelle brings raw authenticity, practical expertise, and contagious energy to every stage. She built her company at night as a single mother of six while working full-time, and she brings that same relentless, faith-driven drive to every audience she serves.",
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

      {/* Signature Talks */}
      <section className="py-10 sm:py-12 section-dark">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("Keynote Topics", "Temas de conferencias")}
            title={t("Signature Talks", "Conferencias destacadas")}
            description={t(
              "Customized for corporate, entrepreneurial, and community audiences.",
              "Personalizadas para audiencias corporativas, emprendedoras y comunitarias.",
            )}
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-7 sm:p-8 flex flex-col gap-5 transition-all hover:border-primary/40 hover:bg-card/60"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <topic.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  {topic.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {topic.desc}
                </p>
                <div className="pt-4 mt-auto border-t border-border/40">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1.5">
                    {t("Best for", "Ideal para")}
                  </p>
                  <p className="text-sm text-foreground/85 leading-relaxed">{topic.bestFor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Speaking Formats — merged directly below */}
          <div className="mt-10 sm:mt-12 max-w-5xl mx-auto">
            <p className="text-center text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-5">
              {t("Speaking Formats", "Formatos de conferencia")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {formats.map((f) => (
                <div
                  key={f.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/40 backdrop-blur-sm px-4 py-2.5 text-xs sm:text-sm"
                >
                  <f.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-10 sm:py-12 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            tag={t("Events", "Eventos")}
            title={t("Upcoming Events", "Próximos eventos")}
          />
          <div className="grid sm:grid-cols-2 gap-5">
            {events.map((e) => (
              <a
                key={e.name}
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group dash-card flex flex-col p-0 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-display text-base sm:text-lg font-semibold leading-snug">
                    {e.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-primary flex-shrink-0" />
                    {e.date}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      {t("Register Now", "Regístrate ahora")}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark py-10 sm:py-14">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
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
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline mb-6"
            >
              <Mail className="h-4 w-4" /> speaking@goaiinnovation.com
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="h-12 w-full sm:w-auto text-sm"
                onClick={() => setInquiryOpen(true)}
              >
                {t("Request Availability", "Solicitar disponibilidad")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="hero-outline" size="lg" className="h-12 w-full sm:w-auto text-sm" asChild>
                <a href="/speaker-one-sheet.pdf" target="_blank" rel="noopener noreferrer">
                  {t("Download Speaker One Sheet", "Descargar ficha de conferencista")}
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <Dialog open={inquiryOpen} onOpenChange={setInquiryOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="font-display text-xl sm:text-2xl font-bold">
            {t("Request Availability", "Solicitar disponibilidad")}
          </DialogTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t(
              "Tell us about your event and we'll be in touch within 24 hours.",
              "Cuéntenos sobre su evento y nos pondremos en contacto dentro de 24 horas.",
            )}
          </p>
          <div className="mt-2">
            <InquiryIframe />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Speaking;
