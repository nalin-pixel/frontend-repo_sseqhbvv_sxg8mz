import Parallax from './Parallax'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Parallax speed={0.06}>
          <h2 className="text-center text-3xl sm:text-5xl font-bold text-white tracking-tight">Why partner with inityo.in</h2>
        </Parallax>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Strategy to ship</h3>
            <p className="mt-2 text-slate-300">From discovery to MVP to scale — our process is calibrated for speed without sacrificing craft.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Modern stack</h3>
            <p className="mt-2 text-slate-300">React, Next.js, Flutter, FastAPI, PostgreSQL, and the latest AI tooling to give you an edge.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Obsessed with outcomes</h3>
            <p className="mt-2 text-slate-300">Design that converts, performance that ranks, automations that save hours — we focus on business results.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Clear communication</h3>
            <p className="mt-2 text-slate-300">Weekly updates, transparent roadmaps, and fast iterations. You’ll always know what’s next.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
