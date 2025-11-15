import { Ship, Users, Compass, Map, Anchor, Star } from "lucide-react";

export function Captain() {
  return (
    <section id="captain" className="relative py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Captain of Code</h2>
            <p className="mt-4 text-slate-300">A fearless navigator of frontend seas and backend storms, steering projects through treacherous deadlines and unknown requirements with a steady hand and a sharp eye.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400"/> React, Tailwind, Framer Motion</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400"/> FastAPI, MongoDB, REST</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400"/> 3D Spline scenes</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400"/> Performance & Accessibility</li>
            </ul>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-amber-500/20 to-blue-500/20 ring-1 ring-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-40 rounded-full bg-amber-400/90 blur-3xl"/>
            </div>
            <div className="absolute inset-0 p-6 flex items-end">
              <blockquote className="text-slate-200 italic">“Bring me that horizon.”</blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Crew() {
  const crew = [
    { name: 'Quartermaster', desc: 'Keeps the ship shipshape — project planning and delivery.', icon: Users },
    { name: 'Navigator', desc: 'Finds the fastest routes — system design and architecture.', icon: Compass },
    { name: 'Boatswain', desc: 'Rigging and sails — CI/CD and DevOps.', icon: Anchor },
  ];
  return (
    <section id="crew" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Trusted Crew</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {crew.map((role) => (
            <div key={role.name} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <role.icon className="w-6 h-6 text-amber-400" />
              <h3 className="mt-3 font-semibold">{role.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ships() {
  const ships = [
    { name: 'Black Pearl', desc: 'Lightning fast performance and slick animations.' },
    { name: 'Flying Dutchman', desc: 'Relentless uptime with resilient architecture.' },
    { name: 'Empress', desc: 'Graceful experiences with refined aesthetics.' },
  ];
  return (
    <section id="ships" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Fleet of Projects</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {ships.map((ship) => (
            <div key={ship.name} className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="aspect-video bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.15),transparent),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.15),transparent)]" />
              <div className="p-6">
                <h3 className="font-semibold">{ship.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{ship.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Islands() {
  const islands = [
    { name: 'Isla de Muerta', desc: 'Hidden treasures: niche utilities and microtools.' },
    { name: 'Tortuga', desc: 'Lively hubs: dashboards and social prototypes.' },
    { name: 'Shipwreck Cove', desc: 'Battle-tested code: production-scale features.' },
  ];
  return (
    <section id="islands" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Islands of Inspiration</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {islands.map((island) => (
            <div key={island.name} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-semibold">{island.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{island.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Message in a Bottle</h2>
            <p className="mt-4 text-slate-300">Cast your note across the waves. I’ll respond faster than a tailwind.</p>
          </div>
          <form className="grid gap-3">
            <input className="bg-white/5 rounded-md px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-amber-400/40" placeholder="Your name" />
            <input className="bg-white/5 rounded-md px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-amber-400/40" placeholder="Contact email" />
            <textarea rows={5} className="bg-white/5 rounded-md px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-amber-400/40" placeholder="Your message" />
            <button className="justify-self-start inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">Send the Bottle</button>
          </form>
        </div>
      </div>
    </section>
  );
}
