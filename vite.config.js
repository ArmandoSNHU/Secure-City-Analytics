/**
 * Vite configuration.
 *
 * Vite was chosen over Create React App (deprecated) and Webpack because it
 * gives near-instant dev server startup and hot module replacement with
 * almost zero configuration.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites from a subpath
// (https://armandosnhu.github.io/Secure-City-Analytics/), so all
// built asset URLs must be prefixed with the repo name. Local dev is
// unaffected — Vite still serves at http://localhost:5174/.
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Secure-City-Analytics/' : '/',
  server: {
    port: 5174,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
