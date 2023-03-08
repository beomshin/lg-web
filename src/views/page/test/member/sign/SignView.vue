<template>
  <div class="sign">
    <hr>
    <h1>회원가입 페이지</h1>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">아이디</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="loginId" maxlength="16" @change="ChangeId" :disabled="isLoginId" placeholder="아이디">
          <button type="button" class="btn btn-secondary" @click="CheckOverlapId" v-if="!isLoginId" style="margin-top: 3px">아이디 조회</button>
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">패스워드</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="password" placeholder="패스워드">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">이메일</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="email1" placeholder="이메일" :disabled="isVerify">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <select class="form-select" aria-label="Default select example" v-model="email2" :disabled="isVerify">
              <option value="@naver.com">naver.com</option>
              <option value="@gmail.com">gmail.com</option>
              <option value="@daum.net">daum.net</option>
            </select>
          </div>

          <button type="button" class="btn btn-secondary" @click="PostEmail" v-if="!isVerify" style="margin-top: 3px">이메일 인증</button>
        </div>
      </div>
      <div class="row mb-3" v-if="isPost">
        <label for="inputPassword3" class="col-sm-2 col-form-label">인증번호</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="code">
          <button type="button" class="btn btn-secondary" @click="VerifyEmail" style="margin-top: 3px">인증하기</button>
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">닉네임</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="nickName">
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">개인정보유효기간</label>
        <div class="col-sm-10">
          <select class="form-select" aria-label="Default select example" v-model="personalPeriod">
            <option value="1">1년</option>
            <option value="3">3년</option>
            <option value="5">5년</option>
          </select>
        </div>
      </div>
      <button class="btn btn-secondary" @click="Sign">회원가입</button>
  </div>
  <hr>
</template>

<script>
import service from "@/http/service";
import {reactive, ref} from "vue";
import { useRouter, useRoute } from 'vue-router'
import MemberSignDto from "@/dto/etc/MemberSignDto";
import MemberCheckId from "@/dto/etc/MemberCheckId";
import MemberPostEmail from "@/dto/etc/MemberPostEmail";
import MemberVerifyEmail from "@/dto/etc/MemberVerifyEmail";

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
        const request = new MemberSignDto(
            this.loginId
            , this.password
            ,this.email1 + this.email2
            , this.nickName
            , this.personalPeriod
        )

        service
            .MemberSign(request, null, null)
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
        const request = new MemberCheckId(this.loginId)
        service
            .MemberCheckId(request, null, null)
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
            .MemberPostEmail(new MemberPostEmail(this.email1 + this.email2), null, null)
            .then(res => {
              if (res.data.resultCode == '00000') {
                alert('이메일 전송에 성공했습니다.')
                this.txId = res.data.content.txId;
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
            .MemberVerifyEmail(new MemberVerifyEmail(this.code), null, this.txId )
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
  .sign {
    margin-top: 20px;
    padding-left: 10px;
    width: 1000px;
  }
</style>
