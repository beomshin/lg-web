<template>
  <div>
    <a @click="kakaoLogin"><img src="/img/kakao_login_small.png" alt="카카오계정 로그인"/></a>
  </div>
</template>

<script>
export default {
  name: "KakaoSnsLogin",
  mounted() {
    window.Kakao.init('5daa8087aa8585478e7b944fa527cf58')
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'story_permalink, profile_nickname, profile_image, account_email', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
        success: function(response) {
          console.log(response) // 로그인 성공하면 받아오는 데이터
          window.Kakao.API.request({ // 사용자 정보 가져오기
            url: '/v2/user/me',
            success: (res) => {
              const kakao_account = res.kakao_account;
              console.log(kakao_account)
            }
          });
        },
        fail: function(error) {
          console.log(error);
        }
      });
    }
  }
}
</script>

<style scoped>

</style>