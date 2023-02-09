<template>
  <div>
    <li class="list-group-item">
      <div class="input-group mb-3" style="margin-top: 5px" >
        <input type="password" class="form-control" placeholder="비밀번호"  v-model="password">
        <button class="btn btn-outline-danger" type="button" @click.stop="DeleteComment(boardCommentId)">삭제</button>
      </div>
    </li>
  </div>
</template>

<script>
import {ref} from "vue";
import BoardDeleteComment from "@/dto/board/BoardDeleteComment";
import service from "@/service";

export default {
  name: "BoardCommentDelete",
  props: ['boardCommentId'],
  setup() {
    const password = ref('')

    return {
      password
    }
  },
  methods: {
    DeleteComment(boardCommentId) {
      let request = new BoardDeleteComment(boardCommentId, this.password)
      service
          .BoardDeleteComment(request, null, null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.password = ''
              this.$emit('close')
              this.$emitter.emit('ReFindComment')
              alert('댓글 삭제 성공')
            } else {
              this.password = ''
              alert('댓글 삭제 실패')
            }
          })
          .catch(err => {
            this.password = ''
            alert('댓글 삭제 실패')
          })
    },
  }

}
</script>

<style scoped>

</style>