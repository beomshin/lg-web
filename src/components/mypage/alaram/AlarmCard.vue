<template>
  <div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" disabled :value="message.content" ></textarea>
      </div>
    </div>
    <div>
      <button
          class="btn btn-outline-secondary btn-sm"
          type="button" id="button-addon2"
          style="margin-left: 5px"
          @click="DeleteMessage"
      >삭제</button>
    </div>
  </div>
</template>

<script>
import service from "@/http/service";
import {useCookies} from "vue3-cookies";
import MessageDelete from "@/dto/etc/MessageDelete";
const { cookies } = useCookies();

export default {
  name: "AlarmCard",
  props: ['message'],
  methods: {
    DeleteMessage() {
      service
          .MessageDelete(new MessageDelete(this.message.messageId),
              {Authorization: 'Bearer ' + cookies.get('lg.m.log')}
          , null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              alert('메세지 삭제 성공')
            } else {
              alert('메세지 삭제 실패')
            }
          })
          .catch(err => {
            alert('메세지 삭제 실패')
          })

    }
  }
}
</script>

<style scoped>

</style>
