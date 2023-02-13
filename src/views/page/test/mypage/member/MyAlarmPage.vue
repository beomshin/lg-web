<template>
  <div style="width: 100%">
    <alarm-nav
      @FindReceiveAlarm="FindReceiveAlarm"
      @FindSendAlarm="FindSendAlarm"
    />
    <alarm-list
      :alarms="alarms"
      :cur-page="curPage"
      :page-num="pageNum"
      :total-page="totalPage"
      :subject="subject"
      @ChoosePage="ChoosePage"
      @ChooseKeyword="ChooseKeyword"
      @ChangeSubject="ChangeSubject"
      />

  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
import AlarmNav from "@/components/mypage/alaram/AlarmNav";
import service from "@/service";
import { ref } from 'vue'
import MemberReceiveAlarmList from "@/dto/member/MemberReceiveAlarmList";
import MemberSenderAlarmList from "@/dto/member/MemberSenderAlarmList";
import AlarmList from "@/layout/alarm/AlarmList";

const { cookies } = useCookies();

export default {
  name: "MyAlarmPage",
  components: { AlarmList, AlarmNav},
  setup() {
    const curPage = ref(0)
    const pageNum = ref(10)
    const subject = ref(0)
    const keyword = ref('')
    const alarms = ref([])
    const totalElements = ref(0)
    const totalPage = ref(0)
    const type = ref(0)

    return {
      curPage,
      pageNum,
      subject,
      keyword,
      alarms,
      totalElements,
      totalPage,
      type
    }
  },
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

    this.MemberReceiveAlarmList()
  },
  methods: {
    FindReceiveAlarm() {
      this.curPage = 0
      this.subject = 0
      this.keyword = ''
      this.type = 0;
      this.MemberReceiveAlarmList()
    },
    FindSendAlarm() {
      this.curPage = 0
      this.subject = 0
      this.keyword = ''
      this.type = 1;
      this.MemberSenderAlarmList()
    },
    MemberReceiveAlarmList() {
      service
          .MemberReceiveAlarmList(new MemberReceiveAlarmList(this.curPage, this.pageNum, this.subject, this.keyword),
              {Authorization: 'Bearer ' + cookies.get('lg.m.log')},
              null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.alarms = res.data.content.receiveAlarmList
              this.totalElements = res.data.content.totalElements
              this.totalPage = res.data.content.totalPage
              this.curPage = res.data.content.curPage
            } else {
              alert('수신 알림함 조회 실패')
            }
          })
          .catch(err => {
            alert('수신 알림함 조회 실패')
          })
    },
    MemberSenderAlarmList() {
      service
          .MemberSenderAlarmList(new MemberSenderAlarmList(this.curPage, this.pageNum, this.subject, this.keyword),
              {Authorization: 'Bearer ' + cookies.get('lg.m.log')},
              null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.alarms = res.data.content.sendAlarmList
              this.totalElements = res.data.content.totalElements
              this.totalPage = res.data.content.totalPage
              this.curPage = res.data.content.curPage
            } else {
              alert('발신 알림함 조회 실패')
            }
          })
          .catch(err => {
            alert('발신 알림함 조회 실패')
          })
    },
    ChoosePage(page) {
      this.curPage = page;
      if (this.type == 0) {
        this.MemberReceiveAlarmList()
      } else if (this.type == 1 ){
        this.MemberSenderAlarmList()
      }
    },
    ChangeSubject(subject) {
      this.subject = subject;
    },
    ChooseKeyword(keyword) {
      this.curPage = 0;
      this.keyword = keyword
      if (this.type == 0) {
        this.MemberReceiveAlarmList()
      } else if (this.type == 1 ){
        this.MemberSenderAlarmList()
      }
    }

  }
}
</script>

<style scoped>

</style>
