import type { HeroPalette } from "../schema.js";

export const lich: HeroPalette = {
  hero: "lich",
  metadata: {
    title: "Lich",
    description:
      "The Frost Mage — Frost Blast explodes with icy fire, Frost Shield protects with frozen barriers, Sinister Gaze drains souls with dark magic, Sacrifice harvests mana from the living, Chain Frost bounces death between enemies",
    author: "dota-themes",
  },
  colors: {
    // Base - the frozen abyss where Lich reigns
    background: "#060d14", // Frozen void — deep, cold, empty
    foreground: "#a8c4d8", // Frost mist — pale, cold, ethereal

    // Core abilities as semantic roles
    primary: "#5ec4e8", // Frost Blast — ice blue explosion
    secondary: "#d44e5a", // Chain Frost impact — red damage on ice
    accent: "#6e5ec4", // Sinister Gaze — dark purple sorcery

    // Status
    error: "#d44e5a", // Chain Frost damage — blood on ice
    warning: "#d44e5a", // Sacrifice blood — dark ritual
    info: "#5ec4e8", // Frost Blast — ice info
    success: "#7ad4f0", // Frost Shield — protective success
  },
  editor: {
    background: "#060d14",
    foreground: "#a8c4d8",
    gutter: "#0a131c", // Slightly lighter frozen wall
    lineHighlight: "#0c1722", // Subtle frost highlight
    selection: "#162a40", // Frozen selection
    cursor: "#d44e5a", // Lich's red eyes — glowing in the dark

    // Syntax — each ability colors a token type
    comment: "#3e5868", // Frozen breath — cold, muted
    keyword: "#d44e5a", // Chain Frost — red death keywords
    string: "#7ad4f0", // Frost Shield — icy protected strings
    number: "#d44e5a", // Frost Blast core — red-hot ice numbers
    function: "#5ec4e8", // Frost Blast — ice blue functions
    variable: "#a8c4d8", // Frost mist — plain text
    type: "#6e5ec4", // Sinister Gaze — purple arcane types
    constant: "#d44e5a", // Sacrifice — blood red constants
    operator: "#3e5868", // Frozen breath — subtle operators
    punctuation: "#3e5868", // Frozen breath — subtle punctuation
    tag: "#5ec4e8", // Frost Blast — icy tags
    attribute: "#6e5ec4", // Sinister Gaze — purple attrs
    class: "#6e5ec4", // Sinister Gaze — arcane classes
    interface: "#6e5ec4", // Sinister Gaze — dark types
    enum: "#d44e5a", // Sacrifice — blood red enums
    parameter: "#88b4cc", // Mid frost — params
    property: "#6aa0c0", // Mid blue — properties
    registry: "#5ec4e8", // Frost Blast — active registry
    builtin: "#7ad4f0", // Frost Shield — bright builtins
    text: "#a8c4d8",
    whitespace: "#101c28", // Faint frost lines
    indentation: "#162a40", // Frozen indent guides
  },
  terminal: {
    background: "#060d14",
    foreground: "#a8c4d8",
    cursor: "#d44e5a", // Lich's red eyes
    selectionBackground: "#162a40",

    // ANSI — frost and blood
    black: "#0a131c", // Frozen shadow
    red: "#d44e5a", // Chain Frost damage
    green: "#5ec4e8", // Frost Blast
    yellow: "#d44e5a", // Sacrifice blood
    blue: "#5ec4e8", // Frost ice blue
    magenta: "#6e5ec4", // Sinister Gaze
    cyan: "#7ad4f0", // Frost Shield
    white: "#a8c4d8", // Frost mist

    // Bright — Chain Frost bouncing brighter
    brightBlack: "#3e5868", // Frozen breath
    brightRed: "#e86a76", // Bright blood — Chain Frost bouncing
    brightGreen: "#80d8f8", // Bright frost
    brightYellow: "#e86a76", // Bright blood sacrifice
    brightBlue: "#80d8f8", // Bright chain frost
    brightMagenta: "#8a7ad4", // Bright purple
    brightCyan: "#a0e4f8", // Bright shield
    brightWhite: "#c8e0f0", // Bright mist
  },
};

export default lich;
