import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  BookOpen, GraduationCap, FileText, Presentation, ArrowRight, Library,
} from "lucide-react";

const Resources = () => {
  const { t } = useLanguage();

  const resources = [
    {
      icon: BookOpen,
      title: t("Books", "Libros"),
      description: t("AI strategy books and guides written for organizational leaders who want to understand and implement AI systems.", "Libros y guías de estrategia de IA escritos para líderes organizacionales que desean comprender e implementar sistemas de IA."),
      status: t("Coming Soon", "Próximamente"),
    },
    {
      icon: GraduationCap,
      title: t("Training Programs", "Programas de capacitación"),
      description: t("Structured AI training programs designed to upskill teams and build internal AI capabilities.", "Programas estructurados de capacitación en IA diseñados para mejorar las habilidades de los equipos y desarrollar capacidades internas de IA."),
      status: t("Coming Soon", "Próximamente"),
    },
    {
      icon: FileText,
      title: t("AI Implementation Guides", "Guías de implementación de IA"),
      description: t("Step-by-step guides covering AI adoption, automation best practices, and operational transformation.", "Guías paso a paso que cubren la adopción de IA, mejores prácticas de automatización y transformación operativa."),
      status: t("Coming Soon", "Próximamente"),
    },
    {
      icon: Presentation,
      title: t("Workshops & Courses", "Talleres y cursos"),
      description: t("Live and on-demand workshops teaching organizations how to implement AI systems and reclaim time.", "Talleres en vivo y bajo demanda que enseñan a las organizaciones cómo implementar sistemas de IA y recuperar tiempo."),
      status: t("Coming Soon", "Próximamente"),
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Library className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Knowledge Hub", "Centro de conocimiento")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t("Learning & Resources", "Aprendizaje y recursos")}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            {t("Explore books, training programs, guides, and workshops designed to help organizations adopt AI and transform operations.", "Explore libros, programas de capacitación, guías y talleres diseñados para ayudar a las organizaciones a adoptar IA y transformar sus operaciones.")}
          </p>
        </div>
      </div>

      <section className="section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {resources.map((r) => (
              <div key={r.title} className="dash-card flex flex-col gap-3 sm:gap-4">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
                    <r.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold rounded-full px-2.5 py-1 bg-muted/60 text-muted-foreground">
                    {r.status}
                  </span>
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold">{r.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{r.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 max-w-lg mx-auto">
            <div className="glass-panel p-6 sm:p-8 text-center glow-border">
              <h3 className="font-display text-base sm:text-lg font-semibold mb-2">{t("Want Early Access?", "¿Quieres acceso anticipado?")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                {t("Book a strategy session to learn more about upcoming resources and get personalized AI guidance.", "Agenda una sesión estratégica para conocer más sobre los próximos recursos y recibir orientación personalizada en IA.")}
              </p>
              <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm w-full sm:w-auto" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("Book Your Free AI Strategy Session", "Agenda tu sesión estratégica de IA gratuita")} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
