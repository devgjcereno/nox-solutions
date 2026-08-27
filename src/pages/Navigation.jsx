import { useState } from "react";
import logoPic from "../assets/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAFAFA] border-b border-black/15 px-6 md:px-12 py-5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full relative">
        {/* Left: Brand Logo */}
        <div className="flex items-center space-x-2 shrink-0">
          <img src={logoPic} className="w-9 h-9 object-contain" alt="Logo" />
          <span className="font-bold tracking-tight text-base md:text-lg font-mono">
            N-Solutions
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono font-bold tracking-widest text-black absolute left-1/2 -translate-x-1/2">
          <a href="#about" className="hover:opacity-60 transition-opacity">
            ABOUT
          </a>
          <a href="#services" className="hover:opacity-60 transition-opacity">
            SERVICES
          </a>
          <a href="#tech" className="hover:opacity-60 transition-opacity">
            TECH
          </a>
          <a href="#team" className="hover:opacity-60 transition-opacity">
            TEAM
          </a>
        </nav>

        {/* Right Desktop: Action Button */}
        <div className="hidden md:flex justify-end shrink-0">
          <a
            href="#contact"
            className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider hover:bg-neutral-800 transition-colors shadow-sm text-center"
          >
            BUILD WITH US
          </a>
        </div>

        {/* Right Mobile: Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {/* Top Line */}
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          {/* Middle Line */}
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-200 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Bottom Line */}
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden w-full pt-6 pb-4 flex flex-col items-center gap-5 border-t border-black/10 mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm font-bold tracking-widest hover:opacity-60 transition-opacity"
          >
            ABOUT
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm font-bold tracking-widest hover:opacity-60 transition-opacity"
          >
            SERVICES
          </a>
          <a
            href="#tech"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm font-bold tracking-widest hover:opacity-60 transition-opacity"
          >
            TECH
          </a>
          <a
            href="#team"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm font-bold tracking-widest hover:opacity-60 transition-opacity"
          >
            TEAM
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs bg-black text-white py-3 rounded-full text-xs font-mono font-bold tracking-wider text-center hover:bg-neutral-800 transition-colors mt-2"
          >
            BUILD WITH US
          </a>
        </div>
      )}
    </header>
  );
}
