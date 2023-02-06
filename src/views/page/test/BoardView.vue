<template>
  <div class="lgBoard">
    <hr>
    <h1>게시판 페이지</h1>

    <div style="margin-top: 5px; margin-bottom: 5px">
      <select class="form-select" aria-label="Default select example" v-model="type" @change="FindBoard(0, pageNum)">
        <option value="5">전체</option>
        <option value="0">탑</option>
        <option value="1">정글</option>
        <option value="2">미드</option>
        <option value="3">원딜</option>
        <option value="4">서폿</option>>
      </select>
      <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="MoveDetail">글쓰기</button>
    </div>

    <div style="width: 1200px">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">글쓴이</th>
          <th scope="col">작성일</th>
          <th scope="col">조회수</th>
          <th scope="col">추천수</th>
        </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in boards" v-bind:key="index">
            <tr class="tr" @click="detailPage(item.boardId)" style="cursor: pointer">
              <td>{{(index + 1) + (curPage * 10)}}</td>
              <td>{{item.title}}</td>
              <td>{{item.writer}} <strong v-if="item.tierName">({{item.tierName}})</strong></td>
              <td>{{item.writeDt}}</td>
              <td>{{item.view}}</td>
              <td>{{item.recommendCnt}}</td>
            </tr>
          </template>
        </tbody>

        <nav aria-label="Page navigation example" style="cursor: pointer; margin-top: 5px">
          <ul class="pagination">
            <template v-for="(item, index) in totalPage" :key="index">
              <li class="page-item" :class="{'active' : index == curPage}"><a class="page-link" @click="FindBoard(index, pageNum)">{{item}}</a></li>
            </template>
          </ul>
        </nav>
      </table>
    </div>
  </div>
  <hr/>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import FindBoards from "@/dto/board/FindBoards";
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies();

export default {
  name: "BoardView",
  setup() {
    const page = ref(0);
    const pageNum = ref(10);
    const topic = ref(0)
    const type = ref(5)
    const list = ref([]);
    const boards = ref([]);
    const totalPage = ref(0)
    const curPage = ref(1)

    return {
      list,
      page,
      topic,
      type,
      totalPage,
      curPage,
      pageNum,
      boards
    }
  },
  mounted() {
    this.FindBoard(this.page, this.pageNum)
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  methods: {
    FindBoard(page, pageNum) {
      if (page == this.curPage) return
      service
          .findBoards(new FindBoards(page, pageNum, this.topic, this.type))
          .then(res => {
            if (res.data.resultCode == "00000") {
              this.boards = res.data.data.boards
              this.totalPage = res.data.data.totalPage
              this.curPage = page
            } else {
              alert('게시판을 불러오는데 실패했습니다.')
            }
          })
          .catch(err => {
            alert('게시판을 불러오는데 실패했습니다.')
          })

    },
    detailPage (boardId) {
      this.$router.push({
        name: 'BoardDetailView',
        query: {
          boardId: boardId
        }
      })
    },
    MoveDetail() {
      if (this.hasLogin) {
        this.$router.push('/board/enroll/user')
      } else {
        this.$router.push('/board/enroll/anonym')
      }
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
