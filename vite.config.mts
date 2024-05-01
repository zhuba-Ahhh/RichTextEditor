import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase', // 或者 'dashes' | 'camelCaseOnly'
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin(),
    visualizer({
      // 打包完成后自动打开浏览器，显示产物体积报告
      open: false,
    }),
    importToCDN({
      modules: [autoComplete('react'), autoComplete('react-dom')],
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 5000, // 单位 kb
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        experimentalMinChunkSize: 10 * 1024, // 单位b 合并小chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
      treeshake: {
        preset: 'recommended',
        manualPureFunctions: ['console.log'],
      },
      external: ['react', 'react-dom'],
    },
    minify: 'terser', // 启用 terser 压缩
    terserOptions: {
      // 生产环境时移除console等
      compress: {
        pure_funcs: ['console.log'], // 只删除 console.log
        drop_console: true, // 删除所有 console
        drop_debugger: true,
      },
    },
  },
});
