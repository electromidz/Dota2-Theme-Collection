export type HexColor = `#${string}`;

export interface HeroMetadata {
  readonly title: string;
  readonly description: string;
  readonly author?: string;
}

export interface SemanticColors {
  readonly background: HexColor;
  readonly foreground: HexColor;
  readonly primary: HexColor;
  readonly secondary: HexColor;
  readonly accent: HexColor;
  readonly error: HexColor;
  readonly warning: HexColor;
  readonly info: HexColor;
  readonly success: HexColor;
}

export interface EditorColors {
  readonly background: HexColor;
  readonly foreground: HexColor;
  readonly gutter: HexColor;
  readonly lineHighlight: HexColor;
  readonly selection: HexColor;
  readonly cursor: HexColor;
  readonly comment: HexColor;
  readonly keyword: HexColor;
  readonly string: HexColor;
  readonly number: HexColor;
  readonly function: HexColor;
  readonly variable: HexColor;
  readonly type: HexColor;
  readonly constant: HexColor;
  readonly operator: HexColor;
  readonly punctuation: HexColor;
  readonly tag: HexColor;
  readonly attribute: HexColor;
  readonly class: HexColor;
  readonly interface: HexColor;
  readonly enum: HexColor;
  readonly parameter: HexColor;
  readonly property: HexColor;
  readonly registry: HexColor;
  readonly builtin: HexColor;
  readonly text: HexColor;
  readonly whitespace: HexColor;
  readonly indentation: HexColor;
}

export interface TerminalColors {
  readonly background: HexColor;
  readonly foreground: HexColor;
  readonly cursor: HexColor;
  readonly selectionBackground: HexColor;
  readonly black: HexColor;
  readonly red: HexColor;
  readonly green: HexColor;
  readonly yellow: HexColor;
  readonly blue: HexColor;
  readonly magenta: HexColor;
  readonly cyan: HexColor;
  readonly white: HexColor;
  readonly brightBlack: HexColor;
  readonly brightRed: HexColor;
  readonly brightGreen: HexColor;
  readonly brightYellow: HexColor;
  readonly brightBlue: HexColor;
  readonly brightMagenta: HexColor;
  readonly brightCyan: HexColor;
  readonly brightWhite: HexColor;
}

export interface HeroPalette {
  readonly hero: string;
  readonly metadata: HeroMetadata;
  readonly colors: SemanticColors;
  readonly editor: EditorColors;
  readonly terminal: TerminalColors;
}
