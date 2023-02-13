<template>
  <div>
    글목록 페이지
  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";

const { cookies } = useCookies();

export default {
  name: "MyBoardPage",
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  mounted() {
    if(!this.hasLogin) {
      window.location.replace('/')
    }
  },
}
</script>

<style scoped>

</style>
