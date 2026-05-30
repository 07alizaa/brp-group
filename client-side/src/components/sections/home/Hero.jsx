import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-ivory pt-28 pb-20"
      aria-label="BRP Group Hero"
    >
      {/* Background details */}
      <div className="absolute left-0 top-36 hidden h-px w-40 bg-gold lg:block" />
      <div className="absolute right-0 bottom-36 hidden h-px w-40 bg-indigo/25 lg:block" />

      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left content */}
          <div className="relative">
            <h1 className="max-w-2xl font-display text-[4rem] font-light leading-[0.95] tracking-tight text-navy sm:text-[5.5rem] lg:text-[6.2rem]">
              Legacy
              <span className="block text-indigo">Built for</span>
              Tomorrow
            </h1>

            <p className="section-text mt-7 max-w-xl lg:text-lg">
              BRP Group is a diversified enterprise creating long-term value
              through education, innovation, responsible ventures, and
              community development across Nepal.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-indigo px-8 py-4 font-body text-sm font-semibold text-white shadow-lg shadow-indigo/20 transition-all duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-lg"
              >
                Explore Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/ventures"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-indigo/40 bg-white px-8 py-4 font-body text-sm font-semibold text-indigo transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:bg-indigo/5 hover:shadow-lg"
              >
                View Ventures
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Small editorial note */}
            <div className="mt-10 max-w-md border-l-2 border-gold pl-5">
              <p className="font-body text-sm italic leading-7 text-text-muted">
                “A business group shaped by values, strengthened by people,
                and guided by purpose.”
              </p>
            </div>
          </div>

          {/* Right visual area */}
          <div className="relative min-h-[620px]">
            {/* Large image */}
            <div className="group absolute right-0 top-0 h-[470px] w-[82%] overflow-hidden rounded-[2rem] rounded-tr-[7rem] border-[10px] border-white bg-white shadow-2xl shadow-navy/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy/25">
              <img
                src="/Communityimage-1.webp"
                alt="BRP Group community engagement"
                className="h-full w-full rounded-[1.35rem] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 rounded-[1.35rem] bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 max-w-xs text-white">
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Community Impact
                </p>

                <p className="mt-2 font-display text-3xl leading-tight">
                  Growing with people, not just businesses.
                </p>
              </div>
            </div>

            {/* Legacy image card */}
            <div className="group absolute left-0 top-24 w-[48%] overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-2xl shadow-navy/12 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy/20">
              <img
                src="/legacy-image.webp"
                alt="BRP Group legacy"
                className="h-64 w-full rounded-[1.35rem] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              <div className="px-3 py-4">
                <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-indigo">
                  2nd Generation
                </p>

                <p className="mt-1 font-body text-sm text-text-muted">
                  Carrying values forward with new vision.
                </p>
              </div>
            </div>

            {/* Venture image */}
            <div className="group absolute bottom-10 right-10 w-[42%] overflow-hidden rounded-[2rem] border-[8px] border-white bg-white shadow-2xl shadow-navy/12 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy/20">
              <img
                src="/Educationimage-5.png"
                alt="BRP Group education initiative"
                className="h-52 w-full rounded-[1.35rem] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Dark stat card */}
            <div className="absolute bottom-0 left-12 rounded-[2rem] border-4 border-white bg-navy p-7 text-white shadow-2xl shadow-navy/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy/40">
              <p className="font-display text-5xl leading-none text-gold">
                45+
              </p>

              <p className="mt-2 font-body text-sm text-white/75">
                Years of experience
              </p>
            </div>

            {/* Floating small card */}
            <div className="absolute right-8 top-16 rounded-2xl border border-ivory bg-white/95 px-6 py-5 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <p className="font-display text-4xl text-indigo">10+</p>

              <p className="font-body text-xs text-text-muted">
                Active businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}