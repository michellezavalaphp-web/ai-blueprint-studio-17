import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Star, Quote, ArrowRight, BarChart3, TrendingUp, Users, Award,
} from "lucide-react";

const Impact = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("We saved over 30 hours per week after implementing the recommendations from our AI assessment. Game-changer.", "Ahorramos más de 30 horas por semana después de implementar las recomendaciones de nuestra evaluación de IA. Un cambio radical."),
      name: "Sarah Chen", role: t("COO, Pacific Financial Group", "COO, Pacific Financial Group"),
      metric: t("30+ hrs/week saved", "30+ hrs/semana ahorradas"),
    },
    {
      quote: t("The strategy session alone gave us a clear roadmap. No jargon, just actionable steps we could start right away.", "La sesión estratégica por sí sola nos dio una hoja de ruta clara. Sin jerga, solo pasos accionables que pudimos implementar de inmediato."),
      name: "James Rodriguez", role: t("Director of Operations, Metro Health Services", "Director de operaciones, Metro Health Services"),
      metric: t("3x faster workflows", "Flujos de trabajo 3x más rápidos"),
    },
    {
      quote: t("As a nonprofit, we were skeptical. But their tools showed us exactly where AI could help — and it did.", "Como organización sin fines de lucro, éramos escépticos. Pero sus herramientas nos mostraron exactamente dónde la IA podía ayudar — y lo hizo."),
      name: "Amara Okafor", role: t("Executive Director, Community Forward", "Directora ejecutiva, Community Forward"),
      metric: t("40% cost reduction", "40% reducción de costos"),
    },
    {
      quote: t("Go AI Innovation helped us automate our entire client onboarding process. What used to take 3 days now takes 20 minutes.", "Go AI Innovation nos ayudó a automatizar todo nuestro proceso de incorporación de clientes. Lo que antes tomaba 3 días ahora toma 20 minutos."),
      name: "David Park", role: t("Managing Partner, Apex Legal Group", "Socio director, Apex Legal Group"),
      metric: t("95% time reduction", "95% reducción de tiempo"),
    },
    {
      quote: t("Their framework made AI accessible for our government department. We reduced processing backlogs by 60% in the first quarter.", "Su metodología hizo que la IA fuera accesible para nuestro departamento gubernamental. Redujimos los atrasos de procesamiento en un 60% en el primer trimestre."),
      name: "Lt. Maria Santos", role: t("Operations Lead, City of Riverside", "Líder de operaciones, Ciudad de Riverside"),
      metric: t("60% backlog cleared", "60% de atrasos eliminados"),
    },
    {
      quote: t("The Time Reclaimed™ Calculator revealed we were losing 200+ hours per month to manual data entry. That changed everything.", "La calculadora Time Reclaimed™ reveló que estábamos perdiendo más de 200 horas al mes en ingreso manual de datos. Eso lo cambió todo."),
      name: "Karen Mitchell", role: t("VP Operations, Pinnacle Insurance Group", "VP de operaciones, Pinnacle Insurance Group"),
      metric: t("200+ hrs/mo reclaimed", "200+ hrs/mes recuperadas"),
    },
  ];

  const caseStudies = [
    {
      title: t("Financial Services Automation", "Automatización de servicios financieros"),
      description: t("A mid-size financial firm reduced administrative overhead by 40% and reclaimed 120+ hours per month through AI-powered workflow automation.", "Una firma financiera mediana redujo los gastos administrativos en un 40% y recuperó más de 120 horas al mes mediante automatización de flujos de trabajo impulsada por IA."),
      tags: [t("Financial Services", "Servicios financieros"), t("Workflow Automation", "Automatización de flujos"), "Time Reclaimed™"],
    },
    {
      title: t("Government Operations Modernization", "Modernización de operaciones gubernamentales"),
      description: t("A city government department modernized citizen services with AI agents, cutting average processing time from 5 days to 4 hours.", "Un departamento de gobierno municipal modernizó los servicios al ciudadano con agentes de IA, reduciendo el tiempo promedio de procesamiento de 5 días a 4 horas."),
      tags: [t("Government", "Gobierno"), t("AI Agents", "Agentes de IA"), t("Citizen Services", "Servicios al ciudadano")],
    },
    {
      title: t("Nonprofit Efficiency Transformation", "Transformación de eficiencia en ONGs"),
      description: t("A national nonprofit implemented AI systems for donor engagement and reporting, doubling outreach capacity without adding staff.", "Una ONG nacional implementó sistemas de IA para la participación de donantes y reportes, duplicando la capacidad de alcance sin agregar personal."),
      tags: [t("Nonprofit", "ONG"), t("Donor Engagement", "Participación de donantes"), t("Operational Efficiency", "Eficiencia operativa")],
    },
  ];

  const metrics = [
    { icon: BarChart3, stat: "500+", label: t("Organizations assessed", "Organizaciones evaluadas") },
    { icon: TrendingUp, stat: "40%", label: t("Average time savings", "Ahorro promedio de tiempo") },
    { icon: Users, stat: "10K+", label: t("Hours reclaimed", "Horas recuperadas") },
    { icon: Award, stat: "98%", label: t("Client satisfaction", "Satisfacción del cliente") },
  ];

  return (
    <>
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Award className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Results", "Resultados")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("Impact & Client Success", "Impacto y éxito de clientes")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("Real transformation stories from organizations using AI systems to improve operations, reclaim time, and scale intelligently.", "Historias reales de transformación de organizaciones que utilizan sistemas de IA para mejorar operaciones, recuperar tiempo y escalar de manera inteligente.")}
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10 !pb-8 sm:!pb-12">
        <div className="container mx-auto">
          <div className="glass-panel p-1 glow-border">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {metrics.map((s, i) => (
                <div key={s.label} className={`flex flex-col items-center justify-center py-4 sm:py-5 px-3 sm:px-4 ${i % 2 === 0 ? "border-r border-border/30" : i < 3 ? "md:border-r md:border-border/30" : ""} ${i < 2 ? "border-b border-border/30 md:border-b-0" : ""}`}>
                  <s.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary/60 mb-1.5 sm:mb-2" />
                  <div className="stat-value text-xl sm:text-2xl md:text-3xl">{s.stat}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5 tracking-wide text-center">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container mx-auto">
          <SectionHeading tag={t("Case Studies", "Casos de estudio")} title={t("Transformation Stories", "Historias de transformación")} />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="dash-card flex flex-col gap-3 sm:gap-4">
                <h3 className="font-display text-sm sm:text-base font-semibold">{cs.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{cs.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-[9px] sm:text-[10px] uppercase tracking-wider text-primary font-medium rounded-full px-2 py-0.5" style={{ backgroundColor: 'hsl(207 90% 54% / 0.08)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto">
          <SectionHeading tag={t("Testimonials", "Testimonios")} title={t("What Organizations Say", "Lo que dicen las organizaciones")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((te) => (
              <div key={te.name} className="dash-card flex flex-col gap-3 sm:gap-4">
                <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-primary/30" />
                <p className="text-xs sm:text-sm text-muted-foreground flex-1 italic leading-relaxed">"{te.quote}"</p>
                <div className="text-[11px] sm:text-xs text-primary font-semibold">{te.metric}</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-primary fill-primary" />
                  ))}
                </div>
                <div className="border-t border-border/30 pt-3">
                  <div className="font-display font-semibold text-xs sm:text-[13px]">{te.name}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground">{te.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-6 sm:p-8 md:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              {t("Ready to Write Your Success Story?", "¿Listo para escribir tu historia de éxito?")}
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed">
              {t("Book a free strategy session and see how the Time Reclaimed™ Framework can transform your organization.", "Agenda una sesión estratégica gratuita y descubre cómo el marco Time Reclaimed™ puede transformar tu organización.")}
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

export default Impact;
