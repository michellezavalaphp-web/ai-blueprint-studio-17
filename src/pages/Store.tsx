import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, BookOpen, Shirt, Store as StoreIcon, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const Store = () => {
  const { t } = useLanguage();

  const futureProducts = [
    { title: t("Digital Playbook", "Manual digital"), desc: t("Step-by-step AI implementation playbook.", "Manual paso a paso para implementar IA.") },
    { title: t("Executive Journal", "Diario ejecutivo"), desc: t("Premium leather journal for the modern operator.", "Diario premium en cuero para el operador moderno.") },
    { title: t("Online Course", "Curso en línea"), desc: t("Reclaim time with the Time Reclaimed™ method.", "Recupera tiempo con el método Time Reclaimed™.") },
  ];

  const ComingSoon = () => (
    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold rounded-full px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary">
      {t("Coming Soon", "Próximamente")}
    </span>
  );

  return (
    <>
      <SEO title={"Resources — Time Reclaimed™ Book & Tools | Go AI Innovation"} description={"AI implementation resources including Time Reclaimed™ — the published book by Mardel Michelle Zavala. Tools and guides for business leaders."} />
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <StoreIcon className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Store", "Tienda")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("Resources to Help You Reclaim Your Time", "Recursos para Ayudarte a Recuperar tu Tiempo")}
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed mb-6">
            {t(
              "Books, tools, and products designed to help you implement AI, scale your business, and operate with clarity.",
              "Libros, herramientas y productos diseñados para ayudarte a implementar IA, escalar tu negocio y operar con claridad."
            )}
          </p>
          <Button variant="hero" size="lg" className="h-11 text-sm" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("Book Strategy Call", "Agendar Llamada Estratégica")} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Featured Book */}
      <section className="section-padding !pt-10 sm:!pt-14">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center glass-panel p-6 sm:p-10 glow-border">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4"><ComingSoon /></div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">Time Reclaimed™</h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                {t(
                  "A practical framework to help you reclaim time, reduce overwhelm, and lead with clarity in an AI-powered world.",
                  "Un marco práctico para ayudarte a recuperar tiempo, reducir la sobrecarga y liderar con claridad en un mundo impulsado por IA."
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" className="h-11 text-sm" disabled>
                  {t("Pre-Order", "Reservar")} <Sparkles className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="hero-outline" size="lg" className="h-11 text-sm" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t("Book Strategy Call", "Agendar Llamada Estratégica")}
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-48 sm:w-60 md:w-72 aspect-[3/4] rounded-lg bg-gradient-to-br from-[hsl(222,30%,10%)] to-[hsl(222,40%,18%)] border border-primary/20 shadow-2xl shadow-primary/20 flex flex-col items-center justify-center p-6 text-center">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <div className="font-display text-lg sm:text-xl font-bold text-white">Time Reclaimed™</div>
                <div className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-widest text-primary/80">
                  {t("By the Founder", "Por el fundador")}
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-3 w-32 bg-black/40 blur-md rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch */}
      <section className="section-padding !pt-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {t("Time Reclaimed™ Collection", "Colección Time Reclaimed™")}
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl">
                {t("Wear the mindset. Represent the movement.", "Viste la mentalidad. Representa el movimiento.")}
              </p>
            </div>
            <ComingSoon />
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              { label: t("Hoodie", "Sudadera") },
              { label: t("Journal", "Diario") },
              { label: t("Tee", "Camiseta") },
            ].map((item) => (
              <div key={item.label} className="dash-card flex flex-col">
                <div className="aspect-square rounded-md bg-gradient-to-br from-[hsl(222,25%,12%)] to-[hsl(222,30%,18%)] border border-border/40 flex items-center justify-center mb-4">
                  <Shirt className="h-10 w-10 text-primary/60" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground mb-4">Time Reclaimed™</p>
                <Button variant="hero-outline" size="sm" disabled className="mt-auto">
                  {t("Shop Collection", "Comprar colección")}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future product grid */}
      <section className="section-padding !pt-0">
        <div className="container mx-auto">
          <h2 className="font-display text-lg sm:text-xl font-semibold mb-2">
            {t("More Resources Coming Soon", "Más recursos próximamente")}
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm mb-6 sm:mb-8 max-w-xl">
            {t(
              "Digital products, courses, and physical goods built for leaders implementing AI.",
              "Productos digitales, cursos y bienes físicos para líderes que implementan IA."
            )}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {futureProducts.map((p) => (
              <div key={p.title} className="dash-card flex flex-col">
                <div className="aspect-video rounded-md bg-gradient-to-br from-[hsl(222,25%,12%)] to-[hsl(222,30%,18%)] border border-border/40 flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-primary/60" />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-sm sm:text-base font-semibold">{p.title}</h3>
                  <ComingSoon />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{p.desc}</p>
                <Button variant="hero-outline" size="sm" disabled className="mt-auto">
                  {t("Notify Me", "Avísame")}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding !pt-0">
        <div className="container mx-auto">
          <div className="glass-panel p-8 sm:p-12 text-center glow-border max-w-2xl mx-auto">
            <h3 className="font-display text-lg sm:text-2xl font-bold mb-3">
              {t("Ready to implement AI in your business?", "¿Listo para implementar IA en tu negocio?")}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              {t(
                "Get a personalized roadmap built around your operations.",
                "Recibe una hoja de ruta personalizada para tus operaciones."
              )}
            </p>
            <Button variant="hero" size="lg" className="h-12 text-sm" asChild>
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

export default Store;
