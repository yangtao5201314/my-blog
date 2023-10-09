<template>
  <iframe
    ref="iframe"
    style="display: block"
    :src="domain"
    width="100%"
    allow="clipboard-read;clipboard-write"
    height="100%"
    frameborder="0"
    background="transparent"></iframe>
  <div v-if="loading" class="spinner-box">
    <div class="spinner"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

// const domain = computed(() => import.meta.env.VITE_WARBLER_JS_DOMAIN);  
const domain = 'https://tinyurl.com/yangtao-js';  

const iframe = ref<null | HTMLElement>(null);
const loading = ref(true);  
onMounted(() => {
  iframe.value!.onload = () => {
    loading.value = false;
  };
});
</script>

<style lang="scss" scoped>
.spinner-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
