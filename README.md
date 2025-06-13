# Credo UI (React)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/maintained%20with-npm-d50000.svg)](https://www.npmjs.com/package/@credo-labs/react)

A modern React component library built with Tailwind CSS v4 and radix-ui primitives, providing a comprehensive set of UI components, design tokens and utilities for building consistent user interfaces.

## Features

- 🎨 **Design System**: Comprehensive color palette
- 📦 **Tree-shakable**: Optimized bundle size with granular imports
- 🎨 **Tailwind v4**: Modern styling with CSS custom properties
- 🎯 **Accessible**: Built with accessibility best practices
- 📱 **Responsive**: Mobile-first design approach
- ⚡ **Performance**: Optimized for modern React applications

## Installation

```bash
npm install @credo-labs/react
```

## Quick Start

### 1. Import Styles

Import the library styles in your root CSS file (recommended):

```css
/* src/index.css or src/globals.css */
@import "@credo-labs/react/styles.css";
@import "tailwindcss";
```

Alternatively, you can import in your root JavaScript/TypeScript file:

```tsx
// src/main.tsx or src/index.tsx
import "@credo-labs/react/styles.css";
```

### 2. Use Components

```tsx
import { Button } from "@credo-labs/react/ui/button";
import { CredoLogo } from "@credo-labs/react/ui/icons";

function App() {
  return (
    <div>
      <CredoLogo className="w-8 h-8" />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

## Import Methods

### Recommended: Granular Imports (Better Tree-shaking)

```tsx
// Components
import { Button } from "@credo-labs/react/ui/button";
import { Input } from "@credo-labs/react/ui/input";
import { Card } from "@credo-labs/react/ui/card";

// Icons
import { CredoLogo, ArrowRight, Check } from "@credo-labs/react/ui/icons";
```

### Alternative: Barrel Imports

```tsx
// Components (less optimal for tree-shaking)
import { Button, Input, Card } from "@credo-labs/react";

// Icons (always use specific path)
import { CredoLogo, ArrowRight, Check } from "@credo-labs/react/ui/icons";
```

## Theming & Customization

The library uses CSS custom properties for theming. You can override the default theme by setting CSS variables in your root styles.

### Default Theme Structure

```css
:root {
  /* Radius System */
  --radius: 8px; /* Base radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-xl: 12px;

  /* Typography */
  --font-sans: Outfit, ui-sans-serif, system-ui, sans-serif;
  --tracking-normal: -2%;

  /* Colors - Override these to customize your theme */
  --primary-500: var(--orange-700); /* Default brand color */
}
```

### Custom Theme Example

```css
/* Override in your CSS file */
:root {
  /* Change primary brand color to blue */
  --primary-500: #3b82f6;

  /* Customize radius system */
  --radius: 12px;

  /* Use different font */
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
}
```

## Color System

The library includes a comprehensive color palette:

- **Gray**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Brand/Primary**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 900
- **Success**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Warning**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Error**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Blue Gray**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Purple**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Pink**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Rose**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Orange**: 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Using Colors in Components

```tsx
// Colors are available as Tailwind classes
<div className="bg-brand-500 text-white">
  <p className="text-gray-600">Secondary text</p>
  <Button className="bg-success-500 hover:bg-success-600">
    Success Action
  </Button>
</div>
```

## Typography Scale

The library includes a comprehensive typography scale:

```css
/* Display text sizes */
--text-display-xs: 1.5rem (24px)
--text-display-sm: 1.875rem (30px)
--text-display: 2.25rem (36px)
--text-display-lg: 3rem (48px)
--text-display-xl: 3.75rem (60px)
--text-display-2xl: 4.5rem (72px)
```

## Component Examples

### Button Variants

```tsx
import { Button } from "@credo-labs/react/ui/button";

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button disabled>Disabled</Button>
```

### Using Icons

```tsx
import { CredoLogo, ArrowRight, Check } from "@credo-labs/react/ui/icons";

<div className="flex items-center gap-2">
  <CredoLogo className="w-6 h-6" />
  <span>Credo Labs</span>
  <ArrowRight className="w-4 h-4" />
</div>

<Button>
  <Check className="w-4 h-4 mr-2" />
  Confirmed
</Button>
```

## Best Practices

### Performance Optimization

1. **Use granular imports** for better tree-shaking:

   ```tsx
   // ✅ Good
   import { Button } from "@credo-labs/react/ui/button";

   // ❌ Less optimal
   import { Button } from "@credo-labs/react";
   ```

2. **Import styles once** in your application root

### Accessibility

- All components follow WCAG 2.1 guidelines
- Keyboard navigation is supported across all interactive components
- Screen reader compatibility is built-in
- Focus management is handled automatically

### Styling

- Use Tailwind utility classes for custom styling
- Leverage CSS custom properties for consistent theming
- Follow the established color and spacing system

### Prerequisites

- Node.js 16+
- React 18+
- Tailwind CSS v4

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

MIT License - see LICENSE file for details.

## Support

- 📚 [Documentation](https://storybook.credo-labs.com)
- 🐛 [Issue Tracker](https://github.com/credogit)
- 💬 [Discussions](https://github.com/credogit)

---

Built with ❤️ by [Credocentral](https://credocentral.com)
