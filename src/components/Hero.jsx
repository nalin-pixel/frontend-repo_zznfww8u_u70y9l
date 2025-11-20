import Spline from '@splinetool/react-spline'
import { Sparkles, Rocket, ShieldCheck } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 lg:pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Agenzia IA + Sviluppo Web in Ticino
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Ciobai — siti web moderni, veloci e ottimizzati per il SEO
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Aumenta visibilità, credibilità e conversioni. Standard svizzeri (GDPR, sicurezza, hosting affidabile) e approccio locale in italiano, tedesco e francese.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#preventivo" className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-500/20 transition">
              <Rocket className="mr-2 h-5 w-5" />
              Preventivo in 30 secondi
            </a>
            <a href="mailto:alex@ciobai.ch" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 px-5 py-3 font-semibold">
              <ShieldCheck className="mr-2 h-5 w-5 text-green-300" />
              Consulenza gratuita
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">Tempo di caricamento <2s • SEO avanzato • Multilingua • CMS</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
