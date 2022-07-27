import { defineConfig } from 'vite';
const path = require('path');
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@logos': path.resolve(__dirname, './public/assets/logos/'),
    }
  },
  plugins: [react()]
})
