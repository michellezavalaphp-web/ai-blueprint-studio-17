import { Youtube, Instagram, Facebook } from "lucide-react";

/* Custom X (formerly Twitter) icon */
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* Custom TikTok icon */
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
  </svg>
);

const socials = [
  { icon: Youtube, href: "https://youtube.com/@goaiinnovation", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/goaiinnovation", label: "Instagram" },
  { icon: XIcon, href: "https://x.com/goaiinnovation", label: "X" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@goaiinnovation", label: "TikTok" },
];

interface SocialIconsProps {
  className?: string;
  size?: number;
}

const SocialIcons = ({ className = "", size = 18 }: SocialIconsProps) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <s.icon size={size} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
