<template>
  <h1>로그인 페이지</h1>
  <hr/>
  <BoardUserInfo/>
  <router-link to="/board">게시판 페이지</router-link> |
  <router-link to="/sign">회원가입 페이지</router-link> |
  <router-link to="/sign">아이디 찾기</router-link> |
  <router-link to="/sign">비밀번호 찾기</router-link>
  <hr>

</template>

<script>
import BoardUserInfo from "@/views/page/test/BoardUserInfo";

export default {
  name: 'LoginView',
  components: {BoardUserInfo}
}
</script>

<style scoped>

</style>