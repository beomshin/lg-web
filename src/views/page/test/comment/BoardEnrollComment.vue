<template>
  <div>
    <div>
      <hr>
      <h2>댓글 달기</h2>
      <hr>
      <BoardEnrollForm
          :board-id="this.boardId"
          :parent-id="this.parentId"
          :depth="1"
        />
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import { useCookies } from 'vue3-cookies'
import EnrollBoardMemberComment from "@/dto/member/EnrollBoardMemberComment";
import EnrollBoardAnonymComment from "@/dto/member/EnrollBoardAnonymComment";
import BoardEnrollForm from "@/views/page/test/comment/BoardEnrollForm";
const { cookies } = useCookies();

export default {
  name: "BoardComment",
  components: {BoardEnrollForm},
  props: ['boardId','parentId'],
}
</script>

<style scoped>

</style>
