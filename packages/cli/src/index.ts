#!/usr/bin/env node

import * as fs from "node:fs";
import * as path from "node:path";
import type { GeneratedFile, PlatformGenerator } from "@dota-themes/generator-core";
import { ghosttyGenerator } from "@dota-themes/generator-ghostty";
import { kittyGenerator } from "@dota-themes/generator-kitty";
import { neovimGenerator } from "@dota-themes/generator-neovim";
import { vscodeGenerator } from "@dota-themes/generator-vscode";
import { weztermGenerator } from "@dota-themes/generator-wezterm";
import { zedGenerator } from "@dota-themes/generator-zed";
import { getHero, getHeroNames, heroMap, heroes } from "@dota-themes/palettes";

const ROOT_DIR = path.resolve(import.meta.dirname, "../../..");

const generators: Record<string, PlatformGenerator> = {
  neovim: neovimGenerator,
  zed: zedGenerator,
  vscode: vscodeGenerator,
  kitty: kittyGenerator,
  ghostty: ghosttyGenerator,
  wezterm: weztermGenerator,
};

const platformDirs: Record<string, string> = {
  neovim: "themes/neovim",
  zed: "themes/zed",
  vscode: "themes/vscode",
  kitty: "themes/kitty",
  ghostty: "themes/ghostty",
  wezterm: "themes/wezterm",
};

function writeFiles(files: GeneratedFile[]): void {
  for (const file of files) {
    const dir = path.dirname(file.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(file.path, file.content, "utf-8");
  }
}

function generateHero(heroName: string): void {
  const palette = getHero(heroName);
  if (!palette) {
    console.error(`Unknown hero: "${heroName}". Available heroes: ${getHeroNames().join(", ")}`);
    process.exit(1);
  }

  console.log(`Generating themes for ${palette.metadata.title}...`);

  for (const [platformName, generator] of Object.entries(generators)) {
    const outputDir = path.join(ROOT_DIR, platformDirs[platformName]);
    fs.mkdirSync(outputDir, { recursive: true });

    const files = generator.generate({ hero: palette, outputDir });
    writeFiles(files);
    console.log(`  ✓ ${platformName} (${files.length} file${files.length > 1 ? "s" : ""})`);
  }
}

function generatePlatform(platformName: string, heroName: string): void {
  const generator = generators[platformName];
  if (!generator) {
    console.error(
      `Unknown platform: "${platformName}". Available platforms: ${Object.keys(generators).join(", ")}`,
    );
    process.exit(1);
  }

  const palette = getHero(heroName);
  if (!palette) {
    console.error(`Unknown hero: "${heroName}". Available heroes: ${getHeroNames().join(", ")}`);
    process.exit(1);
  }

  const outputDir = path.join(ROOT_DIR, platformDirs[platformName]);
  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`Generating ${palette.metadata.title} for ${platformName}...`);
  const files = generator.generate({ hero: palette, outputDir });
  writeFiles(files);
  console.log(`  ✓ ${files.length} file${files.length > 1 ? "s" : ""} written`);
}

function generateAll(heroName?: string): void {
  const heroNames = heroName ? [heroName] : getHeroNames();

  for (const name of heroNames) {
    generateHero(name);
  }
}

function buildZedExtension(): void {
  const extensionDir = path.join(ROOT_DIR, "packages/zed-extension");
  const themesDir = path.join(extensionDir, "themes");

  console.log("Building Zed extension...\n");

  // Clean themes directory
  fs.mkdirSync(themesDir, { recursive: true });
  for (const file of fs.readdirSync(themesDir)) {
    fs.unlinkSync(path.join(themesDir, file));
  }

  // Generate each hero theme
  let totalFiles = 0;
  for (const palette of heroes) {
    const files = zedGenerator.generate({
      hero: palette,
      outputDir: themesDir,
    });

    for (const file of files) {
      fs.mkdirSync(path.dirname(file.path), { recursive: true });
      fs.writeFileSync(file.path, file.content, "utf-8");
      totalFiles++;
    }

    console.log(`  ✓ ${palette.metadata.title}`);
  }

  console.log(`\nDone! ${totalFiles} theme files written to ${themesDir}`);
  console.log("\nTo install as a dev extension:");
  console.log("  1. Open Zed → Extensions → Install Dev Extension");
  console.log(`  2. Select: ${extensionDir}`);
  console.log("\nTo publish:");
  console.log("  1. Fork https://github.com/zed-industries/extensions");
  console.log("  2. Add as submodule:");
  console.log(`     git submodule add <your-fork-url> extensions/dota-themes`);
  console.log("  3. Add to extensions.toml:");
  console.log("     [dota-themes]");
  console.log('     submodule = "extensions/dota-themes"');
  console.log('     version = "0.1.0"');
  console.log("  4. Submit PR");
}

function printUsage(): void {
  console.log(`
Dota Themes — A cross-platform theme ecosystem inspired by Dota 2 heroes

Usage:
  dota-themes generate hero <hero>               Generate all platforms for a hero
  dota-themes generate platform <platform> <hero>  Generate a specific platform for a hero
  dota-themes generate all [hero]                 Generate all heroes (or one specific hero)
  dota-themes build-zed-extension                 Build the Zed extension for publishing
  dota-themes list heroes                         List available heroes
  dota-themes list platforms                      List available platforms

Heroes:
  ${getHeroNames().join(", ")}

Platforms:
  ${Object.keys(generators).join(", ")}

Examples:
  dota-themes generate hero lich
  dota-themes generate platform neovim lich
  dota-themes generate all
  dota-themes generate all necrophos
`);
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printUsage();
    return;
  }

  const command = args[0];

  switch (command) {
    case "generate": {
      const subcommand = args[1];
      switch (subcommand) {
        case "hero": {
          const heroName = args[2];
          if (!heroName) {
            console.error(
              "Please specify a hero name. Use `dota-themes list heroes` to see available heroes.",
            );
            process.exit(1);
          }
          generateHero(heroName);
          break;
        }
        case "platform": {
          const platformName = args[2];
          const heroName = args[3];
          if (!platformName || !heroName) {
            console.error("Usage: dota-themes generate platform <platform> <hero>");
            process.exit(1);
          }
          generatePlatform(platformName, heroName);
          break;
        }
        case "all": {
          const heroName = args[2];
          generateAll(heroName);
          break;
        }
        default:
          console.error(`Unknown subcommand: "${subcommand}". Use --help for usage.`);
          process.exit(1);
      }
      break;
    }
    case "build-zed-extension": {
      buildZedExtension();
      break;
    }
    case "list": {
      const subcommand = args[1];
      switch (subcommand) {
        case "heroes":
          console.log("Available heroes:");
          for (const name of getHeroNames()) {
            const hero = heroMap[name];
            console.log(`  ${name.padEnd(16)} ${hero.metadata.description}`);
          }
          break;
        case "platforms":
          console.log("Available platforms:");
          for (const name of Object.keys(generators)) {
            console.log(`  ${name}`);
          }
          break;
        default:
          console.error(`Unknown subcommand: "${subcommand}". Use "heroes" or "platforms".`);
          process.exit(1);
      }
      break;
    }
    default:
      console.error(`Unknown command: "${command}". Use --help for usage.`);
      process.exit(1);
  }
}

main();
