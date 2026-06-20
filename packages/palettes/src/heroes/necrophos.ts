import type { HeroPalette } from "../schema.js";

export const necrophos: HeroPalette = {
  hero: "necrophos",
  metadata: {
    title: "Necrophos",
    description:
      "The Radiant Reaper — Death Pulse heals allies and damages enemies, Ghost Shroud cloaks in ethereal mist, Heartstopper Aura drains life, Reaper's Scythe harvests souls",
    author: "dota-themes",
  },
  colors: {
    // Base - the abyss where death lingers
    background: "#0b1215", // Deep grave — cold, dark, lifeless
    foreground: "#c8d8d0", // Ghostly mist — pale, ethereal text

    // Core abilities as semantic roles
    primary: "#5ccf8e", // Death Pulse — toxic healing/damage energy
    secondary: "#8bbaa0", // Ghost Shroud — ethereal pale form
    accent: "#c9a94e", // Reaper's Scythe — golden scythe blade

    // Status
    error: "#bf4e4e", // Death Pulse damage — blood red
    warning: "#c9a94e", // Reaper's Scythe — gold warning
    info: "#6aadaf", // Ghost Shroud — cursed teal
    success: "#5ccf8e", // Death Pulse heal — toxic green
  },
  editor: {
    background: "#0b1215",
    foreground: "#c8d8d0",
    gutter: "#0e161a", // Slightly lighter than bg
    lineHighlight: "#101a1f", // Subtle highlight
    selection: "#1a3a30", // Toxic selection
    cursor: "#5ccf8e", // Death Pulse green

    // Syntax — each ability colors a token type
    comment: "#5a6b63", // Death ash — faded, dying
    keyword: "#9272c4", // Necromancy purple — dark magic
    string: "#c9a94e", // Reaper's Scythe gold — harvest
    number: "#b8944a", // Heartstopper bronze — draining
    function: "#4a9e5e", // Withered green — life force
    variable: "#c8d8d0", // Ghostly mist — plain text
    type: "#6aadaf", // Ghost Shroud teal — ethereal
    constant: "#b8944a", // Heartstopper bronze — constant drain
    operator: "#5a6b63", // Death ash — subtle
    punctuation: "#5a6b63", // Death ash — subtle
    tag: "#5ccf8e", // Death Pulse — tags pulse green
    attribute: "#6aadaf", // Ghost Shroud — ethereal attrs
    class: "#6aadaf", // Ghost Shroud — teal types
    interface: "#6aadaf", // Ghost Shroud — teal types
    enum: "#b8944a", // Heartstopper — bronze enums
    parameter: "#8bbaa0", // Ghost Shroud — pale params
    property: "#7ab89a", // Mid green — life property
    registry: "#5ccf8e", // Death Pulse — active registry
    builtin: "#5ccf8e", // Death Pulse — built-in functions glow
    text: "#c8d8d0",
    whitespace: "#141e22", // Faint grave lines
    indentation: "#1a3a30", // Toxic indent guides
  },
  terminal: {
    background: "#0b1215",
    foreground: "#c8d8d0",
    cursor: "#5ccf8e",
    selectionBackground: "#1a3a30",

    // ANSI — Death Pulse colors the terminal
    black: "#0e161a", // Grave shadow
    red: "#bf4e4e", // Death Pulse damage
    green: "#5ccf8e", // Death Pulse heal
    yellow: "#c9a94e", // Reaper's Scythe
    blue: "#4a9e5e", // Withered green
    magenta: "#9272c4", // Necromancy
    cyan: "#6aadaf", // Ghost Shroud
    white: "#c8d8d0", // Ghostly mist

    // Bright — Heartstopper Aura drains into brighter variants
    brightBlack: "#5a6b63", // Death ash
    brightRed: "#d46060", // Brighter blood
    brightGreen: "#7ae0a4", // Bright Death Pulse
    brightYellow: "#dcc06a", // Bright scythe
    brightBlue: "#5eb872", // Bright wither
    brightMagenta: "#a888d4", // Bright necromancy
    brightCyan: "#7ec4c8", // Bright ghost
    brightWhite: "#dce8e0", // Bright mist
  },
};

export default necrophos;
