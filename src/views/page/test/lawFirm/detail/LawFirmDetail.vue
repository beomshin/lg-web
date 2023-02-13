<template>
  <div>
    <hr>
    <h1>로펌 게시판 페이지</h1>
    <law-firm-detail-top
      :law-firm="lawFirm"
    />
    <hr>
    <law-firm-group
      :view-type="viewType"
      @ChooseGroup="ChooseGroup"
      @Apply="Apply"
      />
    <hr>
    <template v-if="viewType == 0">
      <board-type
          :page-num="pageNum"
          :type="type"
          :topic="topic"
          @FindAll="FindAll"
          @FindHot="FindHot"
          @MoveDetail="MoveDetail"
          @ChooseType="ChooseType"
          @ChoosePageNum="ChoosePageNum"
      />
      <hr>
      <board-list
          :boards="boards"
          :cur-page="curPage"
          :total-page="totalPage"
          :page-num="pageNum"
          :subject="subject"
          @ChooseBoard="ChooseBoard"
          @ChoosePage="ChoosePage"
          @ChangeSubject="ChangeSubject"
          @ChooseKeyword="ChooseKeyword"
      />
    </template>
    <template v-if="viewType == 1">
      <h2>준비중...</h2>
    </template>
    <hr>
    <button class="btn btn-secondary" @click="Back">뒤로가기</button>
  </div>
</template>

<script>
import LawFirmDetailTop from "@/components/lawFirm/detail/LawFirmDetailTop";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import service from "@/service";
import {ref} from 'vue'
import LawFirmFIndDetail from "@/dto/lawFirm/LawFirmFIndDetail";
import BoardList from "@/layout/board/BoardList";
import BoardFindList from "@/dto/board/BoardFindList";
import BoardType from "@/components/board/list/BoardType";
import {useCookies} from "vue3-cookies";
import LawFirmGroup from "@/components/lawFirm/detail/LawFirmGroup";
import LawFirmApply from "@/dto/lawFirm/LawFirmApply";

const { cookies } = useCookies();
export default {
  name: "LawFirmDetail",
  components: {LawFirmGroup, BoardType, BoardList, LawFirmDetailTop},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const lawfirmId = ref(0)
    const page = ref(0)
    const pageNum = ref(10)
    const subject = ref(0)
    const keyword = ref('')
    const lawFirm = ref({})
    const boards = ref([])
    const totalElements = ref(0)
    const totalPage = ref(0)
    const curPage = ref(0)
    const topic = ref(0)
    const type = ref(5)
    const viewType = ref(0)

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
      curPage,
      topic,
      type,
      router,
      route,
      viewType
    }
  },
  activated() {
    this.lawfirmId = String(this.route.query.id);
    this.FindLawFirmDetail()
    this.FindBoard()
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  methods: {
    FindLawFirmDetail() {
      service
          .LawFirmFindDetail(new LawFirmFIndDetail(this.page, this.pageNum, this.subject, this.keyword), null, this.lawfirmId)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.lawFirm = res.data.content.lawFirm
            } else {
              alert('로펌 상세 조회 실패')
              window.history.back()
            }
          })
          .catch(err => {
            alert('로펌 상세 조회 실패')
            window.history.back()
          })
    },
    FindBoard() {
      const request = new BoardFindList(this.curPage, this.pageNum, this.topic, this.type, this.subject, this.keyword, this.lawfirmId);
      service
          .BoardFindList(request, null, null)
          .then(res => {
            if (res.data.resultCode == "00000") {
              this.boards = res.data.content.boards
              this.totalPage = res.data.content.totalPage
              this.curPage = res.data.content.curPage
              this.totalElements = res.data.content.totalElements
            } else {
              alert('게시판을 불러오는데 실패했습니다.')
            }
          })
          .catch(err => {
            alert('게시판을 불러오는데 실패했습니다.')
          })

    },
    FindAll() {
      this.curPage = 0;
      this.pageNum = 10;
      this.topic = 0;
      this.type = 5;
      this.subject = 0;
      this.keyword = '';
      this.FindBoard();
    },
    FindHot() {
      this.curPage = 0;
      this.pageNum = 10;
      this.topic = 1;
      this.type = 5;
      this.subject = 0;
      this.keyword = '';
      this.FindBoard();
    },
    ChoosePage(curPage) {
      window.scrollTo(0, 0);
      this.curPage = curPage;
      this.FindBoard();
    },
    ChangeSubject(subject) {
      this.subject = subject;
    },
    ChooseKeyword(keyword) {
      window.scrollTo(0, 0);
      this.curPage = 0;
      this.pageNum = 10;
      this.keyword = keyword;
      this.FindBoard();
    },
    ChooseType(type) {
      this.curPage = 0;
      this.type = type;
      this.subject = 0;
      this.keyword = '';
      this.FindBoard();
    },
    ChoosePageNum(pageNum) {
      this.curPage = 0
      this.pageNum = pageNum;
      this.FindBoard();
    },
    ChooseBoard(boardId) {
      this.router.push({
        name: 'LawFirmBoardDetailPage',
        query: {
          id: boardId
        }
      })
    },
    Back() {
      window.history.back()
    },
    MoveDetail() {
      if (!this.hasLogin) {
        alert('로그인 유저만 게시글을 작성 할 수 있습니다.')
        return
      }

      this.router.push({
        name: 'LawFirmBoardEnrollPage',
        query: {
          id: this.lawfirmId
        }
      })
    },
    ChooseGroup(val) {
      this.viewType = val
    },
    Apply() {
      if (!this.hasLogin) {
        alert('로그인 유저만 신청할 수 있습니다.')
        return
      }

      service
          .LawFirmApply(new LawFirmApply(this.lawfirmId, 'hi'),
              {
                "Authorization": 'Bearer ' + cookies.get('lg.m.log')
              },
              null
          )
          .then(res => {
            if (res.data.resultCode == '00000') {
              alert('로펌 신청이 완료되었습니다.')
            } else if (res.data.resultCode == '10019') {
              alert('이미 로펌에 가입되어있습니다.')
            } else if (res.data.resultCode == '10020') {
              alert('이미 로펌 신청하였습니다.')
            } else {
              alert('로펌 신청을 실패했습니다.')
            }
          })
          .catch(err => {
            alert('로펌 신청을 실패했습니다.')
          })
    }
  }
}
</script>

<style scoped>

</style>
