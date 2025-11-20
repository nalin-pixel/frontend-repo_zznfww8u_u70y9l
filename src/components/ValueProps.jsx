import { Zap, Gauge, FileCheck2, Languages, LineChart, Users } from 'lucide-react'

function ValueProps() {
  const items = [
    { icon: Zap, title: 'Velocità lampo', desc: 'Siti che si caricano in meno di 2 secondi' },
    { icon: Gauge, title: 'SEO avanzato', desc: 'Ottimizzato per traffico e conversioni' },
    { icon: FileCheck2, title: 'Standard svizzeri', desc: 'GDPR, sicurezza, hosting affidabile' },
    { icon: Languages, title: 'Approccio locale', desc: 'Italiano, tedesco, francese e SEO Ticino' },
    { icon: LineChart, title: 'ROI dimostrabile', desc: '3–5x lead, +50–70% conversioni' },
    { icon: Users, title: 'Per PMI e aziende', desc: 'E-commerce, corporate, portfolio' },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Proposta di Valore</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Sviluppo web professionale con tecnologie moderne. Risultati immediati e crescita a lungo termine.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-blue-300" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
