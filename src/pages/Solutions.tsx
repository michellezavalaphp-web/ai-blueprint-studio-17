import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Building2, Briefcase, Shield, Home, Heart, Landmark,
  ArrowRight, CheckCircle2, Globe,
} from "lucide-react";

const Solutions = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Building2,
      title: t("Businesses & Enterprises", "Empresas y corporaciones"),
      description: t("Automate operations, optimize workflows, and scale intelligently with AI systems tailored to your business model.", "Automatice operaciones, optimice flujos de trabajo y escale de manera inteligente con sistemas de IA adaptados a su modelo de negocio."),
      benefits: [t("Workflow automation", "Automatización de flujos de trabajo"), t("AI-powered customer service", "Servicio al cliente impulsado por IA"), t("Data-driven decision making", "Toma de decisiones basada en datos")],
    },
    {
      icon: Briefcase,
      title: t("Professional Service Firms", "Firmas de servicios profesionales"),
      description: t("Streamline client management, automate reporting, and free up billable hours with intelligent process automation.", "Optimice la gestión de clientes, automatice informes y libere horas facturables con automatización inteligente de procesos."),
      benefits: [t("Automated client communications", "Comunicaciones automatizadas con clientes"), t("Document processing", "Procesamiento de documentos"), t("Time tracking optimization", "Optimización del seguimiento de tiempo")],
    },
    {
      icon: Shield,
      title: t("Insurance Agencies", "Agencias de seguros"),
      description: t("Transform lead follow-up, client communication, and administrative work with AI agents built for insurance.", "Transforme el seguimiento de leads, la comunicación con clientes y el trabajo administrativo con agentes de IA diseñados para seguros."),
      benefits: [t("Automated lead nurturing", "Nutrición automatizada de leads"), t("Policy management AI", "IA para gestión de pólizas"), t("Claims processing automation", "Automatización de procesamiento de reclamos")],
    },
    {
      icon: Home,
      title: t("Real Estate Organizations", "Organizaciones inmobiliarias"),
      description: t("Accelerate deal flow, automate marketing, and manage client relationships with intelligent real estate systems.", "Acelere el flujo de negocios, automatice el marketing y gestione relaciones con clientes con sistemas inmobiliarios inteligentes."),
      benefits: [t("AI listing optimization", "Optimización de listados con IA"), t("Automated follow-up sequences", "Secuencias de seguimiento automatizadas"), t("Market analysis tools", "Herramientas de análisis de mercado")],
    },
    {
      icon: Heart,
      title: t("Nonprofits", "Organizaciones sin fines de lucro"),
      description: t("Do more with less by automating donor outreach, volunteer coordination, and program administration.", "Haga más con menos automatizando el alcance a donantes, la coordinación de voluntarios y la administración de programas."),
      benefits: [t("Donor engagement automation", "Automatización de participación de donantes"), t("Grant writing assistance", "Asistencia en redacción de subvenciones"), t("Impact reporting", "Informes de impacto")],
    },
    {
      icon: Landmark,
      title: t("Government Departments", "Departamentos gubernamentales"),
      description: t("Modernize citizen services, automate compliance workflows, and improve interdepartmental efficiency.", "Modernice los servicios al ciudadano, automatice flujos de cumplimiento y mejore la eficiencia interdepartamental."),
      benefits: [t("Citizen service automation", "Automatización de servicios al ciudadano"), t("Compliance monitoring", "Monitoreo de cumplimiento"), t("Resource optimization", "Optimización de recursos")],
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Globe className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Solutions", "Soluciones")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("AI Solutions for Every Organization", "Soluciones de IA para toda organización")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("Intelligent systems powered by the Time Reclaimed™ Framework — improving efficiency, automation, and decision-making across your entire organization.", "Sistemas inteligentes impulsados por el marco Time Reclaimed™ — mejorando la eficiencia, automatización y toma de decisiones en toda su organización.")}
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {sectors.map((s) => (
              <div key={s.title} className="dash-card flex flex-col gap-3 sm:gap-4">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                    <s.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <ul className="space-y-2 mt-auto pt-3 border-t border-border/30">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              {t("Find the Right AI Solution", "Encuentra la solución de IA adecuada")}
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
              {t("Every organization is unique. Let us assess your operations and build an AI strategy that fits.", "Cada organización es única. Permítanos evaluar sus operaciones y crear una estrategia de IA que se ajuste.")}
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

export default Solutions;
