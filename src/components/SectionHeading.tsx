interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ tag, title, description }: SectionHeadingProps) => (
  <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
    {tag && (
      <span className="badge-tag mb-4 sm:mb-5 inline-flex">
        {tag}
      </span>
    )}
    <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-bold mb-3 sm:mb-4 leading-[1.15]">{title}</h2>
    {description && (
      <>
        <div className="section-divider mb-4 sm:mb-5" />
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto">{description}</p>
      </>
    )}
  </div>
);

export default SectionHeading;
