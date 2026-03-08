import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import logo from "@/assets/logo.png";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Services", to: "/services" },
  { label: "AI Tools", to: "/tools" },
  { label: "Framework", to: "/framework" },
];

const moreLinks = [
  { label: "Impact", to: "/impact" },
  { label: "Resources", to: "/resources" },
  { label: "Founder", to: "/founder" },
  { label: "Contact", to: "/contact" },
];

const allLinks = [...mainLinks, ...moreLinks];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  const linkClass = (to: string) =>
    `px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
      location.pathname === to
        ? "text-primary bg-primary/10"
        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Go AI Innovation" className="h-6 sm:h-7 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {mainLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(l.to)}>
              {l.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors flex items-center gap-1 ${
                moreLinks.some((l) => l.to === location.pathname)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              More <ChevronDown className="h-3 w-3" />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-1 w-44 glass-panel p-1.5 shadow-xl">
                {moreLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMoreOpen(false)}
                    className={`block px-3 py-2 rounded-md text-[13px] font-medium transition-colors ${
                      location.pathname === l.to
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="w-px h-5 bg-border mx-2" />
          <SocialIcons size={14} />
          <Button variant="hero" size="sm" className="ml-3 h-8 text-xs px-4" asChild>
            <Link to="/book">Get Started</Link>
          </Button>
        </nav>

        <button className="lg:hidden text-foreground p-2 -mr-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-card/95 backdrop-blur-2xl border-t border-border/40 px-4 pb-4 pt-2 space-y-0.5 max-h-[80vh] overflow-y-auto">
          {allLinks.map((l) => (
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
          <div className="px-4 py-3">
            <SocialIcons size={16} />
          </div>
          <div className="px-4 pt-1">
            <Button variant="hero" size="lg" className="w-full h-12 text-sm" asChild>
              <Link to="/book" onClick={() => setOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
