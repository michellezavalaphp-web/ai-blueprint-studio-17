import { Link } from "react-router-dom";
import SocialIcons from "@/components/SocialIcons";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/40 bg-card/30 backdrop-blur-xl py-14 px-4">
    <div className="container mx-auto grid gap-10 md:grid-cols-4">
      <div>
        <Link to="/" className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Go AI Innovation" className="h-6 w-auto" />
        </Link>
        <p className="text-xs text-muted-foreground max-w-[220px] leading-relaxed mb-5">
          Intelligent Systems for Modern Organizations. Powered by the Time Reclaimed™ Framework.
        </p>
        <SocialIcons size={15} />
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Platform</h4>
        <ul className="space-y-2.5 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/solutions", label: "Solutions" },
            { to: "/services", label: "Services" },
            { to: "/tools", label: "AI Tools" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-[13px]">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Company</h4>
        <ul className="space-y-2.5 text-sm">
          {[
            { to: "/founder", label: "Founder" },
            { to: "/contact", label: "Contact" },
            { to: "/book", label: "Strategy Session" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors text-[13px]">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Get Started</h4>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">Ready to transform your organization with AI?</p>
        <Link to="/book" className="inline-flex items-center gap-1.5 text-primary text-[13px] font-medium hover:underline">
          Schedule a Strategy Session →
        </Link>
      </div>
    </div>
    <div className="container mx-auto mt-12 pt-6 border-t border-border/30 text-center text-[11px] text-muted-foreground">
      © {new Date().getFullYear()} Go AI Innovation. All rights reserved.
    </div>
  </footer>
);

export default Footer;
