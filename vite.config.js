import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        navigateFallbackDenylist: [/^\/api/],
      },
      manifest: {
        "name": "Ruleta-de-la-suerte",
        "version": "0.1",
        "short_name": "Ruleta",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "lang": "es",
        "scope": "/",
        "icons": [
          {
            "src": "icon.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ]
      }
    }),
  ],
})