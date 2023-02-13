<template>
  <div class="login">
      <template v-if="hasLogin">
        <div class="card" style="width: 23rem;">
          <img class="card-img-top" >
          <div class="card-body">
            <div style="display: flex;">
              <h5 class="card-title">닉네임 : {{user?.nickName || '-'}} 님</h5>
              <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 10px" @click="MoveMyPage">마이페이지</button>
            </div>
            <p class="card-text">나의 티어 : {{user?.tierName || '미정'}}, 내 로펌 : {{user?.lawFirmName || '없음'}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">이메일 : {{user?.email}}</li>
            <li class="list-group-item">미열람 알림함 개수 : {{user?.alarmCnt}}개</li>
            <li class="list-group-item">게시판 작성수 : {{user?.boardCnt}}개</li>
            <li class="list-group-item">재판 작성수 : {{user?.trialCount}}개</li>
          </ul>
          <div class="card-body">
            <a class="card-link" style="cursor: pointer" @click="Logout">로그아웃</a>
          </div>
        </div>
      </template>
      <template v-else>
        <div style="width: 500px">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">아이디</label>
              <input type="text" class="form-control" v-model="loginId" placeholder="로그인 아이디">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">패스워드</label>
              <input type="password" class="form-control" v-model="password" placeholder="로그인 패스워드" @keyup.enter="Login(loginId, password)">
            </div>
            <button type="button" class="btn btn-secondary" @click="Login(loginId, password)">로그인</button>
            <button type="button" class="btn btn-secondary" style="margin-left: 5px" @click="MoveSign" >회원가입</button>
            <button type="button" class="btn btn-secondary" style="margin-left: 5px" >아이디 찾기</button>
            <button type="button" class="btn btn-secondary" style="margin-left: 5px" >비밀번호 찾기</button>
          </form>
        </div>
      </template>
  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
import {ref} from "vue";
import service from "@/service";
import MemberLoginDto from "@/dto/member/MemberLoginDto";
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
            .MemberLogin(new MemberLoginDto(loginId, password), null, null)
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
          .MemberInfo(null, {Authorization: token}, null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.user = res.data.content.user
            } else if (res.data.resultCode == "17008") {
              cookies.remove('lg.m.log')
              alert('세션이 만료되었습니다. 로그아웃 됩니다.')
              window.location.replace('/')
            }
          })
          .catch(err => {
            cookies.remove('lg.m.log')
            alert('문제가 발생했습니다. 로그아웃 됩니다.')
            window.location.replace('/')
          })
    },
    MoveSign() {
      this.$router.push('/sign')
    },
    MoveMyPage() {
      this.$router.push({
        name: 'MyMemberPage'
      })
    }
  },
}
</script>

<style scoped>
  .login {
    margin-top: 30px;
    padding-left: 10px;
  }
</style>
