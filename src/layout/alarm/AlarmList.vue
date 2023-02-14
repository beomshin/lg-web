<template>
  <div>
    <table class="table table-hover">
      <alarm-list-top
        :heads="heads"
        />
      <alarm-list-body
          :page-num="pageNum"
          :cur-page="curPage"
          :messages="messages"
          />
    </table>
    <div style="display: flex">
      <alarm-subject
          :subjects="subjects"
          :subject="subject"
          @ChangeSubject="ChangeSubject"
      />
      <alarm-keyword
          @ChooseKeyword="ChooseKeyword"
      />
    </div>
    <alarm-pagination
        :cur-page="curPage"
        :total-page="totalPage"
        @ChoosePage="ChoosePage"
    />
  </div>
</template>

<script>
import {ref} from "vue";
import AlarmListTop from "@/components/mypage/alaram/AlarmListTop";
import AlarmListBody from "@/components/mypage/alaram/AlarmListBody";
import AlarmSubject from "@/components/mypage/alaram/AlarmSubject";
import AlarmKeyword from "@/components/mypage/alaram/AlarmKeyword";
import AlarmPagination from "@/components/mypage/alaram/AlarmPagination";

export default {
  name: "AlarmList",
  components: {AlarmPagination, AlarmKeyword, AlarmSubject, AlarmListBody, AlarmListTop},
  props: ['messages', 'totalPage', 'curPage', 'pageNum', 'subject'],
  setup() {
    const heads = ref([
      {
        name: '번호',
        width: 5
      },
      {
        name: '제목',
        width: 25
      },
      {
        name: '내용',
        width: 5
      },
      {
        name: '수신자',
        width: 20
      },
      {
        name: '발신자',
        width: 15
      },
      {
        name: '읽음',
        width: 10
      },
      {
        name: '전송일',
        width: 10
      },
    ])

    const subjects = ref([
      {
        name: '전체',
        val: 0
      },
      {
        name: '제목',
        val: 1
      },
      {
        name: '내용',
        val: 2
      },
      {
        name: '수신자',
        val: 3
      },
      {
        name: '발신자',
        val: 4
      }
    ])

    return {
      heads,
      subjects
    }
  },
  methods: {
    ChangeSubject(subject) {
      this.$emit('ChangeSubject', subject)
    },
    ChooseKeyword(keyword) {
      this.$emit('ChooseKeyword', keyword)
    },
    ChoosePage(page) {
      this.$emit('ChoosePage', page)
    }
  }
}
</script>

<style scoped>

</style>
