import { readdirSync, statSync } from "fs";
import { join, extname } from "path";
import sharp from "sharp";

function convertAllPngs(dir) {
  const items = readdirSync(dir);
  for (const item of items) {
    const full = join(dir, item);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      convertAllPngs(full);
    } else if (extname(full).toLowerCase() === ".png") {
      const out = full.replace(/\.png$/, ".webp");
      console.log(`→ Converting ${full} → ${out}`);
      sharp(full)
        .webp({ quality: 70 })
        .toFile(out)
        .catch(err => console.error(err));
    }
  }
}

// Scan your folder
convertAllPngs("D:\\Freelance\\webzio\\src\\assets");
