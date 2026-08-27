import logoPic from "../assets/logo.png";

export default function Navigation() {
  return (
    <header className="w-full bg-[#FAFAFA] py-6 border-b border-black/15">
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center w-full">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 justify-start">
          <img src={logoPic} className="w-10 h-10 object-contain" alt="Logo" />
          <span className="font-bold tracking-tight text-lg font-mono">
            N-Solutions
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center justify-center space-x-8 text-xs font-mono font-bold tracking-widest text-black">
          <a href="#about" className="hover:opacity-75 transition-opacity">
            ABOUT
          </a>
          <a href="#services" className="hover:opacity-75 transition-opacity">
            SERVICES
          </a>
          <a href="#tech" className="hover:opacity-75 transition-opacity">
            TECH
          </a>
          <a href="#team" className="hover:opacity-75 transition-opacity">
            TEAM
          </a>
        </nav>

        {/* Right: Action Button */}
        <div className="flex justify-end">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider hover:bg-neutral-800 transition-colors shadow-sm text-center"
          >
            BUILD WITH US
          </a>
        </div>
      </div>
    </header>
  );
}
