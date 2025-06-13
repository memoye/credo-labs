# Credo Labs (React)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/maintained%20with-npm-d50000.svg)](https://www.npmjs.com/package/@credo-labs/react)

A modern React component library built with Tailwind CSS v4 and radix-ui primitives, providing a comprehensive set of UI components, design tokens and utilities for building consistent user interfaces.

## Installation

```bash
npm install @credo-labs/react
```

## Quick Start

### 1. Install the Library

```bash
npm i @credo-labs/react
```

### 2. Import Styles

You have several options for importing the library's styles depending on your setup:

#### Option A: Import to Root Component (Recommended)

Import the styles directly in your root TSX/JSX file:

```tsx
// In your App.tsx or main.tsx
import "@credo-labs/react/style.css";

function App() {
  return <div className="App">{/* Your app content */}</div>;
}
```

#### Option B: Import to CSS File

If you're using Tailwind CSS, add the import to your main CSS file:

```css
/* In your main.css or index.css */

/* For customization - import BEFORE Tailwind */
@import "@credo-labs/react/style.css";
@import "tailwindcss";

/* Then add your custom variables */
:root {
  --radius: 12px; /* Override default radius */
  --primary-500: oklch(0.6 0.2 280); /* Custom brand color */
  /* Add other custom variables here */
}
```

**OR**

```css
/* To use library defaults - import AFTER Tailwind */
@import "tailwindcss";
@import "@credo-labs/react/style.css";
```

#### Option C: Palette Only

If you only need the color palette without other styling:

```css
@import "@credo-labs/react/palette.css";
```

### 3. Font Configuration (Optional)

The library uses **Outfit** as the default sans-serif font. If your project's styles are overriding the library fonts but you want to use Outfit, add this to your Tailwind theme configuration:

```css
@theme inline {
  --font-sans: Outfit, ui-sans-serif, system-ui, sans-serif;
}
```

> **Note**: This is only needed if you're experiencing font conflicts and want to ensure the library's Outfit font is used.

## Usage

### Component Imports

#### Recommended Approach (Better Tree-Shaking)

Import components individually for optimal bundle size:

```tsx
import { Button } from "@credo-labs/react/ui/button";
import { Card } from "@credo-labs/react/ui/card";
import { Input } from "@credo-labs/react/ui/input";

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

#### Alternative Approach

Import from the main package (less optimal for tree-shaking):

```tsx
import { Button, Card, Input } from "@credo-labs/react";

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

### Icon Imports

Icons are always imported from the icons path:

```tsx
import { CredoLogo } from "@credo-labs/react/ui/icons";

function Header() {
  return (
    <div>
      <CredoLogo />
      <h1>My App</h1>
    </div>
  );
}
```

## Styling Architecture

### Design Tokens

The library provides a comprehensive set of design tokens including:

- **Colors**: Semantic color palette with CSS custom properties
- **Border Radius**: Consistent radius sizes for UI elements
- **Typography**: Font families, sizes, and weights
- **Spacing**: Standardized spacing scale

### Tailwind CSS v4 Integration

This library is built with Tailwind CSS v4 and provides:

- CSS custom properties for easy theming
- Consistent design system tokens
- Full compatibility with your existing Tailwind setup

### Customization

The library exposes a comprehensive set of CSS custom properties that you can override to customize the design system:

#### Available Customizable Variables

**Border Radius**

```css
:root {
  --radius: 8px; /* Base radius (default: 8px) */
  /* Computed values: sm(4px), md(6px), lg(10px), xl(12px) */
}
```

**Typography**

```css
@theme inline {
  --font-sans: Outfit, ui-sans-serif, system-ui, sans-serif;
  --tracking-normal: -2%;
  --text-display-xs: 1.5rem;
  --text-display-sm: 1.875rem;
  --text-display: 2.25rem;
  --text-display-lg: 3rem;
  --text-display-xl: 3.75rem;
  --text-display-2xl: 4.5rem;
}
```

**Color Palette**
The library uses OKLCH color format for better color consistency. You can override any color:

```css
:root {
  /* Primary/Brand Colors */
  --primary-25: oklch(0.9604 0.0186 265.98);
  --primary-50: oklch(0.8967 0.0483 266.02);
  --primary-400: oklch(0.5622 0.2414 261.24); /* Main brand color */
  --primary-500: oklch(0.4546 0.2168 262.9);
  /* ... and so on for all primary shades */

  /* Gray Scale */
  --gray-50: oklch(0.9846 0.0017 247.84);
  --gray-100: oklch(0.9665 0.0045 258.32);
  --gray-500: oklch(0.5444 0.035 265.11);
  --gray-900: oklch(0.2099 0.0341 263.44);

  /* Semantic Colors */
  --success-500: oklch(0.6859 0.1667 154.86);
  --warning-500: oklch(0.7469 0.1701 62.11);
  --error-500: oklch(0.6371 0.2104 28.54);

  /* Secondary Colors */
  --purple-500: oklch(0.589 0.2241 286.64);
  --pink-500: oklch(0.6707 0.2337 342.29);
  --orange-500: oklch(0.6889 0.1995 42.49);
  /* ... and more */
}
```

#### How to Customize

**Method 1: Import Before Tailwind (Recommended for customization)**

```css
/* In your main CSS file */
@import "@credo-labs/react/style.css";
@import "tailwindcss";

/* Override variables after imports */
@theme inline {
  --radius: 12px;
  --primary-500: oklch(0.6 0.2 280); /* Custom blue */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

**Method 2: Using CSS Custom Properties**

```css
/* Create a separate customization file */
/* custom-theme.css */
:root {
  --primary-400: oklch(0.65 0.25 340); /* Custom pink brand */
  --success-500: oklch(0.7 0.18 160); /* Custom green */
  --radius: 6px; /* Smaller radius */
}
```

**Method 3: Runtime Customization**

```tsx
// Dynamically change theme variables
useEffect(() => {
  document.documentElement.style.setProperty(
    "--primary-500",
    "oklch(0.6 0.2 120)"
  );
}, []);
```

#### Color Format Information

The library uses **OKLCH** color format for:

- Better perceptual uniformity
- Consistent lightness across hues
- Future-proof color specification

You can convert colors to OKLCH at [oklch.com](https://oklch.com) or use tools like:

- CSS `color()` function for fallbacks
- PostCSS plugins for automatic conversion

## Setup Examples

<!-- ### Next.js Setup -->

<!-- ```tsx
// pages/_app.tsx or app/layout.tsx
import "@credo-labs/react/style.css";
import { Button } from "@credo-labs/react/ui/button";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
``` -->

### Vite Setup

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@credo-labs/react/style.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Create React App Setup

```tsx
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@credo-labs/react/style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## Best Practices

1. **Use individual imports** for better tree-shaking and smaller bundle sizes
2. **Import styles at the root level** to ensure they're available throughout your app
3. **Check for font conflicts** if you notice typography issues
4. **Use semantic color tokens** provided by the library for consistent theming
5. **Test your setup** with a simple component to ensure styles are loading correctly

## Troubleshooting

### Styles Not Loading

- Ensure you've imported the CSS file in your root component or main CSS file
- Check that the import path is correct: `@credo-labs/react/style.css`

### Font Issues

- Add the font configuration to your Tailwind theme if experiencing conflicts
- The library includes Outfit font - ensure it's not being overridden by your styles

### Customization Not Working

- Make sure to import library styles **before** `@import "tailwindcss"` for customization
- Use the exact CSS custom property names from the documentation
- Check browser dev tools to verify your custom properties are being applied

### Color Issues

- The library uses OKLCH color format - ensure your custom colors use the same format
- Use [oklch.com](https://oklch.com) to convert hex/rgb colors to OKLCH

### Tailwind Prefix Conflicts

- The library uses `cr:` prefix for Tailwind classes to avoid conflicts
- If you see styling issues, check for class name conflicts with your existing Tailwind setup

### Import Errors

- Use the full path for component imports: `@credo-labs/react/ui/button`
- Icons must be imported from: `@credo-labs/react/ui/icons`

## Support

For issues, feature requests, or questions, please refer to the project's issue tracker or documentation.
