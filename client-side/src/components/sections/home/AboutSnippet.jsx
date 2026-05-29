import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import SectionHeading from '../../ui/SectionHeading'
import Button from '../../ui/Button'

export default function AboutSnippet() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="section-gap section-padding"
      aria-label="About BRP Group"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <SectionHeading
              label="Who We Are"
              title="Built on values. Driven by vision."
            />

            <div className="space-y-4 reveal reveal-delay-2">
              <p className="font-body text-base text-text-muted leading-relaxed">
                Founded on the vision of Late Dr. Babu Ram Pokharel, BRP Group has
                spent 45 years building businesses that matter — in healthcare,
                education, technology, and real estate.
              </p>
              <p className="font-body text-base text-text-muted leading-relaxed">
                Today, the second generation carries that vision forward. Dr. Ubin
                Pokharel and Ms. Bidushi Pandey Pokharel continue to build enterprises
                that create value — not just for stakeholders, but for Nepal.
              </p>
            </div>

            <div className="terra-divider reveal reveal-delay-3" />

            {/* Vision + Mission inline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 reveal reveal-delay-3">
              <div>
                <h3 className="font-body text-xs font-medium tracking-[0.2em]
                               uppercase text-terra mb-2">
                  Our Vision
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  Investing and partnering with people to create a better tomorrow.
                </p>
              </div>
              <div>
                <h3 className="font-body text-xs font-medium tracking-[0.2em]
                               uppercase text-terra mb-2">
                  Our Mission
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  Promoting great ideas and fueling the growth of various sectors.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-4">
              <Button as={Link} to="/about" variant="ghost">
                Learn More About Us
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          {/* Right — decorative element */}
          <div className="reveal reveal-delay-2 hidden lg:block">
            <div className="relative">
              {/* Watermark number */}
              <span className="watermark-text absolute -top-8 -left-4 select-none"
                    aria-hidden="true">
                45
              </span>
              {/* Stacked info blocks */}
              <div className="space-y-4">
                {[
                  { label: 'Founded by', value: 'Dr. Babu Ram Pokharel' },
                  { label: 'Headquartered in', value: 'Baluwatar, Kathmandu' },
                  { label: 'Active since', value: '1980 (45+ years)' },
                  { label: 'Current leadership', value: '2nd Generation' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-white rounded-xl
                               p-5 border border-border-warm"
                  >
                    <div className="w-1 h-full min-h-[20px] bg-terra/30 rounded-full
                                    self-stretch" />
                    <div>
                      <p className="font-body text-xs text-text-muted/60
                                   uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="font-display font-light text-text-primary text-lg">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}