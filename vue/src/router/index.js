import Vue from 'vue'
import Router from 'vue-router'
import ArticleAdd from '@/components/board/ArticleAdd'
import ArticleEdit from '@/components/board/ArticleEdit'
import ArticleFindOne from '@/components/board/ArticleFindOne'
import ArticlesFindSome from '@/components/board/ArticlesFindSome'
import ArticleRemoval from '@/components/board/ArticleRemoval'
import Articles from '@/components/board/Articles'
import StudentAdd from '@/components/student/StudentAdd'
import StudentEdit from '@/components/student/StudentEdit'
import StudentFindOne from '@/components/student/StudentFindOne'
import StudentsFindSome from '@/components/student/StudentsFindSome'
import StudentRemoval from '@/components/student/StudentRemoval'
import Students from '@/components/student/Students'
import Join from '@/components/member/Join'
import Login from '@/components/member/Login'
import MyPage from '@/components/member/MyPage'
import MyPageUpdate from '@/components/member/MyPageUpdate'
import Admin from '@/components/member/Admin'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes : [
		{path: '/articleAdd',name: 'articleAdd', component: ArticleAdd},
		{path: '/articleEdit',name: 'articleEdit', component: ArticleEdit},
		{path: '/articleRemoval',name: 'articleRemoval', component: ArticleRemoval},
		{path: '/articleFindOne',name: 'articleFindOne', component: ArticleFindOne},
		{path: '/articles',name: 'articles', component: Articles},
		{path: '/articlesFindSome',name: 'articlesFindSome', component: ArticlesFindSome},
		{path: '/studentAdd',name: 'studentAdd', component: StudentAdd},
		{path: '/studentEdit',name: 'studentEdit', component: StudentEdit},
		{path: '/studentFindOne',name: 'studentFindOne', component: StudentFindOne},
		{path: '/studentRemoval',name: 'studentRemoval', component: StudentRemoval},
		{path: '/students',name: 'students', component: Students},
		{path: '/studentsFindSome',name: 'studentsFindSome', component: StudentsFindSome},
		{path: '/join',name: 'join', component: Join},
		{path: '/login',name: 'login', component: Login},
		{path: '/myPage',name: 'myPage', component: MyPage},
		{path: '/myPageUpdate',name: 'myPageUpdate', component: MyPageUpdate},
		{path: '/admin',name: 'admin', component: Admin}
	]
})