import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';
import path from 'path'

const useDevMode = true; // 开启时禁用 HMR

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // 加载所有变量（包括非 VITE_ 前缀）
  return {
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
    },
    base: process.env.NODE_ENV === 'production' ? env.VITE_BACKEND_URL : '/' // 使用 loadEnv 加载的变量
  }
})
