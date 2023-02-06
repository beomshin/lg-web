<template>
  <h1>게시판 상세 페이지</h1>
  <router-link to="/board">게시판 페이지</router-link>
  <hr>
  <h2>제목: {{board.title}}</h2>
  <hr>
  <v-btn
      color="secondary"
      elevation="2"
      x-small
  >테스트</v-btn>
  <button>게시판삭제</button> | <button>게시판 수정</button>
  <hr>
  <h3>글쓴이 : {{board.writer}} | 날짜 : {{board.writeDt}}</h3>
  <h3>조회 : {{board.view}} | 추천 : {{board.recommendCnt}} | 댓글 : {{board.commentCnt}}</h3>
  <h3>티어 : {{board?.tierName }} | 게시판 타입 : {{board.postName}}타입</h3>
  <br>
  <div>
    <h2>내용</h2>
    내용
    <p>
      {{board.content}}
    </p>
  </div>
  <br><br>
  <template v-if="board.files">
    <div v-for="(item, index) in board.files" :key="index">
      <img :src="item.path"><br>
      <span>파일명 : {{item.oriName}}</span>
    </div>
  </template>
  <br>
  <hr>
  <router-link to="/board">게시판 페이지</router-link> |
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";

export default {
  name: "BoardDetailView",
  setup() {
    const board = ref({})

    return {
      board
    }
  },
  mounted() {
    this.BoardDetail(this.$route.query.boardId)
  },
  methods: {
    BoardDetail (boardId) {
      service
          .findBoard(`/be/board/find/board`, boardId, null)
          .then(res => {
            this.board = res.data.data
          })

    }
  }
}
</script>

<style scoped>

</style>
