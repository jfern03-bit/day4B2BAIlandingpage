# AI Automation Landing Page

A modern, conversion-focused landing page built with React, TypeScript, and Tailwind CSS for a B2B AI automation agency.

## Features

- **Responsive Hero Banner** - Customizable hero section with navigation, badges, and partner logos
- **Conversion-Focused Copy** - Business-first language focused on outcomes
- **Modern Design** - Clean, professional aesthetic with smooth animations
- **TypeScript** - Fully typed for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ResponsiveHeroBanner.tsx  # Hero section with navigation
│   │   ├── ProblemSection.tsx        # Problem section
│   │   ├── SolutionSection.tsx       # Solution section
│   │   ├── ExamplesSection.tsx       # Example workflows
│   │   ├── ProofSection.tsx          # Testimonials and metrics
│   │   ├── ProcessSection.tsx        # 3-step process
│   │   └── FinalCTASection.tsx       # Final call-to-action
│   ├── App.tsx                        # Main app component
│   ├── main.tsx                       # Entry point
│   └── index.css                      # Global styles
├── index.html                         # HTML template
├── package.json                       # Dependencies
├── tailwind.config.js                 # Tailwind configuration
└── vite.config.ts                     # Vite configuration
```

## Customization

### Hero Banner

Edit `src/App.tsx` to customize the hero banner props:

- `title` and `titleLine2` - Main headline
- `description` - Subheadline text
- `badgeText` and `badgeLabel` - Badge content
- `navLinks` - Navigation menu items
- `partners` - Partner logos array
- `backgroundImageUrl` - Hero background image

### Styling

The project uses Tailwind CSS. Modify `tailwind.config.js` to customize:
- Colors
- Fonts
- Animations
- Breakpoints

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
