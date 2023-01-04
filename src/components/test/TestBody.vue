<template>
  <div>
    <h1>테스트 페이지</h1>

    <div style="border: 1px solid black">
      <h2>로그인테스트</h2>
      <input type="text" v-model="loginId" placeholder="아이디"><br>
      <input type="password" v-model="password" placeholder="비밀번호"><br>
      <button @click="alert">로그인</button>
      <div>
        <p>
          accessToken : {{accessToken}}<br>
          expiredTime: {{expiredTime}}
        </p>
      </div>
    </div>

    <div style="border: 1px solid black">
      <h2>유저 등록 테스트</h2>
      아이디: <input type="text" placeholder="아이디" v-model="user.loginId"><br>
      패스워드: <input type="password" placeholder="패스워드" v-model="user.password"><br>
      닉네임: <input type="text" placeholder="닉네임" v-model="user.nickName"><br>
      이메일: <input type="text" placeholder="이메일" v-model="user.email"><br>
      핸드폰: <input type="text" placeholder="핸드폰" v-model="user.phone"><br>
      <button @click="enroll">로그인</button>
    </div>

    <div style="border: 1px solid black">
      <h2>유저 리스트 불러오기</h2>
      <button @click="callList">리스트불러오기</button>
      <table>
        <tr>
          <td>
            번호
          </td>
          <td>
            로그인 아이디
          </td>
          <td>
            비밀번호
          </td>
          <td>
            핸드폰
          </td>
          <td>
            등록일
          </td>
          <td>
            상태
          </td>
          <td>
            이메일
          </td>
        </tr>
        <template v-for="(item, index) in userList" :key="index">
          <tr>
            <td>
              {{item.userId}}
            </td>
            <td>
              {{item.loginId}}
            </td>
            <td>
              {{item.password}}
            </td>
            <td>
              {{item.phone}}
            </td>
            <td>
              {{item.regDt}}
            </td>
            <td>
              {{item.status}}
            </td>
            <td>
              {{item.email}}
            </td>
          </tr>
        </template>
      </table>
    </div>

  </div>
</template>

<script>
import { ref, computed, reactive } from "vue";
import axios from 'axios'

export default {
  name: "TestBody",
  setup() {
    const loginId = ref("");
    const password = ref("");
    let accessToken = ref("")
    let expiredTime = ref("")
    const user = reactive({
      loginId: "",
      password: "",
      nickName: "",
      email: "",
      phone: ""
    })
    let userList = ref([]);

    const alert = () => {

      axios({
        method: 'post',
        url: 'http://192.168.0.2:19001/law/user/login',
        data: {
          loginId: loginId.value
          , password: password.value
        },
      }).then((res) => {
        accessToken.value = res.data.accessToken
        expiredTime.value = res.data.expiredTime
      })
    }

    const enroll = () => {
      axios({
        method: 'post',
        url: 'http://192.168.0.2:19001/law/user/enroll',
        headers: {
          'Content-Type': 'application/json'
        },
        data: user,
      }).then((res) => {
        console.log(res)
      })
    }

    const callList = () => {
      axios({
        method: 'post',
        url: 'http://192.168.0.2:19001/law/user/list',
        headers: {
          'Content-Type': 'application/json'
        },
        data: user,
      }).then((res) => {
        userList.value = res.data
        console.log(userList)
      })
    }

    return {
      loginId,
      password,
      alert,
      accessToken,
      expiredTime,
      enroll,
      user,
      userList,
      callList
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid #444444;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #444444;
}
</style>