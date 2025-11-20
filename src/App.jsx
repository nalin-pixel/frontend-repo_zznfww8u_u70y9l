import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Process from './components/Process'
import Estimator from './components/Estimator'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <ValueProps />

      <section className="py-16 md:py-24 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold">Cosa significa “sito web moderno”</h3>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>• Responsive e mobile-friendly</li>
                <li>• Velocissimo (&lt; 2s)</li>
                <li>• SEO-friendly</li>
                <li>• Design contemporaneo</li>
                <li>• Sicuro (HTTPS, GDPR)</li>
                <li>• Multilingua</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold">Problemi dei siti obsoleti</h3>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>• Perdono clienti (75% giudica dal design)</li>
                <li>• Non funzionano su mobile (60% del traffico)</li>
                <li>• Non si posizionano (93% parte da un motore di ricerca)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold">Metriche & Performance</h3>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>• &lt; 2s tempo di caricamento</li>
                <li>• +50% tasso di conversione medio</li>
                <li>• 3–5x lead con SEO mirato Ticino/CH</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <Estimator />

      <section className="py-16 md:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Per chi è ideale</h2>
          <p className="mt-3 text-white/70 max-w-2xl">E-commerce, siti aziendali, portfolio, landing page. Settori: sanità, educazione, finanza, manifattura, corporate.</p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-white/80">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">E-commerce</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">Aziendale</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">Portfolio</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">Landing</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">Educazione</div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">Finanza</div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Credibilità</h2>
          <p className="mt-3 text-white/70">Ciobai collabora con aziende e istituti svizzeri come:</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Tecnico Informatico','Adwater','TisaLabs','Cagnavin','Drytech',''].map((c, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-white/80">
                {c || 'Partner' + (i+1)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">FAQ principali</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Tempi</h3>
              <p className="text-white/70 mt-2">4–8 settimane. Possibile consegna veloce in 2–3 settimane.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Mobile e SEO</h3>
              <p className="text-white/70 mt-2">Siti sempre mobile-friendly. SEO incluso.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">CMS</h3>
              <p className="text-white/70 mt-2">CMS per aggiornamenti autonomi. Supporto continuo disponibile.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Hosting e dominio</h3>
              <p className="text-white/70 mt-2">Possibilità di gestione completa di hosting e dominio.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
