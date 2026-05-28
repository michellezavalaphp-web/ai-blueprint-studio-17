import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BLOG_POSTS, BlogPost } from "@/lib/blogPosts";

export type BlogPostRow = {
  id: string;
  slug: string;
  category_key: string;
  category_en: string;
  category_es: string;
  title_en: string;
  title_es: string;
  excerpt_en: string;
  excerpt_es: string;
  content_en: string;
  content_es: string;
  cover_image_url: string | null;
  date: string;
  read_time: number;
  featured: boolean;
};

export const rowToPost = (r: BlogPostRow): BlogPost => ({
  slug: r.slug,
  categoryKey: r.category_key,
  category: { en: r.category_en, es: r.category_es },
  title: { en: r.title_en, es: r.title_es },
  excerpt: { en: r.excerpt_en, es: r.excerpt_es },
  content: {
    en: (r.content_en || "").split(/\n\n+/).filter(Boolean),
    es: (r.content_es || "").split(/\n\n+/).filter(Boolean),
  },
  date: r.date,
  readTime: r.read_time,
  featured: r.featured,
  coverImageUrl: r.cover_image_url || undefined,
});

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    supabase
      .from("blog_posts")
      .select("*")
      .order("date", { ascending: false })
      .then(({ data }) => {
        if (!mounted) return;
        if (data && data.length) setPosts(data.map(rowToPost));
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return { posts, loading };
};
