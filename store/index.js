export const state = () => ({
    heroList: 0
})

export const mutations = {
    setHero(state, data) {
        state.heroList = data
    }
}