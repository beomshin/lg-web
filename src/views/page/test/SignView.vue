<template>
  <h1>회원가입 페이지</h1>
  <div>
      아이디 : <input type="text" placeholder=" 아이디" v-model="loginId" maxlength="16">
      <button @click="findId">아이디 조회</button>
    <br>
      비밀번호 : <input type="password" placeholder="패스워드" v-model="password">

    <br>
      이메일 : <input type="text" placeholder="이메일" v-model="email1">@
      <select v-model="email2">
        <option value="@naver.com">naver.com</option>
        <option value="@gmail.com">gmail.com</option>
        <option value="@daum.net">daum.net</option>
      </select>
      <button @click="postEmail">이메일 인증</button>
      <template v-if="isPost">
        <br>
        <div>
          <input type="text" v-model="code">
          <button @click="verify">인증하기</button>
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
      <button @click="sign">회원가입</button>
  </div>
  <hr>
  <router-link to="/">로그인 페이지</router-link>
  <hr>
</template>

<script>
import service from "@/service/config";
import {reactive, ref} from "vue";

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


    const sign = () => {

      if (!loginId.value) {
        alert('아이디 입력해주세요.')
        return
      } else if (!isLoginId.value) {
        alert('아이디 조회해주세요.')
        return
      } else if (!password.value || !password.value > 32) {
        alert('비밀번호 입력해주세요.')
        return
      } else if (!isVerify.value) {
        alert('이메일 인증해주세요.')
        return
      } else if (!nickName.value) {
        alert('닉네임 입력해주세요.')
        return
      }


      service.sign({
        loginId: loginId.value,
        password: password.value,
        email: email1.value + email2.value,
        nickName: nickName.value,
        personalPeriod: personalPeriod.value
      })
      .then(res => {
        if (res.data.resultCode == '00000') {
          window.location.replace('/')
        }
      })
    }

    const findId = () => {
      if (!loginId.value) {
        alert('아이디 입력해주세요.')
        return
      }

      service.findId({
        loginId: loginId.value
      })
      .then(res => {
        if (res.data.resultCode ==  '00000') {
          isLoginId.value = true;
          alert('사용 가능한 아이디 입니다.')
        } else if(res.data.resultCode == '10001') {
          alert(res.data.resultMsg)
          isLoginId.value = false;
        }
      })
    }

    const postEmail = () => {
        service.postEmail({
          email: email1.value + email2.value
        })
        .then(res => {
          if (res.data.resultCode == '00000') {
            alert('이메일 전송에 성공했습니다.')
            txId.value = res.data.data.txId;
            isPost.value = true
          }
        })
    }

    const  verify = () => {
      service.verifyEmail(`/lg/sign/verify/email/${txId.value}`, {
        code: code.value
      })
      .then(res => {
        if (res.data.resultCode == '00000') {
          alert('이메일 인증에 성공했습니다.')
          isVerify.value = true
        } else {
          alert('이메일 인증에 실패했습니다.')
        }
      })
    }

    return {
      sign,
      loginId,
      password,
      nickName,
      personalPeriod,
      email1,
      email2,
      findId,
      findLoginComment,
      isLoginId,
      postEmail,
      isPost,
      code,
      verify
    }
  }
}
</script>

<style scoped>

</style>