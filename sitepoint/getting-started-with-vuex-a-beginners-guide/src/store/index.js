import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import todo from './modules/todo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    counter,
    todo
  },
  strict: debug,
})
