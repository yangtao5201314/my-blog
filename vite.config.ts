import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
//
export default defineConfig(({ mode, command }) => {
  // 获取当前的模式
  console.log('🚀🚀 ~ 当前阶段', command);
  console.log('🚀🚀 ~ 当前运行环境', mode);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@v': path.resolve(__dirname, 'src/views'),
        '@c': path.resolve(__dirname, 'src/components'),
        '@u': path.resolve(__dirname, 'src/utils'),
      },
    },
    server: {
      proxy: {
        '/juejin_api/': {
          target: 'https://juejin.palxp.com/',
          changeOrigin: true,
          rewrite: (apiPath: string) => apiPath.replace(/^\/juejin_api/, ''),
        },
      },
    },
  };
});
