interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ tag, title, description }: SectionHeadingProps) => (
  <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
    {tag && (
      <span className="badge-tag mb-3 sm:mb-4 inline-flex">
        {tag}
      </span>
    )}
    <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">{title}</h2>
    {description && <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeading;
