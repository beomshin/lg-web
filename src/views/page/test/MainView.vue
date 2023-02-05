<template>
  <router-link to="/board">게시판 페이지</router-link> |
  <template v-if="!hasLogin">
    <router-link to="/sign">회원가입 페이지</router-link>
  </template>
  <template v-else>
    <router-link to="/sign">아이디 찾기</router-link> |
    <router-link to="/sign">비밀번호 찾기</router-link>
  </template>
  <hr>

</template>

<script>
import BoardUserInfo from "@/views/page/test/Header";
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();

export default {
  name: 'MainView',
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
}
</script>

<style scoped>

</style>