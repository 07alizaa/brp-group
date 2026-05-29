export default function Contact() {
  return (
    <div className="min-h-screen bg-ivory text-text-primary pt-24">
      <div className="section-padding container-wide py-16">
        <h1 className="font-display text-display-xl mb-4">Get in Touch</h1>
        <p className="font-body text-lg text-text-muted mb-12">We'd love to hear from you. Reach out to us today.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-8">Contact Information</h2>
            
            <div className="mb-8">
              <h3 className="font-body text-xs font-medium tracking-widest uppercase text-terra mb-2">Email</h3>
              <a href="mailto:info@brpgroup.com.np" className="font-body text-lg text-charcoal hover:text-terra transition-colors">
                info@brpgroup.com.np
              </a>
            </div>

            <div className="mb-8">
              <h3 className="font-body text-xs font-medium tracking-widest uppercase text-terra mb-2">Phone</h3>
              <p className="font-body text-lg text-charcoal">+977 01 4535691</p>
              <p className="font-body text-lg text-charcoal">+977 01 4516390</p>
            </div>

            <div className="mb-8">
              <h3 className="font-body text-xs font-medium tracking-widest uppercase text-terra mb-2">Address</h3>
              <p className="font-body text-lg text-charcoal">Baluwatar, Kathmandu</p>
              <p className="font-body text-lg text-charcoal">Nepal 44600</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-charcoal mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="font-body text-sm text-text-muted block mb-2">Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-border-warm rounded-lg focus:outline-none focus:border-terra" />
              </div>
              <div>
                <label className="font-body text-sm text-text-muted block mb-2">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-border-warm rounded-lg focus:outline-none focus:border-terra" />
              </div>
              <div>
                <label className="font-body text-sm text-text-muted block mb-2">Message</label>
                <textarea rows="5" placeholder="Your message here..." className="w-full px-4 py-3 border border-border-warm rounded-lg focus:outline-none focus:border-terra resize-none"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-terra text-white rounded-lg font-body font-medium hover:bg-terra-dark transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
