<template>
  <div class="enrollBoard">
    <hr>
    <h1>회원 게시판 작성</h1>
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
    <button class="btn btn-secondary" @click="EnrollBoard" style="margin-left: 5px">작성하기</button>
  </div>
  <hr>
</template>

<script>
import {ref} from "vue";
import service from "@/service";
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
            .BoardEnrollMember(
                new EnrollUserBoard(this.title, this.content, this.lineType, this.files),
                {
                  "Content-Type" : 'multipart/form-data',
                  "Authorization": token
                },
                null
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
    Back () {
      window.history.back()
    }
  },
}
</script>

<style scoped>
  .enrollBoard {
    margin-top: 20px;
    padding-left: 10px;
    width: 600px;
  }
</style>
