function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold">Ciobai — Agenzia leader nell’automazione IA e sviluppo web in Ticino</h3>
            <p className="text-white/70 mt-2">Posizione: Bellinzona, Ticino, Switzerland</p>
          </div>
          <div className="text-white/80">
            <p>Email: <a href="mailto:alex@ciobai.ch" className="underline">alex@ciobai.ch</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
