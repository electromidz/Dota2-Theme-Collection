export type {
  HeroPalette,
  HeroMetadata,
  SemanticColors,
  EditorColors,
  TerminalColors,
  HexColor,
} from "./schema.js";

export { necrophos } from "./heroes/necrophos.js";
export { invoker } from "./heroes/invoker.js";
export { kunkka } from "./heroes/kunkka.js";
export { earthSpirit } from "./heroes/earth-spirit.js";
export { lich } from "./heroes/lich.js";
export { brewmaster } from "./heroes/brewmaster.js";
export { arcWarden } from "./heroes/arc-warden.js";

import { arcWarden } from "./heroes/arc-warden.js";
import { brewmaster } from "./heroes/brewmaster.js";
import { earthSpirit } from "./heroes/earth-spirit.js";
import { invoker } from "./heroes/invoker.js";
import { kunkka } from "./heroes/kunkka.js";
import { lich } from "./heroes/lich.js";
import { necrophos } from "./heroes/necrophos.js";
import type { HeroPalette } from "./schema.js";

export const heroes: HeroPalette[] = [
  necrophos,
  invoker,
  kunkka,
  earthSpirit,
  lich,
  brewmaster,
  arcWarden,
];

export const heroMap: Record<string, HeroPalette> = {
  necrophos,
  invoker,
  kunkka,
  "earth-spirit": earthSpirit,
  lich,
  brewmaster,
  "arc-warden": arcWarden,
};

export function getHero(name: string): HeroPalette | undefined {
  return heroMap[name.toLowerCase()];
}

export function getHeroNames(): string[] {
  return heroes.map((h) => h.hero);
}
