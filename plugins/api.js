export default ({ app }, inject) => {
    let { $axios } = app
    $axios.interceptors.response.use(res => {
        return res.data
    })
    let api = {
            getData() {
                return $axios.get('/game/images/lol/act/img/js/items/items.js')
            },
            // 获取物品列表
            getGood() {
                return $axios.get('/game/images/lol/act/img/js/items/items.js')
            },
            // 获取英雄列表
            getHero() {
                return $axios.get('/game/images/lol/act/img/js/heroList/hero_list.js')
            },
            // 获取英雄详情
            heroDetail(id) {
                return $axios.get(`/game/images/lol/act/img/js/hero/${id}.js`)
            },
            // 获取专题页数据
            getFeatured() {
                return $axios.get(`/api/v1/zh_cn/explore/index.json`)
            }
        }
        // 全局注入 拥有了一个this.$api对象
    inject('api', api)
}