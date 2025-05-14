import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts','./src/tests/setup.ts'],
    exclude: ["node_modules", "dist", ".next", ".prisma"],
  }
});