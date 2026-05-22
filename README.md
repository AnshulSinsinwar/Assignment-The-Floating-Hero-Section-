# Praava Legal — Floating Hero Section

A pixel-perfect implementation of the "Legal Work Platform" hero section built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✅ Features Implemented

### Core Requirements
- ✅ **Split layout** — Text on left, floating cards on right
- ✅ **Floating pills** — Billing, Matters, Tasks, Documents with correct colors & rotations
- ✅ **Responsive** — Stacks gracefully on mobile, full layout on desktop
- ✅ **`FloatingCard` component** — Accepts `color`, `rotation`, `icon`, `label` props
- ✅ **`PortalCard` variant** — Unique "John Doe – Portal" card with avatar, status dot, message, and accent bar
- ✅ **Background blobs** — Animated, blurred light-blue ambient shapes

### Bonus Features ⭐
- 🌙 **Dark Mode** — Toggle in navbar, persisted to `localStorage`, respects system preference
- ✨ **Floating animations** — Each card floats with a unique rhythm (CSS keyframes, staggered delays)
- ⚡ **Framer Motion entrance animations** — Spring-based pop-in with staggered delays per card
- 🎯 **Hover effects** — Scale + brightness on pill cards
- 🏷️ **Feature tags** — Pill badges below subtext
- ⭐ **Social proof** — Avatar stack + 5-star rating
- 🎨 **Extra cards** — Schedule & Clients pills for visual richness

## 🏗️ Architecture

```
components/
├── FloatingCard.tsx       # Reusable pill card + PortalCard variant
├── FloatingVisualization.tsx  # Positions all cards in the scene
├── HeroSection.tsx        # Left text + right visualization layout
├── Navbar.tsx             # Sticky nav with dark mode toggle
├── BackgroundBlobs.tsx    # Ambient blob background
└── DarkModeToggle.tsx     # Sun/Moon animated toggle
lib/
└── utils.ts               # cn() helper (clsx + tailwind-merge)
app/
├── layout.tsx             # Root layout with font
├── globals.css            # Tailwind + animation keyframes
└── page.tsx               # Composes all sections
```

## 🎨 Design Decisions

| Element | Choice | Reason |
|---|---|---|
| Font | Plus Jakarta Sans | Matches reference — geometric, modern |
| Blue | `#3B5BDB` | Matches Billing pill exactly |
| Orange | `#E07B39` | Matches Matters pill exactly |
| Dark | `#2B2D42` | Tasks + Documents |
| Blob blur | `filter: blur(50-60px)` | Soft ambient glow |
| Float animation | CSS keyframes | Zero JS cost, smooth 60fps |
| Entrance | Framer Motion spring | Bouncy, premium feel |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4 + arbitrary values
- **Animation**: Framer Motion + CSS keyframes
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
