<template>
  <div>
    <keep-alive>
      <component v-bind:is="comp"/>
    </keep-alive>
  </div>
</template>

<script>
import BoardListView from "@/views/page/test/board/list/BoardListView";
import BoardDetailView from "@/views/page/test/board/detail/BoardDetailView";

export default {
  name: "BoardBody",
  data () {
    return {
      comp: 'BoardListView'
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
    BoardListView,
    BoardDetailView
  }
}
</script>

<style scoped>

</style>