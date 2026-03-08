import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
}

const ToolCard = ({ icon: Icon, title, description, benefit }: ToolCardProps) => (
  <div className="glass rounded-lg p-6 flex flex-col gap-4 hover:glow-border transition-all duration-300 group">
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="font-display text-lg font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground flex-1">{description}</p>
    <p className="text-xs text-primary font-medium">{benefit}</p>
    <Button variant="hero-outline" size="sm" className="w-full mt-auto">
      Launch Tool
    </Button>
  </div>
);

export default ToolCard;
