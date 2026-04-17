export default function SectionHeader({ eyebrow, title, copy, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-5">{title}</h2>
      {copy ? <p className="section-copy mt-5">{copy}</p> : null}
    </div>
  );
}
