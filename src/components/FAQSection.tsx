import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import SectionHeading from "@/components/SectionHeading";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  id: string;
  tag?: string;
  title: string;
  description?: string;
  items: FAQItem[];
  variant?: "light" | "muted";
}

const FAQSection = ({ id, tag, title, description, items, variant = "muted" }: FAQSectionProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };

  return (
    <section
      className={`section-padding ${variant === "light" ? "section-light" : "bg-secondary/20"}`}
    >
      <SchemaMarkup id={`faq-${id}`} schema={schema} />
      <div className="container mx-auto max-w-3xl">
        <SectionHeading tag={tag} title={title} description={description} />
        <Accordion type="single" collapsible className="w-full space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-border bg-background px-5 sm:px-6"
            >
              <AccordionTrigger className="text-left font-display text-sm sm:text-base font-semibold hover:no-underline py-4 sm:py-5">
                {it.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-5">
                {it.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
