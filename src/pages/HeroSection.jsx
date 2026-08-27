import Navigation from "./Navigation";

export default function HeroSection() {
  return (
    <div className="bg-[#FAFAFA] text-black min-h-screen font-sans selection:bg-black selection:text-white flex flex-col justify-between border-b border-black/15">
      {/* Navigation sits naturally at the top */}
      <Navigation />

      {/* Hero Content centered independently with uniform margins */}
      <section className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-8 md:px-24 py-12 text-center w-full">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.1] mb-6 font-mono">
          Creating Innovation Through Digital Solutions
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-neutral-600 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal">
          A team of developers and creatives building modern websites,
          applications, and digital solutions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-neutral-300 text-black px-8 py-3.5 rounded-full text-xs font-bold tracking-widest hover:bg-neutral-400 transition-all text-center"
          >
            VIEW OUR WORKS
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest hover:bg-neutral-800 transition-all text-center"
          >
            WHAT WE OFFER
          </a>
        </div>
      </section>
    </div>
  );
}
