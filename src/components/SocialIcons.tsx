import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://x.com", label: "X / Twitter" },
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
