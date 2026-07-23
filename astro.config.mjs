import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://technowards.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
