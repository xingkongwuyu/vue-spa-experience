import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import { state, mutations } from './mutations'
import news from './modules/news';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	getters,
	state,
	mutations,
	modules: {
		news,
	
	}
})