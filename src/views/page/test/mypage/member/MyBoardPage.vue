<template>
  <div class="lgBoard">
    <hr>
    <h1>게시판 페이지 ({{this.totalElements}}개)</h1>
    <hr>
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
</template>

<script>
import {useCookies} from "vue3-cookies";
import service from "@/service";
import {ref} from 'vue'
import BoardFindMemberList from "@/dto/board/BoardFindMemberList";
import BoardType from "@/components/board/list/BoardType";
import BoardList from "@/layout/board/BoardList";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
const { cookies } = useCookies();

export default {
  name: "MyBoardPage",
  components: {BoardList, BoardType},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const curPage = ref(0)
    const pageNum = ref(10)
    const topic = ref(0)
    const type = ref(5)
    const subject = ref(0)
    const keyword = ref('')
    const boards = ref([]);
    const totalPage = ref(0)
    const totalElements = ref(0)

    return {
      curPage,
      pageNum,
      topic,
      type,
      subject,
      keyword,
      boards,
      totalPage,
      totalElements,
      router,
      route
    }
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  mounted() {
    if(!this.hasLogin) {
      window.location.replace('/')
    }

    this.FindBoard()
  },
  methods: {
    FindBoard() {
      service.BoardFindMemberList(new BoardFindMemberList(this.curPage, this.pageNum, this.topic, this.type, this.subject, this.keyword),
          {Authorization: 'Bearer ' + cookies.get('lg.m.log')},
      null)
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
          id: boardId
        }
      })
    },
    MoveDetail() {
      this.router.push({
        name: 'BoardEnrollPage'
      })
    },
  }
}
</script>

<style scoped>

</style>
