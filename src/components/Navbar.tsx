import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Services", to: "/services" },
  { label: "AI Tools", to: "/tools" },
  { label: "Founder", to: "/founder" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Go AI Innovation" className="h-7 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <SocialIcons size={14} />
          <Button variant="hero" size="sm" className="ml-3 h-8 text-xs px-4" asChild>
            <Link to="/book">Get Started</Link>
          </Button>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-card/95 backdrop-blur-2xl border-t border-border/40 px-4 pb-4 space-y-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 rounded-md text-sm font-medium ${
                location.pathname === l.to ? "text-primary bg-primary/8" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-4 py-2">
            <SocialIcons size={16} />
          </div>
          <Button variant="hero" size="sm" className="w-full mt-2" asChild>
            <Link to="/book" onClick={() => setOpen(false)}>Get Started</Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
