
<template>
  <div class="resume-skills">
    <div class="title">技能</div>
    <div class="skill-box">
      <div class="skill-content-item">
        <span>·</span>熟悉<strong> Vue </strong>，有多个实际项目开发经验，包括
        <strong> Vue2 </strong>，<strong> Vue3 </strong>，<strong> Nuxt </strong>，<strong>
          VitePress
        </strong>
        等；
      </div>
      <div class="skill-content-item">
        <span>·</span>熟悉<strong> ES6+ </strong>语法，了解 <strong>TypeScript</strong>；
      </div>
      <div class="skill-content-item">
        <span>·</span> 能够利用 <strong>commander </strong>等第三方库进行脚手架开发，了解<strong>
          lerna </strong
        >多仓库管理；
      </div>
      <div class="skill-content-item">
        <span>·</span>了解<strong> nodejs </strong>，可以使用 <strong> express </strong> ，<strong>
          koa </strong
        >， <strong> egg </strong>框架进行接口开发；
      </div>
      <div class="skill-content-item">
        <span>·</span>了解 <strong> mysql </strong>，<strong> mongodb </strong>，<strong>
          redis </strong
        >，掌握基本增删改查；
      </div>
      <div class="skill-content-item">
        <span>·</span>了解 <strong> docker </strong>，
        <strong> github actions </strong>，前端静态化部署；
      </div>
      <div class="skill-content-item">
        <span>·</span>了解<strong> Photoshop </strong>，<strong> Axure </strong
        >等工具，能够进行简易的原型设计。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.resume-skills {
  width: 100%;
  margin-bottom: 16px;

  .mt8 {
    margin-top: 8px;
  }

  .mt16 {
    margin-top: 16px;
  }
  strong {
    color: var(--warbler-brand);
    margin: 0 5px;
  }
  .title {
    width: 100%;
    font-size: 20px;
    padding-bottom: 16px;
    margin-bottom: 8px;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
  }
  .skill-box {
    background-color: var(--warbler-bg);
    padding: 16px;
    border-radius: 4px;
    .skill-content-item {
      margin: 8px 16px;
      align-items: center;

      span {
        font-size: 12px;
        display: inline-block;
        transform: scale(3);
        margin-right: 8px;
        color: var(--warbler-brand);
      }
    }
  }
}
</style>
