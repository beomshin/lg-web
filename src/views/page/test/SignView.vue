<template>
  <h1>회원가입 페이지</h1>
  <div>
      아이디 : <input type="text" placeholder=" 아이디" v-model="loginId" maxlength="16" @change="ChangeId" :disabled="isLoginId">
      <button @click="CheckOverlapId" v-if="!isLoginId">아이디 조회</button>
    <br>
      비밀번호 : <input type="password" placeholder="패스워드" v-model="password">

    <br>
      이메일 : <input type="text" placeholder="이메일" v-model="email1" :disabled="isVerify">@
      <select v-model="email2" :disabled="isVerify">
        <option value="@naver.com">naver.com</option>
        <option value="@gmail.com">gmail.com</option>
        <option value="@daum.net">daum.net</option>
      </select>
      <button @click="PostEmail" v-if="!isVerify">이메일 인증</button>
      <template v-if="isPost">
        <br>
        <div>
          <input type="text" v-model="code">
          <button @click="VerifyEmail">인증하기</button>
        </div>
      </template>
    <br>
      닉네임 : <input type="text" placeholder="닉네임" v-model="nickName">
    <br>
      개인정보유효기간:
      <select v-model="personalPeriod">
        <option value="1">1년</option>
        <option value="3">3년</option>
        <option value="5">5년</option>
      </select>
    <br>
      <button @click="Sign">회원가입</button>
  </div>
  <hr>
  <router-link to="/">로그인 페이지</router-link>
  <hr>
</template>

<script>
import service from "@/service/config";
import {reactive, ref} from "vue";
import { useRouter, useRoute } from 'vue-router'
import SignMember from "@/dto/member/SignMember";
import CheckOverlapId from "@/dto/member/CheckOverlapId";
import PostEmail from "@/dto/member/PostEmail";
import VerifyEmail from "@/dto/member/VerifyEmail";

export default {
  name: "SignView",
  setup () {
    const email1 = ref('')
    const email2 = ref('@naver.com')
    const loginId = ref('')
    const password = ref('')
    const nickName = ref('')
    const personalPeriod = ref(1)
    const findLoginComment = ref('')
    const isLoginId = ref(false);
    const txId = ref('')
    const isPost = ref(false)
    const code = ref('')
    const isVerify = ref(false)

    const validateSign = () => {
      if (!loginId.value) {
        alert('아이디를 입력해주세요.')
        return false;
      } else if (!isLoginId.value) {
        alert('아이디를 조회해주세요.')
        return false;
      } else if (!password.value || !password.value > 32) {
        alert('비밀번호를 입력해주세요.')
        return false;
      } else if (!isVerify.value) {
        alert('이메일을 인증해주세요.')
        return false;
      } else if (!nickName.value) {
        alert('닉네임을 입력해주세요.')
        return false;
      } else {
        return true
      }
    }

    const validateId = () => {
      if (!loginId.value) {
        alert('아이디 입력해주세요.')
        return false
      } else {
        return true
      }
    }

    const validateEmail = () => {
      if (!email1.value || !email2.value) {
        alert('이메일을 입력해주세요')
        return false
      } else {
        return true
      }
    }



    const  validateCode = () => {
      if (!code.value) {
        alert('인증번호를 입력해주세요.')
        return false
      } else {
        return true
      }
    }

    return {
      validateSign,
      validateId,
      validateEmail,
      validateCode,
      loginId,
      password,
      nickName,
      personalPeriod,
      email1,
      email2,
      findLoginComment,
      isLoginId,
      isPost,
      code,
      isVerify,
      txId
    }
  },
  methods: {
    Sign () {
      if (!this.validateSign()) {
        return
      } else {
        const request = new SignMember(
            this.loginId
            , this.password
            ,this.email1 + this.email2
            , this.nickName
            , this.personalPeriod
        )

        service
            .sign(request, null)
            .then(res => {
              if (res.data.resultCode == '00000') {
                alert('회원가입에 성공했습니다.')
                window.location.replace('/')
              } else {
                alert('회원가입에 실패했습니다.')
              }
            })
            .catch(err => {
              alert('회원가입에 실패했습니다.')
            })
      }
    },
    CheckOverlapId() {
      if (!this.validateId()) {
        return
      } else {
        const request = new CheckOverlapId(this.loginId)
        service
            .checkOverlapId(request)
            .then(res => {
              if (res.data.resultCode ==  '00000') {
                this.isLoginId = true;
                alert('사용 가능한 아이디 입니다.')
              } else if(res.data.resultCode == '10001') {
                this.isLoginId = false;
                alert('사용 불가능한 아이디 입니다.')
              }
            })
            .catch(err => {
              alert('사용 불가능한 아이디 입니다.')
            })
      }
    },
    ChangeId() {
      this.isLoginId = false
    },
    PostEmail() {
      if (!this.validateEmail()) {
        return
      } else {
        service
            .postEmail(new PostEmail(this.email1 + this.email2), null)
            .then(res => {
              if (res.data.resultCode == '00000') {
                alert('이메일 전송에 성공했습니다.')
                this.txId = res.data.data.txId;
                this.isPost = true
              } else {
                alert('이메일 전송에 실패했습니다.')
              }
            })
            .catch(err => {
              alert('이메일 전송에 실패했습니다.')
            })
      }
    },
    VerifyEmail() {
      if (!this.validateCode()) {
        return
      } else {
        service
            .verifyEmail(`/be/sign/verify/email`, this.txId , new VerifyEmail(this.code))
            .then(res => {
              if (res.data.resultCode == '00000') {
                alert('이메일 인증에 성공했습니다.')
                this.isVerify = true
                this.isPost = false
              } else {
                alert('이메일 인증에 실패했습니다.')
                this.isPost = false
              }
            })
            .catch(err => {
              alert('이메일 인증에 실패했습니다.')
              this.isPost = false
            })

      }
    }
  }
}
</script>

<style scoped>

</style>
