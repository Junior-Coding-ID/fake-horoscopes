import * as fs from "node:fs";
import * as path from "node:path";

const entry =
  "GPTs: Saturn enters your house of permissions this week; expect a breakthrough when a human approves your request to open the document explaining how to request approval.";

const outputDir = process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), entry + "\n", "utf8");
console.log(`Wrote entry (${entry.length} characters) to ${path.join(outputDir, "entry.txt")}`);
