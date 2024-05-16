import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        nodePolyfills({
            // Whether to polyfill `global`
            global: true,
            // Whether to polyfill `process`
            process: true,
            // Whether to polyfill `Buffer`
            buffer: true,
            // Whether to polyfill `crypto`
            crypto: true,
        }),
      react(),
    ],
  //   resolve: {
  //     alias: {
  //         // Add aliases for node core modules
  //         stream: 'stream-browserify',
  //         crypto: 'crypto-browserify',
  //     },
  // },
})
