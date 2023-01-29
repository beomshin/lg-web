<template>
  <h1>로그인 페이지</h1>
  <hr/>
  <template v-if="!hasLogin">
    <div>
      아이디 : <input type="text" v-model="loginId" placeholder="로그인 아이디" ><br>
      비밀번호 : <input type="password" v-model="password" placeholder="로그인 패스워드" ><br>
      <button @click="lgLogin(loginId, password)">로그인</button>
    </div>
    <hr>
    <router-link to="/sign">회원가입 페이지</router-link> |
    <router-link to="/sign">아이디 찾기</router-link> |
    <router-link to="/sign">비밀번호 찾기</router-link>
  </template>
  <template v-else>
    <div>
      로그인 성공
      <button @click="lgLogout">로그아웃</button>
    </div>
    <hr>
    <router-link to="/sign">게시판 페이지</router-link> |
  </template>
  <hr>

</template>

<script>

import {ref} from "vue";
import service from "@/service/config";
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies();

export default {
  name: 'LoginView',
  setup () {
    const { cookies } = useCookies();
    const loginId = ref("");
    const password = ref("");

    const lgLogin = (loginId, password) => {
      service.login({
        loginId, password
      })
      .then(res => {
        cookies.set("lg.m.log", res.data.accessToken)
        window.location.replace('/login')
      })
    }

    const lgLogout = () => {
      cookies.remove('lg.m.log')
      window.location.replace('/login')
    }

    return {
      loginId
      , password
      , lgLogin
      , lgLogout
    }
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  }
}
</script>

<style scoped>

</style>