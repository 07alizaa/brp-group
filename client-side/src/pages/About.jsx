export default function About() {
  return (
    <div className="min-h-screen bg-ivory text-text-primary pt-24">
      <div className="section-padding container-wide py-16">
        <h1 className="font-display text-display-xl mb-4">About Us</h1>
        <p className="font-body text-lg text-text-muted mb-12">Discover the story behind B.R.P. Group.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-6">Who We Are</h2>
            <p className="font-body text-base text-text-muted leading-relaxed mb-4">
              B.R.P. Group is a diversified investment and business conglomerate with a strong presence across multiple sectors in Nepal.
            </p>
            <p className="font-body text-base text-text-muted leading-relaxed">
              Our commitment to excellence, innovation, and social responsibility guides every decision we make.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-6">Our Vision</h2>
            <p className="font-body text-base text-text-muted leading-relaxed mb-4">
              To be a leading investment group that creates sustainable value for all stakeholders while contributing to Nepal's economic development.
            </p>
            <p className="font-body text-base text-text-muted leading-relaxed">
              We believe in building long-term partnerships based on trust, transparency, and mutual growth.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-12">
          <h2 className="font-display text-2xl text-charcoal mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-display text-lg text-terra mb-2">Integrity</h3>
              <p className="font-body text-sm text-text-muted">Operating with honesty and ethical principles.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-terra mb-2">Innovation</h3>
              <p className="font-body text-sm text-text-muted">Embracing change and seeking new opportunities.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-terra mb-2">Excellence</h3>
              <p className="font-body text-sm text-text-muted">Striving for the highest quality in all endeavors.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-terra mb-2">Community</h3>
              <p className="font-body text-sm text-text-muted">Contributing positively to society and environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
