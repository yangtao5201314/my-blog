<template>
  <nav-menu></nav-menu>
  <router-view></router-view>
</template>

<script setup lang="ts">
import NavMenu from '@c/nav-menu.vue';
import { onMounted } from 'vue';

onMounted(() => {
  // 页面渲染完成的时候把 loading 隐藏掉
  const ele = document.getElementById('spinner');
  ele!.style.display = 'none';
});
</script>

<style lang="scss" scoped></style>
