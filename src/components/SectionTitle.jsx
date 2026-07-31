export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent sm:mb-4 sm:text-[11px] sm:tracking-[0.34em]">
        {eyebrow}
      </p>
      <h2 className="font-display text-[2rem] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.35rem] sm:leading-[1.02]">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-[40rem] text-base leading-7 text-steel sm:mt-6 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}
