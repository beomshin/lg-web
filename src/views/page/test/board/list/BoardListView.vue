<template>
  <div class="lgBoard">
    <hr>
    <h1>게시판 페이지</h1>

    <div style="margin-top: 5px; margin-bottom: 5px">
      <select class="form-select" aria-label="Default select example" v-model="type" @change="FindBoard(0, pageNum, this.topic, this.subject, this.keyword)">
        <option value="5">전체</option>
        <option value="0">탑</option>
        <option value="1">정글</option>
        <option value="2">미드</option>
        <option value="3">원딜</option>
        <option value="4">서폿</option>>
      </select>
      <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="FindAll">전체</button>
      <button type="button" class="btn btn-danger btn-sm" style="margin-left: 5px" @click="FindHot">HOT</button>
      <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="MoveDetail">글쓰기</button>
    </div>

    <board-list
        :boards="boards"
        :cur-page="curPage"
        :total-page="totalPage"
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
const { cookies } = useCookies();

export default {
  name: "BoardView",
  components: {BoardList},
  setup() {
    const page = ref(0);
    const pageNum = ref(10);
    const topic = ref(0)
    const type = ref(5)
    const list = ref([]);
    const boards = ref([]);
    const totalPage = ref(0)
    const curPage = ref(1)
    const subject = ref(0)
    const keyword = ref('')

    return {
      list,
      page,
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
  mounted() {
    this.FindBoard(this.page, this.pageNum, 0, this.subject, this.keyword)
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  methods: {
    FindBoard(page, pageNum, topic, subject, keyword) {
      this.topic = topic
      service
          .BoardFindList(new BoardFindList(page, pageNum, topic, this.type, subject, keyword), null, null)
          .then(res => {
            if (res.data.resultCode == "00000") {
              this.boards = res.data.content.boards
              this.totalPage = res.data.content.totalPage
              this.curPage = page
            } else {
              alert('게시판을 불러오는데 실패했습니다.')
            }
          })
          .catch(err => {
            alert('게시판을 불러오는데 실패했습니다.')
          })

    },
    MoveDetail() {
      if (this.hasLogin) {
        this.$router.push('/board/enroll/user')
      } else {
        this.$router.push('/board/enroll/anonym')
      }
    },
    FindAll() {
      this.keyword = ''
      this.topic = 0
      this.FindBoard(0, this.pageNum, this.topic, this.subject, this.keyword)
    },
    FindHot() {
      this.keyword = ''
      this.topic = 1
      this.FindBoard(0, this.pageNum, this.topic, this.subject, this.keyword)
    },
    lineName(lineType) {
      switch (lineType) {
        case 0 : return '탑'
        case 1 : return '정글'
        case 2 : return '미드'
        case 3 : return '원딜'
        case 4 : return '서폿'
      }
    },
    ChooseBoard(boardId) {
      this.$router.push({
        name: 'BoardDetailView',
        query: {
          boardId: boardId
        }
      })
    },
    ChoosePage(page) {
      this.FindBoard(page, this.pageNum, this.topic, this.subject, this.keyword)
    },
    ChangeSubject(subject) {
      console.log(subject)
      this.subject = subject;
    },
    ChooseKeyword(keyword) {
      this.page = 0;
      this.keyword = keyword;
      this.FindBoard(this.page, this.pageNum, this.topic, this.subject, this.keyword)
    }
  }
}
</script>

<style scoped>
  .lgBoard {
    margin-top: 20px;
    padding-left: 10px;

  }
</style>
