interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ tag, title, description }: SectionHeadingProps) => (
  <div className="text-center max-w-2xl mx-auto mb-12">
    {tag && (
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
        {tag}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    {description && <p className="text-muted-foreground">{description}</p>}
  </div>
);

export default SectionHeading;
