import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import todos from './todos'

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
})

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		todos,
	},
	plugins: [vuexLocal.plugin], // Save store in localstorage
})
