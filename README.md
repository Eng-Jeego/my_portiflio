# Yahye Ahmed — Portfolio (React.js + Tailwind CSS)

Modern portfolio website for **Yahye Ahmed**, a Full-Stack Developer and Graphic Designer based in Mogadishu, Somalia. Re-engineered with **React.js**, **Tailwind CSS**, and **Vite**.

---

## ⚡ Tech Stack

- **React 19** — Component-driven frontend architecture
- **Tailwind CSS v4** — Utility-first styling with custom dark theme, neon accents, and responsive layout
- **Vite** — Next-generation blazing fast build tool and HMR dev server
- **Lucide React** — Modern icons

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```text
├── assets/                  # Static assets (images, portrait)
├── src/
│   ├── components/          # Modular React UI components
│   │   ├── Navbar.jsx       # Glassmorphic header with active section spy & mobile drawer
│   │   ├── Hero.jsx         # Hero section with portrait, code card, and bio stats
│   │   ├── About.jsx        # Developer & designer story with core pillars
│   │   ├── Skills.jsx       # Interactive tabbed skills showcase with animated meters
│   │   ├── Projects.jsx     # Featured & secondary projects with browser mockups
│   │   ├── Design.jsx       # Graphic design, identity, poster & campaign gallery
│   │   ├── Journey.jsx      # Career roadmap & timeline
│   │   ├── Contact.jsx      # Contact form with validation & social links
│   │   ├── Footer.jsx       # Footer with back-to-top button
│   │   └── SocialIcons.jsx  # SVG social icons
│   ├── data/
│   │   └── portfolioData.js # Single source of truth for all portfolio content
│   ├── App.jsx              # Main application root
│   ├── index.css            # Tailwind CSS styling and animations
│   └── main.jsx             # React entry point
├── index.html               # Main HTML entry
├── vite.config.js           # Vite configuration with Tailwind CSS & React plugins
└── package.json             # NPM scripts and dependencies
```

---

## ✏️ Customization

To update your bio, projects, skills, or links:
- Edit [`src/data/portfolioData.js`](file:///c:/Users/hp/Documents/YahyeAhmedPortfolio/src/data/portfolioData.js)
