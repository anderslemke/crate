import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/crate/',
  // @tidal-music/player ships top-level await; es2022 is required to bundle it.
  build: { target: 'es2022' },
});
