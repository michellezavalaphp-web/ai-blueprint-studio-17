import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon, ArrowRight } from "lucide-react";
import LeadCaptureDialog, { hasLeadBeenCaptured } from "@/components/LeadCaptureDialog";
import { TOOL_URLS } from "@/lib/constants";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
}

const ToolCard = ({ icon: Icon, title, description, benefit }: ToolCardProps) => {
  const [showCapture, setShowCapture] = useState(false);
  const toolUrl = TOOL_URLS[title];

  const handleLaunch = () => {
    if (hasLeadBeenCaptured()) {
      if (toolUrl) {
        window.open(toolUrl, "_blank", "noopener,noreferrer");
      }
    } else {
      setShowCapture(true);
    }
  };

  const handleCaptureSuccess = () => {
    if (toolUrl) {
      window.open(toolUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div className="dash-card flex flex-col gap-3 sm:gap-4 group">
        <div className="flex items-start justify-between">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground font-medium bg-muted/60 rounded-full px-2 sm:px-2.5 py-1">
            Tool
          </span>
        </div>
        <h3 className="font-display text-sm sm:text-base font-semibold leading-snug">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-primary font-medium">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          {benefit}
        </div>
        <Button
          variant="hero-outline"
          size="sm"
          className="w-full mt-auto h-10 sm:h-9 text-xs sm:text-sm group-hover:bg-primary/10"
          onClick={handleLaunch}
        >
          Launch Tool <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </Button>
      </div>

      <LeadCaptureDialog
        open={showCapture}
        onOpenChange={setShowCapture}
        toolTitle={title}
        onSubmitSuccess={handleCaptureSuccess}
      />
    </>
  );
};

export default ToolCard;
