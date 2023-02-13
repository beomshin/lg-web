<template>
  <div>
    <alarm-nav
      @FindReceiveAlarm="FindReceiveAlarm"
      @FindSendAlarm="FindSendAlarm"
    />
  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
import AlarmNav from "@/components/mypage/alaram/AlarmNav";
import service from "@/service";

const { cookies } = useCookies();

export default {
  name: "MyAlarmPage",
  components: {AlarmNav},
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  },
  mounted() {
    if(!this.hasLogin) {
      window.location.replace('/')
    }
  },
  methods: {
    FindReceiveAlarm() {
      console.log('FindReceiveAlarm')
      service
          .MemberReceiveAlarmList(null, {Authorization: 'Bearer ' + cookies.get('lg.m.log')}, null)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
    },
    FindSendAlarm() {
      console.log('FindSendAlarm')
      service
          .MemberSenderAlarmList(null, {Authorization: 'Bearer ' + cookies.get('lg.m.log')}, null)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>

</style>
