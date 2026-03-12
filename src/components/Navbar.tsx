import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { BOOKING_URL } from "@/lib/constants";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "AI Tools", to: "/tools" },
  { label: "Framework", to: "/framework" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
          <Button variant="hero" size="sm" className="ml-3 h-8 text-xs px-4" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>
        </nav>

        <button className="lg:hidden text-white p-2 -mr-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-[hsl(222,30%,5%)]/95 backdrop-blur-2xl border-t border-[hsl(222,15%,14%)]/40 px-4 pb-4 pt-2 space-y-0.5 max-h-[80vh] overflow-y-auto">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium ${
                location.pathname === l.to ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-4 pt-1">
            <Button variant="hero" size="lg" className="w-full h-12 text-sm" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get Started</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
