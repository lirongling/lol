<template>
  <div class="mainer">
    <div class="infodefail">
      <el-carousel
        ref="remarkCarousel"
        height="632px"
        :initial-index="active"
        :autoplay="false"
        arrow="never"
        indicator-position="none"
      >
        <el-carousel-item v-for="item in skin" :key="item.skinId">
          <img :src="item.mainImg" :alt="item.name" />
        </el-carousel-item>
      </el-carousel>
      <div class="defail-skin-nav">
        <div class="defail-skin-name">
          <span>{{skin[active].name}}</span>
        </div>
        <ul class="flex">
          <li
            v-for="(item,index) in skin"
            :key="item.skinId"
            :class="{'current':active===index}"
            @click="changeActive(index)"
          >
            <a :title="item.name">
              <img :src="item.iconImg" :alt="item.name" />
              <span class="sbor"></span>
            </a>
          </li>
        </ul>
      </div>
      <span class="sbg"></span>
      <div class="defail-data">
        <h1>{{detail.hero.name}}</h1>
        <h2>{{detail.hero.title}}</h2>
        <div class="defail-tags">
          <span v-for="(item,index) in detail.hero.roles" :key="index">{{translation(item)}}</span>
        </div>
        <div class="defail-stat">
          <div class="start-item flex">
            <div class="start-name">物理攻击</div>
            <div class="start-progress">
              <i
                class="up up1"
                :title="detail.hero.attack"
                :style="{width:detail.hero.attack+'0%'}"
              ></i>
            </div>
          </div>
          <div class="start-item flex">
            <div class="start-name">魔法攻击</div>
            <div class="start-progress">
              <i class="up up2" :title="detail.hero.magic" :style="{width:detail.hero.magic+'0%'}"></i>
            </div>
          </div>
          <div class="start-item flex">
            <div class="start-name">防御能力</div>
            <div class="start-progress">
              <i
                class="up up3"
                :title="detail.hero.defense"
                :style="{width:detail.hero.defense+'0%'}"
              ></i>
            </div>
          </div>
          <div class="start-item flex">
            <div class="start-name">上手难度</div>
            <div class="start-progress">
              <i class="up up4" :title="detail.hero.magic" :style="{width:detail.hero.magic+'0%'}"></i>
            </div>
          </div>
        </div>
        <div class="defail-buy">
          <a
            id="defailBuy"
            href="https://daoju.qq.com/lol/list/16-0-0-0-0-0-0-0-0-0-0-00-0-0-1-1.shtml?ADTAG=innercop.lol.SY.shoppinglist_new_16"
            target="_blank"
            class="commspr commbtn-buy"
          >购买英雄</a>
        </div>
      </div>
    </div>
    <div class="clearfix flex j-between">
      <div class="infoleftcont">
        <h4 class="infotitle">背景故事</h4>
        <div class="colbox bgstroy">
          <div class="colbox-text" :class="{'ellipsiss' : showMore}">{{detail.hero.shortBio}}</div>
          <a class="cgray" v-if="showMore" @click="showMores(false)">查看更多...</a>
          <a class="cgray" v-else @click="showMores(true)">收起...</a>
        </div>
        <h4 class="infotitle">技能介绍</h4>
        <ul class="infotab flex">
          <li
            v-for="(item,index) in detail.spells"
            :key="index"
            :class="{'current':activeSpell===index}"
            @click="changeSpell(index)"
          >
            <img :src="item.abilityIconPath" alt />
          </li>
        </ul>
        <div class="colbox infoskillbox">
          <div class="skilltitle">
            <h5>{{detail.spells[activeSpell].name}}</h5>
            <em v-if="detail.spells[activeSpell].spellKey==='passive'">被动技能</em>
            <em v-else>快捷键：{{detail.spells[activeSpell].spellKey}}</em>
          </div>
          <p class="skilltip">{{detail.spells[activeSpell].description}}</p>
        </div>
        <h4 class="infotitle">使用技巧</h4>
        <div class="colbox arttips">
          <dl class="borlineX">
            <dt>当你使用{{detail.hero.name}}</dt>
            <dd>
              <p v-for="(item,index) in detail.hero.allytips" :key="index">{{item}}</p>
            </dd>
          </dl>
          <dl>
            <dt>敌人使用{{detail.hero.name}}</dt>
            <dd>
              <p v-for="(item,index) in detail.hero.enemytips" :key="index">{{item}}</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="inforightcont">
        <div class="clearfix infotitle">
          <h4 class="infotitle">我的记录</h4>
        </div>
        <div class="colbox">
          <div class="clearfix pageuserline-shout">
            您无法查看使用该英雄的记录，请
            <a class="cgreen" href="javascript:LW201310_Userinfo.userLogin();">[登陆]</a>，并绑定所在大区。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Localizator from "translation-adapter-ts/build/Localizator";
export default {
  data() {
    return {
      active: 0,
      showMore: true,
      activeSpell: 0
    };
  },
  head() {
    return {
      title: "详情页"
    };
  },
  components: {},
  props: {},
  layout: "info",
  methods: {
    // 改变轮播图
    changeActive(index) {
      this.active = index;
      this.$refs.remarkCarousel.setActiveItem(index);
    },
    // 英译汉
    translation(args) {
      Localizator.setLanguage("cn");
      // console.log(Localizator.localize(args));
      return Localizator.localize(args);
    },
    // 展开收起查看更多
    showMores(flage) {
      this.showMore = flage;
    },
    // 切换技能介绍
    changeSpell(index) {
      this.activeSpell = index;
    }
  },
  mounted() {
    console.log(this.detail);
  },
  async asyncData(ctx) {
    let api = ctx.app.$api;
    let id = ctx.app.context.route.query.heroId;
    let detail = await api.heroDetail(id);
    return { detail };
  },
  watch: {},
  computed: {
    skin() {
      if (this.detail) {
        return this.detail.skins.filter(item => item.mainImg);
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.mainer {
  position: relative;
  z-index: 1;
  overflow: hidden;
  zoom: 1;
  width: 1240px;
  margin: 20px auto 50px;
  .infodefail {
    height: 632px;
    position: relative;
    img {
      width: 1240px;
      height: 632px;
    }
    .defail-skin-nav {
      z-index: 99;
      position: absolute;
      bottom: 10px;
      right: 10px;
      padding-left: 306px;
      .defail-skin-name {
        padding-bottom: 10px;
        text-align: right;
        span {
          padding: 0 5px;
          background-color: #000;
          font-size: 20px;
          line-height: 25px;
          color: #fff;
        }
      }
      .current img,
      a:hover > img {
        opacity: 1 !important;
      }
      .current .sbor {
        position: absolute;
        top: 0;
        left: 0;
        display: block !important;
        width: 60px;
        height: 60px;
        border: 4px solid #00a483;
      }
      li {
        a {
          display: block;
          width: 60px;
          height: 60px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          img {
            width: 60px;
            height: 60px;
            opacity: 0.7;
          }
          .sbor {
            display: none;
            cursor: pointer;
          }
        }
      }
    }
    .sbg {
      position: absolute;
      top: 0;
      left: 0;
      width: 305px;
      height: 100%;
      z-index: 2;
      background: #000;
      opacity: 0.6;
    }
    .defail-data {
      position: absolute;
      top: 0;
      padding-top: 50px;
      padding-left: 40px;
      left: 0;
      width: 290px;
      height: 100%;
      color: #fff;
      z-index: 99;
      h1 {
        font-size: 24px;
        line-height: 25px;
        padding-bottom: 25px;
        font-weight: 400;
      }
      h2 {
        font-size: 42px;
        padding-bottom: 30px;
      }
      .defail-tags {
        overflow: hidden;
        zoom: 1;
        span {
          float: left;
          // width: 35px;
          padding-left: 5px;
          padding-right: 5px;
          height: 21px;
          line-height: 21px;
          margin-right: 5px;
          text-align: center;
          background: #00a483;
          border-radius: 5px;
        }
      }
      .defail-stat {
        margin-top: 25px;
        height: 90px;
        width: 150px;
        .start-item {
          .start-name {
            width: 40%;
            margin-bottom: 5px;
            height: 16px;
            line-height: 16px;
            font-size: 12px;
          }
          .start-progress {
            width: 60%;
            margin: 2px 0 7px;
            height: 12px;
            background: #363c3c;
            .up {
              display: block;
              height: 12px;
            }
            .up1 {
              background: #f2c500;
            }
            .up2 {
              background: #f59d00;
            }
            .up3 {
              background: #2c97de;
            }
            .up4 {
              background: #1eca6b;
            }
          }
        }
      }
      .defail-buy {
        margin-top: 25px;
        .commbtn-buy {
          display: block;
          width: 153px;
          height: 40px;
          overflow: hidden;
          text-indent: -999em;
          background-position: -638px 0;
        }
        .commspr {
          background-repeat: no-repeat;
          display: inline-block;
          background-image: url(//game.gtimg.cn/images/lol/web201310/page.png?d=20131230);
        }
      }
    }
  }
  .clearfix {
    .infoleftcont {
      width: 63%;
    }
    .infotitle {
      margin: 47px 0 15px;
      font-size: 16px;
      color: #338c7a;
    }
    .colbox {
      border: 1px solid #e1e1e1;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
      background: #fff;
    }
    .bgstroy {
      padding: 28px 32px;
      font-size: 14px;
      line-height: 24px;
      text-indent: 2em;
    }
    .colbox-text {
    }
    .cgray {
      color: #999;
    }
    .infotab {
      height: 90px;
      position: relative;
      z-index: 2;
      li {
        width: 64px;
        height: 64px;
        padding: 13px 20px;
        box-sizing: content-box;
        cursor: pointer;
      }

      .current {
        border-top: 3px solid #00a383;
        padding: 10px 19px 13px;
        background: #fff;
        border-left: 1px solid #e1e1e1;
        border-right: 1px solid #e1e1e1;
      }
    }
    .infoskillbox {
      padding: 20px 30px;
      margin-top: -1px;
      position: relative;
      z-index: 1;
    }
    .skilltip {
      color: #333;
      padding-bottom: 10px;
      font-size: 12px;
    }
    .skilltitle {
      font-size: 14px;
      color: #999;
      padding-bottom: 10px;
      h5 {
        display: inline;
        padding-right: 10px;
        font-size: 16px;
        color: #333;
      }
      em {
        font-style: normal;
      }
    }
    .arttips dl {
      padding-bottom: 15px;
      margin-bottom: 20px;
      font-size: 14px;
      color: #333;
    }
    .arttips p {
      padding-bottom: 10px;
    }
    .arttips,
    .infospells dl {
      padding: 20px 30px 10px;
    }
    .arttips dt,
    .infospells dt {
      font-size: 14px;
      font-weight: 700;
      color: #338c7a;
      padding-bottom: 8px;
    }

    .borlineX {
      border-bottom: 1px solid #eee;
    }
    .cgreen {
      color: #00a483;
    }
    .inforightcont {
      width: 35%;
      .fl {
        float: left;
        display: inline;
      }
      .pageuserline-shout {
        padding: 35px 0 22px 20px;
        width: 311px;
        color: #666;
        font-size: 12px;
      }
    }
  }
}
</style>