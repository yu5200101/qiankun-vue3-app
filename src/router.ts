import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes = [
  { path: '/', component: Home }
]
export default createRouter({
  history: createWebHistory( qiankunWindow.__POWERED_BY_QIANKUN__ ? '/subapp/vue' : '/'),
  routes
})