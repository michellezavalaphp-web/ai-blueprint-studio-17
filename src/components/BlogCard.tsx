import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { BlogPost } from "@/lib/blogPosts";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const { language, t } = useLanguage();
  const basePath = language === "es" ? "/es/perspectivas" : "/insights";

  return (
    <article className="dash-card flex flex-col overflow-hidden group">
      <div className="relative h-40 -mx-6 -mt-6 mb-4 bg-gradient-to-br from-[hsl(222,30%,12%)] via-[hsl(222,30%,8%)] to-[hsl(222,30%,5%)] flex items-center justify-center border-b border-primary/10">
        <FileText className="h-10 w-10 text-primary/40" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] uppercase tracking-widest font-bold rounded-full px-2.5 py-1 bg-primary/15 text-primary border border-primary/20">
            {language === "es" ? post.category.es : post.category.en}
          </span>
        </div>
      </div>
      <h3 className="font-display text-base sm:text-lg font-semibold mb-2 leading-snug group-hover:text-primary transition-colors">
        {language === "es" ? post.title.es : post.title.en}
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
        {language === "es" ? post.excerpt.es : post.excerpt.en}
      </p>
      <Link
        to={`${basePath}/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all"
      >
        {t("Read More", "Leer más")} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
};

export default BlogCard;
