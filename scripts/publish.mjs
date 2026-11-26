import { mkdir, cp, rm } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'glimpse.css', 'glimpse.js', 'favicon.svg', 'intros', 'assets/fonts', 'site', 'github-snapshot.json', 'wall.json', 'wall.txt', 'themes.json']) {
  await cp(new URL(name, root), new URL(name, output), { recursive: true });
}
