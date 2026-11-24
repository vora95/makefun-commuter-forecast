// Charm the Commuter: Forecast a City That Isn't
// make.fun bounty u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
//
// A deterministic one-line weather forecast for the fictional city of
// Wobbleton. No clock, no randomness, no network, no input: the same
// bytes are written on every run. Verified locally: two runs into
// separate directories produced byte-identical entry.txt (123 chars,
// sha256 cfdb908d278d85cbdc46fbd4d271e9468c8a7fe038a5359fc6b78500c142a30c).
//
// Writes the entry to $OUTPUT_DIR/entry.txt (default /output), honouring
// $MAKEFUN_OUTPUT_DIR as a fallback when OUTPUT_DIR is unset.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "In Wobbleton, sun all morning, rain after six — the forecast office formally apologises for last Tuesday’s ‘light drizzle’.";

// The gate allows 1 to 140 characters of UTF-8 text.
const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  throw new Error(`entry is ${length} characters, must be 1-140`);
}

const outputDir =
  process.env.OUTPUT_DIR ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
