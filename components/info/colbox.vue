<template>
  <div class="mainer">
    <div class="colbox">
      <div class="pagetab">
        <ul class="pagetab-list flex">
          <li v-for="(item,index) in tabList" :key="index" @click="changeTab(item,index)">
            <a class="pagetab-list-lnk" :class="{'active':active===index}">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="info-showbox" v-if="active<2" id="sonSelect">
        <div class="info-top flex j-between">
          <div>
            <el-radio-group v-model="radioHero">
              <el-radio
                @click.native="changeRadio($event,item)"
                @change="filterData"
                :label="item.faRole"
                v-for="(item,index) in activeGroup"
                :key="index"
              >{{item.faTitle}}</el-radio>
            </el-radio-group>
            <div v-if="sonClass.length>0" class="selete-seccheck">
              <div class="commico-corner" :style="{left:offsetX+'px'}"></div>
              <el-radio-group v-model="sonRadio">
                <el-radio
                  @change="changeSon"
                  :label="items.sonRole"
                  v-for="(items,indexs) in sonClass"
                  :key="indexs"
                >{{items.sonTitle}}</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div class="search">
            <el-input placeholder="请输入内容" v-model="inputSearch" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <div class="imgtextlist flex a-center f-wrap">
          <div
            class="imgtextlist-item"
            v-for="(item,index) in showList"
            :key="index"
            @click="jumpDetail(item)"
            @mouseenter="mouseItem($event,item)"
            @mouseleave="showMouse=false"
            @mousemove="mouseMove($event)"
          >
            <a :title="`${item.name} ${item.title}`">
              <img
                :src="`//game.gtimg.cn/images/lol/act/img/champion/${item.alias}.png`"
                alt
                v-if="active===0"
              />
              <img :src="`//game.gtimg.cn/images/lol/act/img/item/${item.itemId}.png`" alt v-else />
              <div class="name">{{item.name}}</div>
              <div class="sbg">
                <i class="commspr commico-search"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="info-showbox" v-else>暂未开发</div>
      <div
        class="current"
        v-if="active===1&&showMouse"
        :style="{left:clientX+'px',top:clientY+'px'}"
      >
        <div class="current-top flex">
          <img :src="`//game.gtimg.cn/images/lol/act/img/item/${activeItem.itemId}.png`" alt />
          <div class="current-detail">
            <div class="current-name">{{activeItem.name}}</div>
            <div class="current-price">售价或合成费用{{activeItem.price}}</div>
          </div>
        </div>
        <div class="current-description" v-html="activeItem.description"></div>
        <div v-if="activeItem.from" class="tree-chart">
          <tree-chart :json="getTree()"></tree-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: ["英雄", "物品", "召唤师技能", "符文", "云顶之弈"],
      // 英雄分类
      heroGroup: [
        {
          faTitle: "所有英雄",
          faRole: ""
        },
        {
          faTitle: "战士",
          faRole: "fighter"
        },
        {
          faTitle: "法师",
          faRole: "mage"
        },
        {
          faTitle: "刺客",
          faRole: "assassin"
        },
        {
          faTitle: "坦克",
          faRole: "tank"
        },
        {
          faTitle: "射手",
          faRole: "marksman"
        },
        {
          faTitle: "辅助",
          faRole: "support"
        }
      ],
      // 物品分类
      goodsGroup: [
        {
          faTitle: "所有物品",
          faRole: "",
          sonGroup: []
        },
        {
          faTitle: "防御类",
          faRole: "Health,HealthRegen,Armor,SpellBlock",
          sonGroup: [
            {
              sonTitle: "生命值",
              sonRole: "Health"
            },
            {
              sonTitle: "生命回复",
              sonRole: "HealthRegen"
            },
            {
              sonTitle: "护甲",
              sonRole: "Armor"
            },
            {
              sonTitle: "魔法抗性",
              sonRole: "SpellBlock"
            }
          ]
        },
        {
          faTitle: "攻击类",
          faRole: "LifeSteal,CriticalStrike,AttackSpeed,Damage",
          sonGroup: [
            {
              sonTitle: "生命偷取",
              sonRole: "LifeSteal"
            },
            {
              sonTitle: "暴击",
              sonRole: "CriticalStrike"
            },
            {
              sonTitle: "攻击速度",
              sonRole: "AttackSpeed"
            },
            {
              sonTitle: "攻击力",
              sonRole: "Damage"
            }
          ]
        },
        {
          faTitle: "法术类",
          faRole: "Mana,SpellDamage,CooldownReduction, ManaRegen",
          sonGroup: [
            {
              sonTitle: "法力值",
              sonRole: "Mana"
            },
            {
              sonTitle: "法术强度",
              sonRole: "SpellDamage"
            },
            {
              sonTitle: "冷却缩减",
              sonRole: "CooldownReduction"
            },
            {
              sonTitle: "法力回复",
              sonRole: "ManaRegen"
            }
          ]
        },
        {
          faTitle: "移动速度",
          faRole: "Boots,NonbootsMovement",
          sonGroup: [
            {
              sonTitle: "鞋子",
              sonRole: "Boots"
            },
            {
              sonTitle: "其他移动速度物品",
              sonRole: "NonbootsMovement"
            }
          ]
        },
        {
          faTitle: "消耗品",
          faRole: "Consumable",
          sonGroup: []
        }
      ],
      radioHero: "",
      inputSearch: "",
      showList: this.heroList,
      activeList: this.heroList,
      activeGroup: [],
      sonRadio: "",
      sonClass: [],
      offsetX: 0,
      activeItem: {},
      showMouse: false,
      clientX: 0,
      clientY: 0
    };
  },
  components: {},
  props: {
    heroList: {
      type: Array,
      default: () => []
    },
    goodList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 过滤数据
    filterData() {
      this.sonRadio = "";
      if (this.radioHero === "") {
        this.showList = this.activeList;
        return;
      }
      if (this.active === 0) {
        this.showList = this.activeList.filter(item =>
          item.roles.includes(this.radioHero)
        );
      } else if (this.active === 1) {
        this.showList = this.activeList.filter(item =>
          this.radioHero.includes(item.types)
        );
      }
    },
    // 过滤小分类
    changeSon() {
      this.showList = this.activeList.filter(item =>
        item.types.includes(this.sonRadio)
      );
    },
    // 跳转到详情页
    jumpDetail(item) {
      if (this.active === 1) {
        return;
      }
      this.$router.push({
        path: "/detail",
        query: { heroId: item.heroId }
      });
    },
    // 切换tab
    changeTab(item, index) {
      this.sonClass = [];
      if (this.active !== index) {
        this.active = index;
        if (index === 0) {
          this.activeList = this.heroList;
          this.showList = this.heroList;
          this.activeGroup = this.heroGroup;
        } else if (index === 1) {
          this.activeList = this.goodList;
          this.showList = this.goodList;
          this.activeGroup = this.goodsGroup;
        }
      }
    },
    // 切换父级radio
    changeRadio(e, item) {
      if (item.sonGroup) {
        if (document.getElementById("sonSelect")) {
          let left = document
            .getElementById("sonSelect")
            .getBoundingClientRect().top;
          this.sonClass = item.sonGroup;
          this.offsetX = e.pageX - left - 45;
        }
      } else {
        this.sonClass = [];
      }
    },
    // 鼠标移入
    mouseItem(e, item) {
      this.activeItem = item;
      this.clientY = e.clientY;
      this.clientX = e.clientX;
      this.showMouse = true;
      if (this.activeItem.from) {
        let a = this.getTree();
      }
    },
    // 获取树形数据
    getTree() {
      let treeData = {
        name: this.activeItem.name,
        image_url: this.activeItem.iconPath
      };
      this.takeTree(treeData, this.activeItem);
      return treeData;
    },
    // 取出树形数据
    takeTree(obj, data) {
      obj.children = [];
      data.from.map(item => {
        let objs = {};
        let itemData = this.goodList.find(items => items.itemId == item);
        objs = {
          name: itemData.name,
          image_url: itemData.iconPath
        };
        if (itemData.from) {
          this.between(objs, itemData);
        }
        obj.children.push(objs);
      });
    },
    between(obj, data) {
      this.takeTree(obj, data);
    },
    // 鼠标浮入后移动
    mouseMove(e) {
      this.clientY = e.clientY;
      this.clientX = e.clientX;
    }
  },
  beforeMount() {
    this.activeGroup = this.heroGroup;
  },
  mounted() {
    // console.log(this.goodList);
  },
  asyncData(ctx) {
    let api = ctx.app.$api;
    let heroList = api.getHero();
  },
  watch: {
    inputSearch(val) {
      this.sonClass = [];
      this.radioHero = "";
      if (val.trim().length > 0) {
        if (this.active === 0) {
          this.showList = this.activeList.filter(
            item =>
              item.name.includes(val) ||
              item.alias.includes(val) ||
              item.title.includes(val)
          );
        } else if (this.active === 1) {
          this.showList = this.activeList.filter(
            item =>
              item.name.includes(val) ||
              item.plaintext.includes(val) ||
              JSON.stringify(item.types).includes(val.toLocaleUpperCase())
          );
        }
      } else {
        this.showList = this.activeList;
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
/deep/ .el-radio-group {
  display: flex;
  align-items: center;
}
.mainer {
  position: relative;
  z-index: 1;
  overflow: hidden;
  zoom: 1;
  width: 1240px;
  margin: 0 auto 50px;
  .colbox {
    margin: 20px auto;
    border: 1px solid #e1e1e1;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    background: #fff;
    .pagetab {
      border-top: 4px solid #d7d7d7;
      border-bottom: 1px solid #e2e2e2;
      height: 48px;
      background: #f0f0f0;
      .pagetab-list {
        // padding: 0;
        margin-top: -4px;
        margin-bottom: -2px;
        position: relative;
        height: 53px;

        .pagetab-list-lnk:hover {
          text-decoration: none;
          border-top: 4px solid #00a383;
          color: #00a383;
          background: #fff;
        }
        .pagetab-list-lnk {
          display: block;
          border-top: 4px solid #d7d7d7;
          height: 49px;
          line-height: 48px;
          width: 160px;
          text-align: center;
          color: #525252;
          font-size: 16px;
          cursor: pointer;
        }
        .active {
          text-decoration: none;
          border-top: 4px solid #00a383;
          color: #00a383;
          background: #fff;
        }
      }
    }
    .info-showbox {
      padding: 30px 37px 30px 30px;
      margin-top: -1px;
      position: relative;
      min-height: 500px;
      .info-top {
        .search {
          // width: ;
        }
        .selete-seccheck {
          float: left;
          width: 120%;
          margin-top: 14px;
          padding: 12px 20px;
          position: relative;
          border: 1px solid #e1e1e1;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
          background: #fff;
          .commico-corner {
            position: absolute;
            top: -10px;
            width: 19px;
            height: 12px;
            background-position: -765px -102px;
            background-repeat: no-repeat;
            background-image: url(//game.gtimg.cn/images/lol/web201310/page.png?d=20131230);
          }
        }
      }
      .imgtextlist {
        padding: 30px 0 0;
        position: relative;
        .imgtextlist-item {
          width: 90px;
          height: 100px;
          margin-bottom: 22px;
          text-align: center;
          line-height: 15px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          a:hover {
            color: #00a383;
            text-decoration: none;
          }
          a:hover .sbg {
            display: block;
          }
          img {
            width: 66px;
            height: 65px;
            margin: 0 auto 7px;
          }
          .name {
            text-align: center;
            font-size: 12px;
          }
          .sbg {
            display: none;
            position: absolute;
            top: 0;
            left: 12px;
            width: 66px;
            height: 65px;
            background: #00a383;
            opacity: 0.8;
            cursor: pointer;
            .commico-search {
              position: absolute;
              top: 50%;
              left: 50%;
              margin: -12px 0 0 -12px;
              display: block;
              width: 23px;
              height: 26px;
              background-position: -582px -86px;
            }
            .commspr {
              background-repeat: no-repeat;
              display: inline-block;
              background-image: url(//game.gtimg.cn/images/lol/web201310/page.png?d=20131230);
            }
          }
        }
      }
    }
  }
}
.current {
  color: #00a383;
  position: fixed;
  z-index: 99;
  border-radius: 6px;
  width: 450px;
  min-height: 160px;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  .current-top {
    img {
      width: 65px;
      height: 66px;
    }
    .current-detail {
      margin-left: 20px;
      .current-name {
        margin-top: 5px;
        font-size: 18px;
      }
      .current-price {
        margin-top: 10px;
        color: #e9c06c;
      }
    }
  }
  .current-description {
    margin: 10px 0;
    color: #94c0e9;
  }
  .tree-chart {
    /deep/ .node {
      width: 100px !important;
    }
    /deep/ .parentLevel {
      padding-bottom: 16px !important;
    }
    /deep/ td {
      padding-bottom: 16px !important;
    }
    /deep/ .avat {
      width: 45px !important;
      height: 45px !important;
    }
    /deep/ .name {
      font-size: 13px;
    }
  }
}
</style>