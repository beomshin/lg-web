<template>
  <div>
    <hr>
    <h2>댓글 ({{this.totalCommentCnt}})개</h2>
    <ul class="list-group">
      <template v-for="(item, index) in comments" :key="index">

        <button type="button"
                class="list-group-item list-group-item-action"
                :class="item.depth == 1 ? 'pink' : ''"
                @click="Active(index)"
        >
          <template v-if="item.depth == 2">└ </template>{{item.content}} - {{item.writer}}
          <div style="float: right">
            <button
                class="btn btn-outline-primary"
                type="button" id="button-addon2"
            >수정</button>
            <button
                class="btn btn-outline-danger"
                type="button" id="button-addon2"
                style="margin-left: 5px"
            >삭제</button>
          </div>
        </button>
        <BoardCommentForm
            v-if="index == activeIndex"
          :title="'대댓글달기'"
          :btn-title="'대댓글달기'"
            :Enroll="Enroll(item)"
        />


<!--        <li class="list-group-item"  >-->
<!--          <div class="input-group mb-3" style="margin-top: 5px" >-->
<!--            <input type="password" class="form-control" placeholder="비밀번호" aria-label="Recipient's username" aria-describedby="button-addon2" >-->
<!--            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click.stop="DelteComment(item.boardCommentId)">삭제</button>-->
<!--          </div>-->
<!--        </li>-->


      </template>

    </ul>
    <hr>
  </div>
</template>

<script>
import {ref} from "vue";
import service from "@/service/config";
import { useCookies } from 'vue3-cookies'
import BoardCommentForm from "@/views/page/test/BoardCommentForm";
import EnrollBoardMemberComment from "@/dto/member/EnrollBoardMemberComment";
import EnrollBoardAnonymComment from "@/dto/member/EnrollBoardAnonymComment";
const { cookies } = useCookies();

export default {
  name: "BoardComments",
  components: {BoardCommentForm},
  props: ['boardId', 'hasLogin','comments', 'totalCommentCnt'],
  setup() {
    const id = ref('')
    const password = ref('')
    const content = ref('')
    const activeIndex = ref(-1)

    const validate1 = () => {
      if (!content.value) {
        alert('내용을 입력해주세요')
        return false
      }
      return true
    }

    const validate2 = () => {
      if (!content.value) {
        alert('내용을 입력해주세요')
        return false
      } else if (!id.value) {
        alert('아이디를 입력해주세요')
        return false
      } else if (!password.value) {
        alert('패스워드를 입력해주세요')
        return false
      }
      return true
    }

    return {
      id,
      password,
      content,
      activeIndex,
      validate1,
      validate2
    }
  },
  methods: {
    Active(index) {
      if (index == this.activeIndex) this.activeIndex = -1
      else this.activeIndex = index
    },
    Enroll(item) {
      if (this.hasLogin) {
        this.EnrollMemberComment();
      } else {
        this.EnrollAnonymComment();
      }
    },
    EnrollMemberComment() {
      if(!this.validate1()) return
      const request = new EnrollBoardMemberComment(this.boardId, null, this.content, 2)
      let token = 'Bearer ' + cookies.get('lg.m.log');
      service
          .enrollMemberComment(request, {
            "Authorization": token
          })
          .then(res => {
            if(res.data.resultCode == '00000') {
              alert('댓글 등록 성공')
              this.content = ''
              this.$emit('ReFindComment')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    },
    EnrollAnonymComment() {
      if(!this.validate2()) return
      const request = new EnrollBoardAnonymComment(this.boardId, null, this.id, this.password, this.content, 2)
      service
          .enrollAnonymComment(request, null)
          .then(res => {
            if(res.data.resultCode == '00000') {
              this.content = ''
              this.$emit('ReFindComment')
              alert('댓글 등록 성공')
            } else {
              alert('댓글 등록 실패')
            }
          })
          .catch(err => {
            alert('댓글 등록 실패')
          })
    },
  }

}
</script>

<style scoped>
.pink {
  background-color: lightpink;
}
</style>
