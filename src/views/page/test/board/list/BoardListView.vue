<template>
  <div class="lgBoard">
    <hr>
    <h1>게시판 페이지</h1>

    <board-type
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
import BoardType from "@/components/board/BoardType";
const { cookies } = useCookies();

export default {
  name: "BoardListView",
  components: {BoardType, BoardList},
  setup() {
    const pageNum = ref(10);
    const topic = ref(0)
    const type = ref(5)
    const list = ref([]);
    const boards = ref([]);
    const totalPage = ref(0)
    const curPage = ref(0)
    const subject = ref(0)
    const keyword = ref('')

    return {
      list,
      topic,
      type,
      totalPage,
      curPage,
      pageNum,
      boards,
      subject,
      keyword
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
            } else {
              alert('게시판을 불러오는데 실패했습니다.')
            }
          })
          .catch(err => {
            alert('게시판을 불러오는데 실패했습니다.')
          })

    },
    FindAll() {
      this.keyword = ''
      this.topic = 0
      this.curPage = 0
      this.type=5
      this.subject=0
      this.FindBoard()
    },
    FindHot() {
      this.keyword = ''
      this.topic = 1
      this.curPage = 0
      this.type=5
      this.subject=0
      this.FindBoard()
    },
    ChoosePage(curPage) {
      this.curPage=curPage
      this.FindBoard()
    },
    ChangeSubject(subject) {
      this.subject = subject;
    },
    ChooseKeyword(keyword) {
      this.curPage = 0;
      this.keyword = keyword;
      this.FindBoard()
    },
    ChooseType(type) {
      this.curPage = 0
      this.type = type
      this.keyword = ''
      this.subject=0
      this.FindBoard()
    },
    ChooseBoard(boardId) {
      this.$router.push({
        name: 'BoardDetailView',
        query: {
          boardId: boardId
        }
      })
    },
    ChoosePageNum(pageNum) {
      this.pageNum = pageNum
      this.curPage = 0
      this.FindBoard()
    },
    MoveDetail() {
      if (this.hasLogin) {
        this.$router.push('/board/enroll/user')
      } else {
        this.$router.push('/board/enroll/anonym')
      }
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
