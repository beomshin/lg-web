<template>
  <div>
    <keep-alive>
      <component v-bind:is="comp"/>
    </keep-alive>
  </div>
</template>

<script>
import LawFirmListPage from "@/views/page/test/lawFirm/list/LawFirmListPage";
import LawFirmDetail from "@/views/page/test/lawFirm/detail/LawFirmDetail";
import LawFirmBoardDetailPage from '@/views/page/test/board/detail/BoardDetailPage'
import LawFirmBoardEnrollPage from '@/views/page/test/lawFirm/enroll/LawFirmBoardEnrollPage'

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
    LawFirmListPage,
    LawFirmDetail,
    LawFirmBoardDetailPage,
    LawFirmBoardEnrollPage
  }
}
</script>

<style scoped>

</style>
