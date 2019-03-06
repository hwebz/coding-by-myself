export default {
  namespaced: true,

  state: {
    items:[
      {
        name: "Milk",
        done: false
      },
      {
        name: "Bread",
        done: true
      },
      {
        name: "Cake",
        done: false
      }
    ]
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    },
    // Refer to ES6 Destructuring: https://github.com/lukehoban/es6features#destructuring
    editItem(state, { item, name=item.name, done=item.done }) {
      item.name = name;
      item.done = done;
    },
    removeItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1)
    }
  },
  actions: {
    addItem({commit}, item) {
      commit("addItem",{
        name: item,
        done:false
      })
    },
    editItem({commit}, { item, name } )  {
      commit("editItem", {item, name })
    },
    toggleItem({ commit }, item) {
      commit("editItem", { item, done: !item.done })
    },
  }
}
