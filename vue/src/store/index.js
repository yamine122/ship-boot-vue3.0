import Vue from 'vue'
import Vuex from 'vuex'
import student from '@/store/modules/student.js'
import article from '@/store/modules/article.js'
import common from '@/store/modules/common.js'
import admin from '@/store/modules/admin.js'


Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
      student,
      common,
      article,
      admin
  },
  strict : true
 
})