<template>
<div id="auth-box">	
     <a @click.prevent="logout">로그아웃</a>
     <a @click.prevent="widthdrawal">회원탈퇴</a>
</div>
</template>
<script>
import axios from "axios"
import { store } from "../../store"
export default {
	data (){
		
  },
  
	methods : {
        logout(){
            alert('로그아웃 클릭 ')
            store.state.loginedUid = ''
            store.state.loginedPwd = ''
            store.state.name = ''
            store.state.birthday = ''
            store.state.id = ''
            this.$router.push({path: '/login'})
            },
            withdrawal(){
                axios
                .delete(`${this.context}/withdrawal/${store.state.loginedUid}`)
                .then(
                    alert(`회원탈퇴 성공`)
                )
                .catch(()=>{
                    alert(`회원탈퇴 실패`)
            })
            this.$router.push({path: '/login'})
            }
    }
}
</script>