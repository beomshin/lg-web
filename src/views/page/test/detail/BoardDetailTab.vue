<template>
  <div style="margin-top: 10px; margin-bottom: 10px">
    <template v-if="hasLogin && recommend == 0 && created == 0">
      <button class="btn btn-success" @click="Recommend">추천하기</button>
    </template>
    <template v-if="writerType == 0">
      <button class="btn btn-primary" style="margin-left: 5px" @click="() => this.type = 1">수정하기</button>
      <button class="btn btn-danger" style="margin-left: 5px" @click="() => this.type = 2">삭제하기</button>
    </template>
    <template v-else-if="created == 1">
      <button class="btn btn-primary" style="margin-left: 5px" @click="() => this.type = 1">수정하기</button>
      <button class="btn btn-danger" style="margin-left: 5px" @click="() => this.type = 2">삭제하기</button>
    </template>
    <template v-if="hasLogin && created == 0">
      <button class="btn btn-warning" style="margin-left: 5px" @click="Report">신고하기</button>
    </template>
    <div class="input-group mb-3" style="margin-top: 5px" v-if="this.type != 0">
      <input type="password" class="form-control" placeholder="비밀번호" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="password">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="VerifyPassword">
        {{type == 1 ? '수정' : '삭제'}}
      </button>
    </div>
  </div>
</template>

<script>
import BoardRecommend from "@/dto/board/BoardRecommend";
import service from "@/service";
import {useCookies} from "vue3-cookies";
import BoardReport from "@/dto/board/BoardReport";
import BoardLoginAnonym from "@/dto/board/BoardLoginAnonym";
import BoardLoginMember from "@/dto/board/BoardLoginMember";
import BoardDelete from "@/dto/board/BoardDelete";
const { cookies } = useCookies();
import {ref} from "vue";
export default {
  name: "BoardDetailTab",
  props: ['hasLogin', 'boardId', 'writerType', 'created','recommend'],
  setup() {
    const password = ref('')
    const type = ref(0)

    return {
      password,
      type
    }
  },
  methods: {
    Recommend() {
      if (!this.hasLogin()) {
        alert('로그인 유저만 가능합니다.')
        return;
      }
      service
          .BoardRecommend(new BoardRecommend(this.boardId), {Authorization: 'Bearer ' + cookies.get('lg.m.log')}, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              this.$emit('SuccessRecommend')
              alert('추천하기 성공했습니다.')
            } else if (res.data.resultCode == '10016') {
              alert('이미 추천하셨습니다.')
            } else {
              alert('추천하기 실패했습니다.')
            }
          })
          .catch(err => {
            alert('추천하기 실패했습니다.')
          })
    },
    Report() {
      service
          .BoardReport(new BoardReport(this.boardId), null, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('신고하기 성공하였습니다.')
            } else if (res.data.resultCode == '10017') {
              alert('이미 신고하셨습니다.')
            } else {
              alert('신고하기 실패하였습니다.')
            }
          })
          .catch(err => {
            alert('신고하기 실패하였습니다.')
          })
    },
    async VerifyPassword () {
      if (!this.password) {
        alert('비밀번호를 입력해주세요')
        return
      }

      const writerType = this.writerType
      let response = {}
      switch (writerType) {
        case 0 : response = await service.BoardLoginAnonym(new BoardLoginAnonym(this.boardId, this.password), null, null); break;
        case 1 : response = await service.BoardLoginMember(new BoardLoginMember(this.boardId, this.password), null, null); break;
      }

      if (response.data.resultCode == '00000') {
        if (this.type == 1) {
          this.$router.push({
            name: 'BoardUpdateView',
            query: {
              boardId: this.boardId
            }
          })
        } else if (this.type == 2) {
          service
              .BoardDelete(new BoardDelete(this.boardId), null, null)
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
    },

  }
}
</script>

<style scoped>

</style>