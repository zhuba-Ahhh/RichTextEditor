import react from '@vitejs/plugin-react';
import fontmin from 'rollup-plugin-font-minify';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import';
import viteImagemin from 'vite-plugin-imagemin';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  define: {
    VERSION: JSON.stringify(process.env.npm_package_version),
  },
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
    fontmin(),
    importToCDN({
      modules: [
        autoComplete('react'),
        autoComplete('react-dom'),
        {
          name: 'katex',
          var: 'katex',
          path: `https://cdn.bootcdn.net/ajax/libs/KaTeX/0.16.9/katex.min.js`,
        },
        {
          name: '@excalidraw/excalidraw',
          var: 'ExcalidrawLib',
          path: `https://cdn.jsdelivr.net/npm/@excalidraw/excalidraw@0.17.6/dist/excalidraw.production.min.js`,
        },
      ],
    }),
    viteImagemin({
      gifsicle: {
        // gif图片压缩
        optimizationLevel: 1, // 选择1到3之间的优化级别
        interlaced: false, // 隔行扫描gif进行渐进式渲染
        colors: 64, // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      optipng: {
        // png
        optimizationLevel: 7, // 选择0到7之间的优化级别
      },
      mozjpeg: {
        // jpeg
        quality: 20, // 压缩质量，范围从0(最差)到100(最佳)。
      },
      pngquant: {
        // png
        quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4, // 压缩速度，1(强力)到11(最快)
      },
      svgo: {
        // svg压缩
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
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
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
      treeshake: {
        preset: 'recommended',
        // manualPureFunctions: ['console.log'],
      },
      external: ['react', 'react-dom', 'katex', '@excalidraw/excalidraw'],
    },
    minify: 'terser', // 启用 terser 压缩
    terserOptions: {
      // 生产环境时移除console等
      compress: {
        // pure_funcs: ['console.log'], // 只删除 console.log
        // drop_console: true, // 删除所有 console
        drop_debugger: true,
      },
    },
  },
});
