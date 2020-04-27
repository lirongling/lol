<template>
  <div class="container">
    <colbox :heroList="heroList" :goodList="goodList"></colbox>
  </div>
</template>

<script>
import colbox from "../../components/info/colbox";
export default {
  data() {
    return {};
  },
  components: {
    colbox
  },
  props: {},
  layout: "info",
  methods: {},
  mounted() {},
  async asyncData(ctx) {
    let api = ctx.app.$api;
    let hero = api.getHero();
    let good = api.getGood();
    let res = await Promise.all([hero, good]);
    return {
      heroList: res[0].hero,
      goodList: res[1].items
    };
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
}
</style>