import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendToGrowthHub } from "@/utils/growthHub";

const EXCLUDED_PATHS = ["/contact", "/speaking", "/es/conferencias", "/tools"];
const ASSESSMENT_URL = "https://aireadiness-assessment.lovable.app";

const isExcludedPath = (pathname: string) =>
  EXCLUDED_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

const ExitIntentPopup = () => {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const triggeredRef = useRef(false);
  const lastScrollY = useRef(0);
  const lastScrollT = useRef(0);

  const validate = (value: string): string | null => {
    const v = value.trim();
    if (!v) return t("Please enter your email.", "Por favor ingrese su correo.");
    if (v.length > 255)
      return t("Email is too long.", "El correo es demasiado largo.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
      return t(
        "Please enter a valid email address.",
        "Por favor ingrese un correo electrónico válido.",
      );
    return null;
  };

  useEffect(() => {
    if (isExcludedPath(pathname)) return;

    let captured = false;
    let dismissed = false;
    try {
      captured = localStorage.getItem("email_captured") === "true";
      dismissed = localStorage.getItem("popup_dismissed") === "true";
    } catch {}
    if (captured || dismissed) return;

    const trigger = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) trigger();
    };

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

    const onScroll = () => {
      const y = window.scrollY;
      const now = Date.now();
      const dy = lastScrollY.current - y; // positive = scrolling up
      const dt = now - lastScrollT.current;
      // Rapid scroll up: >120px in <200ms, must be near top-ish
      if (dy > 120 && dt < 200 && y < 400) trigger();
      lastScrollY.current = y;
      lastScrollT.current = now;
    };

    if (isMobile) {
      lastScrollY.current = window.scrollY;
      lastScrollT.current = Date.now();
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      document.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const handleClose = () => {
    try {
      localStorage.setItem("popup_dismissed", "true");
    } catch {}
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^\S+@\S+\.\S+$/.test(trimmed)) return;

    sendToGrowthHub({ email: trimmed, source: "exit-popup" });
    setOpen(false);
    window.location.href = ASSESSMENT_URL;
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-primary/20 bg-card text-card-foreground shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />
        <button
          type="button"
          aria-label={t("Close", "Cerrar")}
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-7 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
              {t("Free Tool", "Herramienta gratuita")}
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight mb-2">
            {t(
              "Before You Go — Get Your Free AI Readiness Score",
              "Antes de irse — Obtenga su Puntuación de Preparación para IA gratis",
            )}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {t(
              "Join 500+ business leaders using AI to save 10+ hours per week.",
              "Únase a más de 500 líderes empresariales que usan IA para ahorrar más de 10 horas por semana.",
            )}
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              required
              maxLength={255}
              placeholder={t("you@company.com", "usted@empresa.com")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 text-sm"
            />
            <Button type="submit" variant="hero" className="w-full h-11 text-sm">
              {t("Get My Free Score", "Obtener mi puntuación gratis")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-[11px] text-muted-foreground/70 text-center mt-4">
            {t(
              "No spam. Unsubscribe anytime.",
              "Sin spam. Cancele suscripción en cualquier momento.",
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
