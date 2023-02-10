<template>
  <div>
    <hr>
    <div style="display: flex">
      <template v-for="(item, index) in lawFirms" :key="index">
        <law-firm-list-body :lawFirm="item" @click="MoveDetail(item.lawFirmId)"/>
      </template>
    </div>
    <hr>
    <law-firm-list-pageination
      :total-page="totalPage"
      :cur-page="page"
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
import LawFirmListBody from "@/views/page/test/lawFirm/list/LawFirmListBody";
import LawFirmListPageination from "@/views/page/test/lawFirm/list/LawFirmListPageination";
import LawFirmListCondition from "@/views/page/test/lawFirm/list/LawFirmListCondition";

export default {
  name: "LawFirmList",
  components: {LawFirmListCondition, LawFirmListPageination, LawFirmListBody},
  setup() {
    const page = ref('0')
    const pageNum = ref('4')
    const subject = ref('0')
    const keyword = ref('')
    const lawFirms = ref('')
    const totalPage = ref(0)
    const totalElements = ref(0)

    return {
      page,
      pageNum,
      subject,
      keyword,
      lawFirms,
      totalPage,
      totalElements
    }
  },
  mounted() {
    this.FindLawFirmList(this.page, this.pageNum, this.subject, this.keyword)
  },
  methods: {
    FindLawFirmList(page, pageNum, subject, keyword) {
      const request = new LawFirmFindList(page, pageNum, subject, keyword);

      service
          .LawFirmFindList(request, null, null)
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
      this.page = payload.page
      this.FindLawFirmList(this.page, this.pageNum, this.subject, this.keyword)
    },
    FindKeyword(payload) {
      this.page = 0;
      this.subject = payload.subject
      this.keyword = payload.keyword
      this.FindLawFirmList(this.page, this.pageNum, this.subject, this.keyword)
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
