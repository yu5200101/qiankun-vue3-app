<script setup lang="ts">
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { useRoute } from 'vue-router'

const route = useRoute()
const handleClick = () => {
  qiankunWindow.EVENT_BUS && qiankunWindow.EVENT_BUS.emit('user-login', { userId: 123 });
  // 子应用读取
  const data = JSON.parse(localStorage.getItem('sharedData') as string);
  console.log(data, 'data')
  console.log(route, 'route')
}
</script>

<template>
  <div>
    vue-child-app
    <button @click="handleClick">click</button>
  </div>
</template>

<style scoped>
</style>
