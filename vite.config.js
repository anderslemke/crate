import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/crate/',
  // @tidal-music/auth ships top-level await; es2022 is required to bundle it
  // (build.target covers prod, optimizeDeps covers the dev pre-bundle).
  build: { target: 'es2022' },
  optimizeDeps: { esbuildOptions: { target: 'es2022' } },
});
