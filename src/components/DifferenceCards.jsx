export default function DifferenceCards({ id, title, description }) {
  return (
    <div className="flex flex-col border-t border-white/10 pt-6">
      <span className="text-xs font-mono text-white/40 mb-2">{id}</span>
      <h3 className="text-lg md:text-xl font-semibold tracking-wide mb-3">
        {title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
