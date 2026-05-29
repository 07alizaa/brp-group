// All venture content lives here.
// Components never hardcode text — they import from this file.
// To update content: edit this file only. Touch nothing else.

export const ventures = [
  {
    id: 'reddot',
    name: 'Reddot Nepal',
    sector: 'education',
    sectorLabel: 'Education',
    tagline: 'Making quality education accessible to everyone.',
    description:
      'Reddot Nepal is BRP Group\'s EdTech initiative — an online learning platform providing accessible, high-quality educational resources to students across Nepal. By combining technology with pedagogy, Reddot is building the digital infrastructure Nepal\'s education sector needs.',
    highlight: 'Digital learning for every Nepali student',
    color: '#4A7FA5',
    logoSrc: null,
  },
  {
    id: 'small-heaven',
    name: 'Small Heaven School',
    sector: 'education',
    sectorLabel: 'Education',
    tagline: 'Nurturing minds, building futures since 2063 BS.',
    description:
      'Established in 2063 BS, Small Heaven Higher Secondary School is committed to academic excellence and holistic student development. The school fosters a modern learning environment that integrates creative thinking, extracurricular engagement, and a passion for lifelong learning.',
    highlight: 'Est. 2063 BS · Holistic development',
    color: '#4A7FA5',
    logoSrc: null,
  },
  {
    id: 'assabet',
    name: 'Assabet Technologies',
    sector: 'technology',
    sectorLabel: 'Technology',
    tagline: 'Tech-powered solutions that transform how businesses operate.',
    description:
      'Assabet Technologies designs and develops solutions for businesses — enabling automation, stronger data strategies, and scalable digital infrastructure. Assabet is the trusted technology partner for Nepal\'s market and operates internationally as a US-based company through its partner TIR LLC.',
    highlight: 'US partner: TIR LLC · Business automation',
    color: '#3D8B6E',
    featured: true,
    logoSrc: null,
  },
  {
    id: 'satin-leaf',
    name: 'Satin Leaf Investment',
    sector: 'finance',
    sectorLabel: 'Finance',
    tagline: 'Empowering investors to make an impact.',
    description:
      'Satin Leaf Investment is BRP Group\'s investment holding arm — focused on empowering investors in Agriculture, Energy, Healthcare, and Technology. The objective is to develop a global market in Nepal by connecting innovative ideas with the funding and guidance needed to grow.',
    highlight: 'Agriculture · Energy · Healthcare · Tech',
    color: '#8B6914',
    logoSrc: null,
  },
  {
    id: 'brp-ventures',
    name: 'B.R.P. Ventures',
    sector: 'finance',
    sectorLabel: 'Finance',
    tagline: 'Connecting buyers and sellers with unmatched expertise.',
    description:
      'B.R.P. Ventures is a company investment and fund management firm. With expertise across Nepal\'s real estate market, the team provides business prospects analysis and connects buyers and sellers with the best possible service at affordable prices.',
    highlight: 'Investment · Fund management · Real estate',
    color: '#8B6914',
    logoSrc: null,
  },
  {
    id: 'ub-ventures',
    name: 'U.B. Ventures',
    sector: 'realestate',
    sectorLabel: 'Real Estate',
    tagline: 'A decade of real estate expertise across Nepal.',
    description:
      'U.B. Ventures is an established real estate holding company active for almost a decade. We locate resources, contract, and provide structures to businesses and individuals. Services extend to renting, leasing, buying, and selling real estate — helping companies and individuals find the properties that best serve their needs.',
    highlight: 'Renting · Leasing · Buying · Selling',
    color: '#7A4F6D',
    logoSrc: null,
  },
  {
    id: 'brp-tours',
    name: 'BRP Tours and Travels',
    sector: 'travel',
    sectorLabel: 'Travel',
    tagline: '"Your Mattered Travel Agency."',
    description:
      'BRP Tours and Travels Pvt. Ltd. is a full-service travel agency covering local and international destinations. The team delivers excellent and extraordinary travel experiences at affordable prices — built on the belief that every journey should be handled with care.',
    highlight: 'Local & international · Affordable · Trusted',
    color: '#7A4F6D',
    logoSrc: null,
  },
]

// Grouped by sector — used by the ecosystem map
export const venturesBySector = {
  education:  ventures.filter(v => v.sector === 'education'),
  technology: ventures.filter(v => v.sector === 'technology'),
  finance:    ventures.filter(v => v.sector === 'finance'),
  realestate: ventures.filter(v => v.sector === 'realestate'),
  travel:     ventures.filter(v => v.sector === 'travel'),
}

// Sector metadata — used by the ecosystem map nodes
export const sectors = [
  {
    id: 'education',
    label: 'Education',
    color: '#4A7FA5',
    count: 2,
    position: 'top-left',
  },
  {
    id: 'technology',
    label: 'Technology',
    color: '#3D8B6E',
    count: 1,
    position: 'top-right',
  },
  {
    id: 'finance',
    label: 'Finance',
    color: '#8B6914',
    count: 2,
    position: 'bottom-left',
  },
  {
    id: 'realestate',
    label: 'Real Estate & Travel',
    color: '#7A4F6D',
    count: 3,
    position: 'bottom-right',
  },
]