import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../docs/", import.meta.url);

test("exports all three GitHub Pages routes", async () => {
  const [home, cs2, scum] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("cs2/index.html", root), "utf8"),
    readFile(new URL("scum/index.html", root), "utf8"),
  ]);

  assert.match(home, /Dein Squad/);
  assert.match(home, /href="\.\/cs2\/"/);
  assert.match(cs2, /Runde für Runde/);
  assert.match(scum, /Überleben ist besser/);
  assert.doesNotMatch(home, /<script\b/i);
});

test("includes social preview and GitHub Pages marker", async () => {
  await Promise.all([
    access(new URL("og.png", root)),
    access(new URL(".nojekyll", root)),
  ]);
});
