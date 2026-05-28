import { useEffect, useRef, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Upload, ArrowLeft, LogOut, ImageIcon } from "lucide-react";
import type { BlogPostRow } from "@/hooks/useBlogPosts";
import { CATEGORIES } from "@/lib/blogPosts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [selected, setSelected] = useState<BlogPostRow | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const coverInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const checkAdmin = useCallback(async () => {
    if (!session?.user) return setIsAdmin(false);
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();
    setIsAdmin(!!data);
  }, [session]);

  useEffect(() => {
    checkAdmin();
  }, [checkAdmin]);

  const loadPosts = useCallback(async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("date", { ascending: false });
    if (error) return toast.error(error.message);
    setPosts((data as any) || []);
  }, []);

  useEffect(() => {
    if (isAdmin) loadPosts();
  }, [isAdmin, loadPosts]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setAuthBusy(false);
    if (error) toast.error(error.message);
  };

  const signUp = async () => {
    setAuthBusy(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/admin` },
    });
    setAuthBusy(false);
    if (error) toast.error(error.message);
    else toast.success("Check your inbox to confirm your email, then sign in.");
  };

  const signInGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: `${window.location.origin}/admin` });
    if (result.error) toast.error("Google sign-in failed");
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setSelected(null);
  };

  const updateField = (k: keyof BlogPostRow, v: any) => {
    if (!selected) return;
    setSelected({ ...selected, [k]: v });
  };

  const save = async () => {
    if (!selected) return;
    setSaving(true);
    const { id, created_at, updated_at, ...rest } = selected as any;
    const { error } = await supabase.from("blog_posts").update(rest).eq("id", id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Post saved");
    loadPosts();
  };

  const onUploadCover = async (file: File) => {
    if (!selected) return;
    setUploading(true);
    try {
      if (!file.type.startsWith("image/")) throw new Error("Please choose an image file.");
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const safeSlug = selected.slug.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
      const path = `${safeSlug}/${crypto.randomUUID()}.${ext}`;

      const { error: upErr } = await supabase.storage.from("blog-covers").upload(path, file, {
        cacheControl: "3600",
        contentType: file.type,
      });
      if (upErr) throw upErr;

      const { data: pub } = supabase.storage.from("blog-covers").getPublicUrl(path);
      const publicUrl = `${pub.publicUrl}?v=${Date.now()}`;
      const { data: updatedPost, error } = await supabase
        .from("blog_posts")
        .update({ cover_image_url: publicUrl })
        .eq("id", selected.id)
        .select("*")
        .single();
      if (error) throw error;
      if (!updatedPost) throw new Error("Cover uploaded, but the post could not be updated.");

      setSelected(updatedPost as BlogPostRow);
      setPosts((current) => current.map((post) => (post.id === updatedPost.id ? (updatedPost as BlogPostRow) : post)));
      toast.success("Cover image uploaded");
    } catch (error: any) {
      toast.error(error?.message || "Image upload failed");
    } finally {
      setUploading(false);
      if (coverInputRef.current) coverInputRef.current.value = "";
    }
  };

  if (!session) {
    return (
      <>
        <SEO title="Admin Login | Go AI Innovation" description="Admin sign-in" />
        <section className="section-padding">
          <div className="container mx-auto max-w-md">
            <h1 className="font-display text-2xl font-bold mb-6">Admin Sign In</h1>
            <Card className="p-6 space-y-4">
              <form onSubmit={signIn} className="space-y-3">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
                </div>
                <Button type="submit" disabled={authBusy} className="w-full">
                  {authBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
                </Button>
                <Button type="button" variant="outline" onClick={signUp} disabled={authBusy} className="w-full">
                  Create Account
                </Button>
              </form>
              <div className="relative my-2 text-center text-xs text-muted-foreground">
                <span className="bg-card px-2 relative z-10">or</span>
                <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
              </div>
              <Button type="button" variant="outline" onClick={signInGoogle} className="w-full">
                Continue with Google
              </Button>
              <p className="text-xs text-muted-foreground pt-2">
                After signing up, you need admin role granted. Contact site owner if you're locked out.
              </p>
            </Card>
          </div>
        </section>
      </>
    );
  }

  if (isAdmin === null) {
    return (
      <div className="section-padding container mx-auto">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <section className="section-padding">
        <div className="container mx-auto max-w-md text-center">
          <h1 className="font-display text-xl font-bold mb-3">Access denied</h1>
          <p className="text-sm text-muted-foreground mb-2">
            Signed in as <span className="font-medium">{session.user.email}</span>
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Your account does not have admin access. The site owner can grant it by inserting your user id into the user_roles table with role <code>admin</code>.
          </p>
          <p className="text-xs text-muted-foreground mb-6 break-all">
            Your user id: <code>{session.user.id}</code>
          </p>
          <Button variant="outline" onClick={signOut}><LogOut className="h-4 w-4 mr-2" /> Sign out</Button>
        </div>
      </section>
    );
  }

  if (selected) {
    return (
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" size="sm" onClick={() => setSelected(null)}>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to posts
            </Button>
            <Button onClick={save} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save changes"}
            </Button>
          </div>

          <h1 className="font-display text-2xl font-bold mb-6">Edit Post</h1>

          <Card className="p-6 space-y-6">
            <div>
              <Label className="mb-2 block">Cover Image</Label>
              <div className="flex items-center gap-4">
                <div className="h-24 w-40 rounded-md border border-border overflow-hidden bg-muted flex items-center justify-center">
                  {selected.cover_image_url ? (
                    <img src={selected.cover_image_url} alt="cover" className="h-full w-full object-cover" />
                  ) : (
                    <ImageIcon className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <input
                    ref={coverInputRef}
                    id="cover-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && onUploadCover(e.target.files[0])}
                  />
                  <Button type="button" variant="outline" disabled={uploading} onClick={() => coverInputRef.current?.click()}>
                    {uploading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Upload className="h-4 w-4 mr-2" />}
                    Upload image
                  </Button>
                  {selected.cover_image_url && (
                    <Button type="button" variant="ghost" size="sm" className="ml-2" onClick={() => updateField("cover_image_url", null)}>
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title_en">Title (English)</Label>
                <Input id="title_en" value={selected.title_en} onChange={(e) => updateField("title_en", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="title_es">Title (Spanish)</Label>
                <Input id="title_es" value={selected.title_es} onChange={(e) => updateField("title_es", e.target.value)} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="excerpt_en">Excerpt (English)</Label>
                <Textarea id="excerpt_en" rows={3} value={selected.excerpt_en} onChange={(e) => updateField("excerpt_en", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="excerpt_es">Excerpt (Spanish)</Label>
                <Textarea id="excerpt_es" rows={3} value={selected.excerpt_es} onChange={(e) => updateField("excerpt_es", e.target.value)} />
              </div>
            </div>

            <div>
              <Label htmlFor="content_en">Full Content (English)</Label>
              <p className="text-xs text-muted-foreground mb-2">Separate paragraphs with a blank line.</p>
              <Textarea id="content_en" rows={18} value={selected.content_en} onChange={(e) => updateField("content_en", e.target.value)} />
            </div>

            <div>
              <Label htmlFor="content_es">Full Content (Spanish)</Label>
              <p className="text-xs text-muted-foreground mb-2">Separa los párrafos con una línea en blanco.</p>
              <Textarea id="content_es" rows={18} value={selected.content_es} onChange={(e) => updateField("content_es", e.target.value)} />
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={selected.category_key}
                onValueChange={(key) => {
                  const cat = CATEGORIES.find((c) => c.key === key);
                  if (!cat) return;
                  setSelected({
                    ...selected,
                    category_key: cat.key,
                    category_en: cat.en,
                    category_es: cat.es,
                  });
                }}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c.key} value={c.key}>
                      {c.en}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">

              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" value={selected.date} onChange={(e) => updateField("date", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="read_time">Read time (min)</Label>
                <Input id="read_time" type="number" value={selected.read_time} onChange={(e) => updateField("read_time", parseInt(e.target.value || "0"))} />
              </div>
              <div className="flex items-end gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={selected.featured} onChange={(e) => updateField("featured", e.target.checked)} />
                  Featured
                </label>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-border">
              <Button onClick={save} disabled={saving}>
                {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                Save changes
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-2xl font-bold">Blog Admin</h1>
            <p className="text-xs text-muted-foreground mt-1">{session.user.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={signOut}><LogOut className="h-4 w-4 mr-2" /> Sign out</Button>
        </div>

        <div className="grid gap-3">
          {posts.map((p) => (
            <Card key={p.id} className="p-4 flex items-center gap-4 cursor-pointer hover:border-primary/40 transition-colors" onClick={() => setSelected(p)}>
              <div className="h-16 w-24 rounded-md bg-muted overflow-hidden flex items-center justify-center shrink-0">
                {p.cover_image_url ? (
                  <img src={p.cover_image_url} alt="" className="h-full w-full object-cover" />
                ) : (
                  <ImageIcon className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{p.title_en}</div>
                <div className="text-xs text-muted-foreground truncate">{p.excerpt_en}</div>
                <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">{p.category_en} · {p.date}{p.featured ? " · Featured" : ""}</div>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admin;
