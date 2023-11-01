
<template>
  <div class="resume-link">
    <div class="title">相关连接</div>
    <div v-for="(item, index) in map" :key="index" class="link-content-item">
      <div class="left">
        <span>·</span>
        <div class="name" @click="goToLink(item?.nameLink)">{{ item.name }}</div>
      </div>
      <div class="right">
        <div v-if="item.online" class="online" @click="goToLink(item?.online)">在线体验</div>
        <div v-if="item.source" class="source" @click="goToLink(item?.source)">源码地址</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Link {
  name: string;
  nameLink?: string;
  online?: string;
  source?: string;
}

const map: Array<Link> = [
  {
    name: 'CSDN',
    nameLink: 'https://blog.csdn.net/qq_48652579?type=lately',
    online: 'https://blog.csdn.net/qq_48652579?type=lately',
    // source: 'https://github.com/alanhzw/warbler-homepage',
  },
  {
    name: 'Github',
    nameLink: 'https://github.com/yangtao5201314',
    online: 'https://github.com/yangtao5201314',
  },
  {
    name: 'Gitee',
    nameLink: 'https://gitee.com/yangtaoqwer_admin_admin',
    online: 'https://gitee.com/yangtaoqwer_admin_admin',
  },
  {
    name: '掘金社区',
    nameLink: 'https://juejin.cn/user/3307789418773736',
    online: 'https://juejin.cn/user/3307789418773736',
  },
  {
    name: 'UNIAPP',
    nameLink: 'https://ext.dcloud.net.cn/plugin?id=11251',
    online: 'https://ext.dcloud.net.cn/plugin?id=11251',
  },
  {
    name: '微信公众号',
    nameLink: 'https://tinyurl.com/gongZhonghao',
    online: 'https://tinyurl.com/gongZhonghao',
  },
  {
    name: '哔哩哔哩',
    nameLink: 'https://space.bilibili.com/560080179',
    online: 'https://space.bilibili.com/560080179',
  },
  {
    name: '个人网站',
    nameLink: 'https://tinyurl.com/yangtaoWeb',
    online: 'https://tinyurl.com/yangtaoWeb',
    source: 'https://github.com/yangtao5201314/my-blog',
  },
  
  {
    name: 'yangtao-js',
    nameLink: 'https://7072-prod-4gapv4gl33a8a0ff-1305990777.tcb.qcloud.la/index.html?sign=cb4a9bd3d466506cf838f5149f68007c&t=1698832416',
    online: 'https://7072-prod-4gapv4gl33a8a0ff-1305990777.tcb.qcloud.la/index.html?sign=cb4a9bd3d466506cf838f5149f68007c&t=1698832416',
    source: 'https://github.com/yangtao5201314/yangtao-js',
  },
// {
  //   name: 'warbler-cli',
  //   nameLink: 'http://www.warblerfe.top/warbler/cli',
  //   online: 'http://www.warblerfe.top/warbler/cli',
  //   source: 'https://github.com/alanhzw/warbler-cli',
  // },
  // {
  //   name: '个人主页(旧版)',
  //   nameLink: 'https://alanhzw.github.io/',
  //   online: 'https://alanhzw.github.io/',
  //   source: 'https://github.com/alanhzw/warbler-homepage'
  // },
 
];

const goToLink = (link?: string) => {
  if (link) {
    window.open(link);
  }
};
</script>

<style lang="scss" scoped>
.resume-link {
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

  .link-content-item {
    background-color: var(--warbler-bg);
    padding: 16px;
    border-radius: 4px;
    margin: 8px 0px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .name {
        cursor: pointer;

        &:hover {
          color: var(--warbler-brand);
        }
      }
    }

    .right {
      display: none;

      @media (min-width: 1600px) or (max-width: 1500px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .online {
        color: var(--warbler-brand-lighter);
        cursor: pointer;

        &:hover {
          color: var(--warbler-brand);
        }
      }

      .source {
        color: var(--warbler-brand-lightest);
        margin-left: 8px;
        cursor: pointer;

        &:hover {
          color: var(--warbler-brand);
        }
      }
    }

    span {
      font-size: 12px;
      display: inline-block;
      transform: scale(3);
      margin-right: 8px;
      color: var(--warbler-brand);
    }
  }
}</style>
