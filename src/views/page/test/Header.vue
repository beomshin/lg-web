<template>
  <div>
    <h2>헤더</h2>
    <div>

      <template v-if="hasLogin">
        <div>
          로그인 성공
          <button @click="Logout">로그아웃</button>
        </div>
        <div>
          <span>미열람 알림함 개수 : {{user?.alarmCnt}}개</span> |
          <span>게시판 작성수 : {{user?.boardCnt}}개</span> |
          <span>재판 작성수 : {{user?.trialCount}}개</span> |
          <span>로펌 : {{user?.lawFirmName || '-'}}</span> |
          <span>닉네임 : {{user?.tierName || '-'}}</span>
        </div>
        <hr>
      </template>
      <template v-else>
        <div>
          아이디 : <input type="text" v-model="loginId" placeholder="로그인 아이디" ><br>
          비밀번호 : <input type="password" v-model="password" placeholder="로그인 패스워드" ><br>
          <button @click="Login(loginId, password)">로그인</button>
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
import LoginMember from "@/dto/member/LoginMember";
const { cookies } = useCookies();


export default {
  name: "BoardUserInfo",
  setup () {
    const loginId = ref("");
    const password = ref("");
    const user = ref({})

    const validateLogin = () => {
        if (!loginId.value || !password.value) return false
        else return true
    }

    return {
      loginId,
      password,
      user,
      validateLogin,
    }
  },
  mounted() {
    if (this.hasLogin) {
      this.MemberInfo()
    }
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  methods: {
    Login (loginId, password) {
      if(!this.validateLogin()) {
        alert('아이디 또는 비밀번호를 입력해주세요')
      } else {
        service
            .login(new LoginMember(loginId, password), null)
            .then(res => {
              if (res.data.resultCode == "00000") {
                cookies.set("lg.m.log", res.data.accessToken)
                this.hasLogin = true
                window.location.replace('/')
              } else {
                alert('로그인에 실패했습니다.')
              }
            })
      }
    },
    Logout() {
      cookies.remove('lg.m.log')
      window.location.replace('/')
    },
    MemberInfo() {
      let token = 'Bearer ' + cookies.get('lg.m.log');
      service
          .memberInfo(null, {Authorization: token})
          .then(res => {
            this.user = res.data.data
          })
    }
  },
}
</script>

<style scoped>

</style>
