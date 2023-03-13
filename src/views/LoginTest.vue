<template>
  <div>
    <google-sns-login/>
    <naver-sns-login/>
    <kakao-sns-login/>
  </div>
</template>

<script>
import GoogleSnsLogin from "@/components/sns/GoogleSnsLogin";
import NaverSnsLogin from "@/components/sns/NaverSnsLogin";
import KakaoSnsLogin from "@/components/sns/KakaoSnsLogin";
export default {
  name: "LoginTest",
  components: {KakaoSnsLogin, NaverSnsLogin, GoogleSnsLogin},
}
</script>

<style scoped>

</style>