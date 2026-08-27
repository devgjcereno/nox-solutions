export default function WhatWeDoCards({ id, title, description }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start border-b border-black/10 pb-10">
      {/* Service Number */}
      <span className="text-xl font-mono text-black/60 md:w-24 mb-3 md:mb-0 pt-0.5">
        {id}
      </span>

      {/* Service Content */}
      <div className="flex-1 flex flex-col items-start">
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-xl md:text-2xl font-medium tracking-wide">
            {title}
          </h3>
          <p className="text-black/60 max-w-xl font-normal text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
