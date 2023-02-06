<template>
  <div class="boardDetail">
    <hr>
    <h1>게시판 상세 페이지</h1>
    <hr/>
    <div style="margin-top: 10px; margin-bottom: 10px">
      <button class="btn btn-primary" @click="() => this.type = 1">수정하기</button>
      <button class="btn btn-danger" style="margin-left: 5px" @click="() => this.type = 2">삭제하기</button>
      <button class="btn btn-secondary" @click="() => this.type = 0" style="margin-left: 5px">닫기</button>
      <div class="input-group mb-3" style="margin-top: 5px" v-if="!type == 0">
        <input type="password" class="form-control" placeholder="비밀번호" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="password">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="VerifyPassword">
          {{type == 1 ? '수정' : '삭제'}}
        </button>
      </div>
    </div>
    <hr>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.title">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">작성일</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writeDt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">글쓴이</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writer">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">조회수</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.view">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">추천수</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.recommendCnt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">댓글수</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.commentCnt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">티어</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board?.tierName || '미정'">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">타입</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.postName + '타입'">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" disabled :value="board.content" ></textarea>
      </div>
    </div>
    <template v-if="board.files">
      <div v-for="(item, index) in board.files" :key="index">
        <img :src="item.path" class="img-thumbnail">
      </div>
    </template><br>
    <button class="btn btn-secondary" @click="Back">뒤로가기</button>
  </div>
  <hr>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import LoginBoard from "@/dto/member/LoginBoard";
import DeleteBoard from "@/dto/member/DeleteBoard";

export default {
  name: "BoardDetailView",
  setup() {
    const board = ref({})
    const type = ref(0)
    const password = ref('')

    return {
      board,
      type,
      password
    }
  },
  mounted() {
    this.BoardDetail(this.$route.query.boardId)
  },
  methods: {
    BoardDetail (boardId) {
      service
          .findBoard(`/be/board/find/board`, boardId, null)
          .then(res => {
            this.board = res.data.data
          })
    },
    Back() {
      window.history.back()
    },
    async VerifyPassword () {
      if (!this.password) {
        alert('비밀번호를 입력해주세요')
        return
      }

      const writerType = this.board.writerType
      let request = new LoginBoard(this.board.boardId, this.password)
      let response = {}
      switch (writerType) {
        case 0 : response = await service.loginAnonymBoard(request, null); break;
        case 1 : response = await service.loginMemberBoard(request, null); break;
        case 2 : response = await service.loginLawFirmBoard(request, null); break;
      }

      if (response.data.resultCode == '00000') {
        if (this.type == 1) {
          this.$router.push({
            name: 'BoardUpdateView',
            query: {
              boardId: this.board.boardId
            }
          })
        } else if (this.type == 2) {
          service
              .deleteBoard(new DeleteBoard(this.board.boardId), null)
              .then(res => {
                if (res.data.resultCode == '00000') {
                  alert('게시판 삭제 성공')
                  window.location.replace('/board')
                } else {
                  alert('게시판 삭제 실패')
                }
              })
              .catch(err => {
                alert('게시판 삭제 실패')
              })
        }

      } else {
        alert('비밀번호가 잘못되었습니다.')
      }

      this.password = ''
    }
  }
}
</script>

<style scoped>
.boardDetail {
  margin-top: 20px;
  padding-left: 10px;
  width: 600px;
}
</style>
