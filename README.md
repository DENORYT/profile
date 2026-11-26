# Sujal Balpande

Personal portfolio and research notebook of Sujal Balpande, security researcher and technology speaker.

Run `python serve.py 8768` and open http://localhost:8768/. Edit `portfolio.config.json` to update the profile, then run `npm run build`.

## Cloudflare Pages free tier

Use these project settings:

- Framework preset: **None**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The build publishes only the optimized `dist/` folder. The deployment is a static site with no server functions or paid services. You can also deploy with Wrangler using `npx wrangler pages deploy dist` after `npm run build`.
