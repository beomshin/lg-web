<template>
  <div>
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
</template>

<script>
import {ref} from "vue";
import {useCookies} from "vue3-cookies";
import service from "@/service";
import BoardEnrollCommentMember from "@/dto/board/BoardEnrollCommentMember";
import BoardEnrollCommentAnonym from "@/dto/board/BoardEnrollCommentAnonym";
const { cookies } = useCookies();

export default {
  name: "BoardEnrollForm",
  props: ['boardId', 'parentId', 'depth'],
  setup () {
    const id = ref('')
    const password = ref('')
    const content = ref('')

    const validate1 = () => {
      if (!content.value) {
        alert('내용을 입력해주세요')
        return false
      }
      return true
    }

    const validate2 = () => {
      if (!content.value) {
        alert('내용을 입력해주세요')
        return false
      } else if (!id.value) {
        alert('아이디를 입력해주세요')
        return false
      } else if (!password.value) {
        alert('패스워드를 입력해주세요')
        return false
      }
      return true
    }

    return {
      id,
      password,
      content,
      validate1,
      validate2
    }
  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
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
      if(!this.validate1()) return
      const request = new BoardEnrollCommentMember(this.boardId, this.parentId, this.content, this.depth)
      const headers = { "Authorization": 'Bearer ' + cookies.get('lg.m.log') }
      service
          .BoardEnrollCommentMember(request, headers,null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('댓글 등록 성공')
              this.content = ''
              this.$emitter.emit('close')
              this.$emitter.emit('ReFindComment')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    },
    EnrollAnonymComment() {
      if(!this.validate2()) return
      const request = new BoardEnrollCommentAnonym(this.boardId, this.parentId, this.id, this.password, this.content, this.depth)
      service
          .BoardEnrollCommentAnonym(request, null, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              this.content = ''
              this.$emitter.emit('ReFindComment')
              alert('댓글 등록 성공')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    },
  }
}
</script>

<style scoped>

</style>
