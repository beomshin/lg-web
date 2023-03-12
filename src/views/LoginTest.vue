<template>
  <div>
    <google-sns-login/>
    <naver-sns-login/>
  </div>
</template>

<script>
import GoogleSnsLogin from "@/components/sns/GoogleSnsLogin";
import NaverSnsLogin from "@/components/sns/NaverSnsLogin";
export default {
  name: "LoginTest",
  components: {NaverSnsLogin, GoogleSnsLogin},
}
</script>

<style scoped>

</style>