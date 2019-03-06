export default {
  namespaced: true,

  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd: ({ commit, getters }) => getters.parity === 'odd' ? commit('increment') : false,
    incrementAsync: async ({ commit }) => {
      return await setTimeout(() => { commit('increment') }, 1000)
    }
  },
  getters: {
    parity: state => state.count % 2 === 0 ? 'even' : 'odd'
  }
}
