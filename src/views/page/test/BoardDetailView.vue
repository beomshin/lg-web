<template>
  <h1>게시판 상세 페이지</h1>
  <h2>{{board.title}}</h2>
  <h3>글쓴이 : {{board.writer}} | 날짜 : {{board.writeDt}}</h3>
  <span>조회 : {{board.view}} | 추천 : {{board.recommendCnt}} | 댓글 : {{board.commentCnt}}</span><br><br>
  <span>티어 : {{board?.tierName }} | 게시판 타입 : {{board.postName}}타입</span>

  <br><br>
  <template v-if="board.files">
    <div v-for="(item, index) in board.files" :key="index">
      <img :src="item.path"><br>
      <span>파일명 : {{item.oriName}} | 파일 사이즈 : {{item.size}}</span>
    </div>
  </template>

  <br>
  <div>
    내용
    <p>
      {{board.content}}
    </p>
  </div>
  <hr>
  <router-link to="/board">게시판 페이지</router-link> |
  <router-link to="/board/enroll">게시판 작성하기</router-link> |
</template>

<script>
import BoardUserInfo from "@/views/page/test/Header";
import {ref} from "vue";
import service from "@/service/config";
export default {
  name: "BoardDetailView",
  setup() {
    const boardId = ref(0)
    const board = ref({})

    const detail = (boardId) => {
      service.findBoard(
          `/be/board/find/board/${boardId}`, {}
      ).then(res => {
        console.log(res)
        board.value = res.data.data
      })
    }

    return {
      boardId,
      detail,
      board
    }
  },
  mounted() {
    this.detail(this.$route.query.boardId)
  }
}
</script>

<style scoped>

</style>
