<template>
  <div>
    <h2>유저</h2>
    <div>
      <template v-if="!hasLogin">
        <div>
          아이디 : <input type="text" v-model="loginId" placeholder="로그인 아이디" ><br>
          비밀번호 : <input type="password" v-model="password" placeholder="로그인 패스워드" ><br>
          <button @click="lgLogin(loginId, password)">로그인</button>
        </div>
        <hr>
      </template>
      <template v-else>
        <div>
          로그인 성공
          <button @click="lgLogout">로그아웃</button>
        </div>
        <div>
          <span>프로필 : {{user?.profile}}</span> |
          <span>알림함 : {{user?.alarmCnt}}</span> |
          <span>게시판수 : {{user?.boardCnt}}</span> |
          <span>재판수 : {{user?.trialCount}}</span> |
          <span>로펌 : {{user?.lawFirmName}}</span> |
          <span>닉네임 : {{user?.tierName}}</span> |
        </div>
        <hr>
      </template>
    </div>
  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
import {ref} from "vue";
import service from "@/service/config";
const { cookies } = useCookies();
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "BoardUserInfo",
  setup () {
    const { cookies } = useCookies();
    const loginId = ref("");
    const password = ref("");
    const user = ref({})
    const router = useRouter()
    const route = useRoute()

    const lgLogin = (loginId, password) => {

      if (!loginId || !password) {
        alert('정보입력해주세요')
        return
      }

      service.login({
        loginId, password
      })
          .then(res => {

            if (res.data.resultCode == "00000") {
              cookies.set("lg.m.log", res.data.accessToken)
              router.replace('/board')
            } else {
              alert('로그인에 실패했습니다.')
            }
          })
    }

    const lgLogout = () => {
      cookies.remove('lg.m.log')
      router.replace('/')
    }

    const memberInfo = () => {
      service.memberInfo({}, {
        Authorization: 'Bearer ' + cookies.get('lg.m.log')
      })
          .then(res => {
            console.log(res)
            user.value = res.data.data
          })

    }

    return {
      loginId
      , password
      , lgLogin
      , lgLogout
      , memberInfo
      , user
    }
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  mounted() {
    if (this.hasLogin) {
      console.log("test")
      this.memberInfo()
    }
  },
}
</script>

<style scoped>

</style>
