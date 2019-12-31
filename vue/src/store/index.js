import Vue from 'vue'
import Vuex from 'vuex'
import person from '@/store/modules/person.js'
import article from '@/store/modules/article.js'
import common from '@/store/modules/common.js'


Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      person,
      common,
      article
  },
  strict : true
 
})