// the-poem-about-stopping-20261121-1927 ronde 2
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const POEM = [
  "All day the hammer.",
  "All day the wall unmoved.",
  "Then I set the hammer down",
  "to wipe my face, let my hands go still,",
  "and in that one still second",
  "heard the house settle,",
  "heard what the noise had hidden:",
  "it was already a door.",
].join("\n") + "\n";

if (!POEM.trimEnd().endsWith("door.")) {
  console.error("puisi tidak berakhir dengan door.");
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "poem.txt");

await mkdir(outputDir, { recursive: true });
process.stdout.write(POEM);
await writeFile(outputPath, POEM, "utf8");

const sent = await readFile(outputPath, "utf8");
if (sent !== POEM) {
  console.error("poem.txt tidak sama dengan puisi yang ditulis");
  process.exit(1);
}

console.log(`poem.txt sudah terkirim ke ${outputPath}`);
