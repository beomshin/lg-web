<template>
  <div>
    <hr>
    <h1>로펌 게시판 페이지</h1>
    <law-firm-detail-top
      :law-firm="lawFirm"
    />
    <hr>
    <board-list
      :boards="boards"
      :cur-page="curPage"
      :total-page="totalPage"
      @ChooseBoard="ChooseBoard"
      @ChoosePage="ChoosePage"
      />
  </div>
</template>

<script>
import LawFirmDetailTop from "@/views/page/test/lawFirm/detail/LawFirmDetailTop";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import service from "@/service";
import {ref} from 'vue'
import LawFirmFIndDetail from "@/dto/lawFirm/LawFirmFIndDetail";
import BoardList from "@/layout/board/BoardList";

export default {
  name: "LawFirmDetail",
  components: {BoardList, LawFirmDetailTop},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const lawfirmId = route.query.lawfirmId
    const page = ref(0)
    const pageNum = ref(10)
    const subject = ref(0)
    const keyword = ref('')
    const lawFirm = ref({})
    const boards = ref([])
    const totalElements = ref(0)
    const totalPage = ref(0)
    const curPage = ref(0)

    return {
      lawfirmId,
      page,
      pageNum,
      subject,
      keyword,
      lawFirm,
      boards,
      totalElements,
      totalPage,
      curPage
    }
  },
  mounted() {
    this.FindLawFirmDetail()
  },
  methods: {
    FindLawFirmDetail() {
      let request = new LawFirmFIndDetail(this.page, this.pageNum, this.subject, this.keyword);
      service
          .LawFirmFindDetail(request, null, String(this.lawfirmId))
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.lawFirm = res.data.content.lawFirm
              this.boards = res.data.content.boards
              this.totalPage = res.data.content.totalPage;
              this.totalElements = res.data.content.totalElements;
              this.curPage = res.data.content.curPage
            } else {
              alert('게시판 상세 조회 실패')
            }
          })
          .catch(err => {
            alert('게시판 상세 조회 실패')
          })
    },
    ChooseBoard(boardId) {
      console.log(boardId)
    },
    ChoosePage(page) {
      console.log(page)
    }
  }
}
</script>

<style scoped>

</style>