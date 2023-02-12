<template>
  <div>
    <hr>
    <div style="display: flex">
      <template v-for="(item, index) in lawFirms" :key="index">
        <law-firm-list-body :lawFirm="item" @click="MoveDetail(item.lawFirmId)"/>
      </template>
    </div>
    <hr>
    <law-firm-list-pagination
      :total-page="totalPage"
      :cur-page="curPage"
      @pageMove="pageMove"
      />
    <hr>
    <law-firm-list-condition
        @FindKeyword="FindKeyword"
      />
    <hr>
  </div>
</template>

<script>
import { ref } from 'vue'
import LawFirmFindList from "@/dto/lawFirm/LawFirmFindList";
import service from "@/service";
import LawFirmListBody from "@/components/lawFirm/LawFirmListBody";
import LawFirmListPagination from "@/components/lawFirm/LawFirmListPagination";
import LawFirmListCondition from "@/components/lawFirm/LawFirmListCondition";

export default {
  name: "LawFirmListPage",
  components: {LawFirmListCondition, LawFirmListPagination, LawFirmListBody},
  setup() {
    const curPage = ref(0)
    const pageNum = ref(4)
    const subject = ref(0)
    const keyword = ref('')
    const lawFirms = ref('')
    const totalPage = ref(0)
    const totalElements = ref(0)

    return {
      curPage,
      pageNum,
      subject,
      keyword,
      lawFirms,
      totalPage,
      totalElements
    }
  },
  mounted() {
    this.FindLawFirmList()
  },
  methods: {
    FindLawFirmList() {
      service
          .LawFirmFindList(new LawFirmFindList(this.curPage, this.pageNum, this.subject, this.keyword), null, null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.lawFirms = res.data.content.lawFirms
              this.totalPage = res.data.content.totalPage
              this.totalElements = res.data.content.totalElements
            } else {
              alert('로펌 리스트 조회 실패')
            }
          })
          .catch(err => {
            alert('로펌 리스트 조회 실패')
          })
    },
    pageMove(payload) {
      this.curPage = payload.page
      this.FindLawFirmList()
    },
    FindKeyword(payload) {
      this.curPage = 0;
      this.subject = payload.subject
      this.keyword = payload.keyword
      this.FindLawFirmList()
    },
    MoveDetail(id) {
      this.$router.push({
        name: 'LawFirmDetail',
        query: {
          lawfirmId: id
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
