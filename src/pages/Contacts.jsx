export default function Contacts() {
  return (
    <section className="bg-[#FAFAFA] text-black py-20 px-8 md:px-24 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full bg-[#121212] text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-xl">
        {/* Left Side: Subtitle, Title, and Description */}
        <div className="flex flex-col max-w-xl">
          <span className="text-xs font-medium font-mono uppercase tracking-widest text-white/50 mb-3">
            LET'S WORK TOGETHER
          </span>
          <h2 className="font-mono text-3xl font-bold md:text-5xl  tracking-tight mb-4 leading-tight">
            READY TO BUILD <br />
            SOMETHING GREAT?
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            Whether it's a web app, mobile product, or a custom PC rig—reach out
            and let's make it happen.
          </p>
        </div>

        {/* Right Side: Action Button */}
        <div>
          <a
            href="mailto:contact@noxsolutions.dev"
            className="inline-block bg-white text-black font-bold text-xs md:text-sm tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-neutral-200 transition-colors shadow-sm"
          >
            BUILD WITH US &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
