import { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function HeroSection() {
  const fullText = "Creating Innovation Through Digital Solutions";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 75);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="bg-[#FAFAFA] text-black min-h-screen font-sans selection:bg-black selection:text-white flex flex-col justify-between border-b border-black/15 overflow-hidden">
      {/* Navigation sits naturally at the top */}
      <Navigation />

      {/* Hero Content centered independently with uniform margins */}
      <section className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-8 md:px-24 py-12 text-center w-full">
        {/* Main Headline with Smooth Typewriter Effect */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.1] mb-6 font-mono max-w-5xl">
          <span className="inline">
            {displayText}
            <span
              className={`inline-block w-2.5 sm:w-4 h-[0.8em] bg-black ml-1.5 align-middle ${currentIndex === fullText.length ? "animate-pulse" : ""}`}
            ></span>
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-neutral-600 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
          A team of developers and creatives building modern websites,
          applications, and digital solutions.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300 fill-mode-both">
          {/* Button with Seamless Infinite Shimmer */}
          <a
            href="#projects"
            className="relative group overflow-hidden w-full sm:w-auto bg-neutral-300 text-black px-8 py-3.5 rounded-full text-xs font-bold tracking-widest transition-all duration-300 text-center shadow-md hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:scale-[1.02]"
          >
            {/* Seamless sliding light streak */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[smooth-shimmer_3s_linear_infinite]"></span>
            <span className="relative z-10">VIEW OUR WORKS</span>
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto bg-black text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest hover:bg-neutral-800 transition-all text-center shadow-sm hover:scale-[1.02]"
          >
            WHAT WE OFFER
          </a>
        </div>
      </section>
    </div>
  );
}
