<template>
  <div class="boardDetail">
    <hr>
    <h1>{{board.writerType == 0 ? '비회원 게시판' : '회원 게시판'}}</h1>
    <hr/>
    <BoardDetailTab
      :board-id="board.boardId"
      :has-login="hasLogin"
      :writer-type="board.writerType"
      :created="board.created"
      :recommend="board.recommend"
      @SuccessRecommend="SuccessRecommend"
    />
    <hr>
    <BoardDetailBody
      :total-comment-cnt="totalCommentCnt"
      :board="board"
    />
    <hr>
    <BoardDetailFiles
      :files="board.files"
    />
    <hr>
    <BoardCommentParent
      :boardId="board.boardId"
      :parent-id="board.rootId"
    />
    <hr>
    <BoardComment
        :boardId="board.boardId"
        :comments="comments"
        :totalCommentCnt="totalCommentCnt"
      />
    <button class="btn btn-secondary" @click="Back">뒤로가기</button>
  </div>
  <hr>
</template>

<script>
import {ref} from "vue";
import service from "@/service";
import {useCookies} from "vue3-cookies";
import BoardCommentParent from "@/views/page/test/comment/BoardCommentParent";
import BoardComment from "@/views/page/test/comment/BoardComment";
import { useRouter, useRoute } from 'vue-router'
import BoardDetailBody from "@/views/page/test/detail/BoardDetailBody";
import BoardDetailFiles from "@/views/page/test/detail/BoardDetailFiles";
import BoardDetailTab from "@/views/page/test/detail/BoardDetailTab";

const { cookies } = useCookies();
export default {
  name: "BoardDetailView",
  components: {BoardDetailTab, BoardDetailFiles, BoardDetailBody, BoardComment, BoardCommentParent},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const boardId = route.query.boardId
    const board = ref({})
    const type = ref(0)
    const password = ref('')
    const comments = ref([])
    const commentCnt = ref(0)
    const totalCommentCnt = ref(0)
    const hasLogin = () => {
      if (cookies.isKey('lg.m.log')) return true
      else {
        return false
      }
    }

    return {
      board,
      type,
      password,
      comments,
      commentCnt,
      totalCommentCnt,
      boardId,
      hasLogin
    }
  },
  mounted() {
    this.BoardDetail(this.boardId)
    this.FindComments(this.boardId)
    this.$emitter.on('ReFindComment', this.ReFindComment)
  },
  methods: {
    BoardDetail (boardId) {

      if (cookies.isKey('lg.m.log')) {
        let token = 'Bearer ' + cookies.get('lg.m.log');
        service
            .BoardFindBoardMember(null, {
              "Authorization": token
            }, boardId)
            .then(res => {
              this.board = res.data.content.board
            })
      } else {
        service
            .BoardFindBoardAnonym(null, null, boardId)
            .then(res => {
              this.board = res.data.content.board
            })
      }
    },
    FindComments (boardId) {

      if (cookies.isKey('lg.m.log')) {
        let token = 'Bearer ' + cookies.get('lg.m.log');
        service
            .BoardFindCommentMember(null, {
              "Authorization": token
            }, boardId)
            .then(res => {
              if (res.data.resultCode == '00000') {
                this.comments = res.data.content.comments
                this.totalCommentCnt = res.data.content.totalElements
              } else {
                alert('댓글 조회 실패')
              }
            })
            .catch(err => {
              console.log(err)
              alert('댓글 조회 실패')
            })
      } else {
        service
            .BoardFindCommentAnonym(null, null, boardId)
            .then(res => {
              if (res.data.resultCode == '00000') {
                this.comments = res.data.content.comments
                this.totalCommentCnt = res.data.content.totalElements
              } else {
                alert('댓글 조회 실패')
              }
            })
            .catch(err => {
              console.log(err)
              alert('댓글 조회 실패')
            })
      }
    },
    Back() {
      window.history.back()
    },
    ReFindComment() {
      this.FindComments(this.boardId)
    },
    SuccessRecommend() {
      this.board.recommend = 1
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
