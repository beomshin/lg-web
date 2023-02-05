<template>
  <h1>게시판 작성 페이지</h1>
      <h2>비회원등록</h2>
      <div>
        아이디 : <input type="text" placeholder=" 아이디" v-model="id" maxlength="16"><br>
        비밀번호 : <input type="password" placeholder="패스워드" v-model="password"><br>
        제목 : <input type="text" placeholder=" 아이디" v-model="title" maxlength="32"><br>
        내용 : <input type="text" placeholder=" 아이디" v-model="content" ><br>
        라인타입 :
        <select v-model="lineType">
          <option value="0">탑</option>
          <option value="1">정글</option>
          <option value="2">미드</option>
          <option value="3">원딜</option>
          <option value="4">서폿</option>
        </select>
        <br>
        <input type="file" @change="upload"> 파일업로드
        <br>
        <button @click="enrollAnonym">작성하기</button>
      </div>
  <hr/>
  <router-link to="/">로그인 페이지</router-link> |
  <router-link to="/board">게시판 페이지</router-link> |
  <hr/>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies();
import { useRouter, useRoute } from 'vue-router'

export default {
  name: "BoardEnrollView",
  setup () {
    const id = ref('')
    const password = ref('')
    const title = ref('')
    const content = ref('')
    const lineType = ref(0);
    const router = useRouter();
    const route = useRoute();
    const files = ref([]);

    const enrollAnonym = () => {
      if (!id.value) {
        alert('아이디 입력해주세요.')
        return
      }else if (!password.value || !password.value > 32) {
        alert('비밀번호 입력해주세요.')
        return
      } else if (!title.value) {
        alert('이메일 인증해주세요.')
        return
      } else if (!content.value) {
        alert('닉네임 입력해주세요.')
        return
      }

      service.enrollAnonym({
        id: id.value
        , password: password.value
        , title: title.value
        , content : content.value
        , lineType: lineType.value
        , files: files.value
      }, {
        'Content-Type' : 'multipart/form-data'
      })
      .then(res => {
        if (res.data.resultCode == '00000') {
          alert('게시글 등록에 성공했습니다.')
          router.replace('/board')
        }
      })
    }

    const enrollMember = () => {
      if (!title.value) {
        alert('제목을 입력해주세요.')
        return
      } else if (!content.value) {
        alert('내용을 입력해주세요.')
        return
      }

      service.enrollMember({
            title: title.value
            , content: content.value
            , lineType: lineType.value
          }, {
            Authorization: 'Bearer ' + cookies.get('lg.m.log')
          }
      )
          .then(res => {
            if (res.data.resultCode == '00000') {
              alert('게시글 등록에 성공했습니다.')
              router.replace('/board')
            }
          })

    }


    const upload = (event) => {
      for (const file of event.target.files) {
        files.value.push(file);
      }
    }

    return {
      id
      , password
      , title
      , content
      , lineType
      , enrollAnonym
      , enrollMember
      , upload
    }

  },
  computed: {
    hasLogin () {
      if (cookies.isKey('lg.m.log')) return true
      return false
    }
  }
}
</script>

<style scoped>

</style>
