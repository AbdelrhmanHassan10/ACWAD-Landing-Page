import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const serveParentDirPlugin = () => ({
  name: 'serve-parent-dir',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Clean query strings (e.g. ?t=123) from URL
      const cleanUrl = req.url.split('?')[0];
      const decodedUrl = decodeURIComponent(cleanUrl);
      
      if (decodedUrl.startsWith('/kids-track/')) {
        const filePath = path.join(__dirname, '..', decodedUrl.replace('/kids-track/', ''));
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath);
          
          if (filePath.endsWith('.html')) res.setHeader('Content-Type', 'text/html; charset=utf-8');
          else if (filePath.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
          else if (filePath.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript');
          else if (filePath.endsWith('.png')) res.setHeader('Content-Type', 'image/png');
          else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) res.setHeader('Content-Type', 'image/jpeg');
          else if (filePath.endsWith('.svg')) res.setHeader('Content-Type', 'image/svg+xml');
          
          res.end(content);
          return;
        }
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), serveParentDirPlugin()],
  server: {
    fs: { strict: false }
  }
})
