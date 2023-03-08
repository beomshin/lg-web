<template>
  <div>
    <br>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">받는이 아이디</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="받는이"  v-model="receiver">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="제목" v-model="title">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="content" ></textarea>
      </div>
    </div>
    <button class="btn btn btn-secondary" style="margin-left: 5px" @click="Post">전송하기</button>
  </div>
</template>

<script>
import {ref} from 'vue'
import service from "@/http/service";
import MessagePost from "@/dto/etc/MessagePost";
import {useCookies} from "vue3-cookies";

const { cookies } = useCookies();

export default {
  name: "MessagePost",
  setup() {
    const receiver = ref('')
    const title = ref('')
    const content = ref('')

    return {
      receiver,
      title,
      content
    }
  },
  methods: {
    Post() {
      service
          .MessagePost(new MessagePost(this.receiver, this.title, this.content), {Authorization: 'Bearer ' + cookies.get('lg.m.log')}, null)
          .then(res => {
            this.receiver = ''
            this.title = ''
            this.content = ''
            if (res.data.resultCode == '00000') {
              alert('메세지 발송 성공')
            } else if (res.data.resultCode == '10021') {
              alert('존재하지 않는 아이디입니다.')
            } else if (res.data.resultCode == '10022') {
              alert('자신에게 메일을 보낼 수 없습니다.')
            } else {
              alert('메세지 발송 실패')
            }
          })
          .catch(err => {
            this.receiver = ''
            this.title = ''
            this.content = ''
            alert('메세지 발송 실패')
          })
    }
  }
}
</script>

<style scoped>

</style>
