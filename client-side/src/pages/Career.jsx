export default function Career() {
  return (
    <div className="min-h-screen bg-ivory text-text-primary pt-24">
      <div className="section-padding container-wide py-16">
        <h1 className="font-display text-display-xl mb-4">Careers</h1>
        <p className="font-body text-lg text-text-muted mb-12">Join our growing team and be part of something special.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8">
            <h3 className="font-display text-2xl text-terra mb-2">100+</h3>
            <p className="font-body text-sm text-text-muted">Employees Across Group</p>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h3 className="font-display text-2xl text-terra mb-2">Multiple</h3>
            <p className="font-body text-sm text-text-muted">Career Opportunities</p>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h3 className="font-display text-2xl text-terra mb-2">Growth</h3>
            <p className="font-body text-sm text-text-muted">Professional Development</p>
          </div>
        </div>

        <h2 className="font-display text-2xl text-charcoal mb-8">Why Work With Us?</h2>
        <div className="space-y-4 mb-12">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-terra mt-2 flex-shrink-0"></div>
            <p className="font-body text-base text-text-muted">Competitive compensation and benefits package</p>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-terra mt-2 flex-shrink-0"></div>
            <p className="font-body text-base text-text-muted">Opportunities for professional growth and development</p>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-terra mt-2 flex-shrink-0"></div>
            <p className="font-body text-base text-text-muted">Inclusive and collaborative work environment</p>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-terra mt-2 flex-shrink-0"></div>
            <p className="font-body text-base text-text-muted">Impact on meaningful projects and initiatives</p>
          </div>
        </div>

        <button className="px-8 py-3 bg-terra text-white rounded-lg font-body font-medium hover:bg-terra-dark transition-colors">
          View Open Positions
        </button>
      </div>
    </div>
  )
}
