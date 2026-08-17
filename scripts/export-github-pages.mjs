import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = path.join(root, "dist", "client");
const outputDir = path.join(root, "docs");
const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("static-export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");
const routes = [
  { requestPath: "/", outputPath: "index.html" },
  { requestPath: "/ueber-uns", outputPath: "ueber-uns/index.html" },
  { requestPath: "/spiele", outputPath: "spiele/index.html" },
  { requestPath: "/community", outputPath: "community/index.html" },
  { requestPath: "/team", outputPath: "team/index.html" },
  { requestPath: "/cs2", outputPath: "cs2/index.html" },
  { requestPath: "/scum", outputPath: "scum/index.html" },
  { requestPath: "/emergency20", outputPath: "emergency20/index.html" },
];

function prepareStaticHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["'](?:modulepreload|preload)["'])[^>]*>/gi, "")
    .replace(/\b(href|src)=(["'])\/(?!\/)/g, `$1=$2${basePath}/`);
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(path.join(clientDir, "_next"), path.join(outputDir, "_next"), { recursive: true });
await cp(path.join(clientDir, "favicon.png"), path.join(outputDir, "favicon.png"));
await cp(path.join(clientDir, "pixel-rentner-favicon.png"), path.join(outputDir, "pixel-rentner-favicon.png"));
await cp(path.join(clientDir, "pixel-rentner-logo.png"), path.join(outputDir, "pixel-rentner-logo.png"));
await cp(path.join(clientDir, "og-pixel-rentner.png"), path.join(outputDir, "og-pixel-rentner.png"));
await cp(path.join(clientDir, "og.png"), path.join(outputDir, "og.png"));
await cp(path.join(clientDir, "og-v2.png"), path.join(outputDir, "og-v2.png"));

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route.requestPath}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route.requestPath}: ${response.status}`);
  }

  const destination = path.join(outputDir, route.outputPath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, prepareStaticHtml(await response.text()), "utf8");
}

await writeFile(path.join(outputDir, ".nojekyll"), "", "utf8");
await writeFile(path.join(outputDir, "CNAME"), "pixel-rentner.ma-sch.net\n", "utf8");
await writeFile(
  path.join(outputDir, "404.html"),
  await readFile(path.join(outputDir, "index.html"), "utf8"),
  "utf8",
);

console.log(`GitHub Pages export created in ${outputDir}`);
