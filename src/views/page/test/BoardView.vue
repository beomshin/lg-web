<template>
  <div class="lgBoard">
    <hr>
    <h1>게시판 페이지</h1>

    <div style="margin-top: 5px; margin-bottom: 5px">
      <select class="form-select" aria-label="Default select example" v-model="type" @change="FindBoard(0, pageNum, 0, this.subject, this.keyword)">
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

    <div style="width: 1200px">
      <table class="table table-hover">
        <thead>
        <tr>
          <th scope="col" style="width: 10%">번호</th>
          <th scope="col" style="width: 30%">제목</th>
          <th scope="col" style="width: 20%">글쓴이</th>
          <th scope="col" style="width: 15%">작성일</th>
          <th scope="col" style="width: 15%">조회수</th>
          <th scope="col" style="width: 10%">추천수</th>
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
      </table>
      <nav aria-label="Page navigation example" style="cursor: pointer; margin-top: 5px">
        <ul class="pagination">
          <template v-for="(item, index) in totalPage" :key="index">
            <li class="page-item" :class="{'active' : index == curPage}"><a class="page-link" @click="FindBoard(index, pageNum, 0, this.subject, this.keyword)">{{item}}</a></li>
          </template>
        </ul>
      </nav>

      <div style="display: flex">
        <div>
          <select class="form-select" aria-label="Default select example" v-model="subject">
            <option value="0">전체</option>
            <option value="1">제목</option>
            <option value="2">내용</option>
            <option value="3">글쓴이</option>
          </select>
        </div>
        <div style="margin-left: 5px">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">키워드</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="keyword" @keyup.enter="FindBoard(0, pageNum, 0, this.subject, this.keyword)">
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 5px" @click="FindBoard(0, pageNum, 0, this.subject, this.keyword)" >검색</button>
        </div>
      </div>
    </div>
  </div>
  <hr/>
</template>

<script>
import {ref} from "vue";
import service from "@/service";
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
      service
          .BoardFindList(new FindBoards(page, pageNum, topic, this.type, subject, keyword), null, null)
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
    },
    FindAll() {
      this.keyword = ''
      this.subject = 0
      this.FindBoard(0, this.pageNum, 0, this.subject, this.keyword)
    },
    FindHot() {
      this.keyword = ''
      this.subject = 0
      this.FindBoard(0, this.pageNum, 1, this.subject, this.keyword)
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
