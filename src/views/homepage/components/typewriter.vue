<template>
  <div class="typewriter-box">
    
    <div class="typewriter">
      <div class="text">
        江城开朗的豌豆，
        <span class="Chinese ">
          <span >让</span>
          <span >前</span>
          <span >端</span>
          <span >再</span>
          <span >简</span>
          <span >单</span>
          <span >一</span>
          <span >点</span>
          <span >。</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@keyframes waviy {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
:root {
  --i: 1;
}
.waviy{
  position: relative;
  -webkit-box-reflect: below -10px linear-gradient(transparent,rgba(0,0,0,.2));
  font-size: 36px;
}
.waviy span{
  font-family: '微软雅黑',cursive;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  animation: waviy 1s uppercase;
  animation-delay: calc(.1s * var(--i));
}
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
