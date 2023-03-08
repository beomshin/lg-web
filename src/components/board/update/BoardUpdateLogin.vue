<template>
  <div>
    <hr>
    <div class="input-group mb-3" style="margin-top: 5px">
      <input type="password" class="form-control" placeholder="비밀번호" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="password">
      <button class="btn btn btn-outline-secondary" type="button" id="button-addon2" @click="Login">확인</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import service from "@/http/service";
import BoardLoginAnonym from "@/dto/etc/BoardLoginAnonym";
import BoardLoginMember from "@/dto/etc/BoardLoginMember";
import {useRoute, useRouter} from "vue-router/dist/vue-router";

export default {
  name: "BoardUpdateLogin",
  props: ['type'],
  setup() {
    const password = ref('')
    const router = useRouter()
    const route = useRoute()
    const boardId = Number(route.query.boardId)

    return {
      password,
      boardId
    }
  },
  methods: {
    async Login() {
      if (!this.password) {
        alert('비밀번호를 입력해주세요')
        return
      }

      let response = {}
      switch (this.type) {
        case 0 :
          response = await service.BoardLoginAnonym(new BoardLoginAnonym(this.boardId, this.password), null, null);
          break;
        case 1 :
          response = await service.BoardLoginMember(new BoardLoginMember(this.boardId, this.password), null, null);
          break;
      }

      this.password = ''
      if (response.data.resultCode != '00000') {
        alert('비밀번호가 잘못되었습니다.')
        return;
      } else {
        this.$emit('Login')
      }
    },
  }
}
</script>

<style scoped>

</style>
