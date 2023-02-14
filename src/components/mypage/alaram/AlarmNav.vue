<template>
  <ul class="nav nav-tabs" style="cursor: pointer">
    <li class="nav-item">
      <a class="nav-link" :class="{'active' : type == 0}" @click="FindReceiveAlarm">수신메세지</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{'active' : type == 1}" @click="FindSendAlarm">발신메세지</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{'active' : type == 2}" @click="PostMessage">메세지전송</a>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "AlarmNav",
  setup() {
    const type = ref(0)

    return {
      type
    }
  },
  methods: {
    FindReceiveAlarm () {
      this.type = 0
      this.$emit('FindReceiveAlarm')
    },
    FindSendAlarm () {
      this.type = 1
      this.$emit('FindSendAlarm')
    },
    PostMessage() {
      this.type = 2
      this.$emit('PostMessage')
    }
  }
}
</script>

<style scoped>

</style>
