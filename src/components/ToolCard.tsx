import { Button } from "@/components/ui/button";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
}

const ToolCard = ({ icon: Icon, title, description, benefit }: ToolCardProps) => (
  <div className="dash-card flex flex-col gap-4 group">
    <div className="flex items-start justify-between">
      <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium bg-muted/60 rounded-full px-2.5 py-1">
        Tool
      </span>
    </div>
    <h3 className="font-display text-base font-semibold leading-snug">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
    <div className="flex items-center gap-2 text-xs text-primary font-medium">
      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      {benefit}
    </div>
    <Button variant="hero-outline" size="sm" className="w-full mt-auto group-hover:bg-primary/10">
      Launch Tool <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
    </Button>
  </div>
);

export default ToolCard;
