<template>
  <div class="boardDetail">
    <hr>
    <h1>게시판 수정 페이지</h1>
    <hr>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" v-model="board.title">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">작성일</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writeDt">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">글쓴이</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled :value="board.writer">
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="board.content" ></textarea>
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
    <template v-if="board.files">
      <div v-for="(item, index) in board.files" :key="index">
        <span>{{item.oriName}}</span>
        <img :src="item.path" class="img-thumbnail" style="width: 50px; height: 50px; margin-left: 5px">
        <button class="btn btn-danger" style="margin-left: 5px" @click="DeleteFile2(index, item.boardAttachId)">삭제</button>
      </div>
    </template><br>
    <button class="btn btn-secondary" @click="Back">뒤로가기</button>
    <button class="btn btn-secondary" style="margin-left: 5px" @click="UpdateBoard">수정하기</button>
  </div>
  <hr>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import LoginBoard from "@/dto/member/LoginBoard";
import DeleteBoard from "@/dto/member/DeleteBoard";
import UpdateBoard from "@/dto/member/UpdateBoard";

export default {
  name: "BoardUpdateView",
  setup() {
    const board = ref({})
    const deleteFiles = ref([])
    const addFiles = ref([])

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
      board.value.files = board.value.files.filter((e, index) => {
        return index != idx
      })
    }

    return {
      board,
      deleteFiles,
      addFiles,
      DeleteFile,
      UploadFile,
      DeleteFile2
    }
  },
  mounted() {
    this.BoardDetail(this.$route.query.boardId)
  },
  methods: {
    BoardDetail(boardId) {
      service
          .findBoard(`/be/board/find/board`, boardId, null)
          .then(res => {
            this.board = res.data.data
          })
    },
    Back() {
      window.history.back()
    },
    UpdateBoard() {
      let request = new UpdateBoard(this.board.boardId, this.board.title, this.board.content, this.addFiles, this.deleteFiles)
      service
          .updateBoard(request, { "Content-Type" : 'multipart/form-data'})
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
    }
  }
}
</script>

<style scoped>
.boardDetail {
  margin-top: 20px;
  padding-left: 10px;
  width: 600px;
}
</style>
