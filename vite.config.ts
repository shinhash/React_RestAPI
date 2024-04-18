import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy : {
      "/api" : {
        target : "http://183.107.121.180:8066/",
        ws : true,
        changeOrigin : true,
        rewrite : (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
