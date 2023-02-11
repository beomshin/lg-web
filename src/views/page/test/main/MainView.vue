<template>
  <div class="main">
    <hr>
    <h1>메인 페이지</h1>
    <p>준비중....</p>
    <hr>
  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();

export default {
  name: 'MainView',
}
</script>

<style scoped>
  .main {
    margin-top: 20px;
    padding-left: 10px;

  }
</style>
