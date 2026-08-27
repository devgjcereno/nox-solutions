import DifferenceCards from "../components/DifferenceCards";

export default function Difference() {
  const points = [
    {
      id: "01",
      title: "WE ACTUALLY SHIP",
      description:
        "No endless drafts or feature bloat. We set a scope, commit to it, and deliver working software.",
    },
    {
      id: "02",
      title: "STUDENT-LED, REAL-WORLD BUILT",
      description:
        "Every project is built by developers who've launched real products, not just academic exercises.",
    },
    {
      id: "03",
      title: "END-TO-END OWNERSHIP",
      description:
        "From initial wireframe to deployment, we handle the full stack so nothing falls through the cracks.",
    },
    {
      id: "04",
      title: "CLEAR COMMUNICATION",
      description:
        "No jargon, no ghost replies. You always know where the project stands.",
    },
  ];

  return (
    <section className="bg-[#121212] text-white min-h-196.25 py-20 px-8 md:px-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-20 font-mono">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3 block">
            WHAT US
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            WHAT MAKES THE <br />
            GROUP DIFFERENT
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {points.map((item) => (
            <DifferenceCards
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
