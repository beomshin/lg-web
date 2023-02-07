<template>
  <div>
    <hr>
    <h2>댓글 달기</h2>
    <hr>
    <div v-if="!hasLogin">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">아이디</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="id" maxlength="16" placeholder="아이디">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">비밀번호</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="password" maxlength="32" placeholder="비밀번호">
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="content" ></textarea>
      </div>
    </div>
    <button class="btn btn-secondary" @click="Enroll">댓글달기</button>
  </div>
  <hr>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import { useCookies } from 'vue3-cookies'
import EnrollBoardMemberComment from "@/dto/member/EnrollBoardMemberComment";
import EnrollBoardAnonymComment from "@/dto/member/EnrollBoardAnonymComment";
const { cookies } = useCookies();

export default {
  name: "BoardComment",
  props: ['boardId', 'hasLogin'],
  setup () {
    const id = ref('')
    const password = ref('')
    const content = ref('')

    return {
      id,
      password,
      content
    }
  },
  methods: {
    Enroll() {
      if (this.hasLogin) {
        this.EnrollMemberComment();
      } else {
        this.EnrollAnonymComment();
      }
    },
    EnrollMemberComment() {
      const request = new EnrollBoardMemberComment(this.boardId, null, this.content, 1)
      let token = 'Bearer ' + cookies.get('lg.m.log');
      service
          .enrollMemberComment(request, {
            "Authorization": token
          })
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('댓글 등록 성공')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    },
    EnrollAnonymComment() {
      const request = new EnrollBoardAnonymComment(this.boardId, null, this.id, this.password, this.content, 1)
      service
          .enrollAnonymComment(request, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('댓글 등록 성공')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    }
  }
}
</script>

<style scoped>

</style>
