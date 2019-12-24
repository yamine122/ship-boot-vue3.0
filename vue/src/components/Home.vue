<template>
<div id="app">
		<layout>
			<template #header="header">
				<h1>{{header.title}}
				<component :is="!loginCheck ? 'pre-auth' : 'post-auth'"></component>
				</h1>
			</template>
			<template #sidebar="sidebar">
				<ul class="menu">
					<li v-for="i of sidebars" :key="i.menu">
					<router-link :to="i.link">{{i.menu}}</router-link>
					</li>
				</ul>
			</template>
			<template #content="content">
			<router-view/>
			</template>
			
			<template #footer="footer">{{footer.title}}</template>
		</layout>
</div>
</template>
<script>
import Layout from "@/components/cmm/Layout.vue"
import PostAuth from "@/components/cmm/PostAuth.vue"
import PreAuth from "@/components/cmm/PreAuth.vue"
import {store} from "@/store"
export default {
	components :{
		Layout,PostAuth,PreAuth
	},
	data(){
		return {
			sidebars : [
				{menu:"게시글쓰기",link:"/write"},
				{menu:"목록",link:"/listview"},
				{menu:"글수정",link:"/update"},
				{menu:"글삭제",link:"/remove"},
				{menu:"검색",link:"/search"},
				{menu:"마이페이지",link:"/mypage"}

			]
		}
	},
	computed:{
		loginCheck: function(){
			return store.state.authCheck
		}
	}
}
</script>
<style scoped>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
}
ul.menu a {
    text-decoration:none;
}
#btn {
	position:   relative;
    left:       450px;
    top:        0px;
}

</style>