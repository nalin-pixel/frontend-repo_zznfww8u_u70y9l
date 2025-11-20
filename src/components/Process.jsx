import { Map, PenTool, Code2, Rocket } from 'lucide-react'

function Process() {
  const steps = [
    { icon: Map, title: 'Pianificazione e scoperta', desc: 'Analisi aziendale, competitor, requisiti' },
    { icon: PenTool, title: 'Design & Prototipazione', desc: 'Wireframe, UI/UX, prototipi interattivi' },
    { icon: Code2, title: 'Sviluppo & Test', desc: 'Frontend moderno, backend, test multipiattaforma' },
    { icon: Rocket, title: 'Lancio & Supporto', desc: 'SEO, performance, manutenzione continua' },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Processo di Lavoro</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Dal concept al lancio, un percorso trasparente con tempi chiari e risultati misurabili.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <Icon className="h-6 w-6 text-blue-300" />
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[420px] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-xl font-semibold">Timeline tipica</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>• Pianificazione: 1–2 settimane</li>
              <li>• Sviluppo: 3–6 settimane</li>
              <li>• Lancio: 1 settimana</li>
              <li className="text-white/70">Possibile consegna veloce in 2–3 settimane</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
