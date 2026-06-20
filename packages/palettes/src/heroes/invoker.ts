import type { HeroPalette } from "../schema.js";

export const invoker: HeroPalette = {
  hero: "invoker",
  metadata: {
    title: "Invoker",
    description:
      "The Grand Magus — Quas conjures ice, Wex commands storm, Exort wields fire. Cold Snap freezes, Ghost Walk vanishes, Tornado lifts, E.M.P. detonates, Sun Strike burns from the sky, Chaos Meteor scorches the earth",
    author: "dota-themes",
  },
  colors: {
    // Base - Invoker's cosmic observatory where he masters the three elements
    background: "#0c0e1a", // Night sky — deep, observatory dark
    foreground: "#c8c0e0", // Arcane text — pale lavender, scholarly

    // The Three Orbs — foundation of all magic
    primary: "#d07828", // Exort — molten solar fire, the dominant element
    secondary: "#48b8d0", // Quas — glacial frost, cold precision
    accent: "#9868d0", // Wex — storm lightning, arcane energy

    // Status — each orb colors a state
    error: "#d05040", // Chaos Meteor impact — molten damage
    warning: "#d8a030", // Sun Strike warning — solar gold
    info: "#48b8d0", // Quas frost — cold information
    success: "#d07828", // Exort fire — fiery success
  },
  editor: {
    background: "#0c0e1a",
    foreground: "#c8c0e0",
    gutter: "#101222", // Slightly lighter night sky
    lineHighlight: "#12142a", // Subtle arcane highlight
    selection: "#282050", // Storm-purple selection
    cursor: "#d07828", // Exort fire cursor — the brightest element

    // Syntax — Orbs color token types
    comment: "#5a5878", // Arcane dust — faded, scholarly
    keyword: "#9868d0", // Wex storm — arcane keywords, magical commands
    string: "#d8a030", // Sun Strike gold — golden quoted strings
    number: "#d07828", // Exort fire — molten numbers
    function: "#e89040", // Forge Spirit ember — warm functions
    variable: "#c8c0e0", // Arcane text — plain variables
    type: "#48b8d0", // Quas ice — frozen types, crystalline
    constant: "#d07828", // Exort fire — solid constants
    operator: "#5a5878", // Arcane dust — subtle operators
    punctuation: "#5a5878", // Arcane dust — subtle punctuation
    tag: "#9868d0", // Wex storm — arcane tags
    attribute: "#48b8d0", // Quas ice — frozen attributes
    class: "#48b8d0", // Quas ice — crystalline classes
    interface: "#9868d0", // Wex storm — arcane interfaces
    enum: "#d07828", // Exort fire — molten enums
    parameter: "#a098c0", // Mid lavender — params
    property: "#7898c0", // Mid blue — properties
    registry: "#d07828", // Exort — active registry
    builtin: "#9868d0", // Wex — arcane builtins
    text: "#c8c0e0",
    whitespace: "#181830", // Faint stardust
    indentation: "#282050", // Storm indent guides
  },
  terminal: {
    background: "#0c0e1a",
    foreground: "#c8c0e0",
    cursor: "#d07828",
    selectionBackground: "#282050",

    // ANSI — the three orbs color the terminal
    black: "#101222", // Night shadow
    red: "#d05040", // Chaos Meteor
    green: "#d07828", // Exort fire
    yellow: "#d8a030", // Sun Strike
    blue: "#48b8d0", // Quas ice
    magenta: "#9868d0", // Wex storm
    cyan: "#60c8d8", // Ghost Walk ethereal
    white: "#c8c0e0", // Arcane text

    // Bright — Deafening Blast amplifies all elements
    brightBlack: "#5a5878", // Arcane dust
    brightRed: "#e87060", // Bright meteor
    brightGreen: "#e89040", // Bright forge
    brightYellow: "#f0c050", // Bright sun strike
    brightBlue: "#70e0f0", // Bright quas
    brightMagenta: "#b088e0", // Bright wex
    brightCyan: "#90e0e8", // Bright ghost walk
    brightWhite: "#e0d8f0", // Bright arcane
  },
};

export default invoker;
