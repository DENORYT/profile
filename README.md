# Sujal Balpande

Personal portfolio and research notebook of Sujal Balpande, security researcher and technology speaker.

Run `python serve.py 8768` and open http://localhost:8768/. Edit `portfolio.config.json` to update the profile, then run `npm run build`.

## Cloudflare Pages free tier

For a Git-connected **Pages** project, use these project settings:

- Framework preset: **None**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The build publishes only the optimized `dist/` folder. Leave any custom **Deploy command** empty in Pages; Pages runs the build command and publishes the output directory.

If you are using the Cloudflare **Workers** build screen shown in the deployment log, the repository also supports its exact command: `npx wrangler deploy`. The `wrangler.toml` file points Wrangler at the static `dist/` assets. Alternatively, run `npm run deploy` locally or use `npm run deploy:pages` for a direct Pages upload.
