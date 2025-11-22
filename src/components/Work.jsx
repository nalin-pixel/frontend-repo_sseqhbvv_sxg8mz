import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E‑commerce platform',
    tag: 'Web',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Mobile banking app',
    tag: 'App',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI support agent',
    tag: 'AI',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Selected work</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur ring-1 ring-white/20">Work with us</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#contact" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur">
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="text-xs text-cyan-300/80">{p.tag}</div>
                <div className="text-lg font-semibold text-white">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
