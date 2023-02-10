<template>
  <div>
    <hr>
    <h1>로펌 게시판 페이지</h1>
    <law-firm-detail-top
      :law-firm="lawFirm"
    />
  </div>
</template>

<script>
import LawFirmDetailTop from "@/views/page/test/lawFirm/detail/LawFirmDetailTop";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import service from "@/service";
import {ref} from 'vue'
import LawFirmFIndDetail from "@/dto/lawFirm/LawFirmFIndDetail";
export default {
  name: "LawFirmDetail",
  components: {LawFirmDetailTop},
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

    return {
      lawfirmId,
      page,
      pageNum,
      subject,
      keyword,
      lawFirm,
      boards
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
            } else {
              alert('게시판 상세 조회 실패')
            }
          })
          .catch(err => {
            alert('게시판 상세 조회 실패')
          })
    }
  }
}
</script>

<style scoped>

</style>