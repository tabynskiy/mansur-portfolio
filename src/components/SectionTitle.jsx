export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-[2.4rem] leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.35rem]">
        {title}
      </h2>
      {description ? <p className="mt-6 max-w-[40rem] text-lg leading-8 text-steel">{description}</p> : null}
    </div>
  );
}
