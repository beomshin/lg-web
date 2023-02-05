<template>
  <h1>게시판 작성 페이지</h1>
      <h2>회원등록</h2>
      <div>
        제목 : <input type="text" placeholder=" 아이디" v-model="title" maxlength="32"><br><br>
        내용 : <input type="text" placeholder=" 아이디" v-model="content" ><br><br>
        라인타입 :
        <select v-model="lineType">
          <option value="0">탑</option>
          <option value="1">정글</option>
          <option value="2">미드</option>
          <option value="3">원딜</option>
          <option value="4">서폿</option>
        </select>
        <br><br>
        <input type="file" @change="UploadFile"> 파일업로드 <br>
        <div v-if="this.files && this.files.length > 0">
          <p>등록 파일</p>
          <template v-for="(file, index) in files" :key="index">
              <span>{{index + 1}}번 | 파일명 : {{file.name}} || 파일 사이즈 : {{file.size}}</span>
              <button @click="DeleteFile(index)">삭제</button>
            <br>
          </template>
        </div>
        <br>

        {{this.files.length}}
        <button @click="EnrollBoard">작성하기</button>
      </div>
  <br>
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
import EnrollUserBoard from "@/dto/board/EnrollUserBoard";

export default {
  name: "BoardUserEnrollView",
  setup () {
    const title = ref('')
    const content = ref('')
    const lineType = ref(0);
    const files = ref([]);

    const validateBoard = () => {
      if (!title.value) {
        alert('제목을 입력해주세요.')
        return false
      } else if (!content.value) {
        alert('내용을 입력해주세요.')
        return false
      } else {
        return true
      }
    }


    const UploadFile = (event) => {
      for (const file of event.target.files) {
        files.value.push(file);
      }
      event.target.value = ''
    }

    const DeleteFile = (idx) => {
      files.value = files.value.filter((e, index) => {
        return index != idx
      })
    }

    return {
      title
      , content
      , lineType
      , files
      , validateBoard
      , UploadFile
      , DeleteFile
    }

  },
  methods: {
    EnrollBoard () {
      if (!this.validateBoard()) {
        return
      } else {
        const token = 'Bearer ' + cookies.get('lg.m.log')
        service
            .enrollMember(
                new EnrollUserBoard(this.title, this.content, this.lineType, this.files),
                {
                  "Content-Type" : 'multipart/form-data',
                  "Authorization": token
                }
            )
            .then(res => {
              if (res.data.resultCode == '00000') {
                alert('게시글 등록에 성공했습니다.')
                window.location.replace('/board')
              } else {
                alert('게시글 등록에 실패했습니다.')
              }
            })
            .catch(err => {
              console.log(err)
              alert('게시글 등록에 실패했습니다.')
            })
      }
    },
  },
}
</script>

<style scoped>

</style>
