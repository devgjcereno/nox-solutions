import logoPic from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="border-t border-black/15 bg-[#FAFAFA] py-12 px-8 md:px-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand Logo/Name */}

        <div className="font-black tracking-wider text-sm md:text-base flex flex-row justify-center items-center gap-2">
          <img src={logoPic} alt="" className="w-10 h-10" />
          <p className="font-mono">N-Solutions</p>
        </div>

        {/* Center: Copyright Notice */}
        <div className="text-xs md:text-sm text-black/50">
          &copy; {new Date().getFullYear()} Nox Solutions. All rights reserved.
        </div>

        {/* Right: Quick Navigation Links */}
        <div className="flex gap-8 text-xs font-mono uppercase tracking-wider text-black/70">
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-black transition-colors">
            Projects
          </a>
          <a href="#team" className="hover:text-black transition-colors">
            Team
          </a>
        </div>
      </div>
    </footer>
  );
}
