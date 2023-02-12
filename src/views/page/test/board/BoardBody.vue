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

export default {
  name: "BoardBody",
  data () {
    return {
      comp: 'BoardBody'
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
    BoardDetailPage
  }
}
</script>

<style scoped>

</style>