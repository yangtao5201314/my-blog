
<template>
  <div class="warbler-center">
    <div class="layout">
      <left-part></left-part>
      <middle-part></middle-part>
      <right-part></right-part>
    </div>
  </div>
</template>

<script setup lang="ts">
import leftPart from './part/left-part.vue';
import middlePart from './part/middle-part.vue';
import rightPart from './part/right-part.vue';
</script>

<style lang="scss" scoped>
.warbler-center {
  display: flex;
  padding-top: var(--warbler-header-height);
  width: 100%;
  height: 100%;
  min-height: 600px;
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 32px;
    @media (max-width: 900px) {
      padding: 16px;
    }
  }
}
</style>
