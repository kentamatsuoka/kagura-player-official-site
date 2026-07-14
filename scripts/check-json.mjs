import { readFileSync } from "node:fs";

for (const file of process.argv.slice(2)) {
  JSON.parse(readFileSync(file, "utf8"));
  console.log(`ok ${file}`);
}
