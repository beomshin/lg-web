<template>
  <div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" v-model="title">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">작성일</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writeDt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">작성자</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writer">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="content" ></textarea>
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
          <template v-for="(file, index) in addFiles" :key="index">
            <li class="list-group-item">파일명 : {{addFiles.name}}, 사이즈 : {{file.size}}</li>
            <button class="btn btn-secondary" @click="DeleteFile(index)">삭제</button>
          </template>
        </ul>
      </div>
    </div>
    <template v-if="files">
      <div v-for="(item, index) in files" :key="index">
        <span>{{item.oriName}}</span>
        <img :src="item.path" class="img-thumbnail" style="width: 50px; height: 50px; margin-left: 5px">
        <button class="btn btn-danger" style="margin-left: 5px" @click="DeleteFile2(index, item.boardAttachId)">삭제</button>
      </div>
    </template><br>
    <button class="btn btn-secondary" @click="Back">뒤로가기</button>
    <button class="btn btn-secondary" style="margin-left: 5px" @click="UpdateBoard">수정하기</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import BoardUpdate from "@/dto/board/BoardUpdate";
import service from "@/service";

export default {
  name: "BoardUpdateBody",
  props: ['board'],
  setup() {
    const title = ref('')
    const content = ref('')
    const deleteFiles = ref([])
    const addFiles = ref([])
    const files = ref([])

    const UploadFile = (event) => {
      for (const file of event.target.files) {
        addFiles.value.push(file);
      }
      event.target.value = ''
    }

    const DeleteFile = (idx) => {
      addFiles.value = addFiles.value.filter((e, index) => {
        return index != idx
      })
    }

    const DeleteFile2 = (idx, boardAttachId) => {
      deleteFiles.value.push(boardAttachId)
      files.value = files.value.filter((e, index) => {
        return index != idx
      })
    }

    return {
      title,
      content,
      UploadFile,
      deleteFiles,
      addFiles,
      DeleteFile,
      DeleteFile2,
      files
    }
  },
  mounted() {
    this.title = this.board.title;
    this.content = this.board.content;
    this.files = this.board.files
  },
  methods: {
    UpdateBoard() {
      service
          .BoardUpdate(
              new BoardUpdate(this.board.boardId, this.title, this.content, this.addFiles, this.deleteFiles)
              , { "Content-Type" : 'multipart/form-data'}
              , null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              alert('게시판 수정 성공')
              window.history.back()
            } else {
              alert('게시판 수정 실패')
            }
          })
          .catch(err => {
            alert('게시판 수정 실패')
          })
    },
    Back() {
      window.history.back()
    },
  }
}
</script>

<style scoped>

</style>