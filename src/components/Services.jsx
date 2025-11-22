import { motion } from 'framer-motion'
import { Smartphone, Globe, Bot, Zap } from 'lucide-react'
import Parallax from './Parallax'

const items = [
  {
    icon: Smartphone,
    title: 'App Development',
    desc: 'iOS, Android, and cross‑platform apps engineered for speed, reliability, and growth.'
  },
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'High‑performance marketing sites, SaaS dashboards, and e‑commerce that convert.'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Integrations and agents that cut manual work, boost revenue, and delight customers.'
  },
  {
    icon: Zap,
    title: 'Growth & Analytics',
    desc: 'Funnels, tracking, experimentation, and CRM setups that scale your acquisition.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Parallax speed={0.08}>
          <h2 className="text-center text-3xl sm:text-5xl font-bold text-white tracking-tight">Services built for impact</h2>
        </Parallax>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:bg-white/[0.06] hover:shadow-xl hover:shadow-blue-500/10 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 ring-1 ring-white/10">
                <item.icon className="text-cyan-300" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
