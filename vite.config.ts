import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This is the key change to fix the blank page issue on the server.
  define: {
    // Expose environment variables to the client-side code
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
