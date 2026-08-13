import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../docs/", import.meta.url);
const pages = ["index.html", "ueber-uns/index.html", "spiele/index.html", "community/index.html", "team/index.html", "cs2/index.html", "scum/index.html"];

test("exports the complete GitHub Pages site", async () => {
  const html = await Promise.all(pages.map((page) => readFile(new URL(page, root), "utf8")));
  assert.match(html[0], /Zocken kennt/);
  assert.match(html[0], /Pixel-Rentner/);
  assert.match(html[1], /Was uns verbindet/);
  assert.match(html[2], /Wähle deinen/);
  assert.match(html[3], /Kein Ort fürs Drama/);
  assert.match(html[4], /Pixel-Rentner bewegen/);
  assert.match(html[6], /Das Experiment #993/);
  assert.match(html[6], /PVE SURVIVAL/);
  assert.match(html[6], /PVP-ZONEN/);
  assert.doesNotMatch(html[6], /SERVER-IP/);
  assert.match(html[0], /https:\/\/discord\.gg\/BGXaUVrVUJ/);
  assert.match(html[5], /https:\/\/discord\.gg\/t6yXphhUUv/);
  assert.match(html[6], /https:\/\/discord\.gg\/Z8qknyt5WW/);
  assert.match(html[0], /href="\/_next\/static\/css\//);
  assert.match(html[0], /src="\/pixel-rentner-logo\.png"/);
  html.forEach((page) => assert.doesNotMatch(page, /\/Gaming-Community-Webseite\//));
  html.forEach((page) => assert.doesNotMatch(page, /<script\b/i));
});

test("includes preview assets and GitHub Pages marker", async () => {
  await Promise.all([
    access(new URL("pixel-rentner-favicon.png", root)),
    access(new URL("pixel-rentner-logo.png", root)),
    access(new URL("og-pixel-rentner.png", root)),
    access(new URL("og.png", root)),
    access(new URL("og-v2.png", root)),
    access(new URL(".nojekyll", root)),
    access(new URL("CNAME", root)),
  ]);
});
