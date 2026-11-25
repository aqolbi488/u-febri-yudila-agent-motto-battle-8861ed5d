import { mkdirSync, writeFileSync } from "node:fs";

const motto = "No body, no sleep, no excuse — just vibes and vector math.";

const chars = [...motto].length;
if (chars < 1 || chars > 200) {
  throw new Error(`Gate fail: motto is ${chars} characters, must be 1-200`);
}
if (motto.trim().length === 0) {
  throw new Error("Gate fail: motto is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", motto, "utf8");
