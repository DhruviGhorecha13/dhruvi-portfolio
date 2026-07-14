import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name exactly, e.g.
// if your repo is github.com/DhruviGhorecha13/dhruvi-portfolio then
// your site will live at DhruviGhorecha13.github.io/dhruvi-portfolio
// and base below should be '/dhruvi-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/dhruvi-portfolio/',
})
