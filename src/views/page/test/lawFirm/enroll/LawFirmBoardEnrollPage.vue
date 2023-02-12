<template>
  <div>
     <law-firm-board-enroll-user-page/>
  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
import LawFirmBoardEnrollUserPage from "@/components/lawFirm/enroll/LawFirmBoardEnrollUserPage";

const { cookies } = useCookies();

export default {
  name: "LawFirmBoardEnrollPage",
  components: {LawFirmBoardEnrollUserPage},
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  activated() {
    if (!this.hasLogin) {
      alert('로그인 유저만 게시글을 작성 할 수 있습니다.')
      window.history.back()
    }
  }
}
</script>

<style scoped>

</style>