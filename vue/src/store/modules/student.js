import Constant from '@/store/modules/mutation_types'
import axios from 'axios'
const state = {
	person: {},
    sidebars : [
                {menu:"내정보",link:"/student/mypage"},
                {menu:"비번변경",link:"/student/update/passwd"}
			]
}
const getters = {
	getPerson: state => state.person
}
const actions = {
	async login(){
            alert(`${this.userid} ,  ${this.passwd}`)
            let url = `${ this.$store.state.context}/login`
            let data = {
                userid: this.userid,
                passwd: this.passwd
            }
            let headers = {
                'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
            axios
            .post(url, data, headers)
            .then(res=>{
                if(res.data.result === "SUCCESS"){
                  this.$store.commit(Constant.PERSON, res.data.person)
                  this.$store.commit(Constant.IS_AUTH, true)
                  
                  alert(`스토어에 저장성공 ${this.$store.state.authCheck}`)
                  if(this.$store.state.person.role !== 'student'){
                      this.$store.commit(Constant.SIDEBAR, 'managerSidebar')
                      this.$store.commit(Constant.HEADER_MESSAGE, '관리자화면')
                      this.$router.push({path: '/admin'})
                  }else{
                      this.$store.commit(Constant.SIDEBAR, 'studentSidebar')
                      this.$store.commit(Constant.HEADER_MESSAGE, '학생화면')
                      this.$router.push({path: '/myPage'})
                  }
                  
                }else{
                  alert(`로그인실패`)
                  this.$router.push({path: '/login'})
                }
            })
            .catch(()=>{
                alert('AXIOS 실패')
            })  
            
          },
      async join(){
            let url = `${ this.$store.state.context}/join`
              let data = {
                  userid : this.userid,
                  passwd : this.passwd,
                  name : this.name,
                  birthday : this.birthday
              }
              let headers = {
                      'authorization': 'JWT fefege..',
                      'Accept' : 'application/json',
                      'Content-Type': 'application/json'
              }
              axios
              .post(url, data, headers)
              .then(res=>{
                  if(res.data.result==="SUCCESS"){
                      this.$store.commit(Constant.PERSON, res.data.person)
                      this.$router.push({path : '/mypage'})
                  }else{
            this.$router.push({path : '/join'})
          }
              })
              .catch(()=>{
                  alert(`axios 실패!`)
              })
          }
}
const mutations = {
	LOGIN (state, person) {
        state.person = person
    },
    LOGOUT (state) {
        state.person = null
    },
}
export default {
	namespaced : true,
	state,
	getters,
	actions,
	mutations
}