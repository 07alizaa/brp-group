function App() {
  return (
    <div className="min-h-screen bg-navy text-text-primary font-body">
      <header className="section-padding py-8 flex items-center justify-between">
        <h1 className="text-display-lg font-display">BRP Group — Prototype</h1>
        <nav className="space-x-6 text-text-primary/80">
          <a className="hover:text-text-primary" href="#">Home</a>
          <a className="hover:text-text-primary" href="#">Ventures</a>
          <a className="hover:text-text-primary" href="#">About</a>
          <a className="hover:text-text-primary" href="#">Contact</a>
        </nav>
      </header>

      <main className="section-padding">
        <section className="bg-slate p-8 rounded-xl mb-8">
          <h2 className="text-display-md font-display text-cream">Building Nepal's Tomorrow, Since 1980</h2>
          <p className="mt-4 text-text-primary/90 max-w-2xl">A short demo area to validate colors, typography and spacing. Slate background with copper accent and sector color swatches follow below.</p>
          <div className="mt-6 flex gap-4">
            <button className="bg-copper hover:bg-copper-dark text-navy px-6 py-2 rounded-md font-semibold">Explore Ventures</button>
            <button className="border border-copper text-copper px-6 py-2 rounded-md">Our Story</button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-slate-light rounded-lg">
            <h3 className="text-2xl font-display">Stats</h3>
            <div className="mt-4 flex gap-6">
              <div>
                <div className="text-4xl font-bold text-copper">45+</div>
                <div className="text-text-primary/80">Years</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-education">7</div>
                <div className="text-text-primary/80">Ventures</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-technology">2nd</div>
                <div className="text-text-primary/80">Generation</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-light rounded-lg">
            <h3 className="text-2xl font-display">Buttons</h3>
            <div className="mt-4 flex gap-4">
              <button className="bg-copper hover:bg-copper-dark text-navy px-4 py-2 rounded">Primary</button>
              <button className="bg-cream text-slate px-4 py-2 rounded">Ghost</button>
              <button className="border border-education text-education px-4 py-2 rounded">Sector</button>
            </div>
          </div>

          <div className="p-6 bg-slate-light rounded-lg">
            <h3 className="text-2xl font-display">Typography</h3>
            <p className="mt-3 text-text-primary/90">Heading and body fonts are set via Tailwind tokens: <span className="font-display">Display</span> and <span className="font-body">Inter (body)</span>.</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-display-sm font-display mb-4">Sector Swatches</h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded bg-education text-cream">Education</span>
            <span className="px-4 py-2 rounded bg-technology text-cream">Technology</span>
            <span className="px-4 py-2 rounded bg-finance text-cream">Finance</span>
            <span className="px-4 py-2 rounded bg-realestate text-cream">Real Estate</span>
            <span className="px-4 py-2 rounded bg-copper text-navy">Copper Accent</span>
          </div>
        </section>
      </main>

      <footer className="section-padding py-8 border-t border-slate-light mt-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-text-primary/80">© BRP Group prototype</div>
          <div className="text-text-primary/80">info@brpgroup.com.np</div>
        </div>
      </footer>
    </div>
  )
}

export default App
