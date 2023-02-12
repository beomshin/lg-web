<template>
  <li class="list-group-item" >
    <h4>대댓글 달기</h4>
    <hr>
    <BoardCommentForm
        :board-id="this.boardId"
        :parent-id="this.parentId"
        :depth="2"
    />
  </li>
</template>

<script>
import { useCookies } from 'vue3-cookies'
import BoardCommentForm from "@/components/board/comment/BoardCommentForm";
const { cookies } = useCookies();

export default {
  name: "BoardCommentChildren",
  components: {BoardCommentForm},
  props: ['boardId','parentId'],
}
</script>

<style scoped>

</style>