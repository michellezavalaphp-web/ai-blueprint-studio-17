import { Link } from "react-router-dom";
import SocialIcons from "@/components/SocialIcons";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/30 backdrop-blur-xl py-10 sm:py-14 px-4">
    <div className="container mx-auto grid gap-8 sm:gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
      <div className="col-span-2 lg:col-span-1">
        <Link to="/" className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Go AI Innovation" className="h-6 w-auto" />
        </Link>
        <p className="text-[11px] sm:text-xs text-muted-foreground max-w-[220px] leading-relaxed mb-5">
          Intelligent Systems for Modern Organizations. Powered by the Time Reclaimed™ Framework.
        </p>
        <SocialIcons size={15} />
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Platform</h4>
        <ul className="space-y-2 sm:space-y-2.5">
          {[
            { to: "/tools", label: "AI Tools" },
            { to: "/framework", label: "Framework" },
            { to: "/solutions", label: "Solutions" },
            { to: "/services", label: "Services" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Learn</h4>
        <ul className="space-y-2 sm:space-y-2.5">
          {[
            { to: "/impact", label: "Impact & Results" },
            { to: "/resources", label: "Resources" },
            { to: "/founder", label: "Founder" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 sm:mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Connect</h4>
        <ul className="space-y-2 sm:space-y-2.5">
          {[
            { to: "/book", label: "Strategy Session" },
            { to: "/contact", label: "Contact Us" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-[13px]">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="container mx-auto mt-8 sm:mt-12 pt-6 border-t border-border/30 text-center text-[10px] sm:text-[11px] text-muted-foreground space-y-1.5">
      <div>© {new Date().getFullYear()} Go AI Innovation. All rights reserved.</div>
      <div className="text-muted-foreground/50">Go AI Innovation is a brand of Agape Advisory Group LLC.</div>
    </div>
  </footer>
);

export default Footer;
