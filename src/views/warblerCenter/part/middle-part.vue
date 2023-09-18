
<template>
  <div class="middle-part">
    <resume-warbler class="resume-warbler-component"></resume-warbler>
    <resume-skills class="resume-skills-component"></resume-skills>
    <resume-job></resume-job>
    <resume-link class="resume-link-component"></resume-link>
  </div>
</template>

<script setup lang="ts">
import resumeWarbler from '../component/resume-warbler.vue';
import resumeSkills from '../component/resume-skills.vue';
import resumeJob from '../component/resume-job.vue';
import resumeLink from '../component/resume-link.vue';
</script>

<style lang="scss" scoped>
.resume-skills-component,
.resume-link-component {
  @media (min-width: 1500px) {
    display: none;
  }
}
.resume-warbler-component {
  @media (min-width: 900px) {
    display: none;
  }
}
.middle-part {
  height: 100%;
  @media (max-width: 1500px) {
    flex: 1;
  }
  @media (max-width: 900px) {
    margin-left: 0px;
  }
  margin-left: 16px;
  background-color: var(--warbler-bg-soft);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  overflow: auto;
  &::-webkit-scrollbar {
    // 隐藏滚动条
    display: none;
  }
}
</style>
