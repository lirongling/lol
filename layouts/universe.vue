<template>
  <div>
    <!-- 头部导航 -->
    <header>
      <div class="lcf_yxlm_nav">
        <div class="nav">
          <!-- 左侧log -->
          <div class="inline lefticon">
            <a href="//lol.qq.com" rel="noopener noreferrer" target="_blank">
              <div class="inline gamelogo">
                <img src="//game.gtimg.cn/images/lol/universe/images/2.jpg" />
              </div>
              <div class="inline xialist">
                <p class="p1">探索</p>
                <p class="p2">
                  <img src="//game.gtimg.cn/images/lol/universe/images/3.png" />
                  <span style="display: none;"></span>
                </p>
              </div>
            </a>
          </div>
          <!-- 中间导航 -->
          <div class="inline nav_banner">
            <div class="inline logo" style="vertical-align: top;">
              <img src="//game.gtimg.cn/images/lol/universe/images/1.jpg" />
            </div>
            <div class="inline link flex a-center">
              <a
                v-for="(item,index) in navList"
                :key="index"
                class="inline"
                :class="{'select':active===index}"
                @click="goNav(index,item.desc)"
              >
                {{item.title}}
                <br />
                <small>{{item.desc}}</small>
              </a>
            </div>
          </div>
          <!-- 右侧 -->
          <div class="inline righticon">
            <dl class="flex">
              <dt>
                <p class="p1" style="display: block;">
                  <a href>[登录]</a>
                </p>
              </dt>
              <dd>
                <a
                  href="http://weibo.com/u/6090640055?refer_flag=1001030101_"
                  title="故事微博"
                  rel="noopener noreferrer"
                  target="_blank"
                >故事微博</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "专题", desc: "FEATURED" },
        { title: "英雄", desc: "CHAMPIONS" },
        { title: "地区", desc: "REGIONS" },
        { title: "漫画", desc: "COMICS" },
        { title: "集锦", desc: "COLLECTIONS" },
        { title: "另一个宇宙", desc: "ALT UNIVERSE" },
        { title: "地图", desc: "MAP" },
        { title: "探索", desc: "EXPLORE" },
        { title: "搜索", desc: "SEARCH" }
      ],
      active: 0
    };
  },
  components: {},
  props: {},
  methods: {
    // 点击导航
    goNav(index, path) {
      if (this.active === index) {
        return;
      }
      this.active = index;
      let a = path.toLowerCase();
      console.log(a);
      if (index === 0) {
        a = "universe";
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.lcf_yxlm_nav {
  background-color: #121212;
  height: 62px;
  width: 100%;
  // position: absolute;
  z-index: 999999999;
  min-width: 287px;

  .nav {
    height: 64px;
    border-bottom: 2px solid #262626;
    background: #121212;
    text-align: center;
    position: relative;
    z-index: 9990;
    .gamelogo {
      height: 43px;
      margin-top: 12px;
    }
    .xialist {
      position: relative;
      text-align: left;
      color: #a29c90;
      padding-top: 10px;
      overflow: visible;
      .p1 {
        animation: p1 1s ease-out both;
      }
      .p2 {
        animation: p1 0.8s ease-out both;
      }
    }
    a {
      text-decoration: none;
      color: #a09a8e;
      small {
        font-size: 8px;
      }
    }
    .inline {
      display: inline-block;
      vertical-align: middle;
    }
    .lefticon {
      height: 64px;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }
    .select,
    .link a:hover {
      border-bottom: 1px solid #c79a3c !important;
      color: #fff !important;
    }
    .nav_banner {
      height: 100%;
      overflow: hidden;
      .logo:after {
        content: "";
        position: absolute;
        top: 20px;
        right: 0;
        width: 2px;
        height: 30px;
        background: #262626;
      }
      .link {
        // box-sizing: border-box;
        a {
          color: #c9aa71;
          font-size: 14px;
          padding: 10px 0 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0);
          margin: 0 20px;
          cursor: pointer;
        }
      }
    }
    .righticon {
      position: absolute;
      right: 9px;
      top: 18px;
      color: #bb9e69;
      a {
        color: #bb9e69;
        font-size: 11px;
        font-weight: 700;
        display: inline-block;
      }
      dl {
        height: 32px;
        text-align: right;
      }
      dt {
        padding-right: 16px;
        border-right: 1px solid #262626;
      }
      .p1 {
        height: 32px;
        line-height: 32px;
        color: #a09a8e;
      }
      dd {
        padding-left: 20px;
        a {
          background: url(//game.gtimg.cn/images/lol/universe/images/4.jpg)
            no-repeat 0 0;
          text-indent: -9999px;
          overflow: hidden;
          text-align: left;
          height: 32px;
          width: 121px;
        }
      }
    }
  }
}
</style>