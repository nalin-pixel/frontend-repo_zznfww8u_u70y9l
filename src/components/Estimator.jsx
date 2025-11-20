import { useMemo, useState } from 'react'
import { Calculator, ChevronRight } from 'lucide-react'

const OPTIONS = {
  tipo: [
    { id: 'onepager', label: 'One pager', price: 1200 },
    { id: 'vetrina', label: 'Sito vetrina', price: 2400 },
    { id: 'aziendale', label: 'Aziendale', price: 3800 },
    { id: 'ecommerce', label: 'E-commerce', price: 6200 },
    { id: 'custom', label: 'Personalizzato', price: 0 },
  ],
  lingue: [
    { id: '1', label: '1 lingua', price: 0 },
    { id: '2', label: '2 lingue', price: 350 },
    { id: '3', label: '3 lingue', price: 600 },
  ],
  seo: [
    { id: 'base', label: 'SEO base', price: 0 },
    { id: 'pro', label: 'SEO avanzato', price: 450 },
  ],
  cms: [
    { id: 'no', label: 'Senza CMS', price: 0 },
    { id: 'yes', label: 'Con CMS', price: 300 },
  ],
}

function Estimator() {
  const [form, setForm] = useState({ tipo: 'onepager', lingue: '1', seo: 'base', cms: 'no' })

  const total = useMemo(() => {
    const base = OPTIONS.tipo.find(o => o.id === form.tipo)?.price || 0
    const lingue = OPTIONS.lingue.find(o => o.id === form.lingue)?.price || 0
    const seo = OPTIONS.seo.find(o => o.id === form.seo)?.price || 0
    const cms = OPTIONS.cms.find(o => o.id === form.cms)?.price || 0
    return base + lingue + seo + cms
  }, [form])

  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  return (
    <section id="preventivo" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6 md:p-10">
          <div className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-blue-300" />
            <h2 className="text-2xl md:text-4xl font-bold">Preventivo in 30 secondi</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <label className="block text-sm text-white/70 mb-1">Tipologia sito</label>
                <select value={form.tipo} onChange={update('tipo')} className="w-full rounded-lg bg-slate-800 border border-white/10 px-3 py-2">
                  {OPTIONS.tipo.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Lingue</label>
                <select value={form.lingue} onChange={update('lingue')} className="w-full rounded-lg bg-slate-800 border border-white/10 px-3 py-2">
                  {OPTIONS.lingue.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">SEO</label>
                <select value={form.seo} onChange={update('seo')} className="w-full rounded-lg bg-slate-800 border border-white/10 px-3 py-2">
                  {OPTIONS.seo.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">CMS</label>
                <select value={form.cms} onChange={update('cms')} className="w-full rounded-lg bg-slate-800 border border-white/10 px-3 py-2">
                  {OPTIONS.cms.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </div>

              <a href="mailto:alex@ciobai.ch?subject=Preventivo%20rapido%20Ciobai&body=Tipo:%20" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
                Invia dettagli via email
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-800 p-6 flex flex-col items-center justify-center text-center">
              <p className="text-white/70">Stima</p>
              <p className="mt-2 text-5xl font-extrabold">CHF {total.toLocaleString('it-CH')}</p>
              <p className="mt-2 text-white/60">IVA esclusa • Include performance, SEO e responsive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Estimator
