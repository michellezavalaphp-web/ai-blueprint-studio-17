import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const StickyCTA = () => {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("Book Strategy Call", "Agendar Llamada Estratégica")}
      className={`fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Calendar className="h-4 w-4" />
      {t("Book Strategy Call", "Agendar Llamada Estratégica")}
    </a>
  );
};

export default StickyCTA;
