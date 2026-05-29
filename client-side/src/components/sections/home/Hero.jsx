import { Link } from 'react-router-dom'

export default function Hero() {
  const stats = [
    { value: '45+', label: 'Years of legacy' },
    { value: '2nd', label: 'Generation leadership' },
    { value: '10+', label: 'Businesses' },
    { value: '1000+', label: 'Networks' },
  ]

  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF8] pt-28 pb-20"
      aria-label="BRP Group Hero"
    >
      {/* Background details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,43,143,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(216,198,74,0.14),transparent_30%)]" />
      <div className="absolute left-0 top-36 hidden h-px w-40 bg-[#D8C64A] lg:block" />
      <div className="absolute right-0 bottom-36 hidden h-px w-40 bg-[#2F2B8F]/25 lg:block" />

      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left content */}
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#2F2B8F]/20 bg-white/80 px-5 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#D8C64A]" />
              <span className="font-body text-xs font-bold uppercase tracking-[0.28em] text-[#2F2B8F]">
                BRP Group
              </span>
            </div>

            <h1 className="max-w-2xl font-display text-[4rem] font-light leading-[0.95] tracking-tight text-[#10264A] sm:text-[5.5rem] lg:text-[6.2rem]">
              Legacy
              <span className="block text-[#2F2B8F]">Built for</span>
              Tomorrow
            </h1>

            <p className="mt-7 max-w-xl font-body text-base leading-8 text-[#1E1E1E]/70 lg:text-lg">
              BRP Group is a diversified enterprise creating long-term value
              through education, innovation, responsible ventures, and
              community development across Nepal.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#2F2B8F] px-8 py-4 font-body text-sm font-semibold text-white shadow-lg shadow-[#2F2B8F]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#10264A]"
              >
                Explore Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/ventures"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#2F2B8F]/40 bg-white px-8 py-4 font-body text-sm font-semibold text-[#2F2B8F] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2B8F] hover:bg-[#2F2B8F]/5"
              >
                View Ventures
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Small editorial note */}
            <div className="mt-10 max-w-md border-l-2 border-[#D8C64A] pl-5">
              <p className="font-body text-sm italic leading-7 text-[#1E1E1E]/60">
                “A business group shaped by values, strengthened by people,
                and guided by purpose.”
              </p>
            </div>
          </div>

          {/* Right visual area */}
          <div className="relative min-h-[620px]">
            {/* Large image */}
            <div className="absolute right-0 top-0 h-[470px] w-[82%] overflow-hidden rounded-[2rem] rounded-tr-[7rem] shadow-2xl shadow-[#10264A]/15">
              <img
                src="/Communityimage-1.webp"
                alt="BRP Group community engagement"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10264A]/50 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 max-w-xs text-white">
                <p className="font-body text-xs font-bold uppercase tracking-[0.25em] text-[#D8C64A]">
                  Community Impact
                </p>
                <p className="mt-2 font-display text-3xl leading-tight">
                  Growing with people, not just businesses.
                </p>
              </div>
            </div>

            {/* Legacy image card */}
            <div className="absolute left-0 top-24 w-[48%] overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#10264A]/12">
              <img
                src="/legacy-image.webp"
                alt="BRP Group legacy"
                className="h-64 w-full rounded-[1.5rem] object-cover object-top"
              />
              <div className="px-3 py-4">
                <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#2F2B8F]">
                  2nd Generation
                </p>
                <p className="mt-1 font-body text-sm text-[#1E1E1E]/65">
                  Carrying values forward with new vision.
                </p>
              </div>
            </div>

            {/* Venture image */}
            <div className="absolute bottom-10 right-10 w-[42%] overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#10264A]/12">
              <img
                src="/Educationimage-5.png"
                alt="BRP Group education initiative"
                className="h-52 w-full rounded-[1.5rem] object-cover"
              />
            </div>

            {/* Dark stat card */}
            <div className="absolute bottom-0 left-12 rounded-[2rem] bg-[#10264A] p-7 text-white shadow-2xl shadow-[#10264A]/25">
              <p className="font-display text-5xl leading-none text-[#D8C64A]">
                45+
              </p>
              <p className="mt-2 font-body text-sm text-white/75">
                Years of experience
              </p>
            </div>

            {/* Floating small card */}
            <div className="absolute right-8 top-16 rounded-2xl bg-white/95 px-6 py-5 shadow-xl backdrop-blur">
              <p className="font-display text-4xl text-[#2F2B8F]">10+</p>
              <p className="font-body text-xs text-[#1E1E1E]/60">
                Active businesses
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 gap-3 rounded-[2rem] border border-[#E6E6E6] bg-white/80 p-4 shadow-sm backdrop-blur md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl px-5 py-6 text-center transition duration-300 hover:bg-[#FAFAF8]"
            >
              <p className="font-display text-4xl font-semibold text-[#2F2B8F]">
                {item.value}
              </p>
              <p className="mt-1 font-body text-sm text-[#1E1E1E]/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  )
}