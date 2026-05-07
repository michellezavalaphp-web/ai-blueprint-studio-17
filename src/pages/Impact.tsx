import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  Award,
  CheckCircle2,
  Target,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";

const Impact = () => {
  const { t } = useLanguage();

  const focusAreas = [
    {
      icon: GraduationCap,
      title: t("Workforce Development", "Desarrollo de la fuerza laboral"),
      desc: t(
        "Upskilling employees for the AI economy. Training teams to work alongside AI tools, not be replaced by them. Building digital literacy across all organizational levels through bilingual (EN/ES) training programs.",
        "Capacitación de empleados para la economía de la IA. Entrenamos equipos para trabajar junto a herramientas de IA, no para ser reemplazados. Construimos alfabetización digital en todos los niveles organizacionales mediante programas de capacitación bilingües (EN/ES).",
      ),
    },
    {
      icon: Building2,
      title: t("Small Business Empowerment", "Empoderamiento de pequeñas empresas"),
      desc: t(
        "Making AI accessible to small and medium businesses that lack enterprise budgets. Practical tools, training, and implementation support that delivers measurable ROI — not theory.",
        "Hacemos la IA accesible para pequeñas y medianas empresas que no cuentan con presupuestos corporativos. Herramientas prácticas, capacitación e implementación que generan ROI medible — no teoría.",
      ),
    },
    {
      icon: Users,
      title: t("Community Impact", "Impacto comunitario"),
      desc: t(
        "Serving underserved business communities, with particular focus on Latino-owned businesses in South Florida. Bilingual consulting and training programs that bridge the digital divide.",
        "Servimos a comunidades empresariales desatendidas, con enfoque particular en empresas de propiedad latina en el sur de Florida. Programas bilingües de consultoría y capacitación que cierran la brecha digital.",
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Responsible AI Adoption", "Adopción responsable de IA"),
      desc: t(
        "Ensuring ethical, safe, and effective AI implementation. Our framework prioritizes data privacy, employee wellbeing, and sustainable business practices aligned with current compliance standards.",
        "Aseguramos una implementación de IA ética, segura y efectiva. Nuestro marco prioriza la privacidad de datos, el bienestar del empleado y prácticas empresariales sostenibles alineadas con los estándares de cumplimiento actuales.",
      ),
    },
  ];

  const stats = [
    { value: "20+", label: t("Years in operations & business transformation", "Años en operaciones y transformación empresarial") },
    { value: "7-Stage", label: t("Proprietary Time Reclaimed™ Framework", "Framework propietario Time Reclaimed™") },
    { value: "EN/ES", label: t("Fully bilingual consulting & training", "Consultoría y capacitación totalmente bilingüe") },
    { value: "CPD", label: t("Accredited AI Consultant certification", "Certificación de Consultora de IA acreditada") },
  ];

  const programs = [
    t("AI Business Readiness & Adoption Program (8-week structured program)", "Programa de Preparación y Adopción de IA Empresarial (programa estructurado de 8 semanas)"),
    t("Time Reclaimed™ Implementation", "Implementación Time Reclaimed™"),
    t("AI Strategy Consulting", "Consultoría de estrategia de IA"),
    t("Custom AI Tool Development", "Desarrollo de herramientas de IA personalizadas"),
    t("Community AI Clinics & Workshops (bilingual, accessible)", "Clínicas y talleres comunitarios de IA (bilingües, accesibles)"),
    t("Youth AI Empowerment Initiative", "Iniciativa de empoderamiento juvenil en IA"),
  ];

  const credentials = [
    t("CPD Accredited AI Consultant (International)", "Consultora de IA Acreditada CPD (Internacional)"),
    t("Published Author — Time Reclaimed™ (May 2026)", "Autora publicada — Time Reclaimed™ (Mayo 2026)"),
    t("Speaker — AI Tech Boss Summit, May 2026", "Conferencista — AI Tech Boss Summit, mayo 2026"),
    t("Speaker — AI Clarity Summit, June 2026", "Conferencista — AI Clarity Summit, junio 2026"),
    t("UEI: [INSERT once SAM.gov registration is complete]", "UEI: [INSERTAR cuando se complete el registro SAM.gov]"),
    t("Active content contributor: LinkedIn (16,000+ connections), YouTube, Instagram", "Contribuidora activa de contenido: LinkedIn (16,000+ conexiones), YouTube, Instagram"),
  ];

  return (
    <>
      <SEO
        title={"Our Impact — AI for Business & Community | Go AI Innovation"}
        description={
          "Go AI Innovation's impact: workforce development, small business empowerment, and responsible AI adoption. AI Business Readiness & Adoption Program serving Miami and nationwide."
        }
      />

      {/* Hero */}
      <section className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Target className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Impact", "Impacto")}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t("Our Impact", "Nuestro Impacto")}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              "Empowering businesses and communities through accessible, responsible AI implementation",
              "Empoderando empresas y comunidades mediante una implementación de IA accesible y responsable",
            )}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            tag={t("Mission", "Misión")}
            title={t("Our Mission", "Nuestra misión")}
          />
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            {t(
              "Go AI Innovation is dedicated to making artificial intelligence accessible to every business — regardless of size, industry, or technical background. Founded by Mardel Michelle Zavala, a CPD Accredited AI Consultant with 20+ years of operations experience, we serve the business community through our AI Business Readiness & Adoption Program and proprietary Time Reclaimed™ Framework. Our mission is rooted in workforce development, community empowerment, and closing the digital divide — with particular commitment to Latino-owned and underserved small businesses across South Florida and nationwide.",
              "Go AI Innovation se dedica a hacer la inteligencia artificial accesible para cada empresa — sin importar el tamaño, la industria o los conocimientos técnicos. Fundada por Mardel Michelle Zavala, Consultora de IA acreditada CPD con más de 20 años de experiencia operativa, servimos a la comunidad empresarial a través de nuestro Programa de Preparación y Adopción de IA Empresarial y el Framework propietario Time Reclaimed™. Nuestra misión está arraigada en el desarrollo de la fuerza laboral, el empoderamiento comunitario y el cierre de la brecha digital — con un compromiso particular con las pequeñas empresas latinas y desatendidas en el sur de Florida y a nivel nacional.",
            )}
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("Focus Areas", "Áreas de enfoque")}
            title={t("Where We Create Impact", "Dónde creamos impacto")}
          />
          <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {focusAreas.map((a) => (
              <div key={a.title} className="dash-card flex flex-col gap-4">
                <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold">{a.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="section-padding section-light">
        <div className="container mx-auto">
          <SectionHeading
            tag={t("By the Numbers", "En números")}
            title={t("Foundation & Reach", "Fundamento y alcance")}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.value}
                className="dash-card text-center flex flex-col items-center justify-center"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3">
                  {s.value}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            tag={t("Programs", "Programas")}
            title={t("Programs & Services", "Programas y servicios")}
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {programs.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-snug">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Recognition */}
      <section className="section-padding section-light">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            tag={t("Credentials", "Credenciales")}
            title={t("Credentials & Recognition", "Credenciales y reconocimiento")}
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {credentials.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 rounded-lg border border-border bg-background px-4 py-3"
              >
                <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-snug">{c}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto rounded-lg border border-border bg-muted/30 px-5 py-4">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium mb-1.5">
              {t("Compliance Note", "Nota de cumplimiento")}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t(
                "Go AI Innovation is committed to data privacy, information security, and ethical AI practices. SAM.gov registration in progress. UEI obtained.",
                "Go AI Innovation está comprometida con la privacidad de datos, la seguridad de la información y prácticas éticas de IA. Registro en SAM.gov en proceso. UEI obtenido.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-panel p-7 sm:p-10 md:p-12 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              {t(
                "Partner with us on your next initiative",
                "Asóciese con nosotros en su próxima iniciativa",
              )}
            </h2>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
              <Link to="/contact">
                {t("Contact Us", "Contáctenos")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
