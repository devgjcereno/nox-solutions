export default function ProjectCards({ title, description }) {
  return (
    <div className="bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow text-left">
      {/* Image Placeholder Box (Flush with card edges) */}
      <div className="w-full h-56 bg-[#D9D9D9]"></div>

      {/* Card Text Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-lg font-mono font-normal tracking-tight">
            {title}
          </h3>
          <p className="text-black/60 text-xs md:text-sm leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
