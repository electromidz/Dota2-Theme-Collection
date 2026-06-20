import type { HeroPalette } from "../schema.js";

export const brewmaster: HeroPalette = {
  hero: "brewmaster",
  metadata: {
    title: "Brewmaster",
    description:
      "The Grandmaster — Thunder Clap shakes the earth, Cinder Brew ignites foes, Drunken Brawler sways like wind, Primal Split summons Earth, Storm, and Fire",
    author: "dota-themes",
  },
  colors: {
    // Base - a dark tavern where the brew ages
    background: "#15100c", // Aged oak barrel — dark, warm, woody
    foreground: "#d4bfa0", // Parchment scroll — warm, readable

    // Core abilities as semantic roles
    primary: "#d4782a", // Thunder Clap — orange shockwave impact
    secondary: "#c45c3a", // Cinder Brew — burning ember red
    accent: "#e6b84a", // Drunken Brawler — golden brew, luck

    // Status
    error: "#c45c3a", // Fire Brawler — blazing critical
    warning: "#e6b84a", // Cinder Brew ignite — golden warning
    info: "#5a9ec4", // Storm Brawler — swift blue wind
    success: "#7a9e5a", // Earth Brawler — stone green armor
  },
  editor: {
    background: "#15100c",
    foreground: "#d4bfa0",
    gutter: "#1a140e", // Slightly lighter barrel
    lineHighlight: "#1e1812", // Warm highlight
    selection: "#3a2818", // Amber selection
    cursor: "#e6b84a", // Drunken Brawler gold

    // Syntax — each ability colors a token type
    comment: "#7a6e58", // Barrel stave grey — aged, muted
    keyword: "#c45c3a", // Cinder Brew — fiery statements
    string: "#e6b84a", // Drunken Brawler gold — lucky strings
    number: "#d4782a", // Thunder Clap orange — bold numbers
    function: "#d4782a", // Thunder Clap — impactful functions
    variable: "#d4bfa0", // Parchment — plain text
    type: "#5a9ec4", // Storm Brawler — swift types
    constant: "#8a6e4a", // Earth Brawler bronze — sturdy constants
    operator: "#7a6e58", // Barrel stave — subtle operators
    punctuation: "#7a6e58", // Barrel stave — subtle punctuation
    tag: "#c45c3a", // Cinder Brew — fiery tags
    attribute: "#5a9ec4", // Storm Brawler — wind attrs
    class: "#5a9ec4", // Storm Brawler — swift classes
    interface: "#5a9ec4", // Storm Brawler — blue types
    enum: "#8a6e4a", // Earth Brawler — bronze enums
    parameter: "#b8a888", // Warm parchment — params
    property: "#9a8a6a", // Mid brown — properties
    registry: "#d4782a", // Thunder Clap — active registry
    builtin: "#e6b84a", // Drunken Brawler — golden builtins
    text: "#d4bfa0",
    whitespace: "#221a12", // Faint wood grain
    indentation: "#3a2818", // Amber indent guides
  },
  terminal: {
    background: "#15100c",
    foreground: "#d4bfa0",
    cursor: "#e6b84a",
    selectionBackground: "#3a2818",

    // ANSI — the three elements color the terminal
    black: "#1a140e", // Barrel shadow
    red: "#c45c3a", // Fire Brawler
    green: "#7a9e5a", // Earth Brawler
    yellow: "#e6b84a", // Drunken Brawler gold
    blue: "#5a9ec4", // Storm Brawler
    magenta: "#b86e3a", // Cinder Brew amber
    cyan: "#6aaa8a", // Jade brew
    white: "#d4bfa0", // Parchment

    // Bright — Primal Split amplifies each element
    brightBlack: "#7a6e58", // Barrel stave
    brightRed: "#d46a4a", // Bright fire
    brightGreen: "#8ab06a", // Bright earth
    brightYellow: "#f0c860", // Bright brew
    brightBlue: "#70b4d8", // Bright storm
    brightMagenta: "#c88a5a", // Bright ember
    brightCyan: "#80c4a0", // Bright jade
    brightWhite: "#e8dcc0", // Bright parchment
  },
};

export default brewmaster;
