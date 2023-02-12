<template>
  <div style="margin-top: 10px; margin-bottom: 10px">
    <template v-if="ViewBtn1(writerType, created)">
      <button class="btn btn btn-outline-secondary" style="margin-left: 5px" @click="UpdateBoard">수정하기</button>
      <button class="btn btn btn-outline-secondary" style="margin-left: 5px" @click="() => this.active = 1">삭제하기</button>
    </template>
    <button class="btn btn btn-outline-secondary" style="margin-left: 5px" v-if="ViewBtn2(recommend, created)" @click="Recommend">추천하기</button>
    <button class="btn btn btn-outline-secondary" v-if="ViewBtn3(created)" style="margin-left: 5px" @click="Report">신고하기</button>
    <div v-if="this.active == 1" class="input-group mb-3" style="margin-top: 5px">
      <input type="password" class="form-control" placeholder="비밀번호" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="password">
      <button class="btn btn btn-outline-secondary" type="button" id="button-addon2" @click="DeleteBoard">
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
  props: ['boardId', 'writerType', 'created','recommend'],
  setup() {
    const AnonymBoard = 0
    const nonCreatedUser = 0
    const createdUser = 1
    const useRecommend = 0;
    const password = ref('')
    const active = ref(0)

    const hasLogin = () => {
      if (cookies.isKey('lg.m.log')) return true
      else return false
    }

    const ViewBtn1 = (writerType, created) => {
        if (writerType == AnonymBoard || created == createdUser) return true;
        else return false;
    }

    const ViewBtn2 = (recommend, created) => {
        if (hasLogin() && recommend == useRecommend && created == nonCreatedUser) return true;
        else return false;
    }

    const ViewBtn3 = (created) => {
      if (hasLogin() && created == nonCreatedUser) return true
      else return false;
    }

    return {
      password,
      active,
      ViewBtn1,
      ViewBtn2,
      ViewBtn3,
    }
  },
  methods: {
    Recommend() {
      this.$emit('Recommend')
    },
    Report() {
      this.$emit('Report')
    },
    UpdateBoard() {
      this.$emit('UpdateBoard')
    },
    async DeleteBoard() {
      const writerType = this.writerType
      let response = {}
      switch (writerType) {
        case 0 : response = await service.BoardLoginAnonym(new BoardLoginAnonym(this.boardId, this.password), null, null); break;
        case 1 : response = await service.BoardLoginMember(new BoardLoginMember(this.boardId, this.password), null, null); break;
      }

      this.password = ''
      if (response.data.resultCode != '00000') {
        alert('비밀번호가 잘못되었습니다.')
        return;
      } else {
        this.$emit('DeleteBoard')
      }
    },
  }
}
</script>

<style scoped>

</style>