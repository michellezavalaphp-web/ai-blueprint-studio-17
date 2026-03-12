import { Link } from "react-router-dom";
import SocialIcons from "@/components/SocialIcons";
import logoIcon from "@/assets/logo-icon.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/30 backdrop-blur-xl py-10 sm:py-14 px-4">
    <div className="container mx-auto grid gap-8 sm:gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-2 lg:col-span-1">
        <Link to="/" className="flex items-center gap-2 mb-3">
          <img src={logoIcon} alt="Go AI Innovation" className="h-10 w-10" />
        </Link>
        <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed mb-2">
          Go AI Innovation
        </p>
        <SocialIcons size={15} />
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Platform</h4>
        <ul className="space-y-2 sm:space-y-2.5">
          {[
            { to: "/services", label: "Services" },
            { to: "/tools", label: "AI Tools" },
            { to: "/framework", label: "Framework" },
            { to: "/solutions", label: "Solutions" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Company</h4>
        <ul className="space-y-2 sm:space-y-2.5">
          {[
            { to: "/about", label: "About" },
            { to: "/impact", label: "Impact & Results" },
            { to: "/resources", label: "Resources" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">{l.label}</Link>
            </li>
          ))}
          <li>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">Strategy Session</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Contact</h4>
        <ul className="space-y-3">
          <li>
            <a href="tel:3053606170" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              (305) 360-6170
            </a>
          </li>
          <li>
            <a href="mailto:mzavala@goaiinnovation.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">
              <Mail className="h-3.5 w-3.5 shrink-0" />
              mzavala@goaiinnovation.com
            </a>
          </li>
          <li>
            <div className="flex items-start gap-2 text-muted-foreground text-xs sm:text-[13px]">
              <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span>8958 West State Road 84 #233<br />Davie, FL 33324</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto mt-8 sm:mt-12 pt-6 border-t border-border/30 text-center text-[10px] sm:text-[11px] text-muted-foreground space-y-1.5">
      <div>© {new Date().getFullYear()} Go AI Innovation. All rights reserved.</div>
      <div className="text-muted-foreground/50">Agape Advisory Group LLC DBA Go AI Innovation · 8958 West State Road 84 #233, Davie, FL 33324</div>
      <div className="flex items-center justify-center gap-3">
        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        <span className="text-muted-foreground/30">|</span>
        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
