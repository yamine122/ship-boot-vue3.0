<template>
<div>
학생들목록
<table class="table"><tr>
	
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
	<div class="btn-cover">
		<button :disable="pageNum === 0" @click="prevPage" class="page-btn">
		이전
		</button>
		<span class="page-count">{{pageNum + 1}}</span>
		<button :disable="pageNum >= pageCount - 1 " @click="nextPage" class="page-btn">
		다음
		</button>
	</div>
</div>
</template>
<script>

export default{
	data(){
		return {

			list : [],
			pageNum : 0,
			pageCount : 5
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
.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
  border: 1px solid black;
  margin-right: 10px;
  margin-left: 10px;
}
</style>