<template>
  <div class="lgBoard">
    <hr>
    <h1>게시판 페이지 ({{this.totalElements}}개)</h1>

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

  </div>
  <hr/>
</template>

<script>
import {ref} from "vue";
import service from "@/service";
import { useCookies } from 'vue3-cookies'
import BoardFindList from "@/dto/board/BoardFindList";
import BoardList from "@/layout/board/BoardList";
import BoardType from "@/components/board/list/BoardType";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
const { cookies } = useCookies();

export default {
  name: "BoardListPage",
  components: {BoardType, BoardList},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const curPage = ref(0)
    const pageNum = ref(10);
    const topic = ref(0)
    const type = ref(5)
    const subject = ref(0)
    const keyword = ref('')

    const boards = ref([]);
    const totalPage = ref(0)
    const totalElements = ref(0)

    return {
      topic,
      type,
      totalPage,
      curPage,
      pageNum,
      boards,
      subject,
      keyword,
      totalElements,
      route,
      router
    }
  },
  created() {
    this.FindBoard()
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  methods: {
    FindBoard() {
      const request = new BoardFindList(this.curPage, this.pageNum, this.topic, this.type, this.subject, this.keyword);
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
        name: 'BoardDetailPage',
        query: {
          boardId: boardId
        }
      })
    },
    MoveDetail() {
      if (this.hasLogin) this.router.push({ name: 'BoardEnrollUserView'})
      else this.router.push({ name: 'BoardEnrollAnonymView'})
    },
  }
}
</script>

<style scoped>
  .lgBoard {
    margin-top: 20px;
    padding-left: 10px;

  }
</style>
