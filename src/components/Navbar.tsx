import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { BOOKING_URL } from "@/lib/constants";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { label: t("Home", "Inicio"), to: "/" },
    { label: t("Services", "Servicios"), to: "/services" },
    { label: t("AI Tools", "Herramientas IA"), to: "/tools" },
    { label: t("Framework", "Metodología"), to: "/framework" },
    { label: t("About", "Nosotros"), to: "/about" },
    { label: t("Contact", "Contacto"), to: "/contact" },
  ];

  const linkClass = (to: string) =>
    `px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
      location.pathname === to
        ? "text-primary bg-primary/10"
        : "text-[hsl(215,15%,65%)] hover:text-white hover:bg-white/5"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(222,30%,5%)]/95 backdrop-blur-2xl border-b border-[hsl(222,15%,14%)]/40">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoIcon} alt="Go AI Innovation" className="h-8 sm:h-9 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(l.to)}>
              {l.label}
            </Link>
          ))}
          <LanguageToggle />
          <Button variant="hero" size="sm" className="ml-3 h-8 text-xs px-4" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("Get Started", "Comenzar")}
            </a>
          </Button>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <LanguageToggle />
          <button className="text-white p-2 -mr-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-[hsl(222,30%,5%)]/95 backdrop-blur-2xl border-t border-[hsl(222,15%,14%)]/40 px-4 pb-4 pt-2 space-y-0.5 max-h-[80vh] overflow-y-auto">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium ${
                location.pathname === l.to ? "text-primary bg-primary/10" : "text-[hsl(215,15%,65%)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-4 pt-1">
            <Button variant="hero" size="lg" className="w-full h-12 text-sm" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                {t("Get Started", "Comenzar")}
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
