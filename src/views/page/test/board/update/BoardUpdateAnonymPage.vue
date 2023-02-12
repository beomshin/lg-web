<template>
  <div class="boardDetail">
    <hr>
    <h1>비회원 게시판 수정 페이지</h1>
    <template v-if="auth == 1">
      <board-update-body
        :board="board"
        />
    </template>
    <template v-else>
      <board-update-login
        :type="0"
        @Login="Login"
        />
    </template>
    <hr>
  </div>
  <hr>
</template>

<script>
import {ref} from "vue";
import service from "@/service";
import {useCookies} from "vue3-cookies";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import BoardUpdateLogin from "@/components/board/update/BoardUpdateLogin";
import BoardUpdateBody from "@/components/board/update/BoardUpdateBody";
const { cookies } = useCookies();

export default {
  name: "BoardUpdateAnonymPage",
  components: {BoardUpdateBody, BoardUpdateLogin},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const board = ref({})
    const auth = ref(0)
    const boardId = String(route.query.boardId)

    return {
      board,
      router,
      route,
      auth,
      boardId
    }
  },
  methods: {
    Login() {
      service
          .BoardFindBoardAnonym(null, null, this.boardId)
          .then(res => {
            this.board = res.data.content.board
            this.auth = 1
          })
    }
  }
}
</script>

<style scoped>
.boardDetail {
  margin-top: 20px;
  padding-left: 10px;
  width: 600px;
}
</style>
