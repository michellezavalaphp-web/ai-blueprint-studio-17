import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { BOOKING_URL } from "@/lib/constants";
import BlogCard from "@/components/BlogCard";

const InsightPost = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const { posts, loading } = useBlogPosts();
  const basePath = language === "es" ? "/es/blog" : "/blog";

  const post = posts.find((p) => p.slug === slug);
  if (loading && !post) return null;
  if (!post) return <Navigate to={basePath} replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const dateStr = new Date(post.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <Link to={basePath} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-6 hover:gap-2.5 transition-all">
            <ArrowLeft className="h-3.5 w-3.5" /> {t("Back to Blog", "Volver al Blog")}
          </Link>

          <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
            {language === "es" ? post.category.es : post.category.en}
          </span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-5 leading-tight">
            {language === "es" ? post.title.es : post.title.en}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground mb-8 pb-8 border-b border-border">
            <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> Go AI Innovation</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {dateStr}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime} {t("min read", "min de lectura")}</span>
          </div>

          <div className="relative h-56 sm:h-72 mb-10 rounded-xl overflow-hidden bg-gradient-to-br from-[hsl(222,30%,12%)] via-[hsl(222,30%,8%)] to-[hsl(222,30%,5%)] flex items-center justify-center border border-primary/10">
            {post.coverImageUrl ? (
              <img src={post.coverImageUrl} alt={language === "es" ? post.title.es : post.title.en} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <FileText className="h-14 w-14 text-primary/40" />
            )}
          </div>

          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-foreground/90">
            {(language === "es" ? post.content.es : post.content.en).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="section-light-alt section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-6 text-center">
            {t("Related Blog Posts", "Artículos relacionados")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {related.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
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
                "Book a strategy call and discover where AI can create the greatest impact in your operations.",
                "Agenda una llamada estratégica y descubre dónde la IA puede generar el mayor impacto en tus operaciones."
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

export default InsightPost;
