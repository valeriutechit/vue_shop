# 🛍️ Simple Shop

A minimal e-commerce SPA built with Nuxt 3, Pinia and Tailwind CSS. It features a product catalog with pagination ("Load More"), a persistent shopping cart, and a smooth UI.

## 🚀 Features

- 📦 Load and browse products from [DummyJSON API](https://dummyjson.com/)
- 🛒 Add/remove items to/from cart
- 💾 Cart persisted in localStorage (via `pinia-plugin-persistedstate`)
- 🔄 Smooth scroll on "Load More"
- 🎨 Responsive and clean UI (Tailwind CSS)
- ✅ Typed with TypeScript
- ♻️ State management via Pinia

## 🧠 Stack

- Nuxt 3
- Pinia + persisted state
- Tailwind CSS
- TypeScript

## 🔧 Setup

```bash
npm install
npm run dev
```

## 🏗 Build
```bash
npm run build
npm run preview
```

## 🧪 Run Tests
```bash
npm run test
```
Includes unit tests for the cart store (add/remove items). Uses Vitest and jsdom.

## 📁 Structure
- pages/ — views (index.vue, cart.vue)
- components/ — reusable UI components
- stores/ — Pinia stores (e.g., cart, ui)
- types/ — TypeScript models (e.g., Product)
- tests/ — Unit tests with Vitest
