# dota-necrophos

Dark colorscheme for Neovim inspired by Necrophos from Dota 2.

## Installation

### lazy.nvim

```lua
{
  "user/dota-necrophos",
  name = "dota-necrophos",
  lazy = false,
  priority = 1000,
}
```

Then set the colorscheme:

```lua
vim.cmd.colorscheme("dota-necrophos")
```

Or in your LazyVim config:

```lua
{
  "LazyVim/LazyVim",
  opts = {
    colorscheme = "dota-necrophos",
  },
}
```

## Palettes

| Color | Hex | Name |
|-------|-----|------|
| Background | `#0f191f` | Deep plague |
| Foreground | `#D7E5DD` | Ethereal white |
| Accent | `#54C892` | Spectral core |
| Green | `#6EE7A8` | Plague green |
| Purple | `#8c7ac2` | Necromancy |
| Teal | `#69C7B5` | Cursed teal |
| Gold | `#C9A45A` | Harvest gold |
| Bronze | `#AF8B43` | Death bronze |
| Red | `#c25c5c` | Blood rot |
| Comment | `#66736D` | Death ash |

## License

MIT
