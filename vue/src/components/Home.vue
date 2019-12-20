<template>
<div id="app">
		<layout>
			<template #header="header">
				<h1>{{header.title}}
				<button id="btn" v-for="j of members" :key="j.button">
				<router-link :to="j.link">{{j.button}}</router-link>
				</button>
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
export default {
	components :{
		Layout
	},
	data(){
		return {
			sidebars : [
				{menu:"게시글쓰기",link:"/write"},
				{menu:"목록",link:"/listview"},
				{menu:"글수정",link:"/update"},
				{menu:"글삭제",link:"/remove"},
				{menu:"검색",link:"/search"}
			],
			members :[
				{button: "로그인", link:"/login"},
				{button: "회원가입", link:"/join"}
			]
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