<template>
  <div style="width: 100%">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">프로필</label><br>
      <img :src="user.profile" class="img-thumbnail" style="width: 150px; height: 150px">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">아이디</label>
      <input type="text" class="form-control" disabled :value="user.loginId">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">가입일</label>
      <input type="text" class="form-control" disabled :value="user.regDt" >
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">비밀번호</label><br>
      <button class="btn btn-secondary" >변경하기</button>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">닉네임</label>
      <input type="text" class="form-control" disabled :value="user.nickName">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">이메일</label>
      <input type="text" class="form-control" disabled :value="user.email">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">게시글개수</label>
      <input type="text" class="form-control" disabled :value="user.boardCnt + '개'">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">트라이얼개수</label>
      <input type="text" class="form-control" disabled :value="user.trialCount + '개'">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">개인정보유효기간</label>
      <input type="text" class="form-control" disabled :value="user.personalPeriod + '년'" >
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">본인인증</label><br>
      <button class="btn btn-secondary" >휴대폰 인증하기</button>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">로펌명</label>
      <input type="text" class="form-control" disabled :value="user?.lawFirmName || '미가입'">
    </div>
    <hr>
    <button class="btn btn-secondary" @click="Back">뒤로가기</button>
  </div>
</template>

<script>
import service from "@/service";
import {useCookies} from "vue3-cookies";
import {ref} from 'vue'
const { cookies } = useCookies();


export default {
  name: "MyMemberPage",
  setup() {
    const user = ref({})


    return {
      user
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
    this.MemberInfo()
  },
  methods: {
    MemberInfo() {
      service
          .MemberInfo(null, {Authorization: 'Bearer ' + cookies.get('lg.m.log')}, null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.user = res.data.content.user
            } else if (res.data.resultCode == "17008") {
              cookies.remove('lg.m.log')
              alert('세션이 만료되었습니다. 로그아웃 됩니다.')
              window.location.replace('/')
            }
          })
          .catch(err => {
            cookies.remove('lg.m.log')
            alert('문제가 발생했습니다. 로그아웃 됩니다.')
            window.location.replace('/')
          })
    },
    Back() {
      window.history.back()
    }
  }
}
</script>

<style scoped>

</style>
