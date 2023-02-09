<template>
  <div>
    <h2>댓글 ({{this.totalCommentCnt}})개</h2>
    <ul class="list-group">
      <template v-for="(item, index) in comments" :key="index">

        <button type="button"
                class="list-group-item list-group-item-action"
                :class="item.depth == 1 ? 'pink' : ''"
                @click.stop="Active(index, 0)"
        >
          <template v-if="item.depth == 2">└ </template>{{item.content}} - {{item.writer}} - {{item.regDt}}
          <div style="float: right">
            <button
                class="btn btn-outline-primary"
                type="button" id="button-addon2"
                @click.stop="Active(index, 1)"
            >수정</button>
            <button
                class="btn btn-outline-danger"
                type="button" id="button-addon2"
                style="margin-left: 5px"
                @click.stop="Active(index, 2)"
            >삭제</button>
          </div>
        </button>
        <BoardCommentChildren
            v-if="index == activeIndex && type == 0"
            :board-id="this.boardId"
            :parent-id="parentId(item)"
        />

        <BoardCommentUpdate
            v-if="index == activeIndex && type == 1"
            :content="item.content"
            :boardCommentId="item.boardCommentId"
            @close="close"
          />

        <li class="list-group-item" v-if="index == activeIndex && type == 2" >
          <div class="input-group mb-3" style="margin-top: 5px" >
            <input type="password" class="form-control" placeholder="비밀번호"  v-model="password">
            <button class="btn btn-outline-danger" type="button" @click.stop="DeleteComment(item.boardCommentId)">삭제</button>
          </div>
        </li>
      </template>
    </ul>
    <hr>
  </div>
</template>

<script>
import {ref} from "vue";
import { useCookies } from 'vue3-cookies'
import BoardCommentChildren from "@/views/page/test/comment/BoardCommentChildren";
import BoardCommentUpdate from "@/views/page/test/comment/BoardCommentUpdate";
const { cookies } = useCookies();
import service from "@/service";
import BoardDeleteComment from "@/dto/board/BoardDeleteComment";

export default {
  name: "BoardComments",
  components: {BoardCommentChildren, BoardCommentUpdate},
  props: ['boardId','comments', 'totalCommentCnt'],
  setup() {
    const activeIndex = ref(-1)
    const type = ref(0)
    const password = ref('')

    return {
      activeIndex,
      type,
      password
    }
  },
  methods: {
    Active(index, type) {
      if (index == this.activeIndex && this.type == type) {
        this.activeIndex = -1
      } else {
        this.type = type
        this.activeIndex = index
      }
    },
    parentId(comment) {
      if (comment.depth == 1) {
        return comment.boardCommentId
      } else if (comment.depth == 2) {
        return comment.bundleId
      }
    },
    DeleteComment(boardCommentId) {
      let request = new BoardDeleteComment(boardCommentId, this.password)
      service
          .BoardDeleteComment(request, null, null)
          .then(res => {
            if (res.data.resultCode == '00000') {
              this.password = ''
              this.activeIndex = -1
              this.$emitter.emit('ReFindComment')
              alert('댓글 삭제 성공')
            } else {
              this.password = ''
              alert('댓글 삭제 실패')
            }
          })
          .catch(err => {
            this.password = ''
            alert('댓글 삭제 실패')
          })
    },
    close() {
      this.activeIndex = -1
    }
  }

}
</script>

<style scoped>
.pink {
  background-color: lightpink;
}
</style>
