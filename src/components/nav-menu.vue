
<template>
  <div class="nav-menu">
  
    <div class="mask"></div>
    <div class="logo cp" @click="goToHome">
      <div class="logo-img-box">
        <img src="https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg" class="logo-img" />
      </div>
      <div class="logo-title fwb">江城开朗的豌豆</div>
    </div>
    <div class="navs show-title">
      <div
        v-for="(nav, index) in navs"
        :key="index"
        :class="{ active: index === currentIndex }"
        class="nav cp"
        @click="changeCurrentNab(nav.path)">
        {{ nav.title }}
      </div>
    </div>
    <!-- 移动端 -->
    <div class="navs show-icon">
      <div class="icon-bg" title="前端导航" @click="router.push({ path: '/navigation' })">
        <i class="iconfont icon-daohang"></i>
      </div>
      <!-- <div class="icon-bg" title="warbler-cli" @click="router.push({ path: '/warbler/cli' })">
        <div>cli</div>
      </div> -->
      <div class="icon-bg" title="yangtao-js" @click="router.push({ path: '/warbler/js' })">  
        <div>js</div>
      </div>
      <div class="icon-bg" title="江城开朗的豌豆" @click="router.push({ path: '/warblerCenter' })">
        <i class="iconfont icon-jianli"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// 导航列表
const navs = [
  {
    title: '前端导航',
    path: '/navigation',
  },
  {
    title: 'yangtao-js',
    path: '/warbler/js',
  },
  // {
  //   title: 'yangtao-cli',
  //   path: '/warbler/cli',
  // },
  // {
  //   title: '数据中心',
  //   path: '/dataCenter',
  // },
  {
    title: '江城开朗的豌豆',
    path: '/warblerCenter',
  },
];

const router = useRouter();
const route = useRoute();

// 点击 Tab 切换页面
const changeCurrentNab = (path: string) => {
  router.push({ path });
};
// 回到首页
const goToHome = () => {
  router.push({ path: '/' });
};
// 动态计算当前激活的导航，用来高亮当前导航
const currentIndex = computed(() => navs.findIndex((nav) => nav.path === route.path));

  
</script>

<style lang="scss" scoped>
.nav-menu {
  width: 100%;
  height: var(--warbler-header-height);
  position: fixed;
  top: 0;

  .show-title {
    @media (max-width: 700px) {
      display: none !important;
    }
  }
  .show-icon {
    @media (min-width: 700px) {
      display: none !important;
    }
    .icon-bg {
      width: 32px;
      height: 32px;
      font-size: 14px;
      background-color: var(--warbler-bg-soft);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 4px;
      cursor: pointer;
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: var(--warbler-bg-half-opacity);
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    backdrop-filter: blur(12px);
  }
  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--page-padding);

    .logo-img-box {
      width: 32px;
      height: 32px;
    }
    .logo-img {
      width: 100%;
      height: 100%;
    }
    .logo-title {
      font-size: 24px;
      margin-left: 8px;
      background: linear-gradient(-60deg, #8700ff 0, #ff009e 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .navs {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--page-padding);
    .nav {
      margin-left: 16px;
      &:hover {
        color: var(--warbler-brand);
      }
    }
    .active {
      color: var(--warbler-brand);
    }
  }
}
</style>
