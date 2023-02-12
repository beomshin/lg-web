<template>
  <div class="boardDetail">
    <hr>
    <h1>{{board.writerType == 0 ? '비회원 게시판' : '회원 게시판'}}</h1>
    <hr/>
    <board-detail
      :board="board"
      :total-comment-cnt="totalCommentCnt"
      @Recommend="Recommend"
      @Report="Report"
      @DeleteBoard="DeleteBoard"
      @UpdateBoard="UpdateBoard"
      />
    <board-comment
      :board="board"
      :comments="comments"
      :total-comment-cnt="totalCommentCnt"
      />
    <hr>
    <button class="btn btn-secondary" @click="Back">뒤로가기</button>
    <hr>
  </div>
</template>

<script>
import {ref} from "vue";
import service from "@/service";
import {useCookies} from "vue3-cookies";
import { useRouter, useRoute } from 'vue-router'
import BoardDetail from "@/layout/board/BoardDetail";
import BoardRecommend from "@/dto/board/BoardRecommend";
import BoardReport from "@/dto/board/BoardReport";
import BoardDelete from "@/dto/board/BoardDelete";
import BoardComment from "@/layout/board/BoardComment";

const { cookies } = useCookies();
export default {
  name: "BoardDetailPage",
  components: {BoardComment, BoardDetail},
  setup() {
    const router = useRouter()
    const route = useRoute()
    const boardId = ref(0)
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
      route,
      router,
      hasLogin
    }
  },
  activated() {
    this.boardId = this.route.query.boardId
    this.BoardDetail(this.boardId)
    this.FindComments(this.boardId)
    window.scrollTo(0, 400);
  },
  mounted() {
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
    Recommend() {
      service
          .BoardRecommend(new BoardRecommend(this.board.boardId), {Authorization: 'Bearer ' + cookies.get('lg.m.log')}, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              this.board.recommend = 1
              alert('추천하기 성공했습니다.')
            } else if (res.data.resultCode == '10016') {
              alert('이미 추천하셨습니다.')
            } else {
              alert('추천하기 실패했습니다.')
            }
          })
          .catch(err => {
            alert('추천하기 실패했습니다.')
          })
    },
    Report() {
      service
          .BoardReport(new BoardReport(this.board.boardId), null, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('신고하기 성공하였습니다.')
            } else if (res.data.resultCode == '10017') {
              alert('이미 신고하셨습니다.')
            } else {
              alert('신고하기 실패하였습니다.')
            }
          })
          .catch(err => {
            alert('신고하기 실패하였습니다.')
          })
    },
    DeleteBoard() {
      service
          .BoardDelete(new BoardDelete(this.board.boardId), null, null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              alert('게시판 삭제 성공')
              window.location.replace('/board/list')
            } else {
              alert('게시판 삭제 실패')
            }
          })
          .catch(err => {
            alert('게시판 삭제 실패')
          })
    },
    UpdateBoard() {
      if (this.board.writerType == 0) {
        this.$router.push({
          name: 'BoardUpdateAnonymPage',
          query: {
            boardId: this.boardId
          }
        })
      } else {
        this.$router.push({
          name: 'BoardUpdateMemberPage',
          query: {
            boardId: this.boardId
          }
        })
      }
    }

  }
}
</script>

<style scoped>
</style>
