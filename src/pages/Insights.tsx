import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Newspaper, Search, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blogPosts";
import BlogCard from "@/components/BlogCard";
import { BOOKING_URL } from "@/lib/constants";
import SEO from "@/components/SEO";

const Insights = () => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");
  const basePath = language === "es" ? "/es/blog" : "/blog";

  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      if (p.slug === featured.slug) return false;
      const inCat = activeCat === "all" || p.categoryKey === activeCat;
      const text = (language === "es" ? p.title.es + p.excerpt.es : p.title.en + p.excerpt.en).toLowerCase();
      const inQuery = !query || text.includes(query.toLowerCase());
      return inCat && inQuery;
    });
  }, [query, activeCat, language, featured.slug]);

  return (
    <>
      <SEO title={"AI Blog for Business Leaders | Go AI Innovation"} description={"Practical AI insights, tips, and strategies for business leaders. Learn how to implement AI, save time, and transform operations."} />
      <div className="page-header">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
              <Newspaper className="h-4 w-4 text-primary" />
            </div>
            <span className="badge-tag">{t("Blog", "Blog")}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("AI Blog for Business Leaders", "Blog de IA para Líderes Empresariales")}
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            {t(
              "Practical strategies, systems, and real-world applications to help you reclaim time and scale smarter with AI.",
              "Estrategias prácticas, sistemas y aplicaciones reales para ayudarte a recuperar tiempo y escalar tu negocio con inteligencia artificial."
            )}
          </p>
        </div>
      </div>

      {/* Featured */}
      <section className="section-padding !pt-6 sm:!pt-10">
        <div className="container mx-auto">
          <Link
            to={`${basePath}/${featured.slug}`}
            className="block dash-card group overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="relative h-56 sm:h-64 -m-6 md:m-0 md:rounded-lg bg-gradient-to-br from-[hsl(222,30%,12%)] via-[hsl(222,30%,8%)] to-[hsl(222,30%,5%)] flex items-center justify-center">
                <FileText className="h-14 w-14 text-primary/40" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold rounded-full px-3 py-1 bg-primary/15 text-primary border border-primary/20">
                  {t("Featured", "Destacado")}
                </span>
              </div>
              <div className="pt-6 md:pt-0">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
                  {language === "es" ? featured.category.es : featured.category.en}
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {language === "es" ? featured.title.es : featured.title.en}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {language === "es" ? featured.excerpt.es : featured.excerpt.en}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  {t("Read More", "Leer más")} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="section-padding !pt-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 mb-6 sm:mb-8 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCat("all")}
                className={`text-[11px] uppercase tracking-widest font-semibold rounded-full px-3 py-1.5 border transition-colors ${
                  activeCat === "all"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:text-primary hover:border-primary/30"
                }`}
              >
                {t("All", "Todos")}
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCat(c.key)}
                  className={`text-[11px] uppercase tracking-widest font-semibold rounded-full px-3 py-1.5 border transition-colors ${
                    activeCat === c.key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:text-primary hover:border-primary/30"
                  }`}
                >
                  {language === "es" ? c.es : c.en}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("Search blog...", "Buscar en el blog...")}
                className="pl-9 h-10 text-sm"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-12">
              {t("No blog posts match your search.", "No hay entradas que coincidan con tu búsqueda.")}
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container mx-auto max-w-xl">
          <div className="glass-panel p-7 sm:p-10 text-center glow-border">
            <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">
              {t("Ready to implement AI in your business?", "¿Listo para implementar IA en tu negocio?")}
            </h2>
            <p className="text-muted-foreground mb-6 text-xs sm:text-sm leading-relaxed">
              {t(
                "Let's design a strategy tailored to your operations and growth goals.",
                "Diseñemos una estrategia adaptada a tus operaciones y objetivos de crecimiento."
              )}
            </p>
            <Button variant="hero" size="lg" className="h-12 sm:h-11 text-sm" asChild>
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

export default Insights;
