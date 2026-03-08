import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/40 section-padding !py-12">
    <div className="container mx-auto grid gap-8 md:grid-cols-3">
      <div>
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold mb-3">
          <Zap className="h-5 w-5 text-primary" />
          Go AI Innovation
        </Link>
        <p className="text-sm text-muted-foreground max-w-xs">
          Led by Mardel Michelle Zavala — helping businesses reclaim time, improve efficiency, and scale with AI.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Navigation</h4>
        <ul className="space-y-2 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/insurance", label: "Insurance" },
            { to: "/tools", label: "AI Tools" },
            { to: "/book", label: "Book a Session" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Get in Touch</h4>
        <p className="text-sm text-muted-foreground">Ready to transform your business?</p>
        <Link to="/book" className="inline-block mt-2 text-primary text-sm font-medium hover:underline">
          Schedule a Strategy Session →
        </Link>
      </div>
    </div>
    <div className="container mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Go AI Innovation. All rights reserved.
    </div>
  </footer>
);

export default Footer;
