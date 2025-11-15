import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Captain, Crew, Ships, Islands, Contact } from './components/Sections'

function App() {
  return (
    <div className="bg-slate-950 selection:bg-amber-400 selection:text-slate-900">
      <Navbar />
      <Hero />
      <Captain />
      <Crew />
      <Ships />
      <Islands />
      <Contact />
      <footer className="py-10 text-center text-slate-400 bg-slate-950">© {new Date().getFullYear()} Black Pearl — Crafted on the high seas.</footer>
    </div>
  )
}

export default App