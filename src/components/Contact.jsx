import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // This demo sends an email-like payload to a fake endpoint.
      // Replace with your own backend or email service later.
      await new Promise((res) => setTimeout(res, 600))
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(15,118,110,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-white tracking-tight">Tell us about your project</h2>
        <p className="mt-3 text-center text-slate-300">We’ll get back within 24 hours with a tailored plan and quote.</p>
        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40" />
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40" />
          <textarea name="details" rows={5} required placeholder="What are you building?" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-slate-400 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40" />
          <button disabled={status==='loading'} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.99] transition">
            {status === 'loading' ? 'Sending…' : 'Get proposal'}
          </button>
          {status === 'success' && (
            <p className="text-emerald-300">Thanks! We’ll reach out shortly.</p>
          )}
          {status === 'error' && (
            <p className="text-red-300">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
