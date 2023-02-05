<template>
  <h1>게시판 페이지</h1>
  <div>
    <h2>라인</h2>
    <select v-model="type" @change="FindBoard(0, pageNum)">
      <option value="5">전체</option>
      <option value="0">탑</option>
      <option value="1">정글</option>
      <option value="2">미드</option>
      <option value="3">원딜</option>
      <option value="4">서폿</option>
    </select>
  </div>

  <table border="1" >
    <th>번호</th>
    <th>제목</th>
    <th>글쓴이</th>
    <th>작성일</th>
    <th>조회수</th>
    <th>추천수</th>

    <template v-for="(item, index) in boards" v-bind:key="index">
      <tr class="tr" @click="detailPage(item.boardId)">
        <td>{{(index + 1) + (curPage * 10)}}</td>
        <td>{{item.title}}</td>
        <td>{{item.writer}} <strong v-if="item.tierName">({{item.tierName}})</strong></td>
        <td>{{item.writeDt}}</td>
        <td>{{item.view}}</td>
        <td>{{item.recommendCnt}}</td>
      </tr>
    </template>
  </table>
  <br>
  <template v-for="(item, index) in totalPage" :key="index">
    <span class="page" @click="FindBoard(index, pageNum)">{{item}}</span> |
  </template>
  <br>
  <hr/>
  <router-link to="/">메인 페이지</router-link> |
  <template v-if="hasLogin">
    <router-link to="/board/enroll/user">회원 게시판 작성하기</router-link>
  </template>
  <template v-else>
    <router-link to="/board/enroll/anonym">비회원 게시판 작성하기</router-link>
  </template>
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
    }
  }
}
</script>

<style scoped>
  .tr {
    cursor: pointer;
  }
  .tr:hover {
    background-color: gray;
  }
  .page {
    cursor: pointer;
    font-weight: bold;
  }
  .page:hover {
    color: gold;
  }
</style>