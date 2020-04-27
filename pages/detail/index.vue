<template>
  <div class="mainer">
    <div class="infodefail">
      <el-carousel height="632px" :autoplay="false" arrow="never" indicator-position="none">
        <el-carousel-item v-for="item in skin" :key="item.skinId">
          <img :src="item.mainImg" :alt="item.name" />
        </el-carousel-item>
      </el-carousel>
      <div class="defail-skin-nav"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: "详情页"
    };
  },
  components: {},
  props: {},
  layout: "info",
  methods: {},
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
      return this.detail.skins.filter(item => item.mainImg);
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
      position: absolute;
      bottom: 10px;
      right: 10px;
      padding-left: 306px;
    }
  }
}
</style>