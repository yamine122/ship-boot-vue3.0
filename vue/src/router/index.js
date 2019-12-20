import Vue from 'vue'
import Router from 'vue-router'
import Write from '@/components/board/Write.vue'
import ListView from '@/components/board/ListView.vue'
import Update from '@/components/board/Update.vue'
import Remove from '@/components/board/Remove.vue'
import Search from '@/components/board/Search.vue'
import Join from '@/components/member/Join.vue'
import Login from '@/components/member/Login.vue'
Vue.use(Router)
export default new Router({
	mode : 'history',
	routes : [
		{path: '/join', name: 'join', component: Join},
		{path: '/login', name: 'login', component: Login},
		{path: '/write', name: 'write', component: Write},
		{path: '/listview', name: 'listview', component: ListView},
		{path: '/update', name: 'update', component: Update},
		{path: '/remove', name: 'remove', component: Remove},
		{path: '/search', name: 'search', component: Search}
	]
})