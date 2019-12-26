<template>
  <table>
    <tr>
      <td>
        <legend><h3>비밀번호</h3></legend>
      <h3>{{person.passwd}}</h3>
      <button @click.prevent="goUpdate">수정</button><br/><br/>
      </td>
    </tr>
    <tr>
      <td><legend><h3>성적확인</h3></legend>
      <h3>{{person.hak}}학년</h3> 
      <h3>{{person.ban}} 반</h3>
      <h3>{{person.score}}점</h3>
      </td>
      <br/><br/>
   
    </tr>
  </table>
</template>
<script>
import {store} from "../../store"
export default{
	data(){
		return {
      context : 'http://localhost:8080/',
      name: store.state.name,
      person : store.state.person,
      sidebars: [
				{menu:"비밀번호수정",link:"/update"}
      ],
      authCheck : true
    }
  },
  methods :{
      goUpdate(){
          this.$router.push({path: '/myPageUpdate'})
          
      }
    }
    
		
	}
  
</script>
<style scoped>
    .back {width: 700px; margin: 0 ;}
    .sub {width: 100%; height: 600px; margin: 0 auto; text-align: center;}
    .pull-left {float: left;}
    .pull-right {float: right;}
    .top {margin-top: 1%;}
    .rt {margin-right: 1%;}
    .size {width: 49.5%; height: 100%;}
</style>