<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link" :class="{'active' : type == 0}" @click="FindReceiveAlarm">수신알림함</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" :class="{'active' : type == 1}" @click="FindSendAlarm">발신알림함</a>
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
    }
  }
}
</script>

<style scoped>

</style>