<template>
  <div class="enrollBoard">
    <hr>
    <h1>비회원 게시판 작성</h1>
    <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">아이디</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="id" maxlength="16" placeholder="아이디">
    </div>
  </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">비밀번호</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" v-model="password" maxlength="32" placeholder="비밀번호">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="title" maxlength="32" placeholder="제목">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="content" ></textarea>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">라인타입</label>
      <div class="col-sm-10">
        <select class="form-select" aria-label="Default select example" v-model="lineType">
          <option value="0">탑</option>
          <option value="1">정글</option>
          <option value="2">미드</option>
          <option value="3">원딜</option>
          <option value="4">서폿</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">파일</label>
      <div class="input-group col-sm-10">
        <input type="file" class="form-control" id="inputGroupFile02" @change="UploadFile">
        <label class="input-group-text" for="inputGroupFile02">Upload</label>
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">등록 파일</label>
      <div class="input-group col-sm-10">
        <ul class="list-group">
          <template v-for="(file, index) in files" :key="index">
            <li class="list-group-item">파일명 : {{file.name}}, 사이즈 : {{file.size}}</li>
            <button class="btn btn-secondary" @click="DeleteFile(index)">삭제</button>
          </template>
        </ul>
      </div>
    </div>
    <button class="btn btn-secondary" @click="Back">취소</button>
    <button class="btn btn-secondary" @click="EnrollAnonym" style="margin-left: 5px">작성하기</button>
  </div>
  <hr/>
</template>

<script>
import {ref} from "vue";
import service from "@/service";
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies();
import { useRouter, useRoute } from 'vue-router'
import BoardEnrollAnonym from "@/dto/etc/BoardEnrollAnonym";

export default {
  name: "BoardEnrollAnonymPage",
  setup () {
    const id = ref('')
    const password = ref('')
    const title = ref('')
    const content = ref('')
    const lineType = ref(0);
    const files = ref([]);

    const validateBoard = () => {
      if (!id.value) {
        alert('아이디 입력해주세요.')
        return false
      }else if (!password.value || !password.value > 32) {
        alert('비밀번호 입력해주세요.')
        return false
      } else if (!title.value) {
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
      id
      , password
      , title
      , content
      , lineType
      , files
      , validateBoard
      , UploadFile
      , DeleteFile
    }
  },
  activated() {
    this.id = ''
    this.password = ''
    this.title = ''
    this.content = ''
    this.files = []
    this.lineType = 0
    window.scrollTo(0, 0);
  },
  methods: {
    EnrollAnonym () {
      if (!this.validateBoard()) {
        return
      } else {
        let request = new BoardEnrollAnonym(
            this.id,
            this.password,
            this.title,
            this.content,
            this.lineType,
            this.files
        )

        service
            .BoardEnrollAnonym(request,
                {
                  'Content-Type' : 'multipart/form-data'
                },
            null )
            .then(res => {
              if (res.data.resultCode == '00000') {
                alert('게시글 등록에 성공했습니다.')
                window.history.back()
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
    Back () {
      window.history.back()
    }
  }
}
</script>

<style scoped>
.enrollBoard {
  margin-top: 20px;
  padding-left: 10px;
  width: 600px;
}
</style>
