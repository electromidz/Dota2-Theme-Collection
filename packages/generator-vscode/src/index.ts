import type {
  GeneratedFile,
  GeneratorOptions,
  PlatformGenerator,
} from "@dota-themes/generator-core";
import { darken } from "@dota-themes/generator-core";
import type { HeroPalette } from "@dota-themes/palettes";

interface VSCodeTokenColor {
  name: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

interface VSCodeTheme {
  name: string;
  type: "dark";
  colors: Record<string, string>;
  tokenColors: VSCodeTokenColor[];
}

function generateVSCodeTheme(palette: HeroPalette): string {
  const e = palette.editor;
  const c = palette.colors;
  const name = palette.metadata.title;

  const colors: Record<string, string> = {
    // Editor
    "editor.background": e.background,
    "editor.foreground": e.foreground,
    "editor.lineHighlightBackground": e.lineHighlight,
    "editor.selectionBackground": e.selection,
    "editor.selectionHighlightBackground": darken(e.selection, 0.3),
    "editor.inactiveSelectionBackground": darken(e.selection, 0.5),
    "editor.findMatchBackground": darken(c.accent, 0.3),
    "editor.findMatchHighlightBackground": darken(c.accent, 0.5),
    "editor.wordHighlightBackground": darken(e.selection, 0.5),
    "editor.wordHighlightStrongBackground": darken(e.selection, 0.7),
    "editorCursor.foreground": e.cursor,
    "editorWhitespace.foreground": e.whitespace,
    "editorIndentGuide.background": e.indentation,
    "editorIndentGuide.activeBackground": darken(e.indentation, 0.5),
    "editorLineNumber.foreground": e.gutter,
    "editorLineNumber.activeForeground": e.cursor,
    "editorBracketMatch.background": darken(e.selection, 0.5),
    "editorBracketMatch.border": e.selection,
    "editorGutter.background": e.gutter,
    "editorWidget.background": darken(e.background, 0.03),
    "editorWidget.border": darken(e.background, -0.06),
    "editorSuggestWidget.background": darken(e.background, 0.03),
    "editorSuggestWidget.border": darken(e.background, -0.06),
    "editorSuggestWidget.selectedBackground": e.selection,
    "editorHoverWidget.background": darken(e.background, 0.03),
    "editorHoverWidget.border": darken(e.background, -0.06),
    "editorOverviewRuler.border": "transparent",
    "minimap.background": darken(e.background, 0.05),
    "scrollbar.shadow": "transparent",
    "scrollbarSlider.background": darken(e.comment, 0.5),
    "scrollbarSlider.hoverBackground": e.comment,
    "scrollbarSlider.activeBackground": darken(e.comment, 0.8),

    // Activity Bar
    "activityBar.background": darken(e.background, 0.05),
    "activityBar.foreground": e.foreground,
    "activityBar.border": darken(e.background, -0.06),
    "activityBar.activeBorder": c.primary,
    "activityBarBadge.background": c.primary,
    "activityBarBadge.foreground": e.background,

    // Side Bar
    "sideBar.background": darken(e.background, 0.03),
    "sideBar.foreground": e.foreground,
    "sideBar.border": darken(e.background, -0.06),
    "sideBarTitle.foreground": e.foreground,
    "sideBarSectionHeader.background": darken(e.background, 0.05),
    "sideBarSectionHeader.foreground": e.foreground,

    // Status Bar
    "statusBar.background": darken(e.background, 0.08),
    "statusBar.foreground": darken(e.foreground, 0.2),
    "statusBar.border": "transparent",
    "statusBar.debuggingBackground": c.warning,
    "statusBar.debuggingForeground": e.background,
    "statusBar.noFolderBackground": darken(e.background, 0.05),

    // Title Bar
    "titleBar.activeBackground": darken(e.background, 0.05),
    "titleBar.activeForeground": darken(e.foreground, 0.2),
    "titleBar.inactiveBackground": darken(e.background, 0.03),
    "titleBar.inactiveForeground": darken(e.foreground, 0.35),
    "titleBar.border": "transparent",

    // Tabs
    "tab.activeBackground": e.background,
    "tab.activeForeground": e.foreground,
    "tab.activeBorder": c.primary,
    "tab.activeBorderTop": "transparent",
    "tab.inactiveBackground": darken(e.background, 0.03),
    "tab.inactiveForeground": darken(e.foreground, 0.35),
    "tab.border": "transparent",
    "tab.hoverBackground": darken(e.background, 0.05),

    // Panels
    "panel.background": darken(e.background, 0.03),
    "panel.border": darken(e.background, -0.06),
    "panelTitle.activeBorder": c.primary,
    "panelTitle.activeForeground": e.foreground,
    "panelTitle.inactiveForeground": darken(e.foreground, 0.35),

    // Terminal
    "terminal.background": e.background,
    "terminal.foreground": e.foreground,
    "terminal.ansiBlack": c.error,
    "terminal.ansiRed": c.error,
    "terminal.ansiGreen": c.success,
    "terminal.ansiYellow": c.warning,
    "terminal.ansiBlue": c.info,
    "terminal.ansiMagenta": c.secondary,
    "terminal.ansiCyan": c.accent,
    "terminal.ansiWhite": e.foreground,
    "terminal.ansiBrightBlack": darken(e.foreground, 0.3),
    "terminal.ansiBrightRed": c.error,
    "terminal.ansiBrightGreen": c.success,
    "terminal.ansiBrightYellow": c.warning,
    "terminal.ansiBrightBlue": c.info,
    "terminal.ansiBrightMagenta": c.secondary,
    "terminal.ansiBrightCyan": c.accent,
    "terminal.ansiBrightWhite": e.foreground,

    // Git
    "gitDecoration.modifiedResourceForeground": c.info,
    "gitDecoration.deletedResourceForeground": c.error,
    "gitDecoration.untrackedResourceForeground": c.success,
    "gitDecoration.conflictingResourceForeground": c.warning,
    "gitDecoration.ignoredResourceForeground": e.comment,

    // Diff
    "diffEditor.insertedTextBackground": darken(c.success, 0.7),
    "diffEditor.removedTextBackground": darken(c.error, 0.7),

    // List
    "list.activeSelectionBackground": e.selection,
    "list.activeSelectionForeground": e.foreground,
    "list.hoverBackground": darken(e.background, 0.05),
    "list.highlightForeground": c.primary,

    // Input
    "input.background": darken(e.background, 0.05),
    "input.foreground": e.foreground,
    "input.border": darken(e.background, -0.06),
    "input.placeholderForeground": darken(e.foreground, 0.25),
    "inputOption.activeBorder": c.primary,

    // Button
    "button.background": c.primary,
    "button.foreground": e.background,

    // Badge
    "badge.background": c.primary,
    "badge.foreground": e.background,

    // Command Center
    "commandCenter.foreground": e.foreground,
    "commandCenter.activeForeground": e.foreground,
    "commandCenter.background": darken(e.background, 0.05),
    "commandCenter.activeBackground": darken(e.background, 0.08),
    "commandCenter.border": darken(e.background, -0.06),

    // Focus
    focusBorder: c.primary,
    "selection.background": e.selection,

    // Breadcrumb
    "breadcrumb.foreground": e.comment,
    "breadcrumb.focusForeground": e.foreground,
    "breadcrumb.activeSelectionForeground": e.foreground,
    "breadcrumbPicker.background": darken(e.background, 0.03),
  };

  const tokenColors: VSCodeTokenColor[] = [
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: e.comment, fontStyle: "italic" },
    },
    {
      name: "Strings",
      scope: ["string", "string.quoted"],
      settings: { foreground: e.string },
    },
    {
      name: "Numbers",
      scope: ["constant.numeric"],
      settings: { foreground: e.number },
    },
    {
      name: "Boolean",
      scope: ["constant.language"],
      settings: { foreground: e.constant },
    },
    {
      name: "Keywords",
      scope: ["keyword", "keyword.control", "keyword.operator.new", "keyword.operator.expression"],
      settings: { foreground: e.keyword },
    },
    {
      name: "Storage",
      scope: ["storage", "storage.type"],
      settings: { foreground: e.keyword },
    },
    {
      name: "Functions",
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: e.function },
    },
    {
      name: "Classes",
      scope: ["entity.name.type", "entity.name.class", "support.type", "support.class"],
      settings: { foreground: e.type },
    },
    {
      name: "Interfaces",
      scope: ["entity.name.type.interface"],
      settings: { foreground: e.interface },
    },
    {
      name: "Enums",
      scope: ["entity.name.type.enum", "variable.other.enummember"],
      settings: { foreground: e.enum },
    },
    {
      name: "Variables",
      scope: ["variable", "variable.other"],
      settings: { foreground: e.variable },
    },
    {
      name: "Parameters",
      scope: ["variable.parameter"],
      settings: { foreground: e.parameter },
    },
    {
      name: "Properties",
      scope: ["variable.other.property", "support.variable.property"],
      settings: { foreground: e.property },
    },
    {
      name: "Constants",
      scope: ["variable.other.constant", "variable.language"],
      settings: { foreground: e.constant },
    },
    {
      name: "Operators",
      scope: ["keyword.operator"],
      settings: { foreground: e.operator },
    },
    {
      name: "Punctuation",
      scope: ["punctuation", "meta.brace"],
      settings: { foreground: e.punctuation },
    },
    {
      name: "Tags",
      scope: ["entity.name.tag"],
      settings: { foreground: e.tag },
    },
    {
      name: "Attributes",
      scope: ["entity.other.attribute-name"],
      settings: { foreground: e.attribute },
    },
    {
      name: "Decorators",
      scope: ["meta.decorator", "punctuation.decorator"],
      settings: { foreground: c.accent },
    },
    {
      name: "Builtins",
      scope: ["support.constant", "support.variable"],
      settings: { foreground: e.builtin },
    },
    {
      name: "Regex",
      scope: ["string.regexp"],
      settings: { foreground: c.accent },
    },
    {
      name: "Escape Chars",
      scope: ["constant.character.escape"],
      settings: { foreground: c.accent },
    },
  ];

  const theme: VSCodeTheme = {
    name: `Dota ${name}`,
    type: "dark",
    colors,
    tokenColors,
  };

  return JSON.stringify(theme, null, 2);
}

function generatePackageJSON(palette: HeroPalette): string {
  const name = palette.metadata.title;
  const heroSlug = palette.hero;

  const pkg = {
    name: `dota-${heroSlug}`,
    displayName: `Dota ${name}`,
    description: `${palette.metadata.description} — A Dota 2 hero-inspired theme for VS Code`,
    version: "0.1.0",
    publisher: "dota-themes",
    license: "MIT",
    engines: { vscode: "^1.80.0" },
    categories: ["Themes"],
    themes: [
      {
        label: `Dota ${name}`,
        uiTheme: "vs-dark",
        path: `./themes/dota-${heroSlug}-color-theme.json`,
      },
    ],
  };

  return JSON.stringify(pkg, null, 2);
}

export const vscodeGenerator: PlatformGenerator = {
  name: "vscode",
  fileExtension: "json",

  generate(options: GeneratorOptions): GeneratedFile[] {
    const heroSlug = options.hero.hero;
    const themeContent = generateVSCodeTheme(options.hero);
    const pkgContent = generatePackageJSON(options.hero);
    return [
      {
        path: `${options.outputDir}/themes/dota-${heroSlug}-color-theme.json`,
        content: themeContent,
      },
      { path: `${options.outputDir}/package.json`, content: pkgContent },
    ];
  },
};
