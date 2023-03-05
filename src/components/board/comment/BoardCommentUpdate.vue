<template>
  <li class="list-group-item" >
    <h3>댓글 수정하기</h3>
    <hr>
    <div>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">비밀번호</label>
        <div class="col-sm-10">
          <input class="form-control" type="password" placeholder="비밀번호" v-model="password">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
        <div class="col-sm-10">
          <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="text"/>
        </div>
      </div>
      <button class="btn btn-secondary" @click.stop="UpdateComment">수정하기</button>
    </div>
  </li>
</template>

<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies();
import {ref} from "vue";
import service from "@/service";
import BoardUpdateComment from "@/dto/etc/BoardUpdateComment";

export default {
  name: "BoardCommentUpdate",
  props: ['content','boardCommentId'],
  setup() {
    const text = ref('')
    const password = ref('')
    const validate = () => {
      if (!text.value) {
        alert('내용을 입력하세요')
        return false
      } else {
        return true
      }
    }

    return {
      text,
      password,
      validate
    }
  },
  mounted() {
    this.text = this.content
  },
  methods: {
    UpdateComment() {
      if (!this.validate()) return
      let request = new BoardUpdateComment(this.boardCommentId, this.password, this.text)
        service
            .BoardUpdateComment(request, null, null)
            .then(res => {
              if (res.data.resultCode == '00000') {
                this.password = ''
                this.$emit('Close')
                this.$emitter.emit('ReFindComment')
                alert('댓글 수정 성공')
              } else {
                this.password = ''
                alert('댓글 수정 실패')
              }
            })
            .catch(err => {
              this.password = ''
              alert('댓글 수정 실패')
            })

    }
  }

}
</script>

<style scoped>

</style>