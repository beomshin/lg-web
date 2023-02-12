<template>
  <div>
    <keep-alive>
      <component v-bind:is="comp"/>
    </keep-alive>
  </div>
</template>

<script>
import LawFirmList from "@/views/page/test/lawFirm/list/LawFirmList";
import LawFirmDetail from "@/views/page/test/lawFirm/detail/LawFirmDetail";
import LawFirmBoardDetailPage from '@/views/page/test/board/detail/BoardDetailPage'

export default {
  name: "LawFirmBody",
  data () {
    return {
      comp: 'LawFirmList'
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
    LawFirmList,
    LawFirmDetail,
    LawFirmBoardDetailPage
  }
}
</script>

<style scoped>

</style>
