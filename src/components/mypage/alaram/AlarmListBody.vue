<template>
  <tbody>
    <template v-for="(item, index) in messages"
              v-bind:key="index">
      <tr class="tr"  style="cursor: pointer"
          @click="ChooseLine(item.messageId, index)"
      >
        <td>{{(index + 1) + (curPage * pageNum)}}</td>
        <td>{{item.title}}</td>
        <td>{{item.receiver}}</td>
        <td>{{item.sender}}</td>
        <td>{{item.readFlag == 1 ? '읽음' : '미읽음'}}</td>
        <td>{{item.regDt}}</td>
      </tr>
      <tr v-if="active == index">
        <td colspan="6">
          <alarm-card
            :message="message"
          />
        </td>
      </tr>
    </template>
  </tbody>
</template>

<script>
import {ref} from 'vue'
import AlarmCard from "@/components/mypage/alaram/AlarmCard";
import service from "@/service";
import MessageRead from "@/dto/message/MessageRead";
import {useCookies} from "vue3-cookies";

const { cookies } = useCookies();

export default {
  name: "AlarmListBody",
  components: {AlarmCard},
  props: ['messages', 'curPage', 'pageNum', 'type'],
  setup() {
    const active = ref(-1)
    const message = ref('')

    return {
      active,
      message
    }
  },
  watch: {
    type() {
      this.active = -1
    }
  },
  methods: {
    ChooseLine(messageId, index) {
      if (this.active == index) {
        this.active = -1
        return
      }

      service
          .MessageRead(new MessageRead(messageId, this.type), {Authorization: 'Bearer ' + cookies.get('lg.m.log')}, null)
          .then(res => {
              if (res.data.resultCode == '00000') {
                this.active= index
                this.message = res.data.content.message
                if (this.type == 0) {
                  this.$emit('Read', index)
                }
              } else {
                alert('내용 호출 실패')
              }
          })
          .catch(err => {
            alert('내용 호출 실패')
          })
    }
  }
}
</script>

<style scoped>

</style>
