<template>
  <div style="width: 100%">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">프로필</label><br>
      <template v-if="user.profile">
      <img :src="user.profile" class="img-thumbnail" style="width: 150px; height: 150px">
    </template>
      <template v-else>
        <img src="https://s3.ap-northeast-2.amazonaws.com/law.gg.bucket/c5598ec4-5a14-4a32-952f-2d0bc87e24ca.png" class="img-thumbnail" style="width: 150px; height: 150px">
      </template>
    </div>
    <div class="row mb-3">
      <div class="input-group col-sm-10">
        <input type="file" class="form-control" id="inputGroupFile02" @change="ChangeProfile($event.target.files)">
        <label class="input-group-text" for="inputGroupFile02">프로필 수정하기</label>
      </div>
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
      <input type="password" class="form-control" v-model="password">
      <button class="btn btn-secondary" @click="ChangePaasword" >비밀번호 변경하기</button>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">닉네임</label>
      <input type="text" class="form-control" v-model="nickName">
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
    <button class="btn btn-secondary" @click="Change" style="margin-left: 5px;">변경하기</button>
  </div>
</template>

<script>
import service from "@/http/service";
import {useCookies} from "vue3-cookies";
import {ref} from 'vue'
import MemberChangeInfo from "@/dto/etc/MemberChangeInfo";
import MemberChangePasword from "@/dto/etc/MemberChangePasword";
const { cookies } = useCookies();


export default {
  name: "MyMemberPage",
  setup() {
    const user = ref({})
    const nickName = ref('')
    const profile = ref({})
    const password = ref('')

    return {
      user,
      nickName,
      profile,
      password
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
              this.nickName = res.data.content.user.nickName
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
    ChangeProfile(val) {
      this.profile = val[0]
      const reader = new FileReader()
      reader.readAsDataURL(this.profile)
      reader.addEventListener('load', () => {
        this.user.profile = reader.result
      })
    },
    Back() {
      window.history.back()
    },
    Change() {

      console.log(new MemberChangeInfo(this.profile, this.nickName))

      service
          .MemberChangeInfo(new MemberChangeInfo(this.profile, this.nickName),
              {
                Authorization: 'Bearer ' + cookies.get('lg.m.log'),
                "Content-Type" : 'multipart/form-data'
              },
              null
          )
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.MemberInfo()
              alert('변경 성공')
            } else {
              alert('변경 실패')
            }
          })
          .catch(err => {
              alert('변경 실패')
          })

    },
    ChangePaasword() {
      service
          .MemberChangePassword(new MemberChangePasword(this.user.loginId, "00000", this.password),
              null,
              null)
          .then(res => {
            this.password = ''
            if (res.data.resultCode == '00000') {
              alert('비밀번호 변경 성공')
            } else if (res.data.resultCode == '10006') {
              alert('기존의 비밀번호와 동일합니다.')
            } else {
              alert('비밀번호 변경 실패')
            }
          })
          .catch(err => {
            this.password = ''
            alert('비밀번호 변경 실패')
          })
    }
  }
}
</script>

<style scoped>

</style>
