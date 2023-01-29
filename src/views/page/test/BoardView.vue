<template>
  <h1>게시판 페이지</h1>
  <table border="1">
    <th>번호</th>
    <th>제목</th>
    <th>글쓴이</th>
    <th>작성일</th>
    <th>조회</th>
    <th>추천</th>

    <template v-for="(item, index) in list" v-bind:key="index">
      <tr>
        <td>{{(index + 1) * (page + 1)}}</td>
        <td>{{item.title}}</td>
        <td>{{item.writer}}</td>
        <td>{{item.writeDt}}</td>
        <td>{{item.view}}</td>
        <td>{{item.recommendCnt}}</td>
      </tr>
    </template>
  </table>
  <hr/>
  <router-link to="/login">로그인 페이지</router-link> |
  <router-link to="/board/enroll">게시판 작성하기</router-link> |
  <hr/>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";

export default {
  name: "BoardView",
  setup() {
    const page = ref(0);
    const pageNum = ref(10);
    const topic = ref(0)
    const type = ref(5)
    const list = ref([]);

    const callBoard = () => {
      service.findBoards({
        page: page.value
        , pageNum: pageNum.value
        , topic: topic.value
        , type : type.value
      })
      .then(res => {
        list.value = res.data.data.boards

      })

    }

    return {
      callBoard,
      list,
      page
    }
  },
  mounted() {
    this.callBoard()
  }
}
</script>

<style scoped>

</style>