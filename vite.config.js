import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@logos': path.resolve(__dirname, './src/assets/logos/'),
      '@containers': path.resolve(__dirname, './src/containers/'),
      '@routes': path.resolve(__dirname, './src/routes/'),
    }
  },
  plugins: [react()]
})
