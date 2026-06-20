import type { HeroPalette } from "../schema.js";

export const arcWarden: HeroPalette = {
  hero: "arc-warden",
  metadata: {
    title: "Arc Warden",
    description:
      "The Primordial — Flux unleashes unstable electric energy, Magnetic Field conjures a cyan barrier, Spark Wraith summons spectral spirits, Tempest Double duplicates cosmic power",
    author: "dota-themes",
  },
  colors: {
    // Base - the void between stars where Arc Warden was born
    background: "#080c16", // Cosmic void — deep, infinite, primordial
    foreground: "#b8cce0", // Stardust — pale, luminous, celestial

    // Core abilities as semantic roles
    primary: "#3cc8e8", // Flux — electric blue plasma, unstable energy
    secondary: "#38b2a8", // Magnetic Field — teal magnetic barrier
    accent: "#9872d0", // Spark Wraith — violet spectral spirit

    // Status
    error: "#d05868", // Tempest overload — energy overload red
    warning: "#d8a848", // Flux instability — volatile warning
    info: "#3cc8e8", // Flux — electric info
    success: "#38b2a8", // Magnetic Field — protective success
  },
  editor: {
    background: "#080c16",
    foreground: "#b8cce0",
    gutter: "#0c1120", // Slightly lighter void edge
    lineHighlight: "#0e1424", // Subtle cosmic highlight
    selection: "#1a2a48", // Magnetic selection
    cursor: "#3cc8e8", // Flux cursor — electric plasma

    // Syntax — each ability colors a token type
    comment: "#4a5a72", // Faint nebula — distant, muted
    keyword: "#9872d0", // Spark Wraith — spectral violet keywords
    string: "#38b2a8", // Magnetic Field — teal protected strings
    number: "#3cc8e8", // Flux — electric blue numbers
    function: "#5ad4e8", // Tempest Double — bright electric functions
    variable: "#b8cce0", // Stardust — plain text
    type: "#7888d4", // Cosmic indigo — arcane types
    constant: "#c890e0", // Spark Wraith spirit — violet constants
    operator: "#4a5a72", // Nebula — subtle operators
    punctuation: "#4a5a72", // Nebula — subtle punctuation
    tag: "#3cc8e8", // Flux — electric tags
    attribute: "#38b2a8", // Magnetic Field — teal attrs
    class: "#7888d4", // Cosmic indigo — arcane classes
    interface: "#7888d4", // Cosmic indigo — dark types
    enum: "#c890e0", // Spark Wraith — violet enums
    parameter: "#88b8d0", // Mid stardust — params
    property: "#60a8c0", // Mid cyan — properties
    registry: "#3cc8e8", // Flux — active registry
    builtin: "#38b2a8", // Magnetic Field — teal builtins
    text: "#b8cce0",
    whitespace: "#101828", // Faint cosmic dust
    indentation: "#1a2a48", // Magnetic indent guides
  },
  terminal: {
    background: "#080c16",
    foreground: "#b8cce0",
    cursor: "#3cc8e8",
    selectionBackground: "#1a2a48",

    // ANSI — the four elements color the terminal
    black: "#0c1120", // Void shadow
    red: "#d05868", // Tempest overload
    green: "#38b2a8", // Magnetic Field
    yellow: "#d8a848", // Flux instability
    blue: "#3cc8e8", // Flux plasma
    magenta: "#9872d0", // Spark Wraith
    cyan: "#5ad4e8", // Tempest Double
    white: "#b8cce0", // Stardust

    // Bright — Tempest Double amplifies
    brightBlack: "#4a5a72", // Nebula
    brightRed: "#e07888", // Bright overload
    brightGreen: "#58d0c0", // Bright magnetic
    brightYellow: "#e8c068", // Bright flux
    brightBlue: "#60e0f8", // Bright electric
    brightMagenta: "#b090e8", // Bright wraith
    brightCyan: "#80e4f0", // Bright tempest
    brightWhite: "#d0e4f0", // Bright stardust
  },
};

export default arcWarden;
