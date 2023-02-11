<template>
  <div>
    <h2>댓글 ({{this.totalCommentCnt}})개</h2>
    <hr>
    <ul class="list-group">
      <div v-for="(item, index) in comments" :key="index">

        <BoardComment
          :comment="item"
          :index="index"
          @ActiveDiv="ActiveDiv"
        />

        <BoardCommentChildren
            v-if="index == activeIndex && type == 0"
            :board-id="this.boardId"
            :parent-id="parentId(item)"
        />

        <BoardCommentUpdate
            v-if="index == activeIndex && type == 1"
            :content="item.content"
            :boardCommentId="item.boardCommentId"
            @close="close"
          />

        <BoardCommentDelete
            v-if="index == activeIndex && type == 2"
            :board-comment-id="item.boardCommentId"
            @close="close"
          />

      </div>
    </ul>
    <hr>
  </div>
</template>

<script>
import {ref} from "vue";
import { useCookies } from 'vue3-cookies'
import BoardCommentChildren from "@/views/page/test/board/comment/BoardCommentChildren";
import BoardCommentUpdate from "@/views/page/test/board/comment/BoardCommentUpdate";
const { cookies } = useCookies();
import service from "@/service";
import BoardDeleteComment from "@/dto/board/BoardDeleteComment";
import BoardComment from "@/views/page/test/board/comment/BoardComment";
import BoardCommentDelete from "@/views/page/test/board/comment/BoardCommentDelete";

export default {
  name: "BoardComments",
  components: {BoardCommentDelete, BoardComment, BoardCommentChildren, BoardCommentUpdate},
  props: ['boardId','comments', 'totalCommentCnt'],
  setup() {
    const activeIndex = ref(-1)
    const type = ref(0)
    const password = ref('')

    return {
      activeIndex,
      type,
      password
    }
  },
  mounted() {
    this.$emitter.on('close', this.close)
  },
  methods: {
    ActiveDiv(payload) {
      if (payload.index == this.activeIndex && this.type == payload.type) {
        this.activeIndex = -1
      } else {
        this.type = payload.type
        this.activeIndex = payload.index
      }
    },
    parentId(comment) {
      if (comment.depth == 1) {
        return comment.boardCommentId
      } else if (comment.depth == 2) {
        return comment.bundleId
      }
    },
    close() {
      this.activeIndex = -1
    }
  }

}
</script>

<style scoped>

</style>
