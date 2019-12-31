<template>
<div>
학생들목록
<table class="table">
	<tr>
	
	<th>NO</th>
	<th>아이디</th>
	<th>비번</th>
	<th>이름</th>
	<th>생일</th>
	<th>성별</th>
	<th>학년</th>
	<th>반</th>
	<th>점수</th>
	<th>역할</th>
	
	</tr>
	<tr v-for="(j,i) of list" :key="j.id">
	
	<td>{{i+1}}</td>
	<td>{{j.userid}}</td>
	<td>{{j.passwd}}</td>
	<td>{{j.name}}</td>
	<td>{{j.birthday}}</td>
	<td>{{j.gender}}</td>
	<td>{{j.hak}}</td>
	<td>{{j.ban}}</td>
	<td>{{j.score}}</td>
	<td>{{j.role}}</td>
	
	</tr>
</table>
</div>
</template>
<script>

export default{
	data(){
		return {

			list : []
		}
	},
	created(){
	
	}
}
</script>
<style scoped>
.table{	border:1px solid black;}
.table tr{	border:1px solid black;}
.table tr th{	border:1px solid black;}
.table tr td{	border:1px solid black;}
</style>