<template>
<div class="login-form">
    <form>
        <h2 class="text-center">조건 검색</h2>  
        <div class="form-group">
            <input v-model="searchWord" type="text" class="form-control" placeholder="Username" required="required">
        </div>
        <div class="form-group">
            <button @click.prevent="find" type="submit" class="btn btn-primary btn-block">전 송</button>
        </div>
		<a @click.prevent="namesOfStudents">1. 학생의 이름</a><br />
		<a @click.prevent="streamToArray">2. 스트림을 배열로 전환</a><br />
		<a @click.prevent="streamToMap">3. 스트림을 맵으로 전환. 학생이름이  key</a><br />
		<a @click.prevent="theNumberOfStudents">4. 학생의 수</a><br />
		<a @click.prevent="totalScore">5. 학생들 총점</a><br />
		<a @click.prevent="topStudent">6. 1등 학생</a><br />
		<a @click.prevent="getStat">7. 전체 학생 성적 통계</a><br />
		<a @click.prevent="nameList">8. 전체 학생 이름</a><br />
		<a @click.prevent="partioningBy">1.단순분할 (성별로 분할)</a><br />
		<a @click.prevent="partioningCountPerGender">2.단순분할 (성별 학생수)</a><br />
		<a @click.prevent="partioningTopPerGender">3.단순분할 (성별 1등)</a><br />
		<a @click.prevent="partioningRejectPerGender">4.다중분할 (성별 불합격자,  50점이하)</a><br />
		<a @click.prevent="groupingByBan">1. 단순 그룹화(반별로 그룹화)</a><br />
		<a @click.prevent="groupingByGrade">2. 단순그룹화(성적별로 그룹화)</a><br />
		<a @click.prevent="groupingByCountByLevel">3. 단순그룹화 + 통계(성적별 학생수))</a><br />
		<a @click.prevent="groupingByHakAndBan">4. 다중 그룹화 (학년별, 반별)</a><br />
		<a @click.prevent="groupingTopByHakAndBan">5. 다중 그룹화 +통계 (학년별, 반별  1등)</a><br />
		<a @click.prevent="groupingByStat">6. 다중그룹화 + 통계(학년별, 반별  성적그룹)</a><br />
		<a @click.prevent="groupingByHak">7. 단순그룹화(성별기준)</a><br />
    </form>



<!-- 학생들목록
<table class="table">
	<tr>
	
	<th>NO</th><th>아이디</th><th>비번</th><th>이름</th><th>생일</th><th>성별</th><th>학년</th><th>반</th><th>점수</th><th>역할</th>
	
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
</table> -->
</div>
</template>
<script>

export default{
	data(){
		return {

			list : []
		}
	},
	methods : {
		
		
	}
	
}
</script>
<style scoped>
.table{	border:1px solid black;}
.table tr{	border:1px solid black;}
.table tr th{	border:1px solid black;}
.table tr td{	border:1px solid black;}
</style>