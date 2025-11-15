import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        <div className="text-white max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Pirates of the Caribbean Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-slate-200"
          >
            Ships. Oceans. Islands. Legends. Dive into a swashbuckling showcase of craft and code.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#captain" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400 transition-colors">Meet the Captain</a>
            <a href="#ships" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-white hover:bg-white/10">View the Fleet</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
