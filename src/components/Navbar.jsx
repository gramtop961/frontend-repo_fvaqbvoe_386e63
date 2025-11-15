import { Menu, Ship, Skull, Compass, Anchor } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Item = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? "backdrop-blur-md bg-slate-900/60 shadow-lg" : "bg-transparent"
    }`}>
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 text-white">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-wide">
          <Skull className="w-6 h-6 text-amber-400" />
          <span className="hidden sm:block">Black Pearl</span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-sm">
          <Item href="#home">Home</Item>
          <Item href="#captain">Captain</Item>
          <Item href="#crew">Crew</Item>
          <Item href="#ships">Ships</Item>
          <Item href="#islands">Islands</Item>
          <Item href="#contact">Message in a Bottle</Item>
        </div>
        <div className="flex items-center gap-3">
          <a href="#set-sail" className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-3 py-2 rounded-md transition-colors">
            <Anchor className="w-4 h-4" /> Set Sail
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/15">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 text-white">
          <div className="grid gap-2 rounded-lg bg-slate-900/70 p-2">
            <a href="#home" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Home</a>
            <a href="#captain" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Captain</a>
            <a href="#crew" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Crew</a>
            <a href="#ships" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Ships</a>
            <a href="#islands" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Islands</a>
            <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-white/10">Message in a Bottle</a>
          </div>
        </div>
      )}
    </header>
  );
}
