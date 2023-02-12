<template>
  <div>
    <h2>댓글 달기</h2>
    <hr>
    <board-comment-form
        :board-id="board.boardId"
        :parent-id="board.rootId"
        :depth="1"
    />
    <hr>

    <h2>댓글 ({{this.totalCommentCnt}})개</h2>
    <hr>
    <ul class="list-group">
      <template v-for="(item, index) in comments" :key="index">
        <board-comment-card
            :comment="item"
            :comments="comments"
            :index="index"
            @AddComment="AddComment"
            @UpdateComment="UpdateComment"
            @DeleteComment="DeleteComment"
        />

        <board-comment-children
          v-if="index == active && type == 0"
          :board-id="board.boardId"
          :parent-id="parentId(item)"
          />

        <board-comment-update
          v-if="index == active && type == 1"
          :content="item.content"
          :board-comment-id="item.boardCommentId"
          @Close="Close"
          />

        <board-comment-delete
          v-if="index == active && type == 2"
          :board-comment-id="item.boardCommentId"
          @Close="Close"
          />

      </template>
    </ul>

  </div>
</template>

<script>
import {ref} from 'vue'
import BoardCommentForm from "@/components/board/comment/BoardCommentForm";
import BoardCommentCard from "@/components/board/comment/BoardCommentCard";
import BoardCommentChildren from "@/components/board/comment/BoardCommentChildren";
import BoardCommentUpdate from "@/components/board/comment/BoardCommentUpdate";
import BoardCommentDelete from "@/components/board/comment/BoardCommentDelete";
export default {
  name: "BoardComment",
  components: {BoardCommentDelete, BoardCommentUpdate, BoardCommentChildren, BoardCommentCard, BoardCommentForm},
  props: ['board', 'comments', 'totalCommentCnt'],
  setup() {
    const type = ref(0)
    const active = ref(-1)

    return {
      type,
      active
    }
  },
  mounted() {
    this.$emitter.on('Close', this.Close)
  },
  methods: {
    AddComment(payload) {
      this.Active(payload.index, payload.type)
    },
    UpdateComment(payload) {
      this.Active(payload.index, payload.type)
    },
    DeleteComment(payload) {
      this.Active(payload.index, payload.type)
    },
    Active(active, type) {
      if (active == this.active && type == this.type) {
        this.active = -1;
        return
      }
      this.type = type
      this.active = active
    },
    parentId(comment) {
      if (comment.depth == 1) {
        return comment.boardCommentId
      } else if (comment.depth == 2) {
        return comment.bundleId
      }
    },
    Close() {
      this.active = -1
    }
  }
}
</script>

<style scoped>

</style>