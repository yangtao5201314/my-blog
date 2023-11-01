
<template>
  <div class="resume-warbler">
    <div class="header">
      <div class="avatar"></div>
      <div class="job">前端工程师</div>
    </div>
    <div class="info">
      <div class="info-item">姓名：杨涛</div>
      <div class="info-item">昵称：江城开朗的豌豆</div>
      <div class="info-item">年龄：24</div>
      <div class="info-item">坐标：西安</div>
      <div class="info-item">邮箱：yang_tao_web@163.com</div>
      <div class="info-item">微信：y_t_t_t_</div>
      <div class="info-item">学校：西安理工大学</div>
      <div class="info-item">专业：计算机科学与技术</div>
    </div>
    <div class="contact">
      <div class="words">
        江城开朗的豌豆是一个前端开发工程师，性格开朗，热爱分享和书写技术博客，
        平时玩的游戏有QQ飞车，王者荣耀，和平精英，
        <strong>目前正在启迪万众网络科技（北京）有限公司工作</strong>，如果你对我或我的技术感兴趣 ， 欢迎联系我
      </div>
    </div>
    <div class="icons">
      <i class="iconfont icon icon-juejin" @click="goToLink('juejin')"></i>
      <i class="iconfont icon icon-huaban88" @click="goToLink('github')"></i>
      <i class="iconfont icon icon-weixin" @click="goToLink('wechat')"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLink = (type: string) => {
  if (type === 'juejin') window.open('https://juejin.cn/user/3307789418773736');
  if (type === 'github') window.open('https://github.com/yangtao5201314');
  if (type === 'wechat') router.push({ path: '/contact' });
};
</script>

<style lang="scss" scoped>
.resume-warbler {
  width: 100%;

  strong {
    color: var(--warbler-brand);
    margin: 0 5px;
  }
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    .avatar {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: url('@/assets/image/warbler1.jpeg');
      background-size: 109%;
      background-repeat: no-repeat;
      background-position: -17px 0px;
    }
    .avatar:hover{
      transform: rotate(666turn);
    transition-delay: 1s;
    transition-property: all;
    transition-duration: 59s;
    transition-timing-function: cubic-bezier(.34,0,.84,1);
    }
    .job {
      font-size: 24px;
      margin: 16px 0;
      font-weight: bold;
    }
  }

  .info {
    margin: 8px 0 16px 0;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
    padding-bottom: 16px;
    @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 900px) {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fill, 220px);
    }

    .info-item {
      margin-top: 8px;
    }
  }

  .contact {
    .words {
      line-height: 1.4;
      letter-spacing: 1px;
    }
  }
  .icons {
    margin-top: 32px;
    display: flex;
    justify-content: center;
    .icon {
      cursor: pointer;
      font-size: 24px;
      margin: 8px;
      &:hover {
        color: var(--warbler-brand);
      }
    }
  }
}
</style>
