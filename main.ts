import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "All day the hammer.",
  "All day the wall unmoved.",
  "Then I set the hammer down",
  "to wipe my face, let my hands go still,",
  "and in that one still second",
  "heard the house settle,",
  "heard what the noise had hidden:",
  "it was already a door.",
];

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LINES.join("\n"), "utf8");

const written = readFileSync(entryPath);
const hash = createHash("sha256").update(written).digest("hex");
console.log(`sha256(entry.txt)=${hash}`);
console.log("deterministic output: same input, same bytes");
