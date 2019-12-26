<template>
<div id="app">
		<layout>
			<template #header="header">
				<h1>{{header.title}}
				<component :is="!loginCheck ? 'pre-auth' : 'post-auth'"></component>
				</h1>
			</template>
			<template #sidebar="sidebar">
				<div v-switch="sidebarType">
					<div v-case="'preSidebar'">
						<component :is="'pre-sidebar'"></component>
					</div>
					<div v-case="'managerSidebar'">
						<component :is="'manager-sidebar'"></component>
					</div>
					
					<div v-case="'studentSidebar'">
						<component :is="'student-sidebar'"></component>
					</div>
				</div>
			</template>
			<!-- <template #sidebar="sidebar">
				<ul class="menu">
					<li v-for="i of sidebars" :key="i.menu">
					<router-link :to="i.link">{{i.menu}}</router-link>
					</li>
				</ul>
			</template> -->
			<template #content="content">
			
			<router-view/>
			</template>
			
			<template #footer="footer">{{footer.title}}
			
			</template>
		</layout>
</div>
</template>
<script>
import Layout from "@/components/cmm/Layout.vue"
import PostAuth from "@/components/cmm/PostAuth.vue"
import PreAuth from "@/components/cmm/PreAuth.vue"
import ManagerSidebar from "@/components/cmm/ManagerSidebar.vue"
import PreSidebar from "@/components/cmm/PreSidebar.vue"
import StudentSidebar from "@/components/cmm/StudentSidebar.vue"
import {store} from "@/store"
export default {
	components :{
		Layout,PostAuth,PreAuth,ManagerSidebar, PreSidebar, StudentSidebar
	},
	data(){
		return {
			
			
		}
	},
	computed:{
		loginCheck: function(){
			return store.state.authCheck
		},
		sidebarType: function(){
			return store.state.sidebar
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

</style>