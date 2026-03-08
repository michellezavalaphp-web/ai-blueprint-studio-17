import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";

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
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <Zap className="h-6 w-6 text-primary" />
          <span>Go AI Innovation</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <SocialIcons className="ml-2" size={16} />
          <Button variant="hero" size="sm" className="ml-3" asChild>
            <Link to="/book">Get Started</Link>
          </Button>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden glass border-t border-border px-4 pb-4 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-4 py-2">
            <SocialIcons size={18} />
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
