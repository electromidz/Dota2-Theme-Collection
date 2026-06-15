# Dota Themes

A cross-platform theme ecosystem inspired by Dota 2 heroes.

Every theme is generated automatically from a single hero palette — one source of truth powering Neovim, Zed, VS Code, Kitty, Ghostty, and WezTerm.

## Available Heroes

| Hero | Description | Accent |
|------|-------------|--------|
| Necrophos | The Radiant Reaper | `#00e676` |
| Invoker | The Grand Magus | `#ea80fc` |
| Kunkka | The Admiral | `#29b6f6` |
| Earth Spirit | The Stonekeeper | `#ffab40` |
| Lich | The Frost Mage | `#29b6f6` |
| Brewmaster | The Grandmaster | `#ffd54f` |

## Supported Platforms

- **Neovim** — Lua colorscheme with full highlight group coverage
- **Zed** — JSON theme with editor and syntax styles
- **VS Code** — Complete color theme with token colors and UI colors
- **Kitty** — Terminal color configuration
- **Ghostty** — Terminal color configuration
- **WezTerm** — TOML color configuration

## Quick Start

### Install Dependencies

```bash
pnpm install
```

### Build All Packages

```bash
pnpm build
```

### Generate Themes

```bash
# Generate all platforms for a hero
node --import tsx packages/cli/src/index.ts generate hero lich

# Generate a specific platform
node --import tsx packages/cli/src/index.ts generate platform neovim lich

# Generate all heroes for all platforms
node --import tsx packages/cli/src/index.ts generate all
```

## Installation

### Neovim

Copy the generated Lua file to your Neovim config directory:

```bash
cp themes/neovim/dota-lich.lua ~/.config/nvim/colors/
```

Then in your Neovim config:

```lua
vim.cmd.colorscheme("dota-lich")
```

### VS Code

1. Copy `themes/vscode/` to your extensions directory
2. Or package as a `.vsix` and install via VS Code

### Zed

Copy the theme JSON to your Zed themes directory:

```bash
cp themes/zed/lich.json ~/.config/zed/themes/
```

### Kitty

Add to your `kitty.conf`:

```bash
include themes/kitty/dota-lich.conf
```

### Ghostty

Add to your Ghostty config:

```
include-file = themes/ghostty/dota-lich
```

### WezTerm

Add to your `wezterm.lua`:

```lua
config.color_scheme = "Dota Lich"
```

Or include the TOML file directly.

## Architecture

```
Hero Palette → Theme Generator → Platform Themes
```

Each hero is defined once as a palette containing:

- **Semantic colors** — background, foreground, primary, secondary, accent, etc.
- **Editor colors** — syntax highlighting, gutter, cursor, selection, etc.
- **Terminal colors** — ANSI color palette for terminal emulators

Generators transform palettes into platform-specific formats:

| Package | Purpose |
|---------|---------|
| `@dota-themes/palettes` | Hero palette definitions and schema |
| `@dota-themes/generator-core` | Shared types and utilities |
| `@dota-themes/generator-neovim` | Neovim Lua colorscheme generator |
| `@dota-themes/generator-zed` | Zed JSON theme generator |
| `@dota-themes/generator-vscode` | VS Code color theme generator |
| `@dota-themes/generator-kitty` | Kitty terminal config generator |
| `@dota-themes/generator-ghostty` | Ghostty terminal config generator |
| `@dota-themes/generator-wezterm` | WezTerm TOML config generator |
| `@dota-themes/cli` | CLI for theme generation |

## Adding a New Hero

1. Create `packages/palettes/src/heroes/your-hero.ts`
2. Export the palette following the `HeroPalette` schema
3. Register it in `packages/palettes/src/index.ts`
4. Run `pnpm generate all your-hero`

## Development

```bash
# Lint
pnpm lint

# Format
pnpm format

# Type check
pnpm typecheck

# Build everything
pnpm build
```

## License

MIT
