<div align="center">

# 🌸 Lumière Beauty

**Premium Skincare & Cosmetics E-Commerce**

A skincare & beauty online store built with React, featuring a shopping cart, wishlist, multi-step checkout, a fully filterable product catalog, and full EN/ES bilingual support.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.26-CA4245?logo=reactrouter&logoColor=white&style=flat-square)](https://reactrouter.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222?logo=github&logoColor=white&style=flat-square)](https://vanesa-291.github.io/lumiere-beauty/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](#-license)

[🔗 Live Demo](https://vanesa-291.github.io/lumiere-beauty/)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment-github-pages)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## ✨ About

**Lumière Beauty** is a single-page e-commerce application focused on skincare, makeup, body care and fragrance products. It simulates a complete shopping experience: browsing the catalog, product detail, wishlist, cart, a 3-step checkout, and editorial content (Beauty Guides) — all fully translated between English and Spanish.

## 🎯 Features

| Module | Description |
|---|---|
| 🏠 **Home** | Hero slider, featured collections, best sellers, promo banner, beauty guides and testimonials |
| 🛍️ **Shop** | Catalog with category filters, price range and sorting (price, rating) |
| 📄 **Product Detail** | Gallery, description/benefits/reviews tabs, related products |
| 🛒 **Cart** | Side drawer with editable quantities and global-state persistence |
| 💳 **Checkout** | 3-step flow (info, shipping, payment) with a live order summary |
| ❤️ **Wishlist** | Save favorite products, accessible from any page |
| 📚 **Beauty Guides** | Full skincare & makeup articles with working detail pages |
| 🌐 **EN / ES Toggle** | One-click language switch for the entire site (UI + content) |
| 📱 **Responsive** | Optimized for mobile, tablet and desktop |

## 🛠️ Tech Stack

- **[React 18](https://react.dev/)** — Core UI library
- **[Vite](https://vitejs.dev/)** — Build tool & dev server
- **[React Router DOM v6](https://reactrouter.com/)** — SPA routing
- **[React Icons](https://react-icons.github.io/react-icons/)** — Icon set (Heroicons, Remix Icons, Feather)
- **Context API** — Global state for cart/wishlist (`CartContext`) and language (`LanguageContext`)
- **Custom i18n system** — Lightweight EN/ES translation dictionary + per-id content overrides
- **Component-scoped CSS** — Organized styles with centralized design tokens
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** — Automated GitHub Pages deployment

## 📁 Project Structure

```
lumiere-beauty/
├── public/
│   └── images/                 # Product, banner and guide images
├── src/
│   ├── components/             # Navbar, Footer, CartDrawer, ProductCard
│   ├── context/
│   │   └── CartContext.jsx      # Cart + wishlist global state
│   ├── i18n/
│   │   ├── LanguageContext.jsx   # Language provider + t()/tp()/tg() helpers
│   │   ├── translations.js       # UI strings dictionary (EN/ES)
│   │   └── content-es.js         # Spanish overrides for dynamic content
│   ├── data/
│   │   └── products.js           # Products, categories, collections, guides, testimonials (EN base)
│   ├── pages/                     # Home, Shop, ProductDetail, Guides, GuideDetail,
│   │                                # About, Checkout, Wishlist, NotFound
│   ├── App.jsx                     # Route definitions
│   └── main.jsx                     # Entry point
├── vite.config.js
└── package.json
```

## 🚀 Installation

**Prerequisite:** [Node.js](https://nodejs.org/) 18 or higher.

```bash
# 1. Clone the repository
git clone https://github.com/Vanesa-291/lumiere-beauty.git
cd lumiere-beauty

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173/`.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server with hot-reload |
| `npm run build` | Builds the production bundle into `/dist` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run deploy` | Builds and publishes the site to GitHub Pages |

## 🌐 Deployment (GitHub Pages)

The project is already configured to deploy with a single command:

```bash
npm run deploy
```

This automatically runs `npm run build` and publishes the contents of `/dist` to the `gh-pages` branch, making it available at:

**🔗 https://vanesa-291.github.io/lumiere-beauty/**

> **Technical note:** since the site lives in a subdirectory (`/lumiere-beauty/`) rather than the domain root, `vite.config.js` sets `base: '/lumiere-beauty/'`, `BrowserRouter` uses `basename="/lumiere-beauty"`, and every image path uses `import.meta.env.BASE_URL` to resolve correctly in production.

## 🗺️ Roadmap

Possible next steps to keep growing the project:

- [ ] Connect the catalog to a real API or CMS (instead of static data)
- [ ] Integrate a real payment gateway (Stripe / MercadoPago)
- [ ] User authentication with wishlist persisted in a database
- [ ] User-submitted product reviews
- [ ] Search with autocomplete

## 📄 License

This project is distributed under the MIT license. Feel free to use and modify it with attribution.

---

<div align="center">

Made with 🌸 by **Vanesa** · [vanesa-291.github.io/lumiere-beauty](https://vanesa-291.github.io/lumiere-beauty/)

</div>
