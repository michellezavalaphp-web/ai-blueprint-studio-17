interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ tag, title, description }: SectionHeadingProps) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    {tag && (
      <span className="badge-tag mb-4 inline-flex">
        {tag}
      </span>
    )}
    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h2>
    {description && <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeading;
