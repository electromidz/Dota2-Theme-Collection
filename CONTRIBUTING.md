# Contributing to Dota Themes

Thank you for your interest in contributing! Here's how to get started.

## Development Setup

```bash
pnpm install
pnpm build
```

## Project Structure

- `packages/palettes/` — Hero palette definitions
- `packages/generator-core/` — Shared types and utilities
- `packages/generator-*/` — Platform-specific generators
- `packages/cli/` — CLI tool
- `themes/` — Generated theme files (don't edit directly)

## Adding a New Hero

1. Create `packages/palettes/src/heroes/<hero-name>.ts`
2. Define the palette following the `HeroPalette` interface
3. Export it from `packages/palettes/src/index.ts`
4. Run `pnpm generate all <hero-name>` to generate all platform themes

### Palette Guidelines

- Colors should reflect the hero's Dota 2 aesthetic
- Ensure sufficient contrast for readability
- Use the hero's signature colors for primary/accent
- Keep terminal colors functional (good contrast for ANSI colors)

### Example Palette Structure

```typescript
import type { HeroPalette } from "../schema.js";

export const yourHero: HeroPalette = {
  hero: "your-hero",
  metadata: {
    title: "Your Hero",
    description: "Hero description from Dota 2",
  },
  colors: {
    background: "#0a0a0a",
    foreground: "#e0e0e0",
    primary: "#primary-color",
    secondary: "#secondary-color",
    accent: "#accent-color",
    error: "#error-color",
    warning: "#warning-color",
    info: "#info-color",
    success: "#success-color",
  },
  editor: {
    // Full editor color definitions
  },
  terminal: {
    // Full terminal color definitions
  },
};
```

## Adding a New Platform

1. Create `packages/generator-<platform>/`
2. Implement the `PlatformGenerator` interface
3. Register it in `packages/cli/src/index.ts`
4. Add to `platformDirs` mapping

### Generator Interface

```typescript
interface PlatformGenerator {
  readonly name: string;
  readonly fileExtension: string;
  generate(options: GeneratorOptions): GeneratedFile[];
}
```

## Code Style

- TypeScript strict mode
- Biome for formatting and linting
- ESM modules only
- No unnecessary dependencies

## Pull Requests

1. Create a feature branch
2. Make your changes
3. Run `pnpm build` and `pnpm lint`
4. Submit a PR with a clear description
