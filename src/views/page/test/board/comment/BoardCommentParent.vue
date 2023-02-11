<template>
  <div>
    <div>
      <h2>댓글 달기</h2>
      <BoardCommentForm
          :board-id="this.boardId"
          :parent-id="this.parentId"
          :depth="1"
        />
    </div>
  </div>
</template>

<script>
import { useCookies } from 'vue3-cookies'
import BoardCommentForm from "@/views/page/test/board/comment/BoardCommentForm";
const { cookies } = useCookies();

export default {
  name: "BoardComment",
  components: {BoardCommentForm},
  props: ['boardId','parentId'],
}
</script>

<style scoped>

</style>
