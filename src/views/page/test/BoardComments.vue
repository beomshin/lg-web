<template>
  <div>
    <hr>
    <h2>댓글 ({{this.commentCnt}})개</h2>
    <ul class="list-group">
      <template v-for="(item, index) in comments" :key="index">

        <button type="button"
                class="list-group-item list-group-item-action"
                :class="item.depth == 1 ? 'pink' : ''"
        >
          {{item.content}} - {{item.writer}}
        </button>

<!--        <li class="list-group-item" >-->
<!--          <div class="input-group mb-3" style="margin-top: 5px" >-->
<!--            <input type="password" class="form-control" placeholder="비밀번호" aria-label="Recipient's username" aria-describedby="button-addon2" >-->
<!--            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click.stop="DelteComment(item.boardCommentId)">삭제</button>-->
<!--          </div>-->
<!--        </li>-->

<!--        <li class="list-group-item" >-->
<!--          <h3>대댓글 달기</h3>-->
<!--          <hr>-->
<!--          <div v-if="!hasLogin">-->
<!--            <div class="row mb-3">-->
<!--              <label for="inputEmail3" class="col-sm-2 col-form-label">아이디</label>-->
<!--              <div class="col-sm-10">-->
<!--                <input type="text" class="form-control" v-model="id" maxlength="16" placeholder="아이디">-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="row mb-3">-->
<!--              <label for="inputEmail3" class="col-sm-2 col-form-label">비밀번호</label>-->
<!--              <div class="col-sm-10">-->
<!--                <input type="password" class="form-control" v-model="password" maxlength="32" placeholder="비밀번호">-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="row mb-3">-->
<!--            <label for="inputEmail3" class="col-sm-2 col-form-label">내용</label>-->
<!--            <div class="col-sm-10">-->
<!--              <textarea class="form-control" aria-label="With textarea" placeholder="내용" v-model="content" ></textarea>-->
<!--            </div>-->
<!--          </div>-->
<!--          <button class="btn btn-secondary">대댓글달기</button>-->
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
const { cookies } = useCookies();

export default {
  name: "BoardComments",
  props: ['boardId', 'hasLogin','comments', 'commentCnt'],
  setup() {
    const id = ref('')
    const password = ref('')
    const content = ref('')

    return {
      id,
      password,
      content
    }
  }

}
</script>

<style scoped>
.pink {
  background-color: lightpink;
}
</style>
