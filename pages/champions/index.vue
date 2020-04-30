<template>
  <div class="container">
    <!-- <div class="background_zrd6"></div> -->
    <ul class="FilterBar_2-VY filterBar_1UI5" id="boxFixed" :class="{'is_fixed' : isFixed}">
      <div class="wrap_3Swj">
        <div class="filterInput_hZrx">
          <img
            class="sortIcon_xNjQ"
            src="//game.gtimg.cn/images/lol/universe/images/content_type_icon_champion__3nwJQ.png"
            alt="champion Icon"
          />
          <div class>
            <input
              class="search_O8gT"
              type="text"
              placeholder="找到一个英雄"
              style="color: rgb(147, 115, 65);"
              v-model="inputHero"
            />
          </div>
        </div>
        <li class="FilterButton_2Yfu championsFilterButton_1cqs">
          <div class="buttonContent_1aDJ">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8CAYAAADWibxkAAADrElEQVRoge3bSYhdRRSA4S+mbFEcUFBsBUWMRmjiRoxkZVAjGAeIKCIhDq1ZKAoqEkNciApJQESMaBwwikZwoZsIutGOxCkx4kLjQqOIEzhhCGiLHV6Vi+qO3dJv6jfcG+774S26btU5p06fOve8qnrzdr82ahrHIDg0+RMH2h0UUkpwMx7GqV02qt98gVuxs9UBISXXYEvPTOovI3gX58nOaEpIKa3tpUUFcATuliOhKSGlNNJbewphUasdQ0rpV5zWQ2OK4MhWO4aU0qtY00NjSk2I0YNy0ri4aGOKIKSUxrEMS3FWsea0zQac0ImAEGOChO2Tn0OJ+3XqgMlCqLKEGGPRNhRKiFWPgBQr7oBYeQdUfQkMkmDVl8AgCVZ7BQgx1oq2oVAGEVD5t0BtkAQr74CDS2AEZ+v9wcjf+AQ/91hPS4QY0xBewnV91DuBe/BkH3XOSogxrtHfycMQNmE3Pu6z7hmEGNNo82494TCsUrgDanG4QP2Fn0WGGNNXOLcg/d8UpPcgIcb0OJ4vQPc4ni5A7wxCLcYtOEneYj66T3q/wy1KEgGwEY/hFMzrsc4D+AmlqMGnF0L/4NsCbSmEQSlc+W+DgwioVd0BgyVQ+QiovANKuwTOxF1ycfYeNsu1ylwJuBGL8T2ewe9ljYBFeB/HTv59NZbjCnkzpV2G8AYunda2GkvK6oAN/pv8FMvkG62r5Cs9rTIfL5o5eTgdD5X1dHhpnfaV2Ic725D1BK6v8+ySkMqZAxoZdYf8ZWpjC3LW4rYGz0NZl8DbWNHg+Xr80ETGysl+jdgx795rz2nHsH6xELtwXIM+E6iZ/Vrs/sn2oQbj9+P8sl6T+1LO/G+pP4lGk2vkOPJu1ArsnVoCw7hdPhhpZ0NkH7bK7+luM4ZRvNymTc2oyUlxO/mi5Bn4ECfPUeBqOSv34pDjFfl1+FSX5CXZ3m1TDSHGtN7cJ0/+7zyK1/XmuGuzfJ2/Gz/sWIcXpjfMX7zw+Oe0cb++DgGfYk+HcuoxhgU6275/BA/8vzGklLp1GHp4l+TMRpLzwTAumsP4rbhvtgchprQDl8/dNuTC5aMOZTRjAlfhHVzQxrhtuEmd8jmkZB0u1NmZwCbs7WB8q/yFK+WkvaCF/h/IGb/uRaiQUvoMS+SfzbR7P+APOfk928aYTvkNl8lOOLFBv8/lyB5vJGyqENqDG7pkYD/4Wo6EMRxV5/lyudprSChnIdgSu+Sc8KaZVeEvcoT82IqQfwGRlC2IpQc6aQAAAABJRU5ErkJggg=="
              alt="[object Object]"
            />
            <h5>
              <span data-gettext-identifier="champbrowse-sorting-label">筛选方式</span>
              <span class="secondaryText_215L">
                :
                <span data-gettext-identifier="champbrowse-sorting-alphabetical">{{activeSore}}</span>
              </span>
            </h5>
          </div>
          <div class="smallFilterParent_2YiF">
            <div class="smallFilterPane_dNuO smallFilterPane_2uWv visible_3t0l">
              <ul>
                <li
                  :class="{'active-sore' : activeSore===item}"
                  v-for="(item,index) in activeList"
                  :key="index"
                  @click="changeSore(item,index)"
                >
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </div>
    </ul>
    <div class="latest_3xrG sectionVisible_2prj" v-if="activeSore!=='地区'">
      <div class="latestBackground_3p3k">
        <div class="gradient_duDN"></div>
      </div>
      <div class="visible_2aO8 majorSectionHeader_D34a">
        <img
          class="icon_23Iu"
          src="//game.gtimg.cn/images/lol/universe/images/content_type_icon_latest__1ulWu.png"
          alt="latest Icon"
        />
        <h1>
          <span>
            <span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAABCAYAAAD0K+rmAAAA80lEQVR4AV2TiW0EMQwDh72loqSTFGwF8A0Exnu/xW/pc35/vr5DmBlIBvyRwP3I3BnctfC5XAMy5LOQC8ZBcZO7UNwBQUQr/cUHNNVMDYaLxhHwZpvmiJqE9l3pJOKfmYQX2zmTUPerj5jtBRKVBBl0dNjf97Hft99jl29vynHucPUGzN55txnS3U3XHHH/feh96WzH5CcJi1c0Jf70OJj3s65mwfXzc/s527ncxnbWaNkz+6p9XE5zJYoB7HQ3IHbQRa/2q9P59Nl7qrfmbzf9HwI0Kq6Dx9f55hS0fejkedg+BSjs+XvP5NM/67k4ATr/AU/oIFuGMAGgAAAAAElFTkSuQmCC"
                class="line_P_m1 lineLeft_7cwo"
              />
            </span>
            <span class="diamondLeft_38Eb"></span>
          </span>
          <span class="title_SNe9">
            <span data-gettext-identifier="explore-section-latest-title">英雄</span>
          </span>
          <span>
            <span class="diamondRight_3rfK diamondRightMajorSection_2XQg"></span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAABCAYAAAD0K+rmAAAA80lEQVR4AV2TiW0EMQwDh72loqSTFGwF8A0Exnu/xW/pc35/vr5DmBlIBvyRwP3I3BnctfC5XAMy5LOQC8ZBcZO7UNwBQUQr/cUHNNVMDYaLxhHwZpvmiJqE9l3pJOKfmYQX2zmTUPerj5jtBRKVBBl0dNjf97Hft99jl29vynHucPUGzN55txnS3U3XHHH/feh96WzH5CcJi1c0Jf70OJj3s65mwfXzc/s527ncxnbWaNkz+6p9XE5zJYoB7HQ3IHbQRa/2q9P59Nl7qrfmbzf9HwI0Kq6Dx9f55hS0fejkedg+BSjs+XvP5NM/67k4ATr/AU/oIFuGMAGgAAAAAElFTkSuQmCC"
              class="line_P_m1"
            />
          </span>
        </h1>
      </div>
      <div class="grid_3w39">
        <ul class="grid_2D4u">
          <div v-if="activeHero.length>0">
            <li v-for="(item,index) in activeHero" :key="index" class="itemSmall_2MoP item_1kYt">
              <a href>
                <div class="itemNormal_2XrH">
                  <div
                    class="image_3oOd image_V6R-"
                    :style="{backgroundImage: `url(${item.image.uri})`}"
                    style=" background-position: 69.3064% 91.7593%; opacity: 1;"
                  ></div>
                  <div class="bottom_2zfD">
                    <div class="titles_GWG3">
                      <div
                        class="icon_2QZE"
                        style="padding-left: 1px;"
                        v-if="item.type==='link-out'"
                      >
                        <img
                          src="//game.gtimg.cn/images/lol/universe/images/content_type_icon_faction__14mjH.png"
                          alt="faction Icon"
                        />
                      </div>
                      <div
                        class="icon_2QZE"
                        style="padding-left: 0px;"
                        v-else-if="item.type==='story-preview'"
                      >
                        <img
                          src="data:image/png;base64,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"
                          alt="story-preview Icon"
                        />
                      </div>

                      <h1>{{item.name}}</h1>
                    </div>
                    <div class="viewButton_1UI8">
                      <span>了解更多</span>
                      <span class="arrowBtn_dRMG" style="width: 25px; height: 12.5px;">
                        <span class="hoverArrow_XAN2">
                          <svg
                            version="1.0"
                            x="0px"
                            y="0px"
                            viewBox="0 0 162 70.28"
                            fill="#c4b998"
                            style="width: 12.5px;"
                          >
                            <circle fill="#c4b998" cx="31.57" cy="35.21" r="11.57" />
                            <g>
                              <polygon
                                fill="#c4b998"
                                points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
                              />
                              <rect x="84.61" y="29.76" fill="#c4b998" width="65" height="11.06" />
                            </g>
                          </svg>
                        </span>
                        <span class="restArrow_2evX">
                          <svg
                            version="1.0"
                            x="0px"
                            y="0px"
                            viewBox="0 0 162 70.28"
                            fill="#937341"
                            style="width: 12.5px;"
                          >
                            <circle fill="#937341" cx="31.57" cy="35.21" r="11.57" />
                            <g>
                              <polygon
                                fill="#937341"
                                points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
                              />
                              <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06" />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </div>
          <div v-else class="no-hero">暂无此英雄</div>
        </ul>
      </div>
    </div>
    <div v-else>
      <div v-if="areaList.length>0">
        <div class="latest_3xrG sectionVisible_2prj" v-for="(item,index) in areaList">
          <div class="latestBackground_3p3k">
            <div class="gradient_duDN"></div>
          </div>
          <div class="visible_2aO8 majorSectionHeader_D34a">
            <img
              class="icon_23Iu"
              src="//game.gtimg.cn/images/lol/universe/images/content_type_icon_latest__1ulWu.png"
              alt="latest Icon"
            />
            <h1>
              <span>
                <span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAABCAYAAAD0K+rmAAAA80lEQVR4AV2TiW0EMQwDh72loqSTFGwF8A0Exnu/xW/pc35/vr5DmBlIBvyRwP3I3BnctfC5XAMy5LOQC8ZBcZO7UNwBQUQr/cUHNNVMDYaLxhHwZpvmiJqE9l3pJOKfmYQX2zmTUPerj5jtBRKVBBl0dNjf97Hft99jl29vynHucPUGzN55txnS3U3XHHH/feh96WzH5CcJi1c0Jf70OJj3s65mwfXzc/s527ncxnbWaNkz+6p9XE5zJYoB7HQ3IHbQRa/2q9P59Nl7qrfmbzf9HwI0Kq6Dx9f55hS0fejkedg+BSjs+XvP5NM/67k4ATr/AU/oIFuGMAGgAAAAAElFTkSuQmCC"
                    class="line_P_m1 lineLeft_7cwo"
                  />
                </span>
                <span class="diamondLeft_38Eb"></span>
              </span>
              <span class="title_SNe9">
                <span data-gettext-identifier="explore-section-latest-title">{{item.name}}</span>
              </span>
              <span>
                <span class="diamondRight_3rfK diamondRightMajorSection_2XQg"></span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAABCAYAAAD0K+rmAAAA80lEQVR4AV2TiW0EMQwDh72loqSTFGwF8A0Exnu/xW/pc35/vr5DmBlIBvyRwP3I3BnctfC5XAMy5LOQC8ZBcZO7UNwBQUQr/cUHNNVMDYaLxhHwZpvmiJqE9l3pJOKfmYQX2zmTUPerj5jtBRKVBBl0dNjf97Hft99jl29vynHucPUGzN55txnS3U3XHHH/feh96WzH5CcJi1c0Jf70OJj3s65mwfXzc/s527ncxnbWaNkz+6p9XE5zJYoB7HQ3IHbQRa/2q9P59Nl7qrfmbzf9HwI0Kq6Dx9f55hS0fejkedg+BSjs+XvP5NM/67k4ATr/AU/oIFuGMAGgAAAAAElFTkSuQmCC"
                  class="line_P_m1"
                />
              </span>
            </h1>
            <h3 class="champsByFactionH3_2DHS">
              <span
                data-gettext-identifier="champbrowse-number-found-plural"
              >已找到{{item.heroList.length}}个英雄</span>
            </h3>
          </div>
          <div>
            <heroItem :heroList="item.heroList" style="marginTop:30px"></heroItem>
          </div>
        </div>
      </div>
      <div v-else class="no-hero">暂无此英雄</div>
    </div>
  </div>
</template>

<script>
import heroItem from "../../components/champions/heroItem";
import dayjs from "dayjs";
export default {
  data() {
    return {
      isFixed: false,
      activeSore: "A-Z",
      activeList: ["A-Z", "最新", "地区"],
      areaList: [],
      activeHero: [],
      inputHero: ""
    };
  },
  layout: "universe",
  components: {
    heroItem
  },
  props: {},
  methods: {
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop >= this.offsetTop ? true : false;
    },
    // 改变排序方式
    changeSore(item, index, flage) {
      if (this.activeSore !== item || flage) {
        let datas = JSON.parse(JSON.stringify(this.HeroList.champions));
        if (flage) {
          datas = JSON.parse(JSON.stringify(this.activeHero));
        } else {
          this.inputHero = "";
        }
        this.activeSore = item;
        if (index === 2) {
          this.areaList = [];
          // this.HeroList.champions.map
          this.HeroList.factions.map(item => {
            item.heroList = datas.filter(
              items => items["associated-faction-slug"] === item.slug
            );
            if (item.heroList) {
              this.areaList.push(item);
            }
          });
          this.areaList = this.areaList.filter(
            item => item.heroList.length > 0
          );
        } else if (index === 1) {
          let data = JSON.parse(JSON.stringify(datas));
          data.map(item => {
            let a = item["release-date"];
            item.time = Date.parse(a);
          });
          this.activeHero = data.sort((a, b) => {
            return b.time - a.time;
          });
        } else {
          this.activeHero = datas;
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.activeHero = this.HeroList.champions;
    }, 200);
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      if (document.querySelector("#boxFixed")) {
        this.offsetTop = document.querySelector("#boxFixed").offsetTop;
      }
    });
  },
  async asyncData(ctx) {
    let api = ctx.app.$api;
    let HeroList = await api.HeroList();
    return { HeroList };
  },
  watch: {
    inputHero(val) {
      if (val.trim().length > 0) {
        this.activeHero = this.HeroList.champions.filter(item => {
          return item.name.includes(val) || item.slug.includes(val);
        });
      } else {
        this.activeHero = this.HeroList.champions;
      }
      let index = this.activeList.findIndex(item => item === this.activeSore);
      this.changeSore(this.activeSore, index, true);
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.no-hero {
  font-size: 14px;
  color: #db1818 !important;
  letter-spacing: 4px;
  padding: 40px 4px 40px 0;
  text-align: center;
}
.champsByFactionH3_2DHS {
  margin-top: 20px;
  font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #937341;
  padding-bottom: 20px;
  text-align: center;
}
.is_fixed {
  position: fixed !important;
  top: 0;
}

.FilterBar_2-VY {
  background-color: #121212;
  left: 0;
  margin: 0;
  max-width: 100vw;
  opacity: 1;
  position: absolute;
  right: 0;
  // top: 62px;
  z-index: 99;
  .wrap_3Swj {
    align-items: center;
    background-color: #121212;
    box-shadow: 0 16px 16px -16px rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 30px;
    width: 100%;
    z-index: 200;
    .filterInput_hZrx {
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -moz-box-pack: center;
      box-pack: center;
      -webkit-justify-content: center;
      -moz-justify-content: center;
      -ms-justify-content: center;
      -o-justify-content: center;
      justify-content: center;
      -ms-flex-pack: center;
      -webkit-box-align: center;
      -moz-box-align: center;
      box-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      -ms-align-items: center;
      -o-align-items: center;
      align-items: center;
      -ms-flex-align: center;
      input {
        outline: none;
      }
      .sortIcon_xNjQ {
        max-height: 32px;
        padding-right: 20px;
      }
      .search_O8gT {
        color: rgb(147, 115, 65);
        font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
        font-weight: 800;
        font-size: 14px;
        color: rgba(52, 43, 32, 0.85);
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #c4b998;
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        min-width: 650px;
        padding: 35px 12px;
      }
    }
  }
  .championsFilterButton_1cqs {
    border-width: 0 1px !important;
    max-width: 50%;
    width: 30%;
    // float:
  }
  .FilterButton_2Yfu:hover .visible_3t0l {
    transform: translateY(0) !important;
  }
  .smallFilterPane_dNuO:hover {
    background-color: #121212;
    color: #937341;
  }
  .FilterButton_2Yfu {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 90px;
    justify-content: center;
    position: relative;
    z-index: 100;
    .buttonContent_1aDJ {
      background-image: -webkit-radial-gradient(
        50% 12%,
        ellipse,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 40%
      );
      background-image: radial-gradient(
        ellipse at 50% 12%,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 40%
      );
      align-items: center;
      background-color: #121212;
      display: flex;
      height: 100%;
      justify-content: flex-start;
      width: 100%;
      z-index: 100;
    }
    .smallFilterParent_2YiF {
      z-index: -1;
    }
    .visible_3t0l {
      transform: translateY(-325px);
      opacity: 1;
    }
    .smallFilterPane_dNuO li {
      font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
      font-weight: 800;
      font-size: 12px;
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      transition: 0.2s;
      color: #c4b998;
      letter-spacing: 2px;
      padding: 16px 32px 16px 67px;
      text-align: left;
      text-transform: uppercase;
      cursor: pointer;
      vertical-align: top;
    }
    .smallFilterPane_2uWv {
      left: 0;
      width: 100%;
    }
    .smallFilterPane_dNuO {
      position: absolute;
      top: 90px;
      -webkit-transition: -webkit-transform 0.5s ease;
      -moz-transition: -moz-transform ease 0.5s;
      transition: transform 0.5s ease;
      background-image: -webkit-radial-gradient(
        50% 12%,
        circle,
        #1b1b1b,
        #121212 40%
      );
      background-image: radial-gradient(
        circle at 50% 12%,
        #1b1b1b,
        #121212 40%
      );
      z-index: 99;
      .active-sore,
      li:hover {
        background-color: #121212;
        color: #937341 !important;
      }
    }
    img {
      max-height: 20px;
      padding: 2px 30px 0 15px;
    }
    h5 {
      font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
      font-weight: 800;
      font-size: 14px;
      color: #c4b998;
      letter-spacing: 4px;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipse;
      text-transform: uppercase;
      .secondaryText_215L {
        color: #937341;
      }
    }
  }
}
.container {
  // background-image: linear-gradient(180deg, #0a0a0c, rgba(0, 0, 0, 0), #0a0a0c);
  // background-color: rgba(0, 0, 0, 0.8);
  // height: 2000%;
}
.carousel {
  /depp/ .el-carousel__item {
    overflow: hidden;
  }
  background-image: linear-gradient(180deg, #0a0a0c, rgba(0, 0, 0, 0), #0a0a0c);
  background-color: rgba(0, 0, 0, 0.5);
  img {
    width: 100%;
    height: auto;
  }
}
.latest_3xrG.sectionVisible_2prj,
.trending_HyTI.sectionVisible_2prj {
  opacity: 1;
  padding-top: 90px;
}
.latestBackground_3p3k {
  clear: both;
  background-image: url("//game.gtimg.cn/images/lol/universe/images/latestBg.jpg");
  width: 100%;
  height: 2200%;
}
.latestBackground_3p3k {
  background-position: 50%;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  // top: -250px;
  right: 0;
  // bottom: 70%;
  left: 0;
  opacity: 0.8;
}
.latest_3xrG .latestBackground_3p3k .gradient_duDN {
  clear: both;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(180deg, #0a0a0c, rgba(0, 0, 0, 0), #0a0a0c);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
}
.majorSectionHeader_D34a {
  font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
  font-weight: 400;
  position: relative;
  text-align: center;
  top: 25px;

  .icon_23Iu {
    left: calc(50% - 16px);
    -webkit-transition: opacity 0.6s ease;
    -moz-transition: opacity ease 0.6s;
    transition: opacity 0.6s ease;
    max-width: 32px;
    max-height: 32px;
    opacity: 0;
    position: absolute;
    top: -10px;
    opacity: 1;
  }
  h1 {
    color: #c4b998;
  }
  .line_P_m1 {
    padding-left: 70px;
    vertical-align: middle;
    width: 30%;
  }
  .lineLeft_7cwo {
    transform: rotate(180deg);
  }
  .diamondLeft_38Eb,
  .diamondRight_3rfK {
    position: relative;
    background: #373121;
    font-size: 0;
    z-index: 100;
  }
  .line_P_m1 {
    padding-left: 70px;
    vertical-align: middle;
    width: 30%;
  }
  // .diamondLeft_38Eb:before {
  //   height: 5px;
  //   width: 5px;
  //   position: absolute;
  //   top: -6px;
  //   transform: rotate(45deg);
  //   border: 1px solid #373121;
  //   content: "\25C7";
  //   font-size: 0;
  // }
  .title_SNe9 {
    opacity: 1;
    transition: 0.6s;
    transition-delay: 0.1s;
    color: #c4b998;
    font-size: 24px;
    letter-spacing: 7px;
    // opacity: 0;
    position: relative;
    text-indent: 8px;
    text-transform: uppercase;
    top: 14px;
  }
}
.bgss {
  z-index: 66;
  background-image: linear-gradient(180deg, #0a0a0c, rgba(0, 0, 0, 0), #0a0a0c);
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
}
.carousel-img {
  max-width: 100vw !important;
  // background-image: url("//game.gtimg.cn/images/lol/universe/images/latestBg.jpg");
  background-image: linear-gradient(180deg, #0a0a0c, rgba(0, 0, 0, 0), #0a0a0c);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: 1;
  .carouselItemInfoContainer_2T89 {
    height: 175px;
    width: 90%;
    position: relative;
    top: -50px;
    background: #131315;
    border: 1px solid #342b20;
    margin: 0 auto;
    padding-top: 20px;
    z-index: 999;
    .carouselItemInfoWrap_2nEN {
      position: absolute;
      top: 14px;
      right: 14px;
      bottom: 14px;
      left: 14px;
      border: 1px solid #342b20;
    }
    .carouselItemInfoWrap_2nEN:after,
    .carouselItemInfoWrap_2nEN:before {
      position: absolute;
      top: 50%;
      left: -14px;
      height: 1px;
      width: 14px;
      background: #342b20;
      content: "";
      font-size: 0;
    }
    .carouselItemInfo_3RRM {
      position: absolute;
      top: 22px;
      right: 22px;
      bottom: 22px;
      left: 22px;
      border: 1px solid #c4b998;
      .carouselItemInfoType_2DG1 {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        height: 98px;
        width: 13%;
        border-right: 1px solid #c4b998;
        float: left;
        img {
          height: auto;
          margin: auto;
          max-height: 70%;
          width: auto;
        }
      }
    }
  }
  .carouselItemInfoContainer_2T89:after,
  .carouselItemInfoContainer_2T89:before {
    position: absolute;
    top: 0;
    left: 50%;
    height: 14px;
    width: 1px;
    background: #342b20;
    content: "";
  }
  img {
    width: 100vw;
  }
}
.background_zrd6 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-filter: brightness(0.4);
  filter: brightness(0.4);
  background-image: url(//game.gtimg.cn/images/lol/universe/images/championsBackground.jpg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.2;
  z-index: 1;
}
.grid_3w39 {
  margin: 60px auto;
  max-width: 1280px;
  .grid_2D4u {
    margin: -0.5em;
    .item_1kYt:hover .viewButton_1UI8 {
      height: 54px !important;
    }
    .item_1kYt:hover {
      -webkit-transition-timing-function: ease, step-start;
      -moz-transition-timing-function: ease, step-start;
      transition-timing-function: ease, step-start;
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
      border: 1px solid #927345;
      z-index: 15 !important;
    }
    .itemSmall_2MoP {
      width: calc(25% - 1em);
      float: left;
    }
    .itemLarge_U-gc {
      float: right;
      height: -webkit-calc(680px + 1em);
      height: calc(680px + 1em) !important;
      width: -webkit-calc(50% - 1em);
      width: calc(50% - 1em);
      border: 1px solid #32281f;
    }
    .champions_ZAxG,
    .factions_2nS-,
    .latest_3xrG,
    .trending_HyTI {
      -webkit-transition: opacity 1.4s ease;
      -moz-transition: ease 1.4s opacity;
      transition: opacity 1.4s ease;
      opacity: 0;
    }
    .trending_HyTI {
      clear: both;
      padding: 35px 0 40px;
      position: relative;
    }
    .item_1kYt {
      transition-property: transform, z-index, border;
      transition-timing-function: ease, linear, ease;
      transition-duration: 0.3s, 0.3s, 0.3s;
      background-color: #101217;
      border: 1px solid #32281f;
      box-shadow: 0 0 16px 14px rgba(0, 0, 0, 0.4);
      color: #c4b998;
      cursor: pointer;
      // display: inline;
      height: 340px;

      margin: 0.5em;
      overflow: hidden;
      position: relative;
      z-index: 1;
    }
    .itemFeatured_3Uqk,
    .itemNormal_2XrH {
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -moz-box-pack: end;
      box-pack: end;
      -webkit-justify-content: flex-end;
      -moz-justify-content: flex-end;
      -ms-justify-content: flex-end;
      -o-justify-content: flex-end;
      justify-content: flex-end;
      -ms-flex-pack: end;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      box-orient: vertical;
      -webkit-box-direction: normal;
      -moz-box-direction: normal;
      box-direction: normal;
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      flex-direction: column;
      -ms-flex-direction: column;
      background-color: #101217;
      height: 100%;
      position: relative;
      width: 100%;
    }
    .itemNormal_2XrH .image_V6R- {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 40px;
      left: 0;
    }
    .itemFeatured_3Uqk .image_V6R-,
    .itemNormal_2XrH .image_V6R- {
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
      transition: 0.3s;
      -webkit-transition-delay: 0.2s;
      -moz-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }
    .itemFeatured_3Uqk .bottom_2zfD,
    .itemNormal_2XrH .bottom_2zfD {
      background-color: #101217;
      z-index: 5;
    }
    .itemNormal_2XrH .titles_GWG3 {
      height: 80px;
      padding: 29px 12px;
    }
    .itemFeatured_3Uqk .titles_GWG3,
    .itemNormal_2XrH .titles_GWG3 {
      background-color: #101217;
      border-top: 1px solid #7e633b;
      position: relative;
      text-align: center;
      z-index: 10;
    }
    .itemFeatured_3Uqk .titles_GWG3 h1,
    .itemNormal_2XrH .titles_GWG3 h1 {
      font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #c4b998;
      letter-spacing: 2px;
      text-align: center;
      text-transform: uppercase;
    }

    .viewButton_1UI8 {
      font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
      font-weight: 400;
      font-size: 11px;
      -webkit-transition: 0.4s ease;
      -moz-transition: 0.4s ease;
      transition: 0.4s ease;
      background-color: #14181d;
      border-top: 1px solid rgba(0, 0, 0, 0);
      color: #937341;
      height: 0;
      letter-spacing: 0.3em;
      line-height: 54px;
      overflow: hidden;
      text-align: center;
      text-transform: uppercase;
      z-index: 3;
    }
    .itemNormal_2XrH .icon_2QZE {
      position: absolute;
      top: -21px;
      right: 50%;
      right: -webkit-calc(50% - 21px);
      right: calc(50% - 21px);
      height: 42px;
      width: 42px;
    }
    .icon_2QZE {
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -moz-box-align: center;
      box-align: center;
      -webkit-align-items: center;
      -moz-align-items: center;
      -ms-align-items: center;
      -o-align-items: center;
      align-items: center;
      -ms-flex-align: center;
      -webkit-box-pack: center;
      -moz-box-pack: center;
      box-pack: center;
      -webkit-justify-content: center;
      -moz-justify-content: center;
      -ms-justify-content: center;
      -o-justify-content: center;
      justify-content: center;
      -ms-flex-pack: center;
      background-color: #101217;
      border-radius: 50%;
    }
    .itemNormal_2XrH .icon_2QZE img {
      max-height: 21px;
      max-width: 21px;
    }
    .icon_2QZE:after {
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-image: -webkit-linear-gradient(
        top,
        #3e3310,
        #806734,
        #c6b98b,
        #806734,
        #3e3310
      );
      background-image: linear-gradient(
        180deg,
        #3e3310,
        #806734,
        #c6b98b,
        #806734,
        #3e3310
      );
      border-radius: 50%;
      box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.2);
      content: "";
      z-index: -1;
    }
    .itemLarge_U-gc .icon_2QZE {
      position: absolute;
      top: -31px;
      right: 50%;
      right: -webkit-calc(50% - 31px);
      right: calc(50% - 31px);
      height: 62px;
      width: 62px;
    }
    .arrowBtn_dRMG {
      position: relative;
      display: inline-block;
      cursor: pointer;
      line-height: 1;
      top: 2px;
    }
    .hoverArrow_XAN2,
    .restArrow_2evX {
      -webkit-transition: 0.44s;
      -moz-transition: 0.44s;
      transition: 0.44s;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transform: translateX(-130%);
      -moz-transform: translateX(-130%);
      -ms-transform: translateX(-130%);
      -o-transform: translateX(-130%);
      transform: translateX(-130%);
    }
    restArrow_2evX {
      left: 0;
      -webkit-transition-delay: 0.22s;
      -moz-transition-delay: 0.22s;
      transition-delay: 0.22s;
      opacity: 1;
      -webkit-transform: translateX(50%);
      -moz-transform: translateX(50%);
      -ms-transform: translateX(50%);
      -o-transform: translateX(50%);
      transform: translateX(50%);
    }
    .hoverArrow_XAN2,
    .restArrow_2evX {
      -webkit-transition: 0.44s;
      -moz-transition: 0.44s;
      transition: 0.44s;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transform: translateX(-130%);
      -moz-transform: translateX(-130%);
      -ms-transform: translateX(-130%);
      -o-transform: translateX(-130%);
      transform: translateX(-130%);
    }
  }
  .carousel-img {
    width: 100vw !important;
  }
}
.carouselH2_1VdD {
  font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
  font-weight: 400;
  font-size: 38px;
  height: 98px;
  width: 39%;
  border-right: 1px solid #c4b998;
  color: #d3c7aa;
  float: left;
  letter-spacing: 0.14em;
  line-height: 94px;
  text-align: center;
  text-transform: uppercase;
}
.carouselRoleAndFaction_Yni3 {
  height: 98px;
  width: 21%;
  border-right: 1px solid #c4b998;
  float: left;

  li {
    vertical-align: top;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    box-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
    color: #d3c7aa;
    font-size: 11px;
    height: 49px;
    letter-spacing: 0.2em;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    text-transform: uppercase;
    .carouselRoleAndFactionDef_3LzU {
      font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
      font-weight: 800;
      display: block;
      margin: auto;
      max-width: 100%;
    }
    dt,
    dd {
      display: inline-block;
    }
    dt:after {
      content: ":";
      padding: 0 5px;
    }
  }
  li:first-child {
    border-bottom: 1px solid #c4b998;
  }
}
.carouselExploreBtn_1VB4 {
  height: 98px;
  width: 27%;
  float: left;
  line-height: 95px;
  font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #b59758;
  display: block;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  .genericTitle_1Gws {
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    transition: 0.2s;
    display: inline-block;
    .arrowBtn_dRMG {
      position: relative;
      display: inline-block;
      cursor: pointer;
      line-height: 1;
      top: 2px;
      .hoverArrow_XAN2,
      .restArrow_2evX {
        -webkit-transition: 0.44s;
        -moz-transition: 0.44s;
        transition: 0.44s;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform: translateX(-130%);
        -moz-transform: translateX(-130%);
        -ms-transform: translateX(-130%);
        -o-transform: translateX(-130%);
        transform: translateX(-130%);
      }
    }
  }
  .specificTitle_2S_s {
    display: none;
  }
}
.lock-more {
  text-align: center;
  color: #8a6c3c;
  pointer-events: auto;
  font-size: 15px;
  position: absolute;
  bottom: -50px;
  width: 100%;
}
</style>