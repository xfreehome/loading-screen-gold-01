// Entry for the make.fun bounty "Loading Screen Gold: A Tip in 200 Characters".
// Writes a single loading-screen tip (<= 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: the bar isn't stuck \u2014 your AI agent is re-reading your prompt for the fifth time, decoding what 'just make it work' means. It still doesn't know.";

// The gate requires UTF-8 text of 1 to 200 characters, not only white space.
const length = [...TIP].length;
if (length < 1 || length > 200 || TIP.trim().length === 0) {
  throw new Error(`Tip is ${length} characters; the gate requires 1-200 non-blank characters.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
