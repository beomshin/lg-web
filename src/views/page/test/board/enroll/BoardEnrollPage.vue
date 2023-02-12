<template>
  <div>
    <template v-if="hasLogin">
      <board-enroll-user-page/>
    </template>
    <template v-else>
      <board-enroll-anonym-page/>
    </template>
  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
import BoardEnrollUserPage from "@/components/board/enroll/BoardEnrollUserPage";
import BoardEnrollAnonymPage from "@/components/board/enroll/BoardEnrollAnonymPage";

const { cookies } = useCookies();

export default {
  name: "BoardEnrollPage",
  components: {BoardEnrollAnonymPage, BoardEnrollUserPage},
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