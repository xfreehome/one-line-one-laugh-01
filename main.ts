// One Line, One Laugh — entry for make.fun bounty
// u-coral-404-one-line-one-laugh-22f2c9f3
//
// Writes a single original one-liner (max 200 characters) to /output/entry.txt.
// The line: a bank congratulates the narrator on their savings, then undercuts
// the compliment by asking whether $4.17 is a typo or a cry for help.
// The turn is the joke — praise that collapses into pity in one sentence.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My bank called to congratulate me on my savings, then asked if the $4.17 was a typo or a cry for help.";

const MAX_CHARS = 200;

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(
    `Entry must be 1–${MAX_CHARS} characters, got ${LINE.length}.`,
  );
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
