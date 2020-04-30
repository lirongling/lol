<template>
  <div>
    <div class="container">
      <div class="pageBackground_ocS6"></div>
      <div class="factions_Rkvr">
        <div class="titleBlock_28wG header_3pZQ">
          <h1>
            <span>地区</span>
          </h1>
        </div>
        <div class="factionsList_3qfs flex f-wrap">
          <a class="factionWrapper_9Uuf" v-for="(item,index) in HeroList.factions">
            <div class="QCard_hextech_wrapper_7db5">
              <div
                class="QCard_hextech_root_a9df QCard_hextech_clickable_275e flex f-column a-center"
              >
                <div
                  class="QBackground_hextech_root_5bd4 background_3pH4"
                  :style="{backgroundImage: `url(${item.image.uri})`}"
                  style="background-position: right top;"
                ></div>
                <img
                  class="crest_MN39"
                  src="//game.gtimg.cn/images/lol/universe/images/ixtal_crest_icon.png"
                  :alt="item.name"
                />
                <h3 class="QH3_hextech_root_f154 factionName_2meu">{{item.name}}</h3>
              </div>
            </div>
          </a>
          <a
            class="factionWrapper_9Uuf"
            v-for="(item,index) in (4-HeroList.factions.length%4)"
            :key="index"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  layout: "universe",
  components: {},
  props: {},
  methods: {},
  mounted() {},
  async asyncData(ctx) {
    let api = ctx.app.$api;
    let HeroList = await api.HeroList();
    return { HeroList };
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.QCard_hextech_root_a9df,
.QCard_hextech_wrapper_7db5 {
  height: 100%;
  width: 100%;
}
.QCard_hextech_clickable_275e:after,
.QCard_hextech_clickable_275e:before {
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  text-align: left;
  top: 0;
  width: 100%;
  z-index: 1;
}
.QCard_hextech_clickable_275e:before {
  transition: opacity 0.4s ease;
}
.factionWrapper_9Uuf:hover .crest_MN39 {
  opacity: 0 !important;
}
.factionWrapper_9Uuf:hover .background_3pH4 {
  opacity: 1 !important;
}
.QCard_hextech_clickable_275e:focus:after,
.QCard_hextech_clickable_275e:focus:before,
.QCard_hextech_clickable_275e:hover:after,
.QCard_hextech_clickable_275e:hover:before {
  opacity: 1;
}
.QCard_hextech_clickable_275e:after {
  border-image-slice: 1;
  border-image-source: linear-gradient(180deg, #f0e6d2, #c89b3c);
  border-style: solid;
  border-width: 1px;
  -webkit-transition: opacity 0.2s ease;
  -o-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
}
.pageBackground_ocS6 {
  height: 100%;
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: #121212;
  z-index: -1;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100vw;
  left: 0;
  position: fixed;
  opacity: 0.3;
  background-image: url(//game.gtimg.cn/images/lol/universe/images/map-background__3fiTp.png);
  text-shadow: 0 0 black;
}
.factions_Rkvr {
  max-width: 1600px;
  padding: 30px 50px;
  margin: 0 auto;
  .titleBlock_28wG {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h1 {
      font-family: microsoft yahei, Helvetica, tahoma, simsun, sans-serif;
      font-weight: 800;
      font-size: 60px;
      color: #f0e6d2;
      line-height: 1.2;
      padding: 80px 0;
    }
  }
  .header_3pZQ {
    padding: 15px;
  }
  .factionsList_3qfs {
    margin: 0 auto;
    .factionWrapper_9Uuf {
      height: 200px;
      width: calc(25% - 30px);
      margin: 15px;
      .QCard_hextech_wrapper_7db5 {
        display: block;
        position: relative;
        .QCard_hextech_clickable_275e {
          cursor: pointer;
          outline: 0;
        }
        .QCard_hextech_root_a9df {
          background-color: #010a13;
          border: 1px solid #1e2328;
          box-shadow: 0 0 40px 0 #000;
          overflow: hidden;
          vertical-align: middle;
          box-sizing: border-box;
        }
        .QBackground_hextech_root_5bd4 {
          background-repeat: no-repeat;
          background-size: cover;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 100%;
          margin: 0;
          padding: 0;
          width: 100%;
        }
        .background_3pH4 {
          position: relative;
          transition: opacity 0.6s ease-out;
          opacity: 0.3;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .crest_MN39 {
          transition: opacity 0.2s ease-in;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 45px;
          right: 0;
          height: 75px;
          margin: auto;
        }
        .QH3_hextech_root_f154 {
          margin: 0;
          padding: 0;
          font-family: Beaufort for LOL, Arial, sans-serif;
          font-size: 24px;
          line-height: 1.16666;
          font-style: normal;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #f0e6d2;
        }
        .factionName_2meu {
          padding: 15px !important;
        }
      }
    }
  }
}
</style>