<template>
  <div class="container">
    <!-- 头部导航 -->
    <div class="head">
      <div class="head-normal flex a-center">
        <div class="logo">
          <img
            src="//game.gtimg.cn/images/lol/v3/logo-public.png"
            width="167"
            height="60"
            alt="英雄联盟"
          />
        </div>
        <ul
          class="head-nav flex a-center j-start"
          @mouseenter="showNav=true"
          @mouseleave="showNav=false"
        >
          <li>
            <div class="head-nav-title">游戏资料</div>
            <div class="head-nav-subtitle">GAME INFO</div>
          </li>
          <li>
            <div class="head-nav-title">商城/合作</div>
            <div class="head-nav-subtitle">STORE</div>
          </li>
          <li>
            <div class="head-nav-title">社区互动</div>
            <div class="head-nav-subtitle">COMMUNITY</div>
          </li>
          <li>
            <div class="head-nav-title">赛事官网</div>
            <div class="head-nav-subtitle">ESPORTS</div>
          </li>
          <li>
            <div class="head-nav-title">自助系统</div>
            <div class="head-nav-subtitle">SYSTEM</div>
          </li>
        </ul>
      </div>
      <div
        @mouseenter="showNav=true"
        @mouseleave="showNav=false"
        class="head-nav-sub"
        :class="{'show-nav':showNav}"
      >
        <div class="head-nav-sub-inner">
          <ul>
            <li>
              <a class="head-nav-sub-a">游戏下载</a>
              <a class="head-nav-sub-a">新手指引</a>
              <a class="head-nav-sub-a">资料库</a>
              <a class="head-nav-sub-a">云顶之弈</a>
              <a class="head-nav-sub-a">攻略中心</a>
              <a class="head-nav-sub-a">开发者基地</a>
              <a class="head-nav-sub-a">海克斯战利品库</a>
              <a class="head-nav-sub-a">英雄联盟宇宙</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="comm-topact">
      <img
        class="topact-small-img"
        src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_eda5ca68460369802407f06a8ef15660/0"
      />
      <div class="dark-mask"></div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    };
  },
  components: {},
  props: {},
  methods: {},
  mounted() {},

  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  .head {
    width: 100%;
    height: 78px;
    overflow: visible;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    .head-normal {
      width: 100%;
      max-width: 1358px;
      min-width: 1230px;
      height: 78px;
      margin: 0 auto;
      position: relative;
      z-index: 10;
      .logo {
        width: 132px;
        height: 49px;
        cursor: pointer;
      }
      .head-nav {
        width: 55%;
        height: 78px;
        box-sizing: border-box;
        margin-left: 30px;
        li:hover {
          cursor: pointer;
        }
        li {
          flex: 1;
          text-align: center;
          .head-nav-title {
            color: #fff;
            font-size: 18px;
            letter-spacing: 1px;
          }
          .head-nav-subtitle {
            color: #aeaeae;
            font-size: 11px;
            margin-top: -1px;
            letter-spacing: 1px;
          }
        }
      }
    }
    .show-nav {
      display: block !important;
      animation: topin 0.3s;
    }

    .head-nav-sub {
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      overflow: hidden;
      background: url(//game.gtimg.cn/images/lol/v3/dark60-bg-repeat.png) repeat;
      padding: 88px 0 32px 0;
      .head-nav-sub-inner {
        width: 100%;
        max-width: 1358px;
        min-width: 1230px;
        height: auto;
        margin: 0 auto;
        ul {
          width: 55%;
          overflow: hidden;
          margin-left: 161px;
          li {
            width: 20%;
            float: left;
            height: auto;
            overflow: visible;
            .head-nav-sub-a {
              display: block;
              width: 100%;
              height: 29px;
              overflow: hidden;
              line-height: 29px;
              color: #e1e1e1;
              font-size: 14px;
              text-align: center;
            }
            .head-nav-sub-a:hover {
              color: #e9c06c;
            }
          }
        }
      }
    }
  }
  @keyframes topin {
    0% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  .comm-topact {
    width: 100%;
    min-width: 1230px;
    height: 360px;
    overflow: hidden;
    position: relative;
    background: center top no-repeat;
    transition: height 0.6s, background, 0.6s;
    .topact-big-img,
    .topact-small-img {
      position: absolute;
      left: 50%;
      top: 0;
      width: 1920px;
      height: 100%;
      margin-left: -960px;
    }
    .topact-small-img {
      transition: opacity 0.6s;
      opacity: 1;
    }
    .dark-mask {
      width: 100%;
      height: 131px;
      position: absolute;
      left: 0;
      top: 0;
      background: url(//game.gtimg.cn/images/lol/v3/dark-jianbian-repeatx-0.png)
        repeat center top;
      z-index: 1;
    }
  }
}
</style>