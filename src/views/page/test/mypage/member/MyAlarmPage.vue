<template>
  <div style="width: 100%">
    <alarm-nav
      @FindReceiveAlarm="FindReceiveAlarm"
      @FindSendAlarm="FindSendAlarm"
      @PostMessage="PostMessage"
    />

    <template v-if="type == 0 || type == 1">
      <alarm-list
          :messages="messages"
          :cur-page="curPage"
          :page-num="pageNum"
          :total-page="totalPage"
          :subject="subject"
          :type="type"
          @ChoosePage="ChoosePage"
          @ChooseKeyword="ChooseKeyword"
          @ChangeSubject="ChangeSubject"
          @Read="Read"
      />
    </template>
    <template v-else-if="type == 2">
      <message-post/>
    </template>

  </div>
</template>

<script>
import {useCookies} from "vue3-cookies";
import AlarmNav from "@/components/mypage/alaram/AlarmNav";
import service from "@/service";
import { ref } from 'vue'
import MessageReceiveList from "@/dto/message/MessageReceiveList";
import MessageSenderList from "@/dto/message/MessageSenderList";
import AlarmList from "@/layout/alarm/AlarmList";
import MessagePost from "@/layout/alarm/MessagePost";

const { cookies } = useCookies();

export default {
  name: "MyAlarmPage",
  components: {MessagePost, AlarmList, AlarmNav},
  setup() {
    const curPage = ref(0)
    const pageNum = ref(10)
    const subject = ref(0)
    const keyword = ref('')
    const messages = ref([])
    const totalElements = ref(0)
    const totalPage = ref(0)
    const type = ref(0)

    return {
      curPage,
      pageNum,
      subject,
      keyword,
      messages,
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
          .AlarmReceiveList(new MessageReceiveList(this.curPage, this.pageNum, this.subject, this.keyword),
              {Authorization: 'Bearer ' + cookies.get('lg.m.log')},
              null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.messages = res.data.content.messages
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
          .AlarmSenderList(new MessageSenderList(this.curPage, this.pageNum, this.subject, this.keyword),
              {Authorization: 'Bearer ' + cookies.get('lg.m.log')},
              null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.messages = res.data.content.messages
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
    },
    PostMessage() {
      this.type = 2;
    },
    Read(index) {
      this.messages[index].readFlag = 1
    }
  }
}
</script>

<style scoped>

</style>
