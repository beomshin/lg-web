<template>
  <h1>게시판 페이지</h1>
  <BoardUserInfo/>
  <div>
    <h2>라인</h2>
    <select v-model="type" @change="callBoard(0, pageNum)">
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

    <template v-for="(item, index) in list" v-bind:key="index">
      <tr style="cursor: pointer" @click="detailPage(item.boardId)">
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
    <span style="cursor: pointer; font-size: 30px" @click="callBoard(index, pageNum)">{{item}}</span> |
  </template>
  <br>
  <hr/>
  <router-link to="/">로그인 페이지</router-link> |
  <router-link to="/board/enroll">게시판 작성하기</router-link> |
  <hr/>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import BoardUserInfo from "@/views/page/test/BoardUserInfo";

export default {
  name: "BoardView",
  components: {BoardUserInfo},
  setup() {
    const page = ref(0);
    const pageNum = ref(10);
    const topic = ref(0)
    const type = ref(5)
    const list = ref([]);
    const totalPage = ref(0)
    const curPage = ref(1)

    const callBoard = (page, pageNum) => {
      service.findBoards({
        page: page
        , pageNum: pageNum
        , topic: topic.value
        , type : type.value
      })
      .then(res => {
        list.value = res.data.data.boards
        totalPage.value = res.data.data.totalPage
        curPage.value = page
      })

    }

    return {
      callBoard,
      list,
      page,
      type,
      totalPage,
      curPage,
      pageNum
    }
  },
  mounted() {
    this.callBoard(this.page, this.pageNum)
  },
  methods: {
    detailPage (boardId) {
      console.log(boardId)
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

</style>