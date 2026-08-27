import WhatWeDoCards from "../components/WhatWeDoCards";

export default function WhatWeDo() {
  const services = [
    {
      id: "01",
      title: "WEB DEVELOPMENT",
      description: "Modern, responsive, and scalable web applications.",
    },
    {
      id: "02",
      title: "ANDROID APPLICATION",
      description: "Applications and interfaces designed for mobile users.",
    },
    {
      id: "03",
      title: "PC BUILD TECHNICIAN",
      description:
        "Assembles custom desktop computers and diagnoses software and hardware problems.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-196.25 py-20 px-8 md:px-24 flex flex-col justify-center border-b border-black/15 bg-[#FAFAFA] text-black"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 font-mono">
          WHAT WE CAN DO
        </h2>

        {/* Services List */}
        <div className="flex flex-col space-y-12">
          {services.map((service) => (
            <WhatWeDoCards
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
