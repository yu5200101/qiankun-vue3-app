import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import path from 'path'

const useDevMode = true; // 开启时禁用 HMR

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('vue-app', { useDevMode })
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  server: {
    port: 3002,
    cors: true, // 允许跨域
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
})
