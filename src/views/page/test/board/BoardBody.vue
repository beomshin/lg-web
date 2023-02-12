<template>
  <div>
    <keep-alive>
      <component v-bind:is="comp"/>
    </keep-alive>
  </div>
</template>

<script>
import BoardListPage from "@/views/page/test/board/list/BoardListPage";
import BoardDetailPage from "@/views/page/test/board/detail/BoardDetailPage";
import BoardEnrollAnonymPage from "@/views/page/test/board/enroll/BoardEnrollAnonymPage";
import BoardEnrollUserPage from "@/views/page/test/board/enroll/BoardEnrollUserPage";

export default {
  name: "BoardBody",
  data () {
    return {
      comp: 'BoardListPage'
    }
  },
  watch: {
    '$route' (to, from) {
      this.comp = to.name
    }
  },
  mounted() {
    this.comp = this.$route.name
  },
  components: {
    BoardListPage,
    BoardDetailPage,
    BoardEnrollUserPage,
    BoardEnrollAnonymPage
  }
}
</script>

<style scoped>

</style>