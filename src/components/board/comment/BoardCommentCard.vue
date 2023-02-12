<template>
  <div>
    <button type="button"
            class="list-group-item list-group-item-action"
            :class="{'color' : comment.depth == 1 }"
            @click.stop="AddComment(comment.depth)"
    >

      <div>
        <template v-if="comment.depth == 2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
          </svg>
          &nbsp;
        </template>
        <strong>{{comment.writer}}</strong>

        <div v-if="view(comment.anonym, comment.created)" style="float: right">
            <button
                class="btn btn-outline-secondary btn-sm"
                type="button" id="button-addon2"
                @click.stop="UpdateComment(index)"
            >수정</button>
            <button
                class="btn btn-outline-secondary btn-sm"
                type="button" id="button-addon2"
                style="margin-left: 5px"
                @click.stop="DeleteComment(index)"
            >삭제</button>
        </div>

      </div>

      <div style="margin-top: 10px">
        <span>{{comment.content}}</span>

        <div style="float: right">
          <strong>{{comment.regDt}}</strong>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "BoardCommentCard",
  props: ['comment', 'index', 'comments'],
  setup() {
    const view = (anonym, created) => {
      if (anonym == 1 || (anonym == 0 && created == 1)) return true;
      else return false;
    }

    return {
      view
    }
  },
  methods: {
    AddComment(depth) {
      if (depth == 1) {
        this.$emit('AddComment', {index: this.index, type: 0})
      } else {
        let parentId = this.comment.bundleId
        this.comments.find((e, i) => {
            if (e.boardCommentId == parentId) {
              this.$emit('AddComment', {index: i, type: 0})
            }
        })
      }
    },
    UpdateComment(index) {
      this.$emit('UpdateComment', {index: index, type: 1})
    },
    DeleteComment(index) {
      this.$emit('DeleteComment', {index: index, type: 2})
    }
  }
}
</script>

<style scoped>
.color {
  background-color: #F5F5DC;
}
</style>