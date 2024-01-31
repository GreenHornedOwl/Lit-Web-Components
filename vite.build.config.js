import { defineConfig } from 'vite'
export default defineConfig({  
  build: {
    // generate manifest.json in outDir
    outDir: './modules',
    manifest: false,
    watch: {},
    assetsDir: '',
    emptyOutDir: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        webcomponents: './src/webcomponents.js',        
      },
      output: {
        entryFileNames: `[name].bundle.js`,
        chunkFileNames: `[name].chunk.js`,
        assetFileNames: `[name].bundle.[ext]`,
      }
    },
  },
})