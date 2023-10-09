
<template>
  <div class="projects">
    <div class="title">工作经历</div>
    <div class="job mt8">
      <div class="header">
        <!-- <div class="company">北京理想研发总部（组员）</div> -->
        <div class="time">
          <!-- 2023 年 6 月至今 -->
        </div>
      </div>
      <div class="job-content">
        <div class="job-content-item"><span>·</span>简历目前是个初版，还未完善，以下只是极小部分</div>
      </div>
    </div>
    <div class="job mt8">
      <div class="header">
        <div class="company">启迪万众网络 - 信息集成（团队负责人，3人）</div>
        <div class="time">2022 年 3 月至 至今</div>
      </div>
      <div class="job-content">
        <div class="job-content-item">
          <span>·</span>负责页面开发和维护，任务分配，代码审查，设计原型；
        </div>
        <div class="job-content-item">
          <span>·</span>通过 <strong>vue-cli</strong> ， 结合
          <strong>eslint + prettier + husky + lint-staged + commitlint </strong>
          搭建现代化前端工程；
        </div>
        <div class="job-content-item">
          <span>·</span>制定前端开发规范，通过 <strong>Pull Requests</strong> 进行代码审查 ,
          定期组织 <strong>Code Review</strong> 会议；
        </div>
        <div class="job-content-item">
          <span>·</span>二次封装
          <strong>axios</strong>
          ，通过配置请求，响应拦截器，统一处理接口返回结果，添加全局的 loading，message；
        </div>
        <div class="job-content-item">
          <span>·</span>通过<strong> echars </strong>实现数据可视化以及地图部分的需求；
        </div>
        <div class="job-content-item">
          <span>·</span>通过<strong> antv-x6 </strong>实现流程图部分的需求；
        </div>

        <div class="job-content-item">
          <span>·</span>通过<strong> fabric.js </strong>实现视频，图片标注部分的需求；
        </div>
        <div class="job-content-item">
          <span>·</span>通过<strong> vite-press </strong>搭建用户帮助文档；
        </div>
        <div class="job-content-item">
          <span>·</span>通过<strong> Axure</strong> 完成原型设计，与 UI 人员进行交涉。
        </div>
      </div>
    </div>
    <div class="job mt8">
      <div class="header">
        <div class="company">陕西繁星智达数字科技有限公司 - 云鹿CRM（组员）</div>
        <div class="time">2019 年 8 月 ~ 2022 年 2 月</div>
      </div>
      <div class="job-content">
        <div class="job-content-item">
          <span>·</span>独立负责 pc 端活动配置页面以及移动端活动的开发和维护；
        </div>
        <div class="job-content-item">
          <span>·</span>使用动态组件完成动态表单，通过配置文件让不同的活动拥有不同的表单内容；
        </div>
        <div class="job-content-item">
          <span>·</span>开发公用基础组件，如九宫格 ， 大转盘等供团队使用。
        </div>
      </div>
    </div>
  </div>
  <div class="open mt16 mb16">
    <div class="title">开源作品</div>
    <div class="job">
      <div class="header">
        <div class="company">江城开朗的豌豆</div>
        <div class="time">成为前端开发工程师至今</div>
      </div>
      <div class="job-content">
        <div class="job-content-item">
          <span>·</span>前端导航页面：通过监听 scroll 事件及高度的计算，完成双向滚动；
        </div>
        <div class="job-content-item">
          <span>·</span>warbler-cli：通过 Commander 实现快速创建项目的脚手架工具；
        </div>
        <div class="job-content-item">
          <span>·</span>warbler-js：一个 JavaScript 函数工具库，上传至 NPM 供其他人使用；
        </div>
        <div class="job-content-item">
          <span>·</span>warbler-favorites：通过 Vue3 实现的一个网页收藏工具；
        </div>
        <div class="job-content-item">
          <span>·</span>通过 VitePress 完成 warbler-cli 和 warbler-js 的在线文档。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.mt8 {
  margin-top: 8px;
}

.mt16 {
  margin-top: 16px;
}

.mb16 {
  margin-bottom: 16px;
}

strong {
  color: var(--warbler-brand);
  margin: 0 5px;
}
.projects,
.open {
  .title {
    width: 100%;
    font-size: 20px;
    padding-bottom: 16px;
    margin-bottom: 8px;
    box-shadow: 0 -1px 0 hsla(0, 0%, 100%, 0.1) inset;
  }
  .job {
    background-color: var(--warbler-bg);
    padding: 16px;
    border-radius: 4px;
    .header {
      display: flex;
      justify-content: space-between;
      margin: 0 0 16px 0;
      font-size: 16px;
      opacity: 0.7;
    }
    .job-content-item {
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
