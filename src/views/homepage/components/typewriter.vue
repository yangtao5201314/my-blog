<template>
  <div class="typewriter-box">
    <div class="typewriter">
      <div class="text">
        江城开朗的豌豆，
        <span class="Chinese">让前端再简单一点。</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.typewriter-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.text {
  overflow: hidden;
  white-space: nowrap;
  animation: typeEffect 1s steps(70);
  font-size: 36px;
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  font-weight: bold;
}

.Chinese {
  letter-spacing: 0.05em;
}

@keyframes typeEffect {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
