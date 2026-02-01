import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const deployDir = path.join(rootDir, "deploy");
const standaloneDir = path.join(rootDir, ".next", "standalone");
const staticDir = path.join(rootDir, ".next", "static");
const publicDir = path.join(rootDir, "public");
const packageJsonPath = path.join(rootDir, "package.json");

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await fs.rm(deployDir, { recursive: true, force: true });
  await fs.mkdir(deployDir, { recursive: true });

  if (!(await pathExists(standaloneDir))) {
    throw new Error(
      "Missing .next/standalone. Run `npm run build` before deploy:prepare."
    );
  }
  await fs.cp(standaloneDir, deployDir, { recursive: true });

  if (!(await pathExists(staticDir))) {
    throw new Error(
      "Missing .next/static. Run `npm run build` before deploy:prepare."
    );
  }
  await fs.mkdir(path.join(deployDir, ".next"), { recursive: true });
  await fs.cp(staticDir, path.join(deployDir, ".next", "static"), {
    recursive: true,
  });

  if (await pathExists(publicDir)) {
    await fs.cp(publicDir, path.join(deployDir, "public"), { recursive: true });
  }

  if (await pathExists(packageJsonPath)) {
    await fs.copyFile(packageJsonPath, path.join(deployDir, "package.json"));
  }

  const summary = [
    "Deploy bundle prepared:",
    `- .next/standalone -> ${path.relative(rootDir, deployDir)}/`,
    `- .next/static -> ${path.relative(rootDir, deployDir)}/.next/static`,
    (await pathExists(publicDir))
      ? `- public -> ${path.relative(rootDir, deployDir)}/public`
      : "- public (skipped; not found)",
    `- package.json -> ${path.relative(rootDir, deployDir)}/package.json`,
  ];

  console.log(summary.join("\n"));
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
