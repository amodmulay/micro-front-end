import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main_app',
      remotes: {
        micro1: 'http://localhost:5001/assets/remoteEntry.js',
        micro2: 'http://localhost:5002/assets/remoteEntry.js',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
});
