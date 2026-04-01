import { Link } from "react-router-dom";
import SocialIcons from "@/components/SocialIcons";
import logoIcon from "@/assets/logo-icon.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-dark border-t border-[hsl(222,15%,14%)]/40 py-10 sm:py-14 px-4">
      <div className="container mx-auto grid gap-8 sm:gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logoIcon} alt="Go AI Innovation" className="h-10 w-10" />
          </Link>
          <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mb-5">
            Go AI Innovation
          </p>
          <SocialIcons size={15} />
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            {t("Platform", "Plataforma")}
          </h4>
          <ul className="space-y-2 sm:space-y-2.5">
            {[
              { to: "/services", label: t("Services", "Servicios") },
              { to: "/tools", label: t("AI Tools", "Herramientas IA") },
              { to: "/framework", label: t("Framework", "Metodología") },
              { to: "/solutions", label: t("Solutions", "Soluciones") },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            {t("Company", "Empresa")}
          </h4>
          <ul className="space-y-2 sm:space-y-2.5">
            {[
              { to: "/about", label: t("About", "Nosotros") },
              { to: "/impact", label: t("Impact & Results", "Impacto y resultados") },
              { to: "/resources", label: t("Resources", "Recursos") },
              { to: "/contact", label: t("Contact", "Contacto") },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">
                {t("Strategy Session", "Sesión estratégica")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            {t("Contact", "Contacto")}
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="tel:7869366937" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                (786) 936-6937
              </a>
            </li>
            <li>
              <a href="mailto:contact@goaiinnovation.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                contact@goaiinnovation.com
              </a>
            </li>
            <li>
              <div className="flex items-start gap-2 text-muted-foreground text-xs sm:text-[13px]">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>1110 Brickell Avenue #400K-105<br />Miami, FL 33131</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 sm:mt-12 pt-6 border-t border-border/30 text-center text-[10px] sm:text-[11px] text-muted-foreground space-y-1.5">
        <div>© {new Date().getFullYear()} Go AI Innovation. {t("All rights reserved.", "Todos los derechos reservados.")}</div>
        <div className="text-muted-foreground/50">Agape Advisory Group LLC DBA Go AI Innovation · 1110 Brickell Avenue #400K-105, Miami, FL 33131</div>
        <div className="flex items-center justify-center gap-3">
          <Link to="/terms" className="hover:text-primary transition-colors">{t("Terms of Service", "Términos de servicio")}</Link>
          <span className="text-muted-foreground/30">|</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">{t("Privacy Policy", "Política de privacidad")}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
