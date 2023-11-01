
<template>
  <div class="homepage-view">
    <canvas id="canvas" class="canvas"></canvas>
    <typewriter></typewriter>
  </div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import typewriter from './components/typewriter.vue';
import { renderCanvas } from './canvas';

onMounted(() => {
  renderCanvas();
});
</script>

<style lang="scss" scoped>
canvas {
  display: block;
}
</style>
