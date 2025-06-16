# Tailwind CSS v4 Migration Guide

This document outlines the changes made to migrate Clyvanta from Tailwind CSS v3 syntax to v4.

## Major Changes

### 1. CSS Import Method
**Before (v3):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**After (v4):**
```css
@import "tailwindcss";

@theme {
  /* Theme configuration */
}
```

### 2. PostCSS Configuration
**Created `postcss.config.js`:**
```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
module.exports = config;
```

### 3. Class Name Updates

#### Backdrop Blur
- `backdrop-blur-sm` → `backdrop-blur-[4px]`
- `backdrop-blur-md` → `backdrop-blur-[12px]`
- `backdrop-blur-lg` → `backdrop-blur-[16px]`
- `backdrop-blur-xl` → `backdrop-blur-[24px]`

#### Shadows
- `shadow-sm` → `shadow-[0_1px_2px_rgba(0,0,0,0.05)]`
- `shadow-md` → `shadow-[0_4px_6px_rgba(0,0,0,0.07)]`
- `shadow-lg` → `shadow-[0_10px_30px_rgba(0,0,0,0.05)]`
- `shadow-xl` → `shadow-[0_20px_50px_rgba(0,0,0,0.08)]`
- `shadow-2xl` → `shadow-[0_25px_50px_rgba(0,0,0,0.12)]`

#### Border Radius
- `rounded-xl` → `rounded-[0.75rem]`
- `rounded-2xl` → `rounded-[1rem]`
- `rounded-3xl` → `rounded-[1.5rem]`

#### Arbitrary Values
- `w-50`, `h-50` → `w-[200px]`, `h-[200px]`
- `w-75`, `h-75` → `w-[300px]`, `h-[300px]`
- `w-15`, `h-15` → `w-[60px]`, `h-[60px]`

### 4. Color System
In v4, colors are defined in the `@theme` block using CSS variables:

```css
@theme {
  --color-clyvanta-blue-light: #00D4FF;
  --color-clyvanta-blue-dark: #0066FF;
  /* etc. */
}
```

### 5. Animation Fixes
All animations must be defined in CSS keyframes and referenced:

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### 6. Webkit Compatibility
Added specific webkit prefixes for backdrop filters:

```css
@supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px)) {
  .backdrop-blur-\\[12px\\] {
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }
}
```

## Components Updated

1. **Navigation.tsx** - Fixed backdrop blur and shadows
2. **HeroSection.tsx** - Updated floating cards with proper classes
3. **ServicesSection.tsx** - Fixed shadows and border radius
4. **CTASection.tsx** - Updated gradient backgrounds
5. **Footer.tsx** - General class updates

## Testing Checklist

- [ ] Backdrop blur effects work on Chrome/Safari/Firefox
- [ ] Shadows render correctly
- [ ] Animations are smooth
- [ ] Gradients display properly
- [ ] Mobile responsive design works
- [ ] No console errors about missing classes

## Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/v4)
- [Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [GitHub Issue Tracker](https://github.com/tailwindlabs/tailwindcss/issues)
