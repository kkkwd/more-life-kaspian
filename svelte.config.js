import nodeAdapter from '@sveltejs/adapter-node';
import vercelAdapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const buildTarget = process.env.BUILD_TARGET;
const adapter =
  buildTarget === 'node'
    ? nodeAdapter({
        out: 'build'
      })
    : vercelAdapter({
        runtime: 'nodejs22.x'
      });

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter
  }
};

export default config;
