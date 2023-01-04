<template>
  <div id="header">
    <div id="image-box">
      <!-- image goes here -->
      <div class="image-logo"></div>
    </div>
    <div id="nav-menu">
      <!-- navigation links go here -->
      <nav>
        <span>라인재판소</span>
        <span>투데이재판</span>
        <span>랭킹</span>
        <span>네임드요청</span>
        <span>크루</span>
      </nav>
    </div>
    <div id="login-box">
      <!-- login and membership links go here -->
      <nav>
        <span>로그인</span>
        <span>회원가입</span>
      </nav>
    </div>
  </div>

</template>

<script lang="ts">

export default {

}
</script>

<style scoped>

#header {
  display: flex;
  align-items: center;
  height: 100px;
  margin: 0 100px 0 100px;
}

#image-box {
  width: 100px;
  height: 100%;
  background-image: url("../../assets/img/logo.png");
}

.image-logo {
  background-image: url("../../assets/img/logo.png");
}

#nav-menu nav {
  display: flex;
  align-items: center;
  height: 100%;
}

#nav-menu nav span {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
}


#nav-menu {
  flex: 1;
  height: 100%;
  margin: 0 150px;
}

#login-box {
  width: 200px;
  height: 100%;
  background-color: #ddd;
}


</style>