<template>
  <div>
    <hr>
    <h2>댓글 ({{this.totalCommentCnt}})개</h2>
    <ul class="list-group">
      <template v-for="(item, index) in comments" :key="index">

        <button type="button"
                class="list-group-item list-group-item-action"
                :class="item.depth == 1 ? 'pink' : ''"
                @click.stop="Active(index)"
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
        <BoardChildrenComment
            v-if="index == activeIndex"
          :title="'대댓글달기'"
          :btn-title="'대댓글달기'"
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
import { useCookies } from 'vue3-cookies'
import BoardChildrenComment from "@/views/page/test/comment/BoardChildrenComment";
const { cookies } = useCookies();

export default {
  name: "BoardComments",
  components: {BoardChildrenComment},
  props: ['boardId', 'hasLogin','comments', 'totalCommentCnt'],
  setup() {
    const activeIndex = ref(-1)

    return {
      activeIndex,
    }
  },
  methods: {
    Active(index) {
      if (index == this.activeIndex) this.activeIndex = -1
      else this.activeIndex = index
    },
  }

}
</script>

<style scoped>
.pink {
  background-color: lightpink;
}
</style>
