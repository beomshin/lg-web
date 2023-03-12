<template>
  <div>
    <div id="naverIdLogin"></div>
  </div>
</template>

<script>
export default {
  name: "NaverSnsLogin",
  mounted() {
    const naverLogin = new window.naver.LoginWithNaverId(
        {
          clientId: "WA86kksFVuadtQCqhcdx",
          callbackUrl: "http://localhost:8080/login",
          loginButton: {color: "green", type: 1, height: 30}
        }
    );
    naverLogin.init(); // 로그인 설정

    window.addEventListener('load', function () {
      naverLogin.getLoginStatus(function (status) {
        if (status) {
          const nickName=naverLogin.user.getNickName();

          console.log(naverLogin.user);

          //닉네임을 선택하지 않으면 선택창으로 돌아갑니다.
          if(nickName===null||nickName===undefined ){
            alert("별명이 필요합니다. 정보제공을 동의해주세요.");
            naverLogin.reprompt();
            return ;
          }
        }
      })
    })
  }
}

//https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=WA86kksFVuadtQCqhcdx&client_secret=xh1159rZDV&access_token=AAAAN__D5SI8IfRPQS7ReVuuZn4-6S_0OxkmsMKS8VwBeThdUd4G-2FXrJQA7xhfmKZly9uyNvAiNe8FZsejJfvYu4s&service_provider=NAVER

</script>

<style scoped>

</style>