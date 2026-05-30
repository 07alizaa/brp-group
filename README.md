# BRP Group Website

A modern, premium web presence for **BRP Group**, showcasing ventures, leadership, community initiatives, and corporate heritage.

## 🎯 Overview

Modern website built with React, Vite, and Tailwind CSS. Showcases BRP Group's diversified portfolio across education, innovation, ventures, and community development in Nepal.

**Pages:**
- Home, About, Ventures, Community, History, Legacy, Career, Contact

---

## 🛠️ Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React | 19.2.6 |
| **Routing** | React Router DOM | 7.15.1 |
| **Build Tool** | Vite | 8.0.12 |
| **Styling** | Tailwind CSS | 3.4.19 |
| **CSS Processing** | PostCSS + Autoprefixer | 8.5.15 + 10.5.0 |
| **Linting** | ESLint | 10.3.0 |
| **React Plugins** | React Hooks, React Refresh | Latest |

### Design System
- **Color Palette**: Navy (primary), Indigo (accent), Gold (heritage), Ivory (background)
- **Typography**: Playfair Display (display), Poppins (body)
- **Fonts**: Google Fonts integration

---

## 📁 Project Structure

```
client-side/
├── src/
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles & Tailwind directives
│   ├── components/
│   │   ├── layout/            # Shared layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/          # Page-specific sections
│   │   │   ├── home/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── AboutSnippet.jsx
│   │   │   │   ├── VenturesEcosystem.jsx
│   │   │   │   ├── VenturesShowcase.jsx
│   │   │   │   ├── StatsBar.jsx
│   │   │   │   ├── CommunitySnippet.jsx
│   │   │   │   ├── ContactSection.jsx
│   │   │   │   └── LegacySnippet.jsx
│   │   │   └── ventures/
│   │   │       └── EcosystemMap.jsx
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── VentureCard.jsx
│   │   │   ├── VentureDrawer.jsx
│   │   │   ├── LeaderCard.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── StatCounter.jsx
│   │   └── utils/             # Utility components
│   │       └── ScrollToTop.jsx
│   ├── pages/                 # Page-level components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Ventures.jsx
│   │   ├── Community.jsx
│   │   ├── History.jsx
│   │   ├── Legacy.jsx
│   │   ├── Career.jsx
│   │   └── Contact.jsx
│   ├── hooks/                 # Custom React hooks
│   │   ├── useScrollReveal.js # Scroll-triggered animations
│   │   └── useCountUp.js      # Number count-up animations
│   ├── data/                  # Centralized data structure
│   │   ├── ventures.js
│   │   ├── leadership.js
│   │   ├── stats.js
│   │   ├── community.js
│   │   └── timeline.js
│   └── assets/                # Images & static files
├── public/                    # Static assets (favicon, robots.txt, etc.)
├── index.html                 # HTML entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS custom theme
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint rules & config
└── README.md                 # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** 9+ or **yarn** 1.22+

### Installation

1. **Clone the repository** (if not already done):
```bash
git clone <repository-url>
cd brp-group/client-side
```

2. **Install dependencies**:
```bash
npm install
```

3. **Verify setup**:
```bash
npm run lint
```

---

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR). Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Bundles the app for production to the `dist/` folder. Output is optimized and minified.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build before deployment.

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality and identify style violations.

---

## ✨ Key Features

### Performance
- **Vite Fast Build**: Near-instantaneous HMR for rapid development
- **Code Splitting**: Each page bundle loads independently
- **Optimized CSS**: Tailwind purges unused styles; only ships what's needed

### Animations & Interactions
- **Scroll Reveal**: Elements animate into view using Intersection Observer
- **Count-Up Animation**: Smooth number progression on viewport entry
- **Smooth Transitions**: Hover states & page transitions with duration-300 to duration-500
- **No External Libraries**: Animations built with vanilla JavaScript & CSS

### Accessibility
- **Semantic HTML**: Proper use of `<article>`, `<section>`, `<nav>`
- **ARIA Labels**: Screen reader support with descriptive labels
- **Keyboard Navigation**: All interactive elements respond to Enter/Space keys
- **Focus Management**: Clear focus states on interactive elements

### Brand Consistency
- **Custom Color System**: Navy, Indigo, Gold palette defined in Tailwind
- **Responsive Design**: Mobile-first approach; adapts seamlessly from mobile to 4K
- **Premium Typography**: Playfair Display for headings, Poppins for body
- **Design System**: Centralized configuration for colors, fonts, spacing

### Maintainability
- **Data-Driven**: Content lives in `/data/` for easy updates
- **Component Reusability**: UI components (`Button`, `VentureCard`, `LeaderCard`) used across pages
- **Custom Hooks**: Animation logic encapsulated in `useScrollReveal` & `useCountUp`
- **Clear Folder Structure**: Intuitive organization by function (layout, sections, ui, pages)

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the corporate palette:
```javascript
colors: {
  navy:         '#10264A',
  indigo:       '#2F2B8F',
  gold:         '#D8C64A',
  // ... add or modify colors here
}
```

### Typography
Update font families in `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['"Playfair Display"', 'Georgia', 'serif'],
  body:    ['"Poppins"', 'system-ui', 'sans-serif'],
}
```

### Content
Update data files in `src/data/` (e.g., `ventures.js`, `leadership.js`) to reflect changes without touching components.

---

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-builds & deploys on push to main

### Deploy to Netlify
1. Push to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist/`

### Deploy to Custom Server
1. Build: `npm run build`
2. Copy `dist/` folder to your server
3. Configure web server to serve `index.html` for all routes (for SPA routing)

---



