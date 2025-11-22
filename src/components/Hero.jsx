import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(800px_400px_at_90%_20%,rgba(37,99,235,0.15),transparent_60%)]" />

      {/* Spline 3D */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur ring-1 ring-white/20">Infinity-grade digital products</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Build. Automate. Scale.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 leading-relaxed">
            inityo.in designs and ships world-class apps, websites, and AI automations that attract customers across the internet. We turn ambitious ideas into fast, polished, and measurable products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.99] transition">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-white font-medium backdrop-blur ring-1 ring-white/20 hover:bg-white/15 transition">
              Our services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle gradient overlay to ensure text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
    </section>
  )
}
