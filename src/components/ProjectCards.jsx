export default function ProjectCards({ title, description, image }) {
  return (
    <div className="bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow text-left h-full">
      {/* Aspect Ratio Container */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-[#D9D9D9]">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={image}
          alt={title}
        />
      </div>

      {/* Card Text Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
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
