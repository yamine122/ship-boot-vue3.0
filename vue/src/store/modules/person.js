//import loginAPI from '@/api/loginAPI.js'
import axios from 'axios'
import Constant from '@/store/modules/mutation_types.js'
const state = {
	person : {}
}
const getters= {
	getPerson : state => state.person
}
const actions = {
	async login(){
            let url = `${this.$store.state.context}/login`
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
                    alert(`스토어에 저장성공${this.$store.state.authCheck}`)
                    if(this.$store.state.person.role !== "student"){
						this.$store.commit(Constant.SIDEBARS, "managerSidebar")
						this.$store.commit(Constant.HEADER_MESSAGE, "관리자 화면")
                        this.$router.push({path: '/admin'})
                    }else{
						this.$store.commit(Constant.SIDEBARS, "studentSidebar")
						this.$store.commit(Constant.HEADER_MESSAGE, "학생화면")

                        this.$router.push({path: '/mypage'})
                    }

                }else{
                    alert(`로그인실패`)
                    this.$router.push({path: '/login'})
                }
                
            })
            .catch(()=>{
                alert('axios실패')
            })
            
		},
		async join() {
            let url = `${this.context}/join`
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
                if(res.data.result==="SUCCESS"){
                    this.$store.commit(Constant.PERSON, res.data.person)
                    this.$router.push({path : '/mypage'})   
              }else{
                alert(`로그인 실패 `);                
                this.$router.push({path:  '/join'})                        
              }
            })
            .catch(()=>{
                alert('AXIOS 실패')
            })
        }
}
const mutations = {
    LOGIN (state, person){
		state.person = person
    },
    LOGOUT (state){
        state.person = null
    }
}
export default {
	state,
	getters,
	actions,
	mutations
}